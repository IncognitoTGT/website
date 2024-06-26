import type { NextRequest } from "next/server";
// :trolley:
export function middleware(request: NextRequest) {
  const referer = request.headers.get("Referer");

  if (referer?.includes("discord.com")) {
    return Response.redirect(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      302,
    );
  }
}
