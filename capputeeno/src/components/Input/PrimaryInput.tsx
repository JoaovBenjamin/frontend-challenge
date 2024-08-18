import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { SearchItem } from '../../../public/search-icon'


export const PrimaryInput = styled.input`
    width:352px;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    margin-top: 0.5rem;
    position: relative;
    width: 352px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
}
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export const PrimaryInputSearchIcon = (props: InputProps) => {
    return (
    <InputContainer>
        <PrimaryInput {...props}/>
        <SearchItem/>
    </InputContainer>
  )
}


