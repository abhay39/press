import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Poppins({ subsets: ['latin'],weight:['400','500','600','700','800','900'] })

export const metadata = {
  title: 'Adarsh Offset Press',
  description: 'Printing Press for quality printing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
        <div className='pl-5 md:pl-24 pr-4 md:pr-24 pt-3 bg-gray-100  '>
            {children}
        </div>
          <Footer />
      </body>
    </html>
  )
}
