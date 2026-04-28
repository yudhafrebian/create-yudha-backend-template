#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2] || 'yudha-backend-template';
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, '../template');

async function main() {
  try {
    console.log(`\nBuilding project in ${projectName}...`);

    if (fs.existsSync(targetDir)) {
      console.error(`❌ Error: Folder ${projectName} is already exists.`);
      process.exit(1);
    }

    await fs.copy(templateDir, targetDir);

    console.log('Installing dependencies...');
    
    // 3. Jalankan npm install otomatis
    execSync(`cd ${projectName} && npm install`, { stdio: 'inherit' });

    console.log('\n✅ Project created successfully!');
    console.log(`\nRun the following command to start the project:\n - cd ${projectName}\n - npm run dev\n`);
    
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

main();