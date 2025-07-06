'use client';

import { useEffect } from 'react';

export default function AsyncCSSLoader() {
  useEffect(() => {
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print'; // Load as print first to avoid blocking
      link.onload = () => {
        link.media = 'all'; // Switch to all once loaded
      };
      document.head.appendChild(link);
    };

    // Load non-critical CSS asynchronously
    loadCSS('/css/main.css');
    
    // Preload fonts
    const preloadFont = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Preload critical fonts
    preloadFont('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2');
    preloadFont('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2');
    
  }, []);

  return null;
}

// Utility function for critical resource hints
export function CriticalResourceHints() {
  return (
    <>
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.youtube-nocookie.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical CSS */}
      <link rel="preload" href="/css/critical.css" as="style" />
      
      {/* Critical CSS inline */}
      <style dangerouslySetInnerHTML={{
        __html: `
          html{scroll-behavior:smooth}
          body{font-family:'Roboto',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#fff;color:#111827;letter-spacing:-.025em;margin:0;padding:0;line-height:1.6}
          .min-h-screen{min-height:100vh}
          .flex{display:flex}
          .flex-col{flex-direction:column}
          .overflow-hidden{overflow:hidden}
          .fixed{position:fixed}
          .top-0{top:0}
          .left-0{left:0}
          .right-0{right:0}
          .z-50{z-index:50}
          .bg-white{background-color:#fff}
          .shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}
          .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
          .from-slate-100{--tw-gradient-from:#f1f5f9;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(241,245,249,0))}
          .via-white{--tw-gradient-stops:var(--tw-gradient-from),#fff,var(--tw-gradient-to,rgba(255,255,255,0))}
          .to-slate-100{--tw-gradient-to:#f1f5f9}
          .text-4xl{font-size:2.25rem;line-height:2.5rem}
          .text-5xl{font-size:3rem;line-height:1}
          .text-6xl{font-size:3.75rem;line-height:1}
          .font-bold{font-weight:700}
          .font-extrabold{font-weight:800}
          .text-center{text-align:center}
          .text-gray-600{color:#4b5563}
          .text-gray-900{color:#111827}
          .py-24{padding-top:6rem;padding-bottom:6rem}
          .px-4{padding-left:1rem;padding-right:1rem}
          .mb-8{margin-bottom:2rem}
          .mb-12{margin-bottom:3rem}
          :root{--bee-primary-normal:#6B1C8F;--bee-primary-dark:#5A1674;--bee-primary-light:#8B5FA3;--bee-secondary-normal:#F59E0B;--bee-secondary-dark:#D97706;--bee-secondary-light:#FCD34D}
          .text-beePrimary-normal{color:var(--bee-primary-normal)}
          .bg-beePrimary-normal{background-color:var(--bee-primary-normal)}
          .btn-primary{background:linear-gradient(135deg,var(--bee-primary-normal),var(--bee-secondary-normal));color:#fff;padding:.75rem 2rem;border-radius:.5rem;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;transition:transform .2s,box-shadow .2s}
          .btn-primary:hover{transform:translateY(-2px);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}
          @media (min-width:768px){.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-6xl{font-size:3.75rem;line-height:1}}
          @media (min-width:1024px){.lg\\:text-6xl{font-size:3.75rem;line-height:1}.lg\\:text-7xl{font-size:4.5rem;line-height:1}.lg\\:py-32{padding-top:8rem;padding-bottom:8rem}}
        `
      }} />
    </>
  );
}
