import Image from "next/image";
export default function Home() {
	const projects: {
		name: string;
		description: string;
		link: string;
	}[] = [
		{
			name: "Stardust",
			description: "isolated, disposable workspaces",
			link: "spaceness/stardust",
		},
		{
			name: "schoology-frontend",
			description:
				"alternative frontend for schoology that i work on sometimes",
			link: "incognitotgt/schoology-frontend",
		},
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
	];
	const buttons = [
		{
			alt: "incognitotgt",
			href: "https://incognitotgt.me",
			src: "/button.png",
		},
		{
			alt: "bomberfish",
			href: "https://bomberfish.ca",
			src: "https://bomberfish.ca/buttons/button.gif",
		},
		{
			alt: "kilo",
			href: "https://kkilo.me",
			src: "https://kkilo.me/buttons/kilo.gif",
		},
		{
			alt: "Arc Browser",
			href: "https://arc.net",
			src: "/buttons/arc.gif",
		},
		{
			alt: "GNU AGPL license",
			href: "https://www.gnu.org/licenses/agpl-3.0.html",
			src: "/buttons/agpl.webp",
		},
		{
			alt: "zramctl",
			href: "https://zram.sh",
			src: "https://github.com/zramctl/zramctl/blob/main/src/components/buttons/zramctl.png?raw=true",
		},
	];
	return (
		<main className="flex flex-col items-center justify-between gap-2 text-md">
			<div className="flex justify-center items-center flex-col">
				<div className="text-ctp-text">
					im a 13 year old developer
					<h1 className="text-lg font-semibold text-ctp-subtext0">
						facts about me
					</h1>
					<ul className="list-disc translate-x-5">
						<li>im in 8th grade</li>
						<li>i started coding december 2023</li>
						<li>chronic catppuccin mocha mauve addict</li>
					</ul>
					<h1 className="text-lg font-semibold text-ctp-subtext0">
						couple things i have worked on
					</h1>
					<ul className="list-disc translate-x-5">
						{projects.map((project) => (
							<li key={project.name}>
								<a
									href={`https://github.com/${project.link}`}
									className="text-ctp-blue font-bold active:text-ctp-red hover:text-ctp-sky duration-150"
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
					<ul className="list-disc list-inside">
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
					<ul className="list-disc list-inside">
						<li>SwiftUI</li>
						<li>Rust</li>
					</ul>
					<hr className="border-ctp-surface0 pt-4" />
					<section className="flex flex-col gap-2">
						<div className="grid grid-cols-5 grid-rows-2 gap-2 justify-center items-center">
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
										height={31}
										width={88}
									/>
								</a>
							))}
							<iframe
								src="//incr.easrng.net/badge?key=incognitotgt"
								style={{
									background: "url(//incr.easrng.net/bg.gif)",
								}}
								title="increment badge"
								width="88"
								height="31"
								className="hover:scale-105 duration-200"
							/>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
