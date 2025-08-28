import { memo } from 'react';

function ImageFrequency({
	className = 'deco1 absolute left-0 top-[115px] h-[350px] w-[80px]',
	image = '/assets/images-webp/deco-1.webp',
	baseFrequency = '0.02',
	animationValue = '0.02;0.01;0.02',
	...props
}: any) {
	return (
		<svg className={`ImageFrequency ${className}`}>
			<defs>
				<filter id="turb">
					<feTurbulence type="fractalNoise" baseFrequency={baseFrequency} numOctaves="1">
						<animate
							attributeName="baseFrequency"
							values={animationValue}
							dur="20s"
							repeatCount="indefinite"
						></animate>
					</feTurbulence>
					<feDisplacementMap
						xChannelSelector="R"
						yChannelSelector="G"
						in="SourceGraphic"
						in2="turbulence_3"
						scale="40"
					/>
				</filter>
			</defs>
			<image className="absolute left-0 top-0 size-full object-cover" xlinkHref={image} filter="url(#turb)" />
			{/* <defs>
				<filter id="feDisplacementMap" filterUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.995"
						numOctaves="1"
						seed="1"
						stitchTiles="noStitch"
						result="img"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="img"
						xChannelSelector="R"
						yChannelSelector="G"
						scale="500"
					>
						<animate
							attributeName="scale"
							values="600;0;0"
							keyTimes="0;0.75;1"
							begin="0s"
							dur="12s"
							repeatCount="indefinite"
						/>
					</feDisplacementMap>
				</filter>
			</defs>
			<g filter="url(#feDisplacementMap)">
				<image xlinkHref={image} width="100%" height="100%" />
			</g> */}
		</svg>
	);
}

export default memo(ImageFrequency);
