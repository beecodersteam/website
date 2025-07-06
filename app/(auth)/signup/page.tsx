export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
}

import Link from 'next/link'
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import SectionSubtitle from '@/components/ui/SectionSubtitle';

export default function SignUp() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-beePrimary-light/10 via-white to-beeSecondary-light/10 overflow-hidden pt-32 pb-16">
      <AnimatedBackground hexagonCount={6} backgroundColors={{ from: 'from-beePrimary-light/10', via: 'via-white/0', to: 'to-beeSecondary-light/10' }} />
      <div className="relative z-10 w-full max-w-md mx-auto p-8 md:p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-beePrimary-light/20">
        <SectionSubtitle text="Junte-se à comunidade Bee Coders e tenha acesso a oportunidades e conteúdos exclusivos." size="md" />
        <form className="space-y-5">
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Nome <span className="text-red-600">*</span></label>
            <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Digite seu nome" required />
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
            <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Digite seu email" required />
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Senha <span className="text-red-600">*</span></label>
            <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Crie uma senha" required />
          </div>
          <button className="btn text-white bg-beePrimary-normal hover:bg-beePrimary-dark w-full shadow-lg transition-all duration-200">Cadastrar</button>
        </form>
        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
          <div className="text-gray-600 italic">ou</div>
          <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
        </div>
        <div className="space-y-3">
          <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
            <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" /></svg>
            <span className="flex-auto pl-16 pr-8 -ml-16">Continuar com GitHub</span>
          </button>
          <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
            <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" /></svg>
            <span className="flex-auto pl-16 pr-8 -ml-16">Continuar com Google</span>
          </button>
        </div>
        <div className="text-gray-600 text-center mt-6">
          Já possui uma conta? <Link href="/signin" className="text-beePrimary-normal hover:underline transition duration-150 ease-in-out">Entrar</Link>
        </div>
        <div className="text-xs text-gray-500 text-center mt-3">
          Ao criar uma conta, você concorda com os <a className="underline" href="#0">termos de uso</a> e nossa <a className="underline" href="#0">política de privacidade</a>.
        </div>
      </div>
    </section>
  )
}
