import Image from 'next/image'
import React from 'react'
import map from "@/public/mapa.png"
const Map = () => {
  return (
    <div>
        <h1>Nuestros Mercados</h1>
    <Image src={map} width={1228.4}/>
    </div>
  )
}

export default Map