import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
      // ignoredRoutes: ['/', '/dashboard-de-usuario',/^\/chicas\/[\w-]+$/, '/reportar', '/(api|trpc)(.*)'],
      // publicRoutes: ['/', '/dashboard-de-usuario',/^\/chicas\/[\w-]+$/, '/reportar', '/(api|trpc)(.*)'],
      ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)",/^\/api\/(?!chicas\/[^/]+\/?$)/,  "/", "/api/anuncio"],
      publicRoutes: ["/", "/api/anuncio"],

});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)',"/crear-anuncio", '/', '/(api|trpc)(.*)'],
};

// export const config = {
//     matcher: [
//         '/crear-anuncio',
//         '/dashboard',
//         '/api'
//     ],
// };
