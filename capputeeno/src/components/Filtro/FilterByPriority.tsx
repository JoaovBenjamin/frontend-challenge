import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowIcon } from '../../../public/arrow-icon'
import { useFilter } from '@/hooks/useFilter'
import { PriorityType } from '@/types/PriorityTypes'

interface FilterByPriorityProps{

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        border:none;
        background: transparent;
        cursor:pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display:flex;
        align-items: center;
        justify-content: center;
    }

    svg{
        margin-left: 16px;
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    padding: 12px 16px;
    width: 250px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0.1);
    list-style: none;

    position: absolute;
    top:100%;

    li{
        color: var(--text-dark);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`

const FilterByPriority = (props: FilterByPriorityProps) => {
  
    const [isOpen, setIsOpen] = useState(false)
    const {priority,setPriority} = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev)
    const handleUpdatePriority = (value : PriorityType) =>{
        setPriority(value)
        setIsOpen(false)
    }
    return (
    <FilterContainer>
        <button onClick={handleOpen}>
            Organizar por
            <ArrowIcon/> 
        </button>
            {isOpen && <PriorityFilter>
                <li 
                    onClick={() => (handleUpdatePriority(PriorityType.NEWS))}
                    >
                Novidades
                </li>
                <li
                    onClick={() => handleUpdatePriority(PriorityType.BIGGETS_PRICE)}>
                        Preço: Maior - Menor
                </li>
                <li 
                onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>
                    Preço: Menor - Maior
                </li>
                <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>
                    Mais vendidos
                </li>
            </PriorityFilter>}   
    </FilterContainer>
)
}

export default FilterByPriority