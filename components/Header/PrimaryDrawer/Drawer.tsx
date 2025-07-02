'use client';

import { AlignJustify } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function PrimaryDrawer() {
  const navItems = [
    { name: 'Men', href: '/shop/men' },
    { name: 'Women', href: '/shop/women' },
    { name: 'Kids', href: '/shop/kids' },
    { name: 'DIY', href: '/shop/diy' },
    { name: 'Accessories', href: '/shop/accessories' }
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className='cursor-pointer'>
          <AlignJustify color='#4B5563' size={22} />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="text-center">
            <DrawerTitle className="flex justify-center">
              <Link href='/'>
                <Image src='/logo.png' alt='hss logo' height={50} width={100} />
              </Link>
            </DrawerTitle>
          </DrawerHeader>

          {/* Navigation Items */}
          <div className="px-4 py-6">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-center text-lg text-text-secondary hover:text-primary transition-colors font-montserrat py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Auth Section */}
          <div className="px-4 py-4 border-t border-gray-200">
            <SignedOut>
              <div className='flex flex-col gap-3'>
                <SignInButton>
                  <Button className='w-full bg-primary hover:bg-secondary text-white'>
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button variant="outline" className='w-full'>
                    Register
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex justify-center">
                <UserButton />
              </div>
            </SignedIn>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default PrimaryDrawer;
