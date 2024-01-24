import Image from "next/image";
import Link from "next/link";
export default function notFound() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-5 mx-auto overflow-y-auto">
      <div className="flex flex-row justify-start w-full h-full space-x-2">
        <Image src="/tgt.png" alt="logo" className="rounded-full" width={50} height={50} />
        <div className="text-4xl text-ctp-sky font-semibold translate-y-1">
          tgt
        </div>
      </div>
      <div className="flex flex-row justify-end w-full h-full space-x-5 -translate-y-10 p-2 text-ctp-sky">
        <Link className="hover:underline" href="/contact" aria-label="Contact">Contact</Link>
        <a className="hover:underline" href="https://github.com/incognitotgt" aria-label="Github">
          Github
        </a>
      </div>
       <div className="text-ctp-sky text-4xl font-bold absolute justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">404</div>
       <div className=" absolute text-ctp-text text-2xl font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 top-[calc(50%_+_5rem)]">Page not found</div>
        <div className="absolute text-ctp-blue hover:underline text-xl left-1/2 -translate-x-1/2 -translate-y-1/2 top-[calc(50%_+_7rem)]"><Link href="/">Go Home</Link></div>
    </main>
  );
}
