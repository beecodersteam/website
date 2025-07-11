import Image from 'next/image'
import Link from 'next/link'
import BeeLogoHorizWhite from '@/public/images/optimized/logos/logo-horiz-white.png'
import BeeLogoHorizBlack from '@/public/images/optimized/logos/logo-horiz-black.png'
import BeeLogoVertWhite from '@/public/images/optimized/logos/logo-vert-white.png'
import BeeLogoVertBlack from '@/public/images/optimized/logos/logo-vert-black.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={BeeLogoHorizWhite} alt="Bee Logo" className="w-48" priority fetchPriority='high' />
    </Link>
  )
}
export function LogoHorizBlack() {
  return (
    <Link href="/" className="block" aria-label="bee logo">
      <Image src={BeeLogoHorizBlack} alt="Bee Logo" className="w-48" />
    </Link>
  )
}

export function LogoVertWhite() {
  return (
    <Link href="/" className="block" aria-label="bee logo">
      <Image src={BeeLogoVertWhite} alt="Bee Logo" className="w-48" />
    </Link>
  )
}
export function LogoVertBlack() {
  return (
    <Link href="/" className="block" aria-label="bee logo">
      <Image src={BeeLogoVertBlack} alt="Bee Logo" className="w-48" />
    </Link>
  )
}