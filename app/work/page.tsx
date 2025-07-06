"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSlideButtons from "@/components/WorkSlideButtons";

const projects = [
	{
		num: '01',
		category: 'frontend',
		title: 'project 1',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint veritatis. Itaque cum deserunt corporis!',
		stack: [
			{
				name: "Html 5"
			},
			{
				name: "Css 3"
			},
			{
				name: "JavaScript"
			},
		],
		image: '/assets/work/thumb1.png',
		live: "",
		github: ""
	},
	{
		num: '02',
		category: 'fullstack',
		title: 'project 2',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint veritatis. Itaque cum deserunt corporis!',
		stack: [
			{
				name: "Next.js"
			},
			{
				name: "Tailwind.css"
			},
			{
				name: "Node.js"
			},
		],
		image: '/assets/work/thumb2.png',
		live: "",
		github: ""
	},
	{
		num: '03',
		category: 'frontend',
		title: 'project 3',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint veritatis. Itaque cum deserunt corporis!',
		stack: [
			{
				name: "Next.js"
			},
			{
				name: "Tailwind.css"
			},
		],
		image: '/assets/work/thumb3.png',
		live: "",
		github: ""
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	interface StackItem {
		name: string;
	}

	interface Project {
		num: string;
		category: string;
		title: string;
		description: string;
		stack: StackItem[];
		image: string;
		live: string;
		github: string;
	}

	interface SwiperType {
		activeIndex: number;
	}

	const handleSlideChange = (swiper: SwiperType): void => {
		// get current slide index
		const currentIndex: number = swiper.activeIndex;
		setProject(projects[currentIndex]);
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.44,
					ease: "easeIn",
				}
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row md:gap-[30px]">
					{/** Project details */}
					<div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/** outline num */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num}
							</div>
							{/** project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} project

							</h2>
							{/** Project description */}
							<p className="text-white/60">{project.description}</p>
							{/** stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{/** Remove the last comma */}
											{index !== project.stack.length - 1 && ","}
										</li>
									)
								})}
							</ul>
							{/** border */}
							<div className="border border-white/20"></div>
							{/** Buttons */}
							<div className="flex items-center gap-4">
								{/** Live project button */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live projects</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/** Github project button */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>

					{/** Slider */}
					<div className="w-full md:w-[50%]">
						<Swiper spaceBetween={30} slidesPerView={1} className="md:h-[520px] mb-12"
							onSlideChange={handleSlideChange}>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
											{/** overlay */}
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											{/** Image */}
											<div className="relative w-full h-full">
												<Image
													src={project.image}
													fill
													className="object-cover"
													alt={project.title}
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/** slide buttons */}
							<WorkSlideButtons
								containerStyles="slide-buttons flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-50 w-full justify-between md:w-max md:justify-none"
								btnStyles="bg-accent hover:bg-green-700 hover:text-white text-primary text-xl w-[44px] h-[44px] flex justify-center items-center transition-all"
								iconsStyles=""
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Work;