# GitHub Copilot Instructions - Bee Coders Website

## 📋 Visão Geral do Projeto
Website institucional da **Bee Coders** - Uma comunidade vibrante de desenvolvedores especializada em soluções digitais de ponta.

## Build estáticos
Os builds estáticos são gerados durante o processo de build do Next.js e são otimizados para desempenho. Eles são servidos como arquivos HTML estáticos, permitindo carregamento rápido e melhor SEO.

## 🛠️ Stack Tecnológica
- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Internacionalização**: i18next (custom implementation)
- **Ícones**: React Icons, Heroicons, Country Flag Icons
- **Animações**: AOS (Animate On Scroll)

## 🌐 Internacionalização (i18n)
- **Idiomas Suportados**: English (en), Português (pt), Español (es), Français (fr)
- **Estrutura de Traduções**: `/public/locales/{locale}/`
- **Namespaces**:
  - `common.json` - Navegação, CTAs, elementos comuns
  - `portfolio.json` - Dados do portfólio 
  - `sections.json` - Conteúdo das seções da página
- **Implementação**: Custom i18next em `lib/i18n.tsx` e `lib/seo-i18n.tsx`
- **Componentes**: `LanguageSwitcher.tsx`, `MobileLanguageSelector.tsx`, `LanguageSelector.tsx`

## 🎨 Design System
- **Cores Primárias**: Bee theme (roxo/purple: #6B1C8F)
- **Responsividade**: Mobile-first approach
- **Componentes**: Localizados em `/components/` e `/components/ui/`

## 📁 Estrutura de Arquivos
```
/app/                 # Next.js App Router
/components/          # Componentes React
  /ui/               # Componentes de interface
/out/locales/        # Arquivos de tradução
/public/             # Assets estáticos
  /images/           # Imagens e logos
  /backgrounds/      # Vídeos de fundo
```

## 🔧 Componentes Principais
- `hero.tsx` - Seção principal da homepage
- `technologies.tsx` - Grid de tecnologias usadas
- `portifolio.tsx` - Showcase de projetos
- `our-hive.tsx` - Seção sobre a equipe
- `contact-form.tsx` - Formulário de contato

## 🎯 Padrões de Código
- **Hooks**: Use hooks customizados (`useTranslation`, `useI18n`)
- **Tipagem**: TypeScript rigoroso
- **Estilização**: Classes Tailwind, evitar CSS inline
- **Responsividade**: Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- **Internacionalização**: Use sempre `t('key')` para textos

## 🚀 Scripts Principais
- `npm run dev` - Desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção

## 📝 Convenções
- **Componentes**: PascalCase, um componente por arquivo
- **Arquivos**: kebab-case para componentes UI
- **Traduções**: snake_case para chaves de tradução
- **Classes CSS**: Tailwind utility-first

## 🔍 Contexto de Negócio
- **Empresa**: Bee Coders - Comunidade de desenvolvedores
- **Serviços**: Desenvolvimento web, mobile, soluções digitais
- **Público**: Empresas procurando soluções tecnológicas
- **Diferencial**: Comunidade global, experiência internacional

## ⚡ Dicas para Desenvolvimento
- Sempre considere múltiplos idiomas ao adicionar textos
- Use componentes reutilizáveis para elementos comuns
- Mantenha consistência no design system
- Otimize imagens e vídeos para performance
- Teste responsividade em diferentes dispositivos
