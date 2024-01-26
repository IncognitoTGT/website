import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-5 mx-auto overflow-y-auto">
      <div className="flex flex-row justify-start w-full h-full space-x-2">
        <Image
          src="/tgt.png"
          alt="logo"
          className="rounded-full"
          width={50}
          height={50}
        />
        <div className="text-4xl text-ctp-sky font-semibold translate-y-1">
          tgt
        </div>
      </div>
      <div className="flex flex-row justify-end w-full h-full space-x-5 -translate-y-10 p-2 text-ctp-sky">
        <Link className="hover:underline" href="/" aria-label="Home">
          Home
        </Link>
        <Link className="hover:underline" href="/contact" aria-label="Contact">
          Contact
        </Link>
        <a
          className="hover:underline"
          href="https://github.com/incognitotgt"
          aria-label="Github"
        >
          Github
        </a>
      </div>
      <div className="absolute justify-center left-1/2 -translate-x-1/2 translate-y-4 leading-relaxed pb-5">
        <div className="text-3xl text-ctp-text font-bold space-y-1">Blog</div>
        <div className="text text-ctp-text space-y-3 mt-2">
          <a href="/blog/01262024" className="text-ctp-sky hover:underline">
            Musings on Next.js - 01/26/2024
          </a>
        </div>
      </div>
    </main>
  );
}
