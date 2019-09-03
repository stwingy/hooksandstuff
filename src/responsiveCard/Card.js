import React from 'react';
import styled from 'styled-components';
function Card({ title, date, description, comments, likes, views, actions }) {
	const StyledContainer = styled.div`
		border: 1px solid white;
		padding: 25px 12px 18px;
		background: linear-gradient(45deg, green, blue);
	`;
	const StyledPhoto = styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
		border: ${(props) => `1px solid ${props.col}`};
	`;
	const Title = styled.h2`
		color: #fff;
		font-weight: 300;
		@media (max-width: 500px) {
			font-size: 1rem;
		}
	`;
	const Date = styled.div`
		color: #ccc;
		font-weight: 300;
		margin: 6px 0;
		@media (max-width: 500px) {
			font-size: 0.8rem;
		}
	`;
	const Description = styled.p`
		color: #fff;
		font-weight: 300;
		@media (max-width: 500px) {
			font-size: 0.75rem;
		}
	`;
	const Actions = styled.div`
		color: #333;
		display: flex;
		align-items: center;
		svg {
			transform: translateY(-2px);
			margin-right: 5px;
		}
		@media (max-width: 500px) {
			flex-direction: column;
			& button {
				width: 100%;
				margin-bottom: 4px;
				font-size: 0.65rem;
			}
		}
	`;
	const Action = styled.button`
		margin: 0 5px;
		padding: 8px 14px;
		background: rgba(155, 155, 155, 0.2);
		color: #fff;
		cursor: pointer;
		border: 1px solid #fff;
		outline: 0;
		font-weight: 300;
		:hover {
			opacity: 0.8;
		}
		:active {
			background: green;
		}
	`;

	return (
		<StyledContainer>
			<StyledPhoto
				col="white"
				src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
			/>
			<Title>{title}</Title>
			<Date>{date}</Date>
			<Description>{description}</Description>
			<Actions>{actions.map((a) => <Action onClick={a.onClick}>{a.label}</Action>)}</Actions>
		</StyledContainer>
	);
}

export default Card;
