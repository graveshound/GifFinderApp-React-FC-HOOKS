import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    console.log(url)
    return (
        <div>
            <img src={url} alt={id}/>
            <p>{title}</p>
        </div>
    )
}
