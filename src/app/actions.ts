'use server';

import { Invoices } from '@/db/schema';
import { db } from '@/db';

export async function formAction(formData: FormData) {
  const value = Math.floor(parseFloat(String(formData.get('value'))) * 100);
  const description = formData.get('description') as string;

  await db.insert(Invoices).values({
    value,
    description,
    status: 'open',
  });
}
