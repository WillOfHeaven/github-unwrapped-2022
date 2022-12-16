import {SVGProps} from 'react';
import {RoughPath} from '../RoughPath';
import {Theme} from '../theme';

export const Tree = ({
	withoutStar,
	theme,
	...props
}: SVGProps<SVGSVGElement> & {
	withoutStar?: boolean;
	theme: Theme;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			xmlSpace="preserve"
			{...props}
		>
			<path
				style={{
					fill: '#fff',
				}}
				d="M53.519 96.275c-2.416.108-4.831.208-7.247.317-.05-4.973-.1-9.929-.142-14.901l6.772-.85c.208 5.148.417 10.287.617 15.434z"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="m46.72 81.62-.59.58M50.61 81.13l-4.44 4.44M52.95 82.19l-6.75 6.75M53.09 85.45l-6.86 6.86M53.22 88.73l-6.96 6.95M53.35 92l-4.48 4.48M53.48 95.27l-1.06 1.06"
			/>
			{withoutStar ? null : (
				<path
					style={{
						fill: '#fff',
					}}
					d="m47.849 6.54.973-1.888c.159-.309.36-.62.486-.944.097-.248.159-.489.408-.64.673-.408.915 1.108 1.046 1.508.269.819.507 1.648.723 2.482-.017-.042.024.011.007-.031.026.064 1.003.013 1.116.015l1.173.016c.387.005.786.04 1.172.015.248-.016.544-.138.722.115.188.266.001.444-.188.589-.319.245-.616.527-.921.79-.602.52-1.205 1.04-1.81 1.557.148.747.274 1.499.398 2.25.063.382.125.764.189 1.145.022.132.02.274.048.403.036.17.146.301.097.486a.504.504 0 0 1-.202.269c-.196.14-.291.144-.499.047-.171-.08-.34-.164-.508-.252a10.395 10.395 0 0 1-.969-.577 9.377 9.377 0 0 1-.895-.681c-.08-.069-.782-.806-.807-.795-.871.385-1.736.783-2.602 1.18-.43.198-.86.395-1.291.591-.284.129-.827.522-1.048.102a.572.572 0 0 1-.014-.445c.052-.152.155-.27.225-.412.074-.15.121-.322.18-.479l.366-.981c.123-.328.247-.656.374-.983.039-.099.428-.911.385-.957a66.213 66.213 0 0 0-1.605-1.619c-.271-.267-.543-.534-.813-.803-.193-.192-.595-.425-.503-.747.108-.377.623-.295.921-.298l1.116-.01 2.024-.017c.177.002.352.001.526-.001z"
				/>
			)}

			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M53.519 96.275c-2.416.108-4.831.208-7.247.317-.05-4.973-.1-9.929-.142-14.901l6.772-.85c.208 5.148.417 10.287.617 15.434z"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M63.28 95.859c-3.257.142-6.505.283-9.762.416-2.416.108-4.831.208-7.247.317-3.173.133-6.347.267-9.52.408"
			/>
			<path
				style={{
					fill: theme.mainColor,
				}}
				id="inner"
				d="M50.109 82.43c4.507 3.912 10.936 5.494 16.744 4.119-3.215-1.162-6.016-3.412-7.986-6.205 2.256 1.695 5.134 2.527 7.955 2.598s5.657-.759 7.995-2.339c-6.285-2.685-11.62-7.659-14.842-13.686 3.809 2.198 8.535 2.59 12.813 1.571-5.322-3.361-9.573-7.893-12.965-13.195 3.24 1.643 6.734 2.163 10.366 2.191l.474-.206c-2.945-1.6-5.382-4.019-7.395-6.7s-3.63-5.632-5.24-8.572c2.463 2.188 6.008 3.215 9.299 3.053l.613-.218a91.497 91.497 0 0 1-12.567-12.87c2.246.794 5.165.678 7.389-.178l.529-.06c-7.07-4.014-12.222-11.254-13.696-19.249h-.057c-1.372 8.013-6.431 15.319-13.449 19.422l.53.053c2.234.828 5.154.906 7.39.083a91.528 91.528 0 0 1-12.402 13.029l.615.21c3.293.12 6.824-.952 9.259-3.172-1.572 2.96-3.152 5.932-5.13 8.638-1.978 2.706-4.384 5.156-7.309 6.794l.476.2c3.632-.075 7.119-.64 10.337-2.324-3.324 5.345-7.517 9.931-12.796 13.359 4.291.964 9.011.512 12.792-1.734-3.145 6.068-8.416 11.11-14.666 13.875 2.358 1.55 5.205 2.343 8.024 2.236s5.687-.976 7.921-2.7c-1.934 2.818-4.707 5.104-7.906 6.307 5.825 1.301 12.233-.363 16.69-4.332"
			/>
			<RoughPath
				stroke="#000"
				roughness={0.2}
				strokeWidth={15}
				d="M50.109 82.43c4.507 3.912 10.936 5.494 16.744 4.119-3.215-1.162-6.016-3.412-7.986-6.205 2.256 1.695 5.134 2.527 7.955 2.598s5.657-.759 7.995-2.339c-6.285-2.685-11.62-7.659-14.842-13.686 3.809 2.198 8.535 2.59 12.813 1.571-5.322-3.361-9.573-7.893-12.965-13.195 3.24 1.643 6.734 2.163 10.366 2.191l.474-.206c-2.945-1.6-5.382-4.019-7.395-6.7s-3.63-5.632-5.24-8.572c2.463 2.188 6.008 3.215 9.299 3.053l.613-.218a91.497 91.497 0 0 1-12.567-12.87c2.246.794 5.165.678 7.389-.178l.529-.06c-7.07-4.014-12.222-11.254-13.696-19.249h-.057c-1.372 8.013-6.431 15.319-13.449 19.422l.53.053c2.234.828 5.154.906 7.39.083a91.528 91.528 0 0 1-12.402 13.029l.615.21c3.293.12 6.824-.952 9.259-3.172-1.572 2.96-3.152 5.932-5.13 8.638-1.978 2.706-4.384 5.156-7.309 6.794l.476.2c3.632-.075 7.119-.64 10.337-2.324-3.324 5.345-7.517 9.931-12.796 13.359 4.291.964 9.011.512 12.792-1.734-3.145 6.068-8.416 11.11-14.666 13.875 2.358 1.55 5.205 2.343 8.024 2.236s5.687-.976 7.921-2.7c-1.934 2.818-4.707 5.104-7.906 6.307 5.825 1.301 12.233-.363 16.69-4.332"
			/>
			{withoutStar ? null : (
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="m47.849 6.54.973-1.888c.159-.309.36-.62.486-.944.097-.248.159-.489.408-.64.673-.408.915 1.108 1.046 1.508.269.819.507 1.648.723 2.482-.017-.042.024.011.007-.031.026.064 1.003.013 1.116.015l1.173.016c.387.005.786.04 1.172.015.248-.016.544-.138.722.115.188.266.001.444-.188.589-.319.245-.616.527-.921.79-.602.52-1.205 1.04-1.81 1.557.148.747.274 1.499.398 2.25.063.382.125.764.189 1.145.022.132.02.274.048.403.036.17.146.301.097.486a.504.504 0 0 1-.202.269c-.196.14-.291.144-.499.047-.171-.08-.34-.164-.508-.252a10.395 10.395 0 0 1-.969-.577 9.377 9.377 0 0 1-.895-.681c-.08-.069-.782-.806-.807-.795-.871.385-1.736.783-2.602 1.18-.43.198-.86.395-1.291.591-.284.129-.827.522-1.048.102a.572.572 0 0 1-.014-.445c.052-.152.155-.27.225-.412.074-.15.121-.322.18-.479l.366-.981c.123-.328.247-.656.374-.983.039-.099.428-.911.385-.957a66.213 66.213 0 0 0-1.605-1.619c-.271-.267-.543-.534-.813-.803-.193-.192-.595-.425-.503-.747.108-.377.623-.295.921-.298l1.116-.01 2.024-.017c.177.002.352.001.526-.001z"
				/>
			)}

			<path
				style={{
					fill: 'none',
					stroke: theme.accentColor,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="m33.148 79.266 1.139-.985M35.663 77.221a21.567 21.567 0 0 0 5.797-8.092M42.214 83.416a14.23 14.23 0 0 0 2.405-3.651M36.643 64.909a20.5 20.5 0 0 0 5.813-9.451M38.292 52.117a25.449 25.449 0 0 0 5.764-8.98M41.797 38.381a15.097 15.097 0 0 0 3.73-4.777M46.542 31.871l.739-1.45M44.945 27.642a16.174 16.174 0 0 0 4.327-7.754M56.721 44.386a29.623 29.623 0 0 0 3.5 6.533M58.728 58.185a11.722 11.722 0 0 0 5.657 6.515M58.985 70.14a19.799 19.799 0 0 0 5.73 7.295M66.737 78.95c.275.31.682.498 1.096.506M48.955 42.149l-.555 24.6M48.547 69.108l.088 1.313M51.05 69.37a90.712 90.712 0 0 1 1.336-15.848"
			/>
		</svg>
	);
};
