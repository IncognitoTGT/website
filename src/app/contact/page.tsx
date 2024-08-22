import { Discord, GitHub } from "@/components/icons";
import { type LucideIcon, Mail, MapPin } from "lucide-react";

export default function Contact() {
	const contact: {
		name: string;
		link: string;
		display: string;
		Icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
	}[] = [
		{
			name: "Email",
			link: "mailto:tgt@incognitotgt.me",
			display: "tgt@incognitotgt.me",
			Icon: Mail,
		},
		{
			name: "Discord",
			link: "https://discord.com/users/268000823961962240",
			display: "tg.t",
			Icon: Discord,
		},
		{
			name: "GitHub",
			link: "https://github.com/incognitotgt",
			display: "@incognitotgt",
			Icon: GitHub,
		},
	];
	return (
		<main className="flex flex-col items-center justify-between gap-2 text-md">
			<div className="flex justify-center items-center flex-col">
				<div className="text-ctp-text">
					<h1 className="text-lg font-semibold text-ctp-subtext0">contact</h1>
					{contact.map((c) => (
						<li key={c.name}>
							<a
								href={c.link}
								className="text-ctp-blue hover:text-ctp-sky duration-200 font-semibold"
								target="_blank"
								rel="noreferrer noopener"
							>
								<c.Icon className="inline-block w-5 h-5 mr-1" />
								{c.display}
							</a>
						</li>
					))}
					<li>
						<MapPin className="inline-block w-5 h-5 mr-1" />
						Baltimore, MD
					</li>
				</div>
			</div>
		</main>
	);
}
