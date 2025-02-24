import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar";

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Olivia Martin</p>
            <p className='text-sm text-muted-foreground'>
              olivia.martin@email.com
            </p>
          </div>
          <div className='font-medium text-green-500'>+950.000Đ</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Jackson Lee</p>
            <p className='text-sm text-muted-foreground'>
              jackson.lee@email.com
            </p>
          </div>
          <div className='font-medium text-green-500'>+500.000Đ</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Isabella Nguyen</p>
            <p className='text-sm text-muted-foreground'>
              isabella.nguyen@email.com
            </p>
          </div>
          <div className='font-medium text-green-500'>+50.000Đ</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>William Kim</p>
            <p className='text-sm text-muted-foreground'>will@email.com</p>
          </div>
          <div className='font-medium text-green-500'>+150.000Đ</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Sofia Davis</p>
            <p className='text-sm text-muted-foreground'>
              sofia.davis@email.com
            </p>
          </div>
          <div className='font-medium text-green-500'>+500.000.000Đ</div>
        </div>
      </div>
    </div>
  )
}
