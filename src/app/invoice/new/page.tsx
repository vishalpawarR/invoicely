import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function page() {
  return (
    <main className='max-w-5xl my-12 flex flex-col h-screen mx-auto gap-5'>
      <h3 className='text-lg font-bold text-left'>Invoices</h3>
      <h1 className='text-3xl font-bold'>Create a new Invoice</h1>
      <form className='max-w-xs w-full grid gap-4'>
        <div>
          <Label
            htmlFor='name'
            className='font-semibold'
          >
            Billing Name
          </Label>
          <Input
            id='name'
            name='name'
          />
        </div>
        <div>
          <Label
            htmlFor='email'
            className='font-semibold'
          >
            Billing Email
          </Label>
          <Input
            id='email'
            name='email'
          />
        </div>
        <div>
          <Label
            htmlFor='value'
            className='font-semibold'
          >
            Value
          </Label>
          <Input
            id='value'
            name='value'
          />
        </div>
        <div>
          <Label
            htmlFor='description'
            className='font-semibold'
          >
            Description
          </Label>
          <Textarea
            id='description'
            name='description'
          ></Textarea>
        </div>
        <div>
          <Button className='w-full font-bold'>Submit</Button>
        </div>
      </form>
    </main>
  );
}

export default page;
