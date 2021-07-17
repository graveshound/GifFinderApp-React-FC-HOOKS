import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifFinderApp = () => {

    //const categories=['Anime','Crypto','Rock']
    const [categories,setCategories]=useState(['Saitama'])

  // const handleAdd =()=>{
   //     categories.push('Software');
    //    setCategories([...categories, 'Software'])
    //    setCategories((cats)=>[...cats,'Software'])
    //    console.log(categories)
   // }
    console.log(categories)
    return (
        <>
            <h2>Gif Finder App</h2>
            <AddCategory setCategories={ setCategories }/>
            
            <hr />
            
            <ol>
                { 
                    categories.map((category)=>(
                        <GifGrid 
                        category={category}
                        key={category} />
                    ))
                }
            </ol>
        </>
    )
}
