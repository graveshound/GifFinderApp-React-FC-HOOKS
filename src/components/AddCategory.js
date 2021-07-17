import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue]=useState('')
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            console.log('Submit hecho')
            setCategories((cats)=>[inputValue,...cats])
            setInputValue('');
        }else{
            console.log('Escribe Algo')
        }
      
        
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

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
