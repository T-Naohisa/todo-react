import React from "react"
import { Inter } from 'next/font/google'
import "./games.css"

// デフォルトで設定されているフォントの設定
const inter = Inter({ subsets: ['latin'] })


export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='login'>
      <div className={inter.className}>{children}</div>
    </div>
  )
}
