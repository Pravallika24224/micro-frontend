import React, { createContext, useState, useContext } from 'react';

// type IAuthContext = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
interface IAuthContext {
  auth: {
  isAuthenticated: boolean;
  type: string;
  id: number;
  };
  updateAuth: (isAuthenticated: boolean, type: string, id: number) => void
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    type: '',
    id: 0,
  })

  const updateAuth = (isAuthenticated: boolean, type: string, id: number) => {
    setAuth({ isAuthenticated, type, id })
  }
  // const [auth, setAuth] = useState<IAuthContext>({
  //   isAuthenticated: false,
  //   type: '',
  //   id: 0,
  //   updateAuth: (isAuthenticated: boolean, type: string, id: number) => setAuth({ isAuthenticated, type, id }),
  // })
  return (
    <AuthContext.Provider value={{auth, updateAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
