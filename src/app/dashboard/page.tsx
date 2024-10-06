import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

function page() {
  return (
    <main className='max-w-5xl my-12 flex flex-col h-screen items-center mx-auto gap-5'>
      <div className='flex w-full justify-between'>
        <h1 className='text-3xl font-bold'>Invoice</h1>
        <Button
          variant='ghost'
          asChild
        >
          <Link
            href='/invoices'
            className='gap-2'
          >
            <CirclePlus className='h-4 w-4' />
            Create Invoice
          </Link>
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] p-4'>
              <span className='text-xs text-gray-600 font-semibold'>Date</span>
            </TableHead>
            <TableHead className='p-4'>
              <span className='text-xs text-gray-600 font-semibold'>
                Customer
              </span>
            </TableHead>
            <TableHead className='p-4'>
              <span className='text-xs text-gray-600 font-semibold'>Email</span>
            </TableHead>
            <TableHead className='text-center p-4'>
              <span className='text-xs text-gray-600 font-semibold'>
                Status
              </span>
            </TableHead>
            <TableHead className='p-4'>
              <span className='text-xs text-gray-600 font-semibold'>Value</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className='border-t border-gray-500'>
            <TableCell className='p-4'>
              <span className='font-semibold'>8/8/2024</span>
            </TableCell>
            <TableCell className='p-4'>
              <span className='font-semibold'>VP</span>
            </TableCell>
            <TableCell className='p-4'>
              <span className='text-gray-500 font-semibold'>
                vishalpawar@example.com
              </span>
            </TableCell>
            <TableCell className='text-center p-4'>
              <Badge className='rounded-full'>Open</Badge>
            </TableCell>
            <TableCell className='p-4'>
              <span className='font-semibold'>$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}

export default page;
