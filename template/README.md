# Backend Project

This project created using `create-yudha-backend-template`.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Setup Environment:**
    copy file `.env.example` to be `.env` and adjust the configuration.

3.  **Database Setup (Prisma):**
    ```bash
    npx prisma generate
    npx prisma db push
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## Project Structure
This project using **Service-Repository Pattern**. Please check `src/` folder for adding additional features.