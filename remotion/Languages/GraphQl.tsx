import React, {SVGProps} from 'react';
import {RoughPath} from './RoughPath';

export const GraphQL: React.FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 28 28"
			viewBox="0 0 28 28"
			{...props}
		>
			<RoughPath
				fill="#de33a6"
				d="M14,4c2.913-0.137,8.5,12.417,8.5,15S5.008,22.882,5.008,20.411S8.667,4.25,14,4z"
			/>
			<path d="M14.009 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S15.111 6 14.009 6zM14.009 3c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1S14.561 3 14.009 3zM14.009 26c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S15.111 26 14.009 26zM14.009 23c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1S14.561 23 14.009 23zM22.5 11c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S23.603 11 22.5 11zM22.5 8c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1S23.052 8 22.5 8zM5.5 11c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S6.603 11 5.5 11zM5.5 8c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1S6.052 8 5.5 8zM22.5 21c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S23.603 21 22.5 21zM22.5 18c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1S23.052 18 22.5 18zM5.5 21c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S6.603 21 5.5 21zM5.5 18c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1S6.052 18 5.5 18z" />
			<path d="M21.77 18.2c-.174 0-.343-.091-.435-.253l-7.029-12.4c-.137-.24-.052-.545.188-.682.236-.136.544-.053.681.188l7.029 12.4c.137.24.052.545-.188.682C21.938 18.179 21.854 18.2 21.77 18.2zM21 19.5H7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h14c.276 0 .5.224.5.5S21.276 19.5 21 19.5zM6.24 18.2c-.084 0-.169-.021-.246-.065-.24-.136-.325-.441-.188-.682l7.029-12.4c.136-.241.443-.325.681-.188.24.136.325.441.188.682l-7.029 12.4C6.583 18.109 6.414 18.2 6.24 18.2z" />
			<path d="M21.22 8.74c-.087 0-.174-.022-.253-.069l-5.93-3.48c-.238-.14-.318-.446-.179-.684C15 4.267 15.308 4.19 15.543 4.329l5.93 3.48c.238.14.318.446.179.684C21.558 8.652 21.391 8.74 21.22 8.74zM12.73 23.74H12.72c-.089 0-.177-.024-.253-.069l-5.909-3.468c-.161-.083-.272-.251-.272-.444 0-.365.444-.616.758-.431l5.908 3.468c.162.083.274.25.274.444C13.226 23.517 13.007 23.74 12.73 23.74zM6.79 8.74c-.276 0-.505-.224-.505-.5 0-.208.124-.387.304-.462l5.878-3.45c.314-.185.76.066.759.431 0 .209-.126.389-.308.463L7.043 8.671C6.967 8.716 6.879 8.74 6.79 8.74zM5.5 18C5.224 18 5 17.776 5 17.5v-7C5 10.224 5.224 10 5.5 10S6 10.224 6 10.5v7C6 17.776 5.776 18 5.5 18zM15.29 23.74c-.171 0-.338-.088-.432-.247-.14-.238-.06-.544.179-.684l5.93-3.48c.233-.14.543-.061.685.178.14.238.06.544-.179.684l-5.93 3.48C15.464 23.718 15.377 23.74 15.29 23.74zM22.5 18c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7C23 17.776 22.776 18 22.5 18z" />
		</svg>
	);
};
