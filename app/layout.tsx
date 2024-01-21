
import './css/style.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  
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
export const metadata = {
  metadataBase: new URL('https://www.beecoders.net'),
  title: 'Bee Coders',
  description: 'A vibrant and collaborative community of developers around the world, working together to drive innovation and technical excellence',
  keywords: 'beecoders, community, developers, software development, mobile apps',
  image: 'https://www.beecoders.net/images/og-beecoders.png',
  start_url: '/',
}