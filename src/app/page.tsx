import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-5 bg-ctp-base bg-scroll">
      <div className="flex flex-row justify-start w-full h-full space-x-2">
        <Image src="/tgt.png" alt="logo" className="" width={50} height={50} />
        <div className="text-4xl text-ctp-sky font-bold translate-y-2">TGT</div>
      </div>
      <div className="absolute justify-center left-1/2 -translate-x-1/2 translate-y-4 divide-solid divide-y divide-ctp-surface0 leading-relaxed">
        <div className="text-3xl text-ctp-text font-bold space-y-1">hello!</div>
        <div className="text text-ctp-text space-y-2">
          I'm a 13 year old developer that focuses on ReactJS and SolidJS. When
          I'm not coding, I'm either touching grass, or at school.
          <div className="text-2xl text-ctp-text font-bold">Projects</div>
          <ul className="list-disc">
            <li>
              Ephermal - A web proxy with a sleek modern UI, and with features
              such as userscripts and userstyles.
            </li>
            <li>
              Nebula - A proxy with a sleek UI, with themes, and automatic
              cloaking.
            </li>
            <li>
              Interstellar - One of the more popular proxy sites I've
              contributed to
            </li>
            <li>Xentabs2 - A tabbed proxy, with the look and feel of Arc</li>
          </ul>
          <div className="text-2xl text-ctp-text font-bold">
            Devteams I'm in
          </div>
          <ul className="list-disc">
            <li>Interstellar - member</li>
            <li>z1g Project - Owner</li>
            <li>Nebula/Xentabs2 - member (not NebulaWEB)</li>
          </ul>
          <div className="text-2xl text-ctp-text font-bold">
            Languages, Libraries, and Frameworks I know:
          </div>
          <ul className="list-disc">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Tailwind CSS</li>
          </ul>
          <div className="text-2xl text-ctp-text font-bold">
            Things I'm learning
          </div>
          <ul className="list-disc">
            <li>NextJS</li>
            <li>SolidJS</li>
          </ul>

        </div>
      </div>
    </main>
  );
}
