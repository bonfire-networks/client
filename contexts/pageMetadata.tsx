'use client';

import { createContext, useContext, useState, ReactNode } from 'react';



interface PageTitleContextType {
pageTitle: string;
setPageTitle: (title: string) => void;
showBackButton: boolean;
setShowBackButton: (show: boolean) => void;
}

export const PageTitleContext = createContext<PageTitleContextType | undefined>(undefined);

export const usePageTitle = () => {
    const context = useContext(PageTitleContext);
    if (!context) {
      throw new Error('usePageTitle must be used within a PageTitleProvider');
    }
    return context;
  };




export const PageTitleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Home');
  const [showBackButton, setShowBackButton] = useState(false);

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle, showBackButton, setShowBackButton }}>
      {children}
    </PageTitleContext.Provider>
  );
};