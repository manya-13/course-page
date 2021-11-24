import React, { useState } from 'react';
import styled from "styled-components";
import { FaBars, FaUser, FaList} from 'react-icons/fa';
import Search from '../Search/searchbar';

function Navbar(){
	const [isOpen, setIsOpen] = useState(false);

	return(
		<Nav>
			<LeftSide>
				<Logo href="">
					Genosis
				</Logo>
				<Profile>
					<ProfilePic/>
					<ProfileDetails>
						<ProfileName>Thamizhi Ethiroli</ProfileName>
						<Education>
							<ProfileClass>Class 10</ProfileClass>
							<ProfileBoard>CBSE</ProfileBoard>
						</Education>
					</ProfileDetails>
				</Profile>
			</LeftSide>
			<Bars onClick={() => setIsOpen(!isOpen)}/>
			<Menu isOpen={isOpen}>
				<NavIconLink>
					<NILIcon/>
					<NILLink href="">Category</NILLink>
				</NavIconLink>
				<NavLink href="">Progress Report</NavLink>
				<NavLink href="">Subscription</NavLink>
				<NavLink href="">Request</NavLink>
				<NavLink href="">Help</NavLink>
				<Search/>
			</Menu>
		</Nav>
	);
}

const Nav = styled.div`
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	border-bottom: 0.2px solid #c0c0c0;
	
`;

const LeftSide = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const Profile = styled.div`
	padding-left: 40px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

const ProfilePic = styled(FaUser)`
	flex-direction: column;
	cursor: pointer;
	color: blue;
	height: 30px;
	width: 30px;
`;

const ProfileDetails = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	margin-left: 5px;
`;

const ProfileName = styled.div`
	font-weight: 500;
	font-size: 15px;
	color: black;
`;

const Education = styled.div`
	width: 109px;
	display: flex;
	margin-top: 2px;
`;

const ProfileClass = styled.div`
	font-weight: 300;
	font-size: 12px;
	color: gray;
`;

const ProfileBoard = styled.div`
	padding-left: 4px;
	padding-right: 4px;
	font-weight: 300;
	font-size: 12px;
	color: white;
	background: #00008f;
	border-radius: 10px;
	margin-left: 10px;
`;

const Bars = styled(FaBars)`
	display: none;
	flex-direction: column;
	cursor: pointer;
	color: #808080;
	height: 20px;
	width: 30px;

	@media (max-width: 1111px){
		display: flex;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 1111px){
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		max-height: ${({isOpen}) => (isOpen? "330px" : "0")};
		transition: max-height 0.3s ease-in;
	}
`;

const NavLink = styled.a`
	padding: 1rem 1.3rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: #2a2a2a;
	font-size: 14px;

	&:hover{
		color:black
	}
`;

const NavIconLink = styled.div`
	display: flex;
	padding: 1rem 1.3rem;
	cursor: pointer;
	align-items: center;
`;

const NILIcon = styled(FaList)`
	cursor: pointer;
	color: #808080;
	height: 15px;
	width: 30px;
`;

const NILLink = styled.a`
	text-decoration: none;
	color: #808080;
	margin-left: 2px;
	font-size: 14px;
`;


const Logo = styled.a`
	padding: 1rem;
	color: black;
	text-decoration: none;
	font-weight: 600;
	font-size: 1.4rem;

	span{
		font-weight: 300;
		font-size: 1.3rem;
	}
`;

export default Navbar;