'use client'

import { createContext, ReactNode, useState, useEffect } from 'react';

const STORAGE_KEY = 'themeContextKey';

type ThemeContextType = {
    theme: string;
    setTheme: (newString: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState(
         localStorage.getItem(STORAGE_KEY) || 'ligth'
    );


    useEffect(() => {

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])



    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

};