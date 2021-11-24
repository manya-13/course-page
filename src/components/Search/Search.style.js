import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SearchDiv = styled.div`
	display: flex;
	margin: 1rem 1rem;
	width: 165px;
	height: 30px;
    
	border-radius: 4px;
	border: 1.5px solid #c0c0c0;
	background: #ffefff;
	outline-width: 0px;
	align-items: center;
    
`;

export const SearchInput = styled.input`
	width: 130px;
	height: 26px;
	justify-content: space-between;
	padding-left: 10px;
	background: #ffefff;
	outline: none;
	border: 0.5px solid #ffefff;
`;

export const SearchIcon = styled(FaSearch)`
	height: px;
	width: 20px;
	color: #c0c0c0;
	
	&:hover{
		color: gray
	}
`;

export const dataResult = styled.div`
margin-top: 5px;
width: 300px;
height: 200px;
background-color: white;
box-shadow: rgba(0,0,0,0.35)0px 5px 15px;
overflow: hidden;
overflow-y: auto;
::-webkit-scrollbar{
    display: none;
}
`


export const dataItem = styled(Link)`
text-decoration: none;
:hover{
    color: gray;
	cursor:pointer;
}
`