"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const page = () => {
  const model=usePathname().split('/').pop()
  return (
    <div>
      {model}
    </div>
  )
}

export default page
