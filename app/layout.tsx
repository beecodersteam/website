"use client"
import './css/style.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <html lang="en">
      <body className={` font-roboto antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
