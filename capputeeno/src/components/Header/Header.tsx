'use client'

import React from 'react'
import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import {PrimaryInputSearchIcon } from '../Input/PrimaryInput'
import CartControl from '../Cart/CartControl'

const sairaStencilOne = Saira_Stencil_One({
    weight:['400'],
    subsets:['latin']
})

interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
       display:flex;
       align-items: center;
       justify-content: center;
       gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`


export const Header = (props : HeaderProps) => {
  return (
    <TagHeader>
        <Logo 
        className={sairaStencilOne.className}>
            Capputeeno
        </Logo>
        <div>
            <PrimaryInputSearchIcon placeholder='Procurando algo específico?'/>
            <CartControl/>
        </div>
    </TagHeader>
 )  
}
