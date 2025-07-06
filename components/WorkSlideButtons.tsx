"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// 2:34:44
const WorkSlideButtons = ({ containerStyles, btnStyles, iconsStyles }: {
	containerStyles: string; btnStyles: string; iconsStyles: string;
}) => {
	const swiper = useSwiper();

	return (
		<div className={containerStyles}>
			<button
				onClick={() => swiper.slidePrev()}
				className={btnStyles}
			>
				<PiCaretLeftBold className={iconsStyles} />
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className={btnStyles}
			>
				<PiCaretRightBold className={iconsStyles} />
			</button>
		</div>
	)
}

export default WorkSlideButtons