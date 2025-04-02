# GPT-IQ Project Setup & Configuration Guide (Part 1 - src/ Directory Layout)

**Objective:** To initialize your Next.js project using the `src/` layout, set up essential tools (Tailwind CSS, Shadcn UI, Supabase, Git), configure basic styling (fonts, colors), and prepare for internationalization (Arabic/English).

**Prerequisites:**

* **Node.js:** v18 or later.
* **npm or yarn:** Package manager.
* **Git:** Version control.
* **Code Editor:** With WindSurf AI / Codeium agent.
* **Supabase Account:** [Supabase.com](https://supabase.com).
* **Project Folder:** Your `gpt-iq-5` folder, now containing a fresh Next.js project configured with `src/`, TypeScript, Tailwind, App Router.

---

**Step 1 & 2: Project Initialization & Navigation**

* You have already completed this by running `npx create-next-app@latest .` inside the cleaned `gpt-iq-5` folder and selecting the options including `src/ directory? Yes`.

---

**Step 3: Initialize Git Repository**

* **Why?** Track changes, revert if needed. Essential safety net.

1.  Ensure you are in the `gpt-iq-5` directory in your terminal.
2.  Instruct your AI agent to run these commands *one by one*:

    ```bash
    git init
    git add .
    git commit -m "Initial commit: Fresh Next.js project (src layout)"
    ```
3.  **(Recommended):** Add `.DS_Store` (for macOS) to your `.gitignore` file if it's not already there. Then commit the change:
    ```bash
    echo ".DS_Store" >> .gitignore
    git add .gitignore
    git commit -m "chore: Add .DS_Store to gitignore"
    ```
    *(Optional but recommended: Link to a GitHub/GitLab repository)*

---

**Step 4: Set up Supabase Project & Get Credentials**

1.  Go to [Supabase.com](https://supabase.com), log in, and create a new project (if you deleted the old one) or use the existing one.
2.  Navigate to **Project Settings** > **API**.
3.  Copy the **Project URL** and the **`anon` `public` API Key**. Keep them ready.

---

**Step 5: Create `.env.local` File**

* **Why?** Store secrets securely. Never commit this file.

1.  Instruct your AI agent to create `.env.local` in the **root** of `gpt-iq-5`.
2.  Add your Supabase credentials:

    ```plaintext
    # .env.local
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL_HERE
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY_HERE
    ```
3.  Verify `.env.local` is listed in your `.gitignore` file (it should be by default).
4.  **Commit this:**

    ```bash
    git add .env.local .gitignore
    git commit -m "feat: Add Supabase environment variables"
    ```

---

**Step 6: Install Core Supabase & Utility Libraries**

1.  Instruct your AI agent to run:

    ```bash
    npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @supabase/ssr lucide-react
    ```

---

**Step 7: Initialize Shadcn UI**

1.  Instruct your AI agent to run the **correct** command:

    ```bash
    npx shadcn@latest init
    ```

2.  Answer the configuration questions:
    * `Would you like to use TypeScript (recommended)?` **yes**
    * `Which style would you like to use?` **Default**
    * `Which color would you like to use as base color?` **Slate**
    * `Where is your global CSS file?` **src/app/globals.css** *(Verify this path matches your structure)*
    * `Would you like to use CSS variables for colors?` **Yes**
    * `Where is your Tailwind config file?` **tailwind.config.ts** *(Should be correct, it's in the root)*
    * `Configure the import alias for components:` **@/components** *(Will resolve to `src/components`)*
    * `Configure the import alias for utils:` **@/lib** *(Will resolve to `src/lib`)*
    * `Are you using React Server Components?` **Yes**
    * `Write configuration to components.json.` **Yes**

---

**Step 7.5: Install Missing Shadcn Dependency**

* Last time, `tailwindcss-animate` was missing. Let's install it proactively.

1.  Instruct your AI agent to run:
    ```bash
    npm install tailwindcss-animate
    ```

---

**Step 8: Configure `tailwind.config.ts`**

1.  Instruct your AI agent to open `tailwind.config.ts` (in the root).
2.  **Update `content` paths:** Ensure the paths correctly point inside `src/`. Replace the existing `content` array with this:

    ```typescript
    // tailwind.config.ts
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Include pages if you ever use it
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}', // Catch-all for anything else in src
    ],
    ```

3.  **Add Font Families:** Inside `theme: { extend: { ... } }`, add/replace the `fontFamily` section:

    ```typescript
    // Inside theme: { extend: { ... } }
    fontFamily: {
      sans: ["var(--font-ibm-plex-sans)", "sans-serif"],
      arabic: ["var(--font-ibm-plex-sans-arabic)", "sans-serif"],
    },
    ```

4.  **(Verify Only):** Ensure the `colors`, `borderRadius`, `keyframes`, `animation`, and `plugins` sections added by `shadcn init` are present. The `colors` section should use the `hsl(var(--...))` format. The `plugins` array should include `require("tailwindcss-animate")`.

---

**Step 9: Font Setup (IBM Plex Sans)**

1.  **Get/Organize Fonts:** Ensure you have the IBM Plex Sans and IBM Plex Sans Arabic font files (`.woff2` preferred) and place them inside the `public/fonts/` directory.
2.  **Load Fonts & Apply Colors:** Instruct your AI agent to open `src/app/globals.css`.
3.  **Replace** the entire content of `src/app/globals.css` with the following (this includes `@font-face` rules, CSS variable definitions for fonts and colors, and base styles):

    ```css
    /* src/app/globals.css */

    /* --- IBM Plex Sans (English) --- */
    @font-face {
      font-family: 'IBM Plex Sans';
      src: url('/fonts/IBMPlexSans-Regular.woff2') format('woff2'); /* Adjust filename if needed */
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'IBM Plex Sans';
      src: url('/fonts/IBMPlexSans-Medium.woff2') format('woff2'); /* Adjust filename */
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'IBM Plex Sans';
      src: url('/fonts/IBMPlexSans-Bold.woff2') format('woff2'); /* Adjust filename */
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }

    /* --- IBM Plex Sans Arabic --- */
    @font-face {
      font-family: 'IBM Plex Sans Arabic';
      src: url('/fonts/IBMPlexSansArabic-Regular.woff2') format('woff2'); /* Adjust filename */
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
     @font-face {
      font-family: 'IBM Plex Sans Arabic';
      src: url('/fonts/IBMPlexSansArabic-Medium.woff2') format('woff2'); /* Adjust filename */
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
     @font-face {
      font-family: 'IBM Plex Sans Arabic';
      src: url('/fonts/IBMPlexSansArabic-Bold.woff2') format('woff2'); /* Adjust filename */
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    /* --- End Font Faces --- */

    /* --- Tailwind Directives --- */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    /* --- End Tailwind Directives --- */

    /* --- Base Layer Styles & Variables --- */
    @layer base {
      :root {
        /* --- Font Variables --- */
        --font-ibm-plex-sans: 'IBM Plex Sans';
        --font-ibm-plex-sans-arabic: 'IBM Plex Sans Arabic';

        /* --- Light Theme Colors (HSL: H S% L%) --- */
        --background: 210 17% 97%; /* #f8f9fa */
        --foreground: 222 25% 8%;  /* #10131a */
        --card: 0 0% 100%;         /* #ffffff */
        --card-foreground: 222 25% 8%; /* #10131a */
        --popover: 0 0% 100%;      /* #ffffff */
        --popover-foreground: 222 25% 8%; /* #10131a */
        --primary: 221 78% 52%;    /* #2364e4 */
        --primary-foreground: 220 20% 97%; /* #f6f7f9 */
        --secondary: 218 17% 94%;  /* #eef0f2 */
        --secondary-foreground: 222 25% 8%; /* #10131a */
        --muted: 216 20% 95%;      /* #f1f3f5 */
        --muted-foreground: 218 17% 43%; /* #5c6a7e */
        --accent: 150 73% 52%;     /* #28e088 */
        --accent-foreground: 222 25% 8%; /* #10131a */
        --destructive: 0 66% 54%; /* #d43d3e */
        --destructive-foreground: 220 20% 97%; /* #f6f7f9 */
        --border: 215 20% 91%;     /* #e2e8f0 */
        --input: 215 20% 91%;      /* #e2e8f0 */
        --ring: 221 78% 52%;       /* #2364e4 */
        --radius: 0.5rem;
      }

      .dark {
        /* --- Dark Theme Colors (HSL: H S% L%) --- */
        --background: 0 0% 3%;     /* #080808 */
        --foreground: 220 20% 97%; /* #f6f7f9 */
        --card: 222 25% 8%;        /* #10131a */
        --card-foreground: 220 20% 97%; /* #f6f7f9 */
        --popover: 222 25% 8%;     /* #10131a */
        --popover-foreground: 220 20% 97%; /* #f6f7f9 */
        --primary: 221 78% 52%;    /* #2364e4 */
        --primary-foreground: 220 20% 97%; /* #f6f7f9 */
        --secondary: 222 25% 14%;  /* #1a202c */
        --secondary-foreground: 220 20% 97%; /* #f6f7f9 */
        --muted: 222 25% 8%;       /* #10131a */
        --muted-foreground: 222 20% 75%; /* #b5bbcb */
        --accent: 150 73% 52%;     /* #28e088 */
        --accent-foreground: 0 0% 3%; /* #080808 */
        --destructive: 0 66% 54%; /* #d43d3e */
        --destructive-foreground: 220 20% 97%; /* #f6f7f9 */
        --border: 222 25% 14%;     /* #1a202c */
        --input: 222 25% 14%;      /* #1a202c */
        --ring: 221 78% 52%;       /* #2364e4 */
        /* --radius is inherited from :root */
      }
    }

    @layer base {
      * {
        /* Removed problematic border-border apply */
        @apply border-border; /* Re-evaluate if needed, maybe remove '*' selector */
        /* Let's remove this problematic line entirely for now */
      }
       /* Remove the '*' rule above */
      body {
        @apply bg-background text-foreground; /* Standard apply for base bg/text */
        /* Apply font smoothing */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      /* Apply default English font */
      body {
         font-family: var(--font-ibm-plex-sans), sans-serif;
      }
      /* Apply Arabic font when lang="ar" */
      html[lang="ar"] body {
        font-family: var(--font-ibm-plex-sans-arabic), sans-serif;
      }
    }
    /* --- End Base Layer --- */
    ```
    *Self-Correction during generation:* The `@layer base { * { @apply border-border }}` caused errors before. Removed it entirely. The `body { @apply bg-background text-foreground }` also caused errors. Let's remove those `@apply` rules as well, as the base variables should apply automatically. Revised the `@layer base` section.*

    **Revised `@layer base` section for `globals.css`:**
    ```css
    @layer base {
      body {
        /* Base variables apply automatically, set font smoothing */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      /* Apply default English font */
      body {
         font-family: var(--font-ibm-plex-sans), sans-serif;
      }
      /* Apply Arabic font when lang="ar" */
      html[lang="ar"] body {
        font-family: var(--font-ibm-plex-sans-arabic), sans-serif;
      }
    }
    ```

---

**Step 10: Install and Configure `next-intl` (src/ Layout)**

1.  **Install:** Instruct your AI agent to run:

    ```bash
    npm install next-intl
    ```

2.  **Create Locale Files:**
    * Create folder `src/messages/`.
    * Inside `src/messages/`, create `en.json` (add basic keys like `{"Greeting": "Hello!"}`).
    * Inside `src/messages/`, create `ar.json` (add translated keys like `{"Greeting": "مرحباً!"}`).

3.  **Create `src/i18n.ts` Config:** Create `src/i18n.ts` with this content:

    ```typescript
    // src/i18n.ts
    import {notFound} from 'next/navigation';
    import {getRequestConfig} from 'next-intl/server';

    export const locales = ['en', 'ar'] as const;
    export const defaultLocale = 'ar';
    export type Locale = typeof locales[number];

    export default getRequestConfig(async ({locale}) => {
      // Provided locale must be valid
      if (!locales.includes(locale as any)) notFound();

      return {
        messages: (await import(`@/messages/${locale}.json`)).default // Use alias
      };
    });
    ```

4.  **Create `src/middleware.ts`:** Create `src/middleware.ts` with this content:

    ```typescript
    // src/middleware.ts
    import createMiddleware from 'next-intl/middleware';
    import { locales, defaultLocale } from './i18n'; // Import from sibling file

    // Optional: Add console.log here for debugging if needed later
    // console.log(`[Middleware File] Evaluating middleware.ts at ${new Date().toISOString()}`);

    export default createMiddleware({
      locales: locales,
      defaultLocale: defaultLocale,
      localePrefix: 'always' // Explicit prefix strategy
    });

    export const config = {
      // Match all paths except ones starting with /api, /_next/static, /_next/image, or contain a dot (likely assets)
      // Also exclude favicon.ico and fonts/ explicitly if needed
      matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)']
      // Simpler alternative matcher if the above is too complex:
      // matcher: ['/', '/(ar|en)/:path*'] // Match root and locale prefixes
    };
    ```
    *(Note: Adjusted the default matcher slightly to exclude paths with dots, which often catches assets better)*

5.  **Update Root Layout (`src/app/layout.tsx`):** Modify `src/app/layout.tsx`:

    ```typescript
    // src/app/layout.tsx
    import type { Metadata } from "next";
    import "./globals.css";
    import { Locale, locales } from "@/i18n"; // Use alias, import Locale type

    export const metadata: Metadata = {
      title: "gpt-iq",
      description: "Your intelligent Iraqi dialect AI assistant",
    };

    interface RootLayoutProps {
      children: React.ReactNode;
      params: {
        // Use the specific Locale type for better safety
        locale: Locale;
      };
    }

    export default function RootLayout({
      children,
      params: { locale }
    }: Readonly<RootLayoutProps>) {

      // Basic validation - check if locale is included (optional logging)
      // It should be valid if middleware is correct, but good to have check
      if (!locales.includes(locale)) {
         console.warn(`[Layout] Received invalid locale param: ${locale}`);
         // Handle this case if needed, e.g. call notFound() from 'next/navigation'
      }

      const direction = locale === 'ar' ? 'rtl' : 'ltr';

      return (
        <html lang={locale} dir={direction}>
          <body>
            {/* We'll add providers later */}
            {children}
          </body>
        </html>
      );
    }
    ```

---

**Step 11: Install State Management Library**

1.  Instruct your AI agent to run:

    ```bash
    npm install zustand
    ```

---

**Step 12: Final Commit for Setup**

1.  Make sure all files are saved.
2.  Instruct your AI agent to run:

    ```bash
    git add .
    git commit -m "feat: Complete initial project setup (src layout)"
    ```

---

**Step 13: Verify Setup**

1.  Run the development server **without Turbopack** to start, just to be safe:
    ```bash
    npm run dev -- --no-turbopack
    ```
2.  Check `http://localhost:3000/ar` and `http://localhost:3000/en`.
    * Do they load the default Next.js page (or whatever is in `src/app/page.tsx`) without a 404?
    * Is the correct font (IBM Plex Arabic/English) applied?
    * Is the text direction (RTL/LTR) correct?
    * Check the **server terminal** for any `Invalid locale detected: undefined` warnings (they should be gone).
    * Check the **browser console** for any `/_next/static/...` 404 errors (they should be gone).

---

This revised guide aligns with the `src/` directory structure and incorporates fixes like the explicit `tailwindcss-animate` install and corrected `next-intl` setup for `src/`. Let me know how it goes!