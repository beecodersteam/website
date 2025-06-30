"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {  
  const router = useRouter();

  useEffect(() => {
    // Redirecionar para a página localizada em inglês
    router.replace('/en');
  }, [router]);

  // Página de loading simples
  return (
    <div className="min-h-screen flex items-center justify-center bg-beePrimary-dark">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}

