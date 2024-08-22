import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
	LucideHome,
	CircleUser,
	type LucideIcon,
	ArrowRight,
	ArrowLeft,
} from "lucide-react";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "TGT",
	description: "random 13 year old developer",
};
const links: {
	name: string;
	href: string;
	Icon: LucideIcon;
}[] = [
	{
		name: "Home",
		href: "/",
		Icon: LucideHome,
	},
	{
		name: "Contact",
		href: "/contact",
		Icon: CircleUser,
	},
];
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${font.className} bg-ctp-base h-screen flex items-center flex-col selection:bg-ctp-overlay2/25`}
			>
				<nav className="flex flex-row justify-center space-x-2 p-5 items-center w-[50%]">
					<Image
						src="https://github.com/incognitotgt.png"
						alt="logo"
						className="rounded-full w-12 h-12"
						width={50}
						height={50}
					/>
					<div className="text-4xl text-ctp-mauve font-semibold">tgt</div>
					<div className="flex justify-end w-full h-full gap-8 p-5">
						{links.map((link) => (
							<Link
								href={link.href}
								key={link.href}
								className="text-ctp-blue font-semibold hover:text-ctp-sky flex flex-row gap-2 duration-150"
							>
								<link.Icon className="inline-flex" />
								{link.name}
							</Link>
						))}
					</div>
				</nav>
				{children}
				<footer className="flex flex-row gap-2 mt-6 *:duration-200">
					<a
						href="https://ctp-webr.ing/tgt/previous"
						className="text-ctp-mauve hover:text-ctp-mauve/75"
					>
						<ArrowLeft />
					</a>
					<a
						href="https://ctp-webr.ing/"
						className="text-ctp-blue hover:text-ctp-sky italic"
					>
						Catppuccin webring
					</a>
					<a
						href="https://ctp-webr.ing/tgt/next"
						className="text-ctp-mauve hover:text-ctp-mauve/75"
					>
						<ArrowRight />
					</a>
				</footer>
			</body>
		</html>
	);
}
