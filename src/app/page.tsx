import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-5 bg-ctp-base bg-scroll">
      <div className="flex flex-row justify-start w-full h-full space-x-2">
        <Image src="/tgt.png" alt="logo" className="" width={50} height={50} />
        <div className="text-4xl text-ctp-sky font-semibold translate-y-2">
          tgt
        </div>
      </div>
      <div className="flex flex-row justify-end w-full h-full space-x-2 -translate-y-10 p-2">
        <a href="https://github.com/incognitotgt" aria-label="Github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-ctp-text hover:text-ctp-sky cursor-pointer"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
      <div className="absolute justify-center left-1/2 -translate-x-1/2 translate-y-4 divide-solid divide-y divide-ctp-surface0 leading-relaxed">
        <div className="text-3xl text-ctp-text font-bold space-y-1">hi!</div>
        <div className="text text-ctp-text space-y-2">
          I&apos;m a 13 year old developer that focuses on ReactJS and SolidJS.
          This site is my portfolio, and I&apos;ll be updating it as I learn
          more. I made this site with NextJS, TailwindCSS, and TypeScript.
          <div className="text-xl text-ctp-sky font-bold">Random things</div>
          <ul className="list-disc translate-x-5">
            <li>
              Yes, I&apos;m actually 13 - my birthday&apos;s in October 2010
            </li>
            <li>
              This site has all 100s in Lighthouse (desktop)
            </li>
            <li>
              Github Copilot autocomplete suggested that I&apos;m a furry 4 times while writing this line.
            </li>
          </ul>
          <div className="text-xl text-ctp-sky font-bold">
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
          <div className="text-xl text-ctp-sky font-bold">
            Devteams I&apos;m in
          </div>
          <ul className="list-disc translate-x-5">
            <li>Interstellar - member</li>
            <li>z1g Project - Owner</li>
            <li>Nebula/Xentabs2 - member (not NebulaWEB)</li>
          </ul>
          <div className="text-xl text-ctp-sky font-bold">
            Languages, Libraries, and Frameworks I know:
          </div>
          <ul className="list-disc translate-x-5">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Tailwind CSS</li>
          </ul>
          <div className="text-xl text-ctp-sky font-bold">
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
