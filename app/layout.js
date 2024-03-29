import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uma Mahesh | Protfolio',
  description: 'My personal protfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
