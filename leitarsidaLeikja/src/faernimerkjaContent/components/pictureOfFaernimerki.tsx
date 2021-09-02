import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	image: any;
}

const Wrapper = styled.div`
	padding: 10px;
	img {
		max-height: 100%;
		max-width: 100%;
	}
`;

const PictureOfFaernimerki: FC<Props> = ({ image }) => {
	return (
		<Wrapper>
			<img src={image} alt="pic" />
		</Wrapper>
	);
};

export default PictureOfFaernimerki;
