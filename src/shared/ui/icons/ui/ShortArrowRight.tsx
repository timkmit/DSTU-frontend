import { SVGProps } from "react";

export const ShortArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" {...props}>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={10}
			strokeWidth={1.5}
			d="M1.61 12.333 6 7.943a1.337 1.337 0 0 0 0-1.886L1.61 1.666"
		/>
	</svg>
);
