import Link from "next/link";
import Image from "next/image";
export default function Home() {
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
        <Link className="hover:underline" href="/blog" aria-label="Blog">
          Blog
        </Link>
        <Link className="hover:underline" href="/" aria-label="Home">
          Home
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
        <div className="text-3xl text-ctp-text font-bold space-y-1">
          Contact
        </div>
        <div className="text text-ctp-text space-y-2">
          You can contact me at:
          <ul className="list-disc translate-x-5">
            <li>Email: tgt@incognitotgt.me</li>
            <li>Discord: tg.t</li>
          </ul>
          I&apos;m very willing to work with you on a project! If there&apos;s
          anything you want me to work on, just contact me and I might be
          interested!
        </div>
      </div>
    </main>
  );
}
