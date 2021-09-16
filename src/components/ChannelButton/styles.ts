import styled from "styled-components";
import {Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';


export const Container = styled.div`
    display: flex;
    cursor:pointer;
    justify-content:space-between;
    align-items:center;
    padding:5px 3px;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color:transparent;
    transition: background-color .3s;

    > div{
        display:flex;
        align-items: center;
    }
    > div span{
        margin-left:5px;
        color: var(--senary)
    }

    &:hover, &.active{
        background-color: var(--quinary);

        > div span{
            color: var(--white);
        }
    }    
`;


export const HashtagIcon = styled(Hashtag)`
    width:20px;
    height: 20px;
    color: var(--symbol);
`;


export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height:16px;
    color: var(--symbol);
    cursor:pointer;
    transition: color .3s;
    margin: 0px 5px;

    &:hover{
        color: var(--white);
    }
`;


export const SettingsIcon = styled(Settings)`
    width: 16px;
    height:16px;
    color: var(--symbol);
    cursor:pointer;
    transition: color .3s;

    &:hover{
        color: var(--white);
    }
`;

