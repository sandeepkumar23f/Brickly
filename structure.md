project-root/
│
├── app/                  # Expo Router screens (frontend UI)
│   ├── (auth)/           # Auth routes (sign-in, sign-up)
│   ├── (root)/           # Main app routes (dashboard, profile)
│   ├── _layout.tsx       # Root layout
│   └── index.tsx         # Entry screen
│
├── components/           # Reusable UI components
│
├── assets/               # Images, fonts, icons
│
├── backend/              # Backend API service
│   ├── src/
│   │   ├── controllers/  # Route logic
│   │   ├── models/       # Database schemas
│   │   ├── routes/       # Express/Fastify routes
│   │   ├── services/     # Business logic
│   │   └── index.ts      # API entry point
│   ├── prisma/           # If using Prisma ORM
│   └── package.json
│
├── shared/               # Shared code between frontend & backend
│   ├── types/            # TypeScript types/interfaces
│   ├── utils/            # Utility functions
│   └── constants/        # Config constants
│
├── config/               # Environment configs
│   ├── tailwind.config.js
│   ├── babel.config.js
│   ├── metro.config.js
│   └── app.json
│
├── node_modules/
├── package.json
└── README.md
