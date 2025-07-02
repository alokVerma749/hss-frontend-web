import React from 'react'
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import PrimaryDrawer from '../PrimaryDrawer';

const SecondaryHeader = () => {
  return (
    <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center p-4 text-md text-text-secondary border-b-2 border-gray-300 -mx-4'>
      <div className='flex w-full items-center sm:gap-4 justify-between '>
        <div className='sm:hidden'>
          <PrimaryDrawer />
        </div>
        <div className='flex gap-4'>
          <div className='cursor-not-allowed'>Store Locator</div>
          <Link href={'/orders'} className='hover:text-primary'>Track Order</Link>
        </div>
      </div>

      <div className='hidden sm:block'>
        <SignedOut>
          <div className='flex gap-4'>
            <SignInButton>
              <div className='cursor-pointer px-4 border-r-2 border-text-secondary hover:text-primary'>
                Login
              </div>
            </SignInButton>
            <SignUpButton>
              <div className='cursor-pointer hover:text-primary'>
                Register
              </div>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default SecondaryHeader;
