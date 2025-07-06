"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: 'Phone',
		description: '(+88) 017 07 07 07 07',
	},
	{
		icon: <FaEnvelope />,
		title: 'Email',
		description: 'email@email.com',
	},
	{
		icon: <FaMapMarkerAlt />,
		title: 'Address',
		description: 'Planet Earth, No Flat Earth, Calculate the Geo Location',
	},
];

const Contact = () => {
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
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row gap-[30px]">
					{/** Form */}
					<div className="md:w-[54%] order-2 md:order-none">
						<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Let's work together</h3>
							<p className="text-white/60">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptas, sint culpa aut et ea!
							</p>
							{/** Input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input name="firstname" placeholder="First Name" />
								<Input name="lastname" placeholder="Last Name" />
								<Input name="email" placeholder="Email address" />
								<Input name="phone" placeholder="Phone number" />
							</div>
							{/** Select */}
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="web">Web Development</SelectItem>
										<SelectItem value="ui">UI/UX Design</SelectItem>
										<SelectItem value="logo">Logo Design</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/** textarea */}
							<Textarea
								className="h-[200px]"
								placeholder="Type your message here."
							/>
							{/** Button */}
							<Button size="lg" className="max-w-40">
								Send Message
							</Button>
						</form>
					</div>

					{/** Info */}
					<div className="flex-1 flex items-center justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md">
											<div className="text-[28px]">
												{item.icon}
											</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<h3 className="text-xl">{item.description}</h3>
										</div>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Contact