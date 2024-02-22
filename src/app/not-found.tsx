import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
	return (
		<main className="min-h-screen flex-col items-center justify-between p-5 mx-auto overflow-y-auto">
			<div className="text-ctp-sky text-4xl font-bold absolute justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				404
			</div>
			<div className=" absolute text-ctp-text text-2xl font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 top-[calc(50%_+_5rem)]">
				Page not found
			</div>
			<div className="absolute text-ctp-blue hover:underline text-xl left-1/2 -translate-x-1/2 -translate-y-1/2 top-[calc(50%_+_7rem)]">
				<Link href="/">Go Home</Link>
			</div>
		</main>
	);
}
