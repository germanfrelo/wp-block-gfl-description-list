import { Rect, SVG } from "@wordpress/components";

export const dlIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		aria-hidden="true"
	>
		<Rect
			x="4"
			y="5"
			width="8"
			height="1.5"
			fill="currentColor"
		/>
		<Rect
			x="8"
			y="8"
			width="12"
			height="1.5"
			fill="currentColor"
		/>
		<Rect
			x="4"
			y="14"
			width="8"
			height="1.5"
			fill="currentColor"
		/>
		<Rect
			x="8"
			y="17"
			width="12"
			height="1.5"
			fill="currentColor"
		/>
	</SVG>
);

export const dlItemIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		aria-hidden="true"
	>
		{/* Visual wrapper border to indicate grouping */}
		<Rect
			x="2"
			y="4"
			width="20"
			height="16"
			rx="1.5"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeOpacity="0.3"
		/>
		{/* The Term (Black) */}
		<Rect
			x="5"
			y="8"
			width="8"
			height="1.5"
			fill="currentColor"
		/>
		{/* The Definition (Gray) */}
		<Rect
			x="9"
			y="12"
			width="10"
			height="1.5"
			fill="currentColor"
			fillOpacity="0.5"
		/>
	</SVG>
);

export const ddIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		aria-hidden="true"
	>
		{/* Term (Dimmed) */}
		<Rect
			x="4"
			y="9"
			width="8"
			height="1.5"
			fill="currentColor"
			fillOpacity="0.33"
		/>
		{/* Definition (Solid) */}
		<Rect
			x="8"
			y="13"
			width="12"
			height="1.5"
			fill="currentColor"
		/>
	</SVG>
);
