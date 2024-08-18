import React from 'react'
import CartIcon from '../../../public/cart-icon'
import useLocalStorege from '@/hooks/useLocalStorege'
import styled from 'styled-components'


const ContainerCart = styled.div`
    margin-top: 1rem;
    position: relative;
`


const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0px 5px;
    font-size: 10px;
  
    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`

const CartControl = () => {
    const {value} = useLocalStorege('cart-items')
  return (
    <ContainerCart>
        <CartIcon/>
        {value.length && <CartCount>{value.length}</CartCount>}
    </ContainerCart>
  )
}

export default CartControl