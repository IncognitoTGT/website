import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LucideHome, CircleUser } from "lucide-react";
import "./globals.css";

const mono = Inter({ subsets: ["latin"] });
const GitHub = (props: { className: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={props.className}
	>
		<title>GitHub</title>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
);
export const metadata: Metadata = {
	title: "TGT",
	description: "random 13 year old developer",
};
const linkIconClasses = "inline pr-1";
const links: {
	name: string;
	href: string;
	icon: React.ReactNode;
}[] = [
	{
		name: "Home",
		href: "/",
		icon: <LucideHome className={linkIconClasses} />,
	},
	{
		name: "Contact",
		href: "/contact",
		icon: <CircleUser className={linkIconClasses} />,
	},
	{
		name: "GitHub",
		href: "https://github.com/incognitotgt",
		icon: <GitHub className={linkIconClasses} />,
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
				className={`${mono.className} bg-ctp-base h-screen flex items-center flex-col`}
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
					<div className="flex justify-end w-full h-full">
						{links.map((link) => (
							<Link
								href={link.href}
								key={link.href}
								className="text-ctp-blue hover:underline p-5"
							>
								{link.icon}
								{link.name}
							</Link>
						))}
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
