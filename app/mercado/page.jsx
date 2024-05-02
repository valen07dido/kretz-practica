import CardVerMas from '@/Components/Card-VerMas/CardVerMas'
import Card from '@/Components/Card/Card'
import imagePrueba from "@/public/Report-NX-Visor-Bajo.jpg"
import React from 'react'
import ImagePrueba2 from "@/public/VerMas.png"
const page = () => {
  return (
    <div>
      <Card img={imagePrueba} title={"Soporte"}/>
      <CardVerMas img={ImagePrueba2} title={"no se"}/>
    </div>
  )
}

export default page
