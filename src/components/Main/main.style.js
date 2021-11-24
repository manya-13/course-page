import styled from "styled-components";
import {Link} from "react-router-dom";

export const Box =styled.div`

height: 350px;
width: 800px;
background-color: black;
border-radius: 10px;
box-shadow: 5px 5px 5px #aaaaaa;

`

export const Text =styled.div`

width: 804px;
height: 196px;
padding-top: 40px;

`

export const Sbox =styled.div`


border: 1px solid black;
height: 66px;
width: 110px;
background-color: black;
border-radius: 8px;
box-shadow: 3px 3px 3px #aaaaaa;
`

export const Content =styled.div`

display: flex;
gap: 40px;
padding-top: 20px;

`
export const Scontent =styled.div`

display: flex;

`
export const Stext =styled.div`

width: 252px;
height: 21px;
font-family: Arial, Helvetica, sans-serif;

`

export const Scolumn =styled.div`

display: flex;
flex-direction: column;

`

export const Vline =styled.div`
border-right: 1px solid #808080;
height: auto;
`

export const DemoClass = styled.div`
    display: flex;
    flex-direction: column;
    
    
`

export const DemoClassThumbNail = styled.img`
`;

export const DemoClassTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
`

export const DemoClassSubject = styled.div`
    font-size: 14px;
    font-weight: 200;
`

export const DemoClassInfo = styled.h1`
    font-weight: 300;
    font-size: 24px;
`

export const ThumbNailDiv = styled.div`
    width: 230px;
    height: 120px;
    border-radius: 10px;
    margin-bottom: 0.8rem;

`

export const DemoClassLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.text};
    margin: 25px;
`
export const Lcontent = styled.div`
width:80%;
height: 100vh;
padding-left: 40px;

    
`
export const Rcontent = styled.div`
width:100%;
height: 150vh;
overflow-y: scroll;

`
