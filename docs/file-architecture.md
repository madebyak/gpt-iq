gpt-iq/
├── app/                     # Next.js App Router: UI, Routing, API
│   ├── (auth)/              # Route Group for Authentication pages (no URL segment)
│   │   ├── login/           # Login page route
│   │   │   └── page.tsx
│   │   ├── signup/          # Signup page route
│   │   │   └── page.tsx
│   │   └── forgot-password/ # Forgot password route
│   │       └── page.tsx
│   │   └── layout.tsx       # Optional: Specific layout for auth pages (e.g., centered card)
│   ├── (main)/              # Route Group for main authenticated app view
│   │   ├── layout.tsx       # Main layout (Navbar, History Sidebar, Chat Area)
│   │   └── page.tsx         # Main chat interface page (replaces default)
│   ├── api/                 # API Routes (primarily for specific needs like SSE streaming, webhooks)
│   │   └── chat/            # Example: Potential route for streaming responses
│   │       └── route.ts
│   ├── [locale]/            # Dynamic segment for i18n handled by next-intl
│   │   ├── about/page.tsx   # Example Static Page
│   │   ├── terms/page.tsx   # Example Static Page
│   │   ├── privacy/page.tsx # Example Static Page
│   │   ├── sponsor/page.tsx # Example Static Page
│   │   ├── settings/page.tsx# User settings page (client component likely)
│   │   └── ... (other static/info pages)
│   ├── layout.tsx           # Root Layout (contains html, body, providers, handles locale) - Already modified
│   ├── page.tsx             # Root Page (often redirects or is part of main layout) - We might move main chat here or redirect
│   └── globals.css          # Global styles, Tailwind directives, CSS variables - Already modified
│
├── actions/                 # Server Actions (for forms, mutations, calling Gemini securely)
│   ├── auth.actions.ts      # Actions for login, signup, logout
│   ├── chat.actions.ts      # Action for sending message, getting response (non-streaming)
│   └── feedback.actions.ts  # Action for submitting feedback form
│
├── components/              # Reusable UI Components (mostly Client Components)
│   ├── ui/                  # Shadcn UI components (auto-generated via CLI)
│   ├── auth/                # Components specific to Authentication (e.g., LoginForm, GoogleButton)
│   ├── chat/                # Components specific to Chat Interface (e.g., ChatInput, MessageList, HistorySidebar)
│   └── shared/              # Components used across multiple features (e.g., Navbar, Footer, ThemeToggle, LanguageToggle, Logo)
│
├── lib/                     # Utility functions, constants, third-party clients
│   ├── supabase/            # Supabase client configurations
│   │   ├── client.ts        # Client Component Supabase client
│   │   ├── server.ts        # Server Component / Server Action Supabase client
│   │   └── middleware.ts    # Middleware Supabase client
│   ├── hooks/               # Custom React Hooks (e.g., useTheme, useLanguage)
│   ├── utils.ts             # General utility functions (formatting, etc.)
│   └── constants.ts         # Project-wide constants (e.g., usage limits, default settings)
│
├── messages/                # Locale files for next-intl (replaces `locales/`)
│   ├── en.json
│   └── ar.json
│
├── public/                  # Static assets served directly
│   ├── fonts/               # Font files
│   └── images/              # Logos, illustrations, etc.
│
├── store/                   # Zustand global state management stores
│   ├── useThemeStore.ts     # Store for managing theme state
│   └── useUserStore.ts      # Store for managing user auth state/profile (optional, Supabase helpers might suffice)
│
├── .env.local               # Environment variables (Supabase keys, Gemini API key) - DO NOT COMMIT
├── .gitignore               # Specifies intentionally untracked files (includes .env.local)
├── components.json          # Shadcn UI configuration
├── i18n.ts                  # next-intl configuration
├── middleware.ts            # Handles routing, auth checks, i18n redirects
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS config (might be auto-generated if needed by Tailwind v4+)
├── tailwind.config.ts       # Tailwind CSS configuration - Already modified
└── tsconfig.json            # TypeScript configuration