import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function authMiddleware(request) {
  const key = process.env.NEXT_SECRET_KEY;

  if (!key) {
    return NextResponse.json({ error: "Clave secreta no configurada" }, { status: 500 });
  }

  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: "Token no proporcionado" }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, key);
    request.user = decoded;  
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: "Token inválido o expirado" }, { status: 401 });
  }
}
