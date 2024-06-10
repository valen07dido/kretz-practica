"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

const Page = () => {
  const id=usePathname().split("/").pop()


  return (
    <div>
      <h1>Detalles del equipo:{id} </h1>
    </div>
  );
}

export default Page;