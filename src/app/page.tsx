export default function Home() {
	return (
		<main className="min-h-screen flex-col items-center justify-between p-5 mx-auto overflow-y-auto">
			<div className="flex justify-center items-center flex-col">
				<div className="text-3xl text-ctp-text font-bold space-y-1 text-left">
					hi!
				</div>
				<div className="text text-ctp-text space-y-2">
					I&apos;m a 13 year old developer that focuses on ReactJS. Don&apos;t
					have much to say other than that...
					<div className="text-xl text-ctp-text font-bold">Random things</div>
					<ul className="list-disc translate-x-5">
						<li>
							Yes, I&apos;m actually 13 - my birthday&apos;s in October 2010,
							and I&apos;m in 7th grade.
						</li>
						<li>
							This site has all 100s in Lighthouse, and I don&apos;t get why
							most other sites aren&apos;t.
						</li>
						<li>
							Github Copilot autocomplete suggested that I&apos;m a furry 4
							times while writing this line.
						</li>
					</ul>
					<div className="text-xl text-ctp-text font-bold">
						Things I&apos;ve contributed to
					</div>
					<ul className="list-disc translate-x-5">
						<li>
							AnyWeb - A web proxy with a sleek modern UI, and with features
							such as userscripts and userstyles.
						</li>
						<li>
							Nebula - A proxy with a sleek UI, with themes, and automatic
							cloaking.
						</li>
						<li>
							Interstellar - One of the more popular proxy sites I&apos;ve
							contributed to
						</li>
						<li>Stardust - An open source Kasm alternative in the works.</li>
						<li>AnyCode - A service for serverless functions, and server like deployments, like Vercel or Render</li>
					</ul>
					<div className="text-xl text-ctp-text font-bold">
						Devteams I&apos;m in
					</div>
					<ul className="list-disc translate-x-5">
						<li>Interstellar - member</li>
						<li>AnyVM - Member</li>
						<li>Spaceness - Owner</li>
					</ul>
					<div className="text-xl text-ctp-text font-bold">
						Languages, Libraries, and Frameworks I know:
					</div>
					<ul className="list-disc translate-x-5">
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>ReactJS</li>
						<li>NextJS</li>
						<li>Tailwind CSS</li>
					</ul>
					<div className="text-xl text-ctp-text font-bold">
						Things I&apos;m learning
					</div>
					<ul className="list-disc translate-x-5">
						<li>SolidJS</li>
					</ul>
				</div>
				<div className="text-ctp-text space-y-1 p-5 -translate-x-10">
					I made this site with NextJS, React, and TailwindCSS
				</div>
			</div>
		</main>
	);
}
