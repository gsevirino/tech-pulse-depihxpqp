import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloating from './WhatsAppFloating'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <Header />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}
