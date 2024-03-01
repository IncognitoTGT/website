export default function Contact() {
	return (
		<main className="min-h-screen flex-col items-center justify-between p-5 mx-auto overflow-y-auto">
			<div className="absolute justify-center left-1/2 -translate-x-1/2 translate-y-4 leading-relaxed pb-5">
				<div className="text-3xl text-ctp-text font-bold space-y-1">
					Contact
				</div>
				<div className="text text-ctp-text space-y-2">
					You can contact me through the following methods:
					<ul className="list-disc translate-x-5">
						<li>Email: tgt@incognitotgt.me</li>
						<li>Discord: tg.t</li>
						<li>GitHub: incognitotgt</li>
					</ul>
					I&apos;m very willing to work with you on a project! If there&apos;s
					anything you want me to work on, just contact me and I might be
					interested!
					<div className="font-bold text-ctp-red">
						Skids contacting me will be blocked
					</div>
				</div>
			</div>
		</main>
	);
}
