import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({
  path: './.env.local',
});

if (typeof process.env.XATA_DB_URL !== `string`) {
  throw new Error('Please set your XATA_DB_URL');
}

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.XATA_DB_URL,
  },
});
