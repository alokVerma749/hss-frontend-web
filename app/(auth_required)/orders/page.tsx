'use client';

import { useUser } from '@clerk/nextjs';

const page = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className='font-montserrat'>Sign in to view this page</div>;
  }

  return <div className='font-montserrat'>
    Hello {user.firstName}!
    <button className='btn-primary'>Hello</button>
  </div>;
}

export default page;
