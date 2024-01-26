import BlogHeader from "../header";
export default function Blog() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-5 mx-auto overflow-y-auto">
      <BlogHeader />
      <div className="absolute justify-center left-1/2 -translate-x-1/2 translate-y-4 leading-relaxed pb-5">
        <div className="text-3xl text-ctp-sky font-bold space-y-1">Title</div>
        <div className="text-lg text-ctp-text space-y-3 mt-2 justify-center">
          01/26/23
        </div>
        <div className="text text-ctp-text justify-start space-y-3 mt-2">
          Content goes here.
        </div>
      </div>
    </main>
  );
}
