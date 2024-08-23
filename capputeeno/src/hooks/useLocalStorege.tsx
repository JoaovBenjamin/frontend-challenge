import React, { useEffect, useState } from 'react'

export function useLocalStorege<T>(item: string, valueInitial: T){
  const [value, setValue] = useState(valueInitial)
    
  useEffect(() =>{
    if(typeof window === "undefined") return
    let value = localStorage.getItem(item)
    if(value) setValue(JSON.parse(value))
  }, [window])

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