// src/context/RespostasContext.tsx
'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

interface RespostasContextType {
  respostas: (string | null)[]; // Array para armazenar respostas
  setResposta: (index: number, resposta: string) => void;
  respostasCorretas: string[]; // Adicione um array para respostas corretas
  clearRespostas: () => void; // Função para limpar as respostas
}

const RespostasContext = createContext<RespostasContextType | undefined>(undefined);

export const RespostasProvider = ({ children, respostasCorretas }: { children: ReactNode, respostasCorretas: string[] }) => {
  const [respostas, setRespostas] = useState<(string | null)[]>(Array(10).fill(null));

  const setResposta = (index: number, resposta: string) => {
    setRespostas((prevRespostas) => {
      const novasRespostas = [...prevRespostas];
      novasRespostas[index] = resposta;
      return novasRespostas;
    });
  };

  // Função para limpar as respostas
  const clearRespostas = () => {
    setRespostas(Array(10).fill(null)); // Redefine o array de respostas para null
  };

  return (
    <RespostasContext.Provider value={{ respostas, setResposta, respostasCorretas, clearRespostas }}>
      {children}
    </RespostasContext.Provider>
  );
};

export const useRespostas = () => {
  const context = useContext(RespostasContext);
  if (!context) throw new Error('useRespostas deve ser usado dentro de RespostasProvider');
  return context;
};
