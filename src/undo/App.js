// REACT ICONS   https://react-icons.netlify.com/#/


import React, { useState } from 'react';
import styled from 'styled-components';
import useApp from './useApp';
import { MdThumbDown } from 'react-icons/md';
import { IconContext } from 'react-icons';
import female from './images/female.jpg';
import male from './images/male.jpg';
const StyledForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledDiv = styled.div`margin: auto 3px;`;
const StyledInput = styled.input`
	transition: all 0.15s ease-out;
	border: 1px solid #ddd;
	padding: 10px 14px;
	outline: none;
	font-size: 14px;
	color: #666;
	:hover {
		border: 1px solid #c6279f;
	}
`;
const StyledSelect = styled.select`
	transition: all 0.15s ease-out;
	border: 1px solid #ddd;
	padding: 10px 14px;
	outline: none;
	font-size: 14px;
	cursor: pointer;
	padding-top: 9px;
	padding-bottom: 9px;
	color: #666;
	:hover {
		border: 1px solid #c6279f;
	}
`;
const StyledButton = styled.button`
	transition: all 0.15s ease-out;
	background: #145269;
	border: 1px solid #ddd;
	padding: 10px 35px;
	outline: none;
	cursor: pointer;
	color: #fff;
	:hover {
		color: #145269;
		background: #fff;
		border: 1px solid #145269;
	}
	:active {
		background: rgb(27, 71, 110);
		border: 1px solid #a1a1a1;
		color: #fff;
	}
`;
const StyledBoxes = styled.div`
	margin: 10px 0;
	padding: 3px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 1fr;
`;
const StyledBox = styled.div`
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border: 5px solid ${(props) => (props.gender === 'Male' ? 'blue' : 'pink')};
`;
const StyledName = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
`;
const StyledGender = styled.div`position: relative;`;
const StyledImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
const StyledUndo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const StyledTheme = styled.div`
	box-sizing: border-box;
	transition: all 0.15s ease-out;
	padding: 12px;
	min-height: 100vh;
	color: ${(props) => (props.theme === 'light' ? '#145269;' : 'white')};
	background: ${(props) => (props.theme === 'light' ? 'white' : '#0b2935;')};
`;
const App = () => {
	const [ name, setName ] = useState('');
	const [ gender, setGender ] = useState('Male');
	const onNameChange = (e) => setName(e.target.value);
	const onGenderChange = (e) => setGender(e.target.value);
	const { onSubmit, friends, undo, theme, onThemeChange, reset, remove } = useApp();

	const resetValues = () => {
		setName('');
		setGender('Male');
	};

	return (
		<StyledTheme theme={theme}>
			<div>
				<h3>What theme would you like to display?</h3>
				<div>
					<select onChange={onThemeChange} name="theme" value={theme}>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
					</select>
				</div>
			</div>
			<div>
				<h3>Add a friend</h3>
				<StyledForm onSubmit={onSubmit({ name, gender }, resetValues)}>
					<StyledDiv>
						<StyledInput
							onChange={onNameChange}
							value={name}
							type="text"
							name="name"
							placeholder="Friend's Name"
						/>
					</StyledDiv>
					<StyledDiv>
						<StyledSelect onChange={onGenderChange} name="gender" value={gender}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
						</StyledSelect>
					</StyledDiv>
					<div>
						<StyledButton type="submit">Add</StyledButton>
					</div>
				</StyledForm>
			</div>
			<h3>Made a mistake?</h3>
			<StyledUndo>
				<div>
					<StyledButton onClick={undo}>Undo</StyledButton>
				</div>
				<div>
					<StyledButton onClick={reset}>Reset</StyledButton>
				</div>
			</StyledUndo>
			<StyledBoxes>
				{friends.map(({ name, gender, id }, index) => (
					<StyledBox key={`friend_${index}`} gender={gender}>
						<StyledName>
							Name: {name}{' '}
							<span onClick={() => remove(id)}>
              <IconContext.Provider value={{ style: { color:"#145269",cursor:"pointer"},size:"2em" }}>
								<MdThumbDown />
                </IconContext.Provider>
							</span>
						</StyledName>
						<StyledGender>
							<StyledImage src={gender === 'Female' ? female : male} alt="" />
						</StyledGender>
					</StyledBox>
				))}
			</StyledBoxes>
		</StyledTheme>
	);
};

export default App;
