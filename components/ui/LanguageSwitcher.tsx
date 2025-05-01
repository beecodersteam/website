// components/LanguageSwitcher.tsx
import { useRouter } from 'next/router'
import Image from 'next/image'

const locales = [
  { code: 'pt', flag: '/images/flags/pt.svg', label: 'PT' },
  { code: 'en', flag: '/images/flags/en.svg', label: 'EN' },
]

export function LanguageSwitcher() {
  const { locale, push, asPath } = useRouter()

  return (
    <div className="flex space-x-2">
      {locales.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => push(asPath, asPath, { locale: code })}
          className={locale === code ? 'opacity-100' : 'opacity-50'}
        >
          <Image src={flag} width={24} height={24} alt={label} />
        </button>
      ))}
    </div>
  )
}