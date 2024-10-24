// src/app/page.tsx
'use client'
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login'); // Redireciona diretamente para /login

  return null; // Não renderiza nada, apenas redireciona
}
