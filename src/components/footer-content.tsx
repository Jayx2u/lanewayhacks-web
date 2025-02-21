import React from 'react'
import MaskedText from '@/src/components/animations/masked-text'
import Link from 'next/link'

export default function Content() {
  return (
    <div className='bg-[#5B447A] py-4 md:py-8 px-4 md:px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0'>
            <MaskedText
                text="Laneway Hacks"
                className='text-[12vw] md:text-[14vw] leading-[0.8] mt-6 md:mt-10 text-[#281C30]'
            />
            <span className='text-sm md:text-base text-[#D9D5EE]'>©copyright</span>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex flex-col md:flex-row shrink-0 gap-8 md:gap-20 text-[#D9D5EE]'>
            <div className='flex flex-col gap-2'>
                <MaskedText text="About" className='mb-2 uppercase text-[#B791FF]' />
                <NavLink text="Home" href="/" />
                <NavLink text="Our Mission" href="/our-mission" />
                <NavLink text="Sponsors" href="/sponsors" />
                <NavLink text="Contact Us" href="/contact" />
            </div>
            <div className='flex flex-col gap-2'>
                <MaskedText text="Education" className='mb-2 uppercase text-[#B791FF]' />
                <NavLink text="News" href="/news" />
                <NavLink text="Hack Club" href="/hack-club"/>
            </div>
        </div>
    )
}

const NavLink = ({ text, href }: { text: string; href: string }) => (
    <Link href={href}>
        <MaskedText text={text} className="hover:text-[#B791FF] transition-colors" />
    </Link>
)