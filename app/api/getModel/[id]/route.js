import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
    const id=request.url.split("/").pop()
    console.log(id)

  try {
    if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)){
      const {rows}=await sql`SELECT * FROM Models Where id=${id}`
     if(rows.length===0){
        return NextResponse.json({error: "el id no pertenece a ningun modelo en existencia"},{status:400})
     }else{
         return NextResponse.json(rows,{status:200})
     }
    }else{
        return NextResponse.json({error: "ingrese un uuid valido"},{status:400})
    }

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
