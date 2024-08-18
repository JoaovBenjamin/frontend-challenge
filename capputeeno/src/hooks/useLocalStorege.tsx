import React, { useState } from 'react'

export function useLocalStorege<T>(item: string){
  const [value, setValue] = useState
                           (JSON.parse(
                            localStorage.getItem(item) ?? ''))
    
  const updateLocalStorege = (newValue: T) =>{
    setValue(newValue);
    localStorage.setItem(item,JSON.stringify(newValue))
  }

  return{
    value,
    updateLocalStorege
    }
}

export default useLocalStorege