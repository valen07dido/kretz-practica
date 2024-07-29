"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const Page = () => {
  const model=usePathname().split('/').pop()
  return (
    <div>
      {model}

      <h1>Este es el modelo que selecciono</h1>
    </div>
  )
}

export default Page
