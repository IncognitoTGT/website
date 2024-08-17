import Link from "next/link";
export default function NotFound() {
	return (
		<main className="flex-col items-center justify-between mx-auto overflow-y-auto flex gap-4">
			<div className="text-ctp-red text-4xl font-bold">404</div>
			<div className=" text-ctp-text text-2xl font-bold">Page not found</div>
			<Link className="text-ctp-blue underline text-xl font-bold" href="/">
				Go Home
			</Link>
		</main>
	);
}
