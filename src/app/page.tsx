import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='max-w-5xl flex flex-col h-screen justify-center items-center mx-auto gap-5'>
      <h1 className='text-4xl font-bold'>Invoicely</h1>
      <Button asChild>
        <Link href='/dashboard'>Dashboard</Link>
      </Button>
    </main>
  );
}
