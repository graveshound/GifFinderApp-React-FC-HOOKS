import React, { useState } from 'react'

export const AddCategory = () => {
    
    const [inputValue, setInputValue]=useState('')
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submit hecho')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2> Add Category </h2>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange} /> 
            <h3>Se buscara {inputValue}</h3>
        </form>
        
    )
}
