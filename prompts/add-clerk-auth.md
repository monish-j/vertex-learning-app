# Implementation prompt: Add Clerk Authentication

## Goal

Set up Clerk authentication in Vertex using the Clerk CLI and `@clerk/nextjs`, linked to Clerk application `app_3IzkqBSwVdqQoNGGlpKfseDM3Oz`. Wrap the application with `ClerkProvider`, configure Next.js middleware with proper matchers, and integrate visible auth controls (sign-in, sign-up, and user profile button) into the navigation header (`SiteHeader`).

## Skills and docs read

- `AGENTS.md` — §5 structure (auth is Clerk wired via Next.js middleware, secret keys on server, publishable key in browser), §6 tech stack, §7 decisions, §12 gotchas (Clerk secret key server-only, Next 15+ async `auth()`, `ClerkProvider` inside `<body>`), §13 checks.
- `.agents/skills/clerk/SKILL.md` — Clerk skills router and version detection.
- `.agents/skills/clerk-setup/SKILL.md` — Framework detection, quickstart patterns, `clerk init`.
- `.agents/skills/clerk-cli/SKILL.md` — CLI authentication, `clerk init --app app_3IzkqBSwVdqQoNGGlpKfseDM3Oz`, `clerk doctor`.
- `.agents/skills/clerk-nextjs-patterns/SKILL.md` — App router Next.js middleware, `clerkMiddleware`, matchers (`/__clerk/:path*`).

## Code inspected

- `package.json` — Next.js 16.3.4, React 19.2.8, Tailwind CSS v4.
- `app/layout.tsx` — Root layout where `<ClerkProvider>` must be placed inside `<body>`.
- `components/layout/site-header.tsx` — Site header currently displaying a static avatar placeholder that should be replaced with Clerk auth buttons (`<Show when="signed-out">` with `<SignInButton>` / `<SignUpButton>` and `<Show when="signed-in">` with `<UserButton>`).
- `components/nav/navbar.tsx` — Navigation bar component.

## Decisions and assumptions

1. **Clerk CLI Execution**:
   - Check if `clerk` CLI is installed; if not or outdated, install/update via npm.
   - Run `clerk auth login` if needed, then `clerk init --app app_3IzkqBSwVdqQoNGGlpKfseDM3Oz`.
2. **Next.js 16 Compatibility**:
   - Install `@clerk/nextjs` (latest version supporting React 19 / Next 16).
   - Place `<ClerkProvider>` inside `<body>` in `app/layout.tsx`.
3. **Middleware**:
   - Create or verify `middleware.ts` / `proxy.ts` with `clerkMiddleware()` and matcher configuration including `'/(api|trpc)(.*)'` and `'/__clerk/:path*'`.
4. **Auth Controls in UI**:
   - Update `components/layout/site-header.tsx` to include sign-in, sign-up, and `<UserButton />` using Clerk's `<Show>` or `<SignedIn>` / `<SignedOut>` / `<UserButton>` / `<SignInButton>` / `<SignUpButton>` components.
   - Match existing styling (subtle borders, font typography, primary button accents).
5. **Environment Variables**:
   - Ensure `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are populated in `.env.local` by `clerk init` or CLI configuration.
   - Ensure `.env.example` documents the required variables.

## Files expected to touch

- `package.json` — dependency addition for `@clerk/nextjs`.
- `middleware.ts` — [NEW] Next.js middleware with `clerkMiddleware`.
- `app/layout.tsx` — [MODIFY] Add `<ClerkProvider>` inside `<body>`.
- `components/layout/site-header.tsx` — [MODIFY] Replace static placeholder avatar with dynamic Clerk auth controls.
- `.env.local` / `.env.example` — [MODIFY/NEW] Clerk environment keys.

## Requirements

1. Use Clerk CLI linked to `app_3IzkqBSwVdqQoNGGlpKfseDM3Oz`.
2. Wrap App Router with `ClerkProvider` inside `<body>`.
3. Configure `clerkMiddleware` with correct Next.js route matchers.
4. Render clean auth controls on `SiteHeader`:
   - When signed out: Sign In and Sign Up buttons.
   - When signed in: `<UserButton />` along with notification bell.
5. Verify setup with `clerk doctor` and run type checks and dev verification.

## Security considerations

- `CLERK_SECRET_KEY` must never be exposed to the browser or imported in client components.
- Keep `.env.local` in `.gitignore`.
- Only `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is exposed to the browser.

## Acceptance criteria

- `clerk doctor` reports clean configuration.
- App compiles without TypeScript or lint errors (`npm run lint`, `npx tsc --noEmit`).
- When signed out, "Sign In" and "Sign Up" actions are visible in the header.
- When signed in, Clerk's `<UserButton />` is visible and functional.

## Checks to run

1. `npx tsc --noEmit`
2. `npm run lint`
3. `clerk doctor`
4. `npm run build`

## Manual test steps

1. Start development server (`npm run dev`).
2. Visit `http://localhost:3000`.
3. Verify that Sign In and Sign Up buttons are visible in the top right header.
4. Click Sign Up or Sign In and complete authentication.
5. Verify that upon signing in, user avatar/UserButton is rendered.
