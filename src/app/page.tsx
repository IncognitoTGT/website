import { SeparatorVertical } from "lucide-react";
import Image from "next/image";
export default function Home() {
	const projects = [
		{
			name: "Ephemeral",
			description: "A web proxy",
			link: "z1g-project/ephemeral",
		},
		{
			name: "Interstellar",
			description: "One of the more popular proxy sites I've contributed to",
			link: "useinterstellar",
		},
		{
			name: "Stardust",
			description: "isolated, disposable workspaces",
			link: "spaceness/stardust",
		},
	];
	const buttons = [
		{
			alt: "incognitotgt",
			href: "https://incognitotgt.me",
			src: "/button.png",
		},
		{
			alt: "arc browser",
			href: "https://arc.net",
			src: "/buttons/arc.gif",
		},
	];
	return (
		<main className="flex flex-col items-center justify-between gap-2 text-md">
			<div className="flex justify-center items-center flex-col">
				<div className="text-ctp-text">
					im a 13 year old typescript developer, who&apos;s also learning swift
					<h1 className="text-lg font-semibold text-ctp-subtext0">
						facts about me
					</h1>
					<ul className="list-disc translate-x-5">
						<li>im in 8th grade</li>
						<li>i started coding december 2023</li>
					</ul>
					<h1 className="text-lg font-semibold text-ctp-subtext0">
						couple things i have worked on
					</h1>
					<ul className="list-disc translate-x-5">
						{projects.map((project) => (
							<li key={project.name}>
								<a
									href={`https://github.com/${project.link}`}
									className="text-ctp-blue font-bold underline active:text-ctp-red"
								>
									{project.name}
								</a>
								<div className="text-sm">{project.description}</div>
							</li>
						))}
					</ul>
					<h1 className="text-lg font-semibold text-ctp-subtext0">
						stuff i know
					</h1>
					<ul className="list-disc translate-x-5">
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>ReactJS</li>
						<li>NextJS</li>
						<li>Tailwind CSS</li>
						<li>Swift (kind of)</li>
					</ul>
					<h1 className="text-lg text-ctp-subtext0 font-semibold">
						Things I&apos;m learning
					</h1>
					<ul className="list-disc translate-x-5">
						<li>SwiftUI</li>
					</ul>
					<hr className="border-ctp-surface0 pt-4" />
					<section className="flex flex-col gap-2">
						<p>my array of buttons...</p>
						<div className="flex gap-2 flex-wrap">
							{buttons.map((button) => (
								<a
									href={button.href}
									key={button.href}
									style={{ imageRendering: "pixelated" }}
									className="hover:scale-105 duration-200"
								>
									<Image
										src={button.src}
										alt={button.alt}
										className="h-[46.5px] w-[132px]"
										height={31}
										width={88}
									/>
								</a>
							))}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
