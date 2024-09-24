'use client'
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
interface LanguageContextType {
    language: string;
    toggleLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<string>('en');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage) {
                setLanguage(savedLanguage);
            }
            setIsMounted(true);
        }
    }, []);

    const toggleLanguage = (lang: string) => {
        setLanguage(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang);
        }
    };

    if (!isMounted) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
};
