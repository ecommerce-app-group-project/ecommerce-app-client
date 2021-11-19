import styled from 'styled-components';

// function getWidthString(span) {
//   if(!span) return;
//   let width = span/12*100;
//   return `width: ${width}%;`;
// }

export const Wrapper = styled.section`
  margin: 0 13%;
`
export const Grid = styled.div`
   display: grid;
   @media only screen and (min-width: 320px){
     grid-template-columns: 1fr 1fr;
   }
   @media only screen and (min-width: 768px){
     grid-template-columns: 1fr 1fr 1fr;
   }
   @media only screen and (min-width:1025px){
     grid-template-columns: 1fr 1fr 1fr 1fr;
   }
`
