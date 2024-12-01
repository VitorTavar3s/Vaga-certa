import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

interface UsuarioContextType {
  usuario: Usuario | null;
  setUsuario: (user: Usuario | null) => void;
}

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = (): UsuarioContextType => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUsuario must be used within a UsuarioProvider');
  }
  return context;
};
