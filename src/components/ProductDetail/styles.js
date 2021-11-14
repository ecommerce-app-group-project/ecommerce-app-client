import styled from 'styled-components';
import { mobile } from '../../utlis/responsive';

export const Card = styled.div`
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 20%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    ${mobile({display: 'inline-block',margin: '0 auto'})}
`;

export const Img = styled.img`
    width: 90%;
    display: block;
    height: 90%;
    ${mobile({height: '90%',width: '90%',margin: '5%'})}
`;

export const CardContent = styled.div`
    padding: 1rem 1rem;
`;

export const ProductPrice = styled.div`
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
    span{
        color: #256eff;
    }
`;

export const ProductInfo = styled.div`
    margin: 1.5rem 0;
    font-size: 1rem;

`;
export const ProductTitle = styled.div`
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
    &::after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 80px;
        background: #12263a;
    }
    ${mobile({fontSize: '1.8rem'})}
`;
export const Action = styled.div`
    
`;
export const Button = styled.button`
    margin: 1.5rem 0;
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    color: white;
    background-color: #936a53;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

