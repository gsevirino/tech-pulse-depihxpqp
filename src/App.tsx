/* Main App Component - Handles routing (using react-router-dom), query client and other providers */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/contexts/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

// Páginas Públicas Principais
import Index from './pages/Index'
import Sites from './pages/Sites'
import Sistemas from './pages/Sistemas'
import TechPet from './pages/TechPet'
import CatalogoDigital from './pages/CatalogoDigital'
import Vhsys from './pages/Vhsys'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'

// Páginas de Autenticação e Conta
import Login from './pages/Login'
import Registro from './pages/Registro'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import VerifyEmail from './pages/VerifyEmail'
import ConfirmEmailChange from './pages/ConfirmEmailChange'
import Conta from './pages/Conta'

import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" richColors />
        <Routes>
          <Route element={<Layout />}>
            {/* Rotas Públicas */}
            <Route path="/" element={<Index />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/sistemas" element={<Sistemas />} />
            <Route path="/sistemas/techpet" element={<TechPet />} />
            <Route path="/sistemas/catalogo-digital" element={<CatalogoDigital />} />
            <Route path="/sistemas/vhsys" element={<Vhsys />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contato />} />

            {/* Rotas de Autenticação */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/confirm-email-change" element={<ConfirmEmailChange />} />

            {/* Área Protegida */}
            <Route element={<ProtectedRoute />}>
              <Route path="/conta" element={<Conta />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
