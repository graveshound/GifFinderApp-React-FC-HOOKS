const API_KEY='2vvv5c6ZhXIOqwnlIF6D3WsA6LLkC79b';
const N_RESULTS='9'

export const getGifs = async(category) =>{

        
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${N_RESULTS}&api_key=${API_KEY}`;

        const resp = await fetch(url);
        const {data}= await resp.json();

        const gifs= data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })
        
        return gifs;

    }