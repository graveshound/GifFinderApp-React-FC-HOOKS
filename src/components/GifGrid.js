import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   const [images, setImages]=useState([]);
   
    useEffect(()=>{
        getGifs();
    },[])

    const API_KEY='2vvv5c6ZhXIOqwnlIF6D3WsA6LLkC79b';
    
    const getGifs = async() =>{

        
    const url =`https://api.giphy.com/v1/gifs/search?q=Saitama&limit=10&api_key=${API_KEY}`;

        const resp = await fetch(url);
        const {data}= await resp.json();

        const gifs= data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs)

    }

    
    
    return (
        <div>
            <h3>{category}</h3>
           
                {
                    images.map( img => {
                        <GifGridItem 
                        key={img.id} 
                        {...img} 
                        />
                    })
                }
          
        </div>
    )
}
