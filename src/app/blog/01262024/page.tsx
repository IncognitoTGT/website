import BlogHeader from "../header";
export default function Blog() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-5 mx-auto overflow-y-auto">
      <BlogHeader />
      <div className="absolute justify-center left-1/2 -translate-x-1/2 translate-y-4 leading-relaxed pb-5">
        <div className="text-3xl text-ctp-sky font-bold space-y-1">
          Musings on Next.js
        </div>
        <div className="text-lg text-ctp-text space-y-3 mt-2 justify-center">
          01/26/24
        </div>
        <div className="text text-ctp-text justify-start space-y-3 mt-2">
          Next.js is a really interesting React framework. As someone who has
          never used Next.js before, I was surprised that it wasn&apos;t the
          super bad framework that other people say it is. It&apos;s still not
          the best, like, the config options should have stuff that can let you
          configure the built in server, so a different service can use a
          particular route. Next.js is still pretty good.
        </div>
      </div>
    </main>
  );
}
