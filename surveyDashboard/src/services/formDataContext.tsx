import React, { createContext, useContext, useState } from 'react';

interface IFormDataContext {
  formData: [],
  setFormData: React.Dispatch<React.SetStateAction<IFormDataContext['formData']>
  >;
}

export const FormDataContext = createContext<IFormDataContext | null>(null)

export const FormDataProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [formData, setFormData] = useState<IFormDataContext['formData']>([])
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>{children}</FormDataContext.Provider>
  )
}

export const useFormData = () => useContext(FormDataContext)

// export function useFormData() {
//     return useContext(FormDataContext)
// }
