import React from 'react';
import Link from 'next/link';
export const Sidebar = () => {
  return (
    <>
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/todo">Todo</Link>
      </p>
      <p>
        <Link href="/games">games</Link>
      </p>
      <p>
        <Link href="/sample">sample</Link>
      </p>
    </>
  );
};
