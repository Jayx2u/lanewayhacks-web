import React from 'react'
import MaskedText from '@/src/components/animations/masked-text'
import Link from 'next/link'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

export default function Content() {
  return (
    <div className='bg-[#5B447A] py-4 md:py-8 px-4 md:px-12 h-full w-full flex flex-col justify-between'>
      <Section1/>
      <Section2/>
    </div>
  )
}

const Section1 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <Nav/>
      <Socials/>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0'>
      <h2 className='text-6xl md:text-8xl leading-[0.8] mt-6 md:mt-10 text-[#281C30] break-words max-w-full'>
        Laneway Hacks
      </h2>
      <span className='text-sm md:text-base text-hack-white'>©-2025</span>
    </div>
  )
}

const Nav = () => {
  return (
    <div className='flex flex-col md:flex-row shrink-0 gap-8 md:gap-20 text-hack-white'>
      <div className='flex flex-col gap-2'>
        <MaskedText text="About" className='mb-2 uppercase text-hack-purple'/>
        <NavLink text="Home" href="/"/>
        <NavLink text="Our Mission" href="/our-mission"/>
        <NavLink text="Sponsors" href="/sponsors"/>
      </div>
      <div className='flex flex-col gap-2'>
        <MaskedText text="Education" className='mb-2 uppercase text-hack-purple'/>
        <NavLink text="News" href="/news"/>
        <NavLink text="Code of Conduct" href="/conduct"/>
      </div>
    </div>
  )
}

const Socials = () => {
  return (
    <div className='mt-8 md:mt-0'>
      <MaskedText text="Connect" className='mb-4 uppercase text-hack-purple md:text-right text-left'/>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 md:justify-end'>
          <SocialLink href="https://github.com/lanewayhacks" icon={<FaGithub size={24}/>}/>
          <SocialLink href="https://twitter.com/lanewayhacks" icon={<FaTwitter size={24}/>}/>
          <SocialLink href="https://linkedin.com/company/lanewayhacks" icon={<FaLinkedin size={24}/>}/>
          <SocialLink href="https://instagram.com/lanewayhacks" icon={<FaInstagram size={24}/>}/>
        </div>
        <Link href="mailto:hello@lanewayhacks.org" className='text-hack-white hover:text-hack-purple transition-colors text-sm text-left md:text-right'>
          hello@lanewayhacks.org
        </Link>
      </div>
    </div>
  )
}

const NavLink = ({text, href}: { text: string; href: string }) => (
  <Link href={href}>
    <MaskedText text={text} className="hover:text-hack-purple transition-colors"/>
  </Link>
)

const SocialLink = ({href, icon}: { href: string; icon: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener"
        className='text-hack-white hover:text-hack-purple transition-colors'>
    {icon}
  </Link>
)