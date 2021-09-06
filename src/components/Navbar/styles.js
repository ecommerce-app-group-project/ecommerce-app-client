import styled from 'styled-components';
import {mobile} from '../../utlis/responsive.js';

export const Container = styled.div`
    height: 4rem;
    ${mobile({height: '50px'})}
`;

export const Wrapper = styled.div`
    padding: 10px 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: '0 5px'})}
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Title = styled.div`
     font-size: 2.5rem;
     cursor: pointer;
     font-family: 'Comic Sans MS';
`;

export const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({display: 'none'})}
`;
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 0;
`;

export const Burger = styled.div`
    display: none;
    ${mobile({display: 'block'})}
`;