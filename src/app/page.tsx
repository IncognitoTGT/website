import Image from "next/image";
import Link from "next/link";
export default function Home() {
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
      <div className="absolute justify-center left-1/2 -translate-x-1/2 translate-y-4 leading-relaxed pb-5">
        <div className="text-3xl text-ctp-text font-bold space-y-1">hi!</div>
        <div className="text text-ctp-text space-y-2">
          I&apos;m a 13 year old developer that focuses on ReactJS and SolidJS.
          This site is my portfolio, and I&apos;ll be updating it as I learn
          more. I made this site with NextJS, TailwindCSS, and TypeScript. I&apos;m really good at React and TailwindCSS.
          <div className="text-xl text-ctp-text font-bold">Random things</div>
          <ul className="list-disc translate-x-5">
            <li>
              Yes, I&apos;m actually 13 - my birthday&apos;s in October 2010
            </li>
            <li>
              This site has all 100s in Lighthouse, and I don&apos;t get why most other sites aren&apos;t.
            </li>
            <li>
              Github Copilot autocomplete suggested that I&apos;m a furry 4 times while writing this line.
            </li>
          </ul>
          <div className="text-xl text-ctp-text font-bold">
            Things I&apos;ve contributed to
          </div>
          <ul className="list-disc translate-x-5">
            <li>
              Ephermal - A web proxy with a sleek modern UI, and with features
              such as userscripts and userstyles.
            </li>
            <li>
              Nebula - A proxy with a sleek UI, with themes, and automatic
              cloaking.
            </li>
            <li>
              Interstellar - One of the more popular proxy sites I&apos;ve
              contributed to
            </li>
            <li>Xentabs2 - A tabbed proxy, with the look and feel of Arc</li>
          </ul>
          <div className="text-xl text-ctp-text font-bold">
            Devteams I&apos;m in
          </div>
          <ul className="list-disc translate-x-5">
            <li>Interstellar - member</li>
            <li>z1g Project - Owner</li>
            <li>Nebula/Xentabs2 - member (not NebulaWEB)</li>
          </ul>
          <div className="text-xl text-ctp-text font-bold">
            Languages, Libraries, and Frameworks I know:
          </div>
          <ul className="list-disc translate-x-5">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Tailwind CSS</li>
          </ul>
          <div className="text-xl text-ctp-text font-bold">
            Things I&apos;m learning
          </div>
          <ul className="list-disc translate-x-5">
            <li>NextJS</li>
            <li>SolidJS</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
