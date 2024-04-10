import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  signInUrl: "/sign-in",
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
