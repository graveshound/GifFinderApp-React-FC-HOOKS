import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    console.log(url)
    return (
        <div className='card'>
            <img src={url} alt={id}/>
            <p>{title}</p>
        </div>
    )
}
