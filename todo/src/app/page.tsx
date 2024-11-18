import React from "react"
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <p>遷移先ページ一覧</p>
      <p>
        <Link href='/todo'>Todo</Link>
      </p>
      <p>
        <Link href='/games'>games</Link>
      </p>
    </main>
  );
}
