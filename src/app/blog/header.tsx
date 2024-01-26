import Image from "next/image";
import Link from "next/link";
export default function BlogHeader() {
  return (
    <nav>
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
    </nav>
  );
}
