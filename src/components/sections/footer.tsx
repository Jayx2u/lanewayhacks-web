import React from 'react'
import Content from '@/src/components/footer-content';

export default function Footer() {
  return (
    <div
      className='relative'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='sticky bottom-0 w-full bg-inherit'>
        <Content />
      </div>
    </div>
  )
}