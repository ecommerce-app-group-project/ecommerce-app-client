import styled from 'styled-components'

export const Box = styled.div`
    flex: 1 1 300px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
    border-radius: 10px;
    overflow: hidden;
    margin: 0.3vw;
    position: relative;
    margin: 10px;
`;

export const OverLay = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%; 
    background-color: rgba(92,95,236,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    &:hover{
        visibility: visible;
    }
`;

export const SlideImg = styled.div`
    padding: 5px;
    text-align: center;
    &:hover ${OverLay}{
       visibility: visible;
    }
`;
export const Img = styled.img`
    width: 300px;
    height: 200px;
    object-fit: cover;
    box-sizing: border-box;
`;

export const Direct = styled.div`
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: #252525;
    font-weight: 700;
    letter-spacing: 1px;
    font-family:  calibri;
    border-radius: 20px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
    &:hover{
        color: #ffffff;
        background-color: #f15fa3;
        transition: all ease 0.3s;
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
export const Detail = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
    font-family: calibri;

`;
export const Title = styled.div`
    color: #222222;
    margin: 5px 0px;
    font-weight: 700;
    letter-spacing:0.5px;
    padding-right: 8px;
`;
export const Price = styled.div`
    color: #333333;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: poppins;
    letter-spacing: 0.5px;
`