import React,{useState} from 'react'

export const GifFinderApp = () => {

    //const categories=['Anime','Crypto','Rock']
    const [categories,setCategories]=useState(['Anime','Crypto','Rock'])

   const handleAdd =()=>{
        //categories.push('Software');
        //setCategories([...categories, 'Software'])
        setCategories((cats)=>[...cats,'Software'])
        console.log(categories)
    }
    console.log(categories)
    return (
        <>
            <h2>Gif Finder App</h2>
            <hr />
            <button onClick={handleAdd}>Agregar Categoria</button>
            <ol>
                { 
                    categories.map((category)=>{
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
