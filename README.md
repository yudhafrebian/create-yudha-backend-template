# create-yudha-backend-template

A professional CLI tool to scaffold a production-ready **TypeScript** backend project. This template follows the **Service-Repository Pattern** to ensure your code remains scalable, maintainable, and clean from day one.

---

## Features
- **TypeScript Native**: Pre-configured `tsconfig.json` for optimal development.
- **Prisma Ready**: Includes a structured Prisma directory for database management.
- **Service-Repository Pattern**: Clean separation of concerns for scalable architecture.
- **Standardized Folders**: Pre-defined structure for controllers, services, middlewares, and more.
- **Environment Ready**: Built-in support for environment variables.

---

## Quick Start

You don't need to install this globally. Simply run the following command in your terminal:

```bash
npx create-yudha-backend-template <your-project-name>
```

### example
```bash
npx create-yudha-backend-template my-backend-api
```

Once setup is complete, navigate to your project folder and start coding:
```bash
cd my-backend-api
npm install
npm run dev
```

---

## Folder Architecture

The generated project follows a modular structure to keep your logic organized:
[src/config]
- src/config: Global configurations (Database, Third-party APIs).
- src/controllers: Handles HTTP requests and sends back responses.
- src/services: Contains core business logic.
- src/repositories: Direct data access layer (Prisma queries).
- src/middleware: Route protection, authentication, and validation.
- src/routes: API endpoint definitions.
- src/interface & src/types: TypeScript type definitions and contracts.
- src/utils: Reusable helper functions (formatting, encryption, etc.).
- prisma/: Database schema and migration files.

---

## Available Scripts (Inside Generated Project)

- npm run dev: Starts the server with hot-reload (using tsx or nodemon).
- npm run build: Compiles TypeScript into production-ready JavaScript in the /dist folder.
- npm start: Runs the compiled production code.

---

## Maintenance (For Contributors)
If you want to modify this template locally:

1. Clone this repository.
2. Run npm install in the root folder.
3. Use npm link to test changes locally.
4. Modify files inside the /template directory.
5. Update the version in package.json and run npm publish.

---

### Build by yudha_frebian