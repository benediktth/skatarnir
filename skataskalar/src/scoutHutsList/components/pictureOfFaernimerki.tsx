import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	image: any;
}

const Wrapper = styled.div`
	float: left;
	padding: 10px;
	img {
		max-height: 100%;
		max-width: 100%;
	}
`;

const PictureOfFaernimerki: FC<Props> = () => {
	return (
		<Wrapper>
			<img
				src="https://www.skatamal.is/wp-content/uploads/2020/04/HÉRNA-KEMUR-MYNDIN-AF-FÆRNIMERKINU.png"
				alt="pic"
			/>
		</Wrapper>
	);
};

export default PictureOfFaernimerki;
