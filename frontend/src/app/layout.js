import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sweet Shop',
  description: 'Delicious sweets and treats for everyone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-pink-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🍭 Sweet Shop</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-pink-200">Home</a>
              <a href="/sweets" className="hover:text-pink-200">Sweets</a>
              <a href="/inventory" className="hover:text-pink-200">Inventory</a>
              <a href="/users" className="hover:text-pink-200">Users</a>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-pink-50">
          {children}
        </main>
      </body>
    </html>
  )
}