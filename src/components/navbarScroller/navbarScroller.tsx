import React, { FC } from 'react';
import * as StyledNavbarScroller from './navbarScroller.styles';

interface Props {
	brand: { name: string; to: string };
	links: Array<{ name: string; to: string }>;
}

const NavbarScroller: FC<Props> = ({ brand, links }) => {
	return (
		<StyledNavbarScroller.Navbar>
			<StyledNavbarScroller.Brand href={brand.to}>{brand.name}</StyledNavbarScroller.Brand>
			<StyledNavbarScroller.Ul>
				{links.map((link: { name: string; to: string }) => (
					<StyledNavbarScroller.Li key={link.name}>
						<a href={link.to}>{link.name}</a>
					</StyledNavbarScroller.Li>
				))}
			</StyledNavbarScroller.Ul>
		</StyledNavbarScroller.Navbar>
	);
};

export default NavbarScroller;
