import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Search, ShoppingBag } from 'lucide-react';

const PrimaryHeader = () => {
  const navItems = [
    { name: 'Men', href: '/shop/men' },
    { name: 'Women', href: '/shop/women' },
    { name: 'Kids', href: '/shop/kids' },
    { name: 'DIY', href: '/shop/diy' },
    { name: 'Accessories', href: '/shop/accessories' }
  ];

  return (
    <div className='hidden sm:visible sm:flex bg-bg-secondary justify-between items-center p-4 text-md -mx-4'>
      <Link href='/'>
        <Image src='/logo.png' alt='hss logo' height={50} width={100} />
      </Link>
      <div>
        {
          navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='mx-2 text-text-secondary hover:text-primary transition-colors font-montserrat'
            >{item.name}</Link>
          ))
        }
      </div>
      <div className='flex gap-4'>
        <div className='cursor-pointer'>
          <Search color='#4B5563' size={22} />
        </div>
        <div className='cursor-pointer'>
          <Link href='/wishlist'>
            <Heart color='#4B5563' size={22} />
          </Link>
        </div>
        <div className='cursor-pointer'>
          <Link href='/cart'>
            <ShoppingBag color='#4B5563' size={22} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrimaryHeader;
