import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { selectTheme, AppTheme, lightTheme } from '../theme';
import { Appearance } from 'react-native';

export type ThemeOption = 'light' | 'dark' | 'system';

interface ThemeContextData {
  choice: ThemeOption;
  setChoice: (c: ThemeOption) => void;
  appTheme: AppTheme;
}

export const ThemeContext = createContext<ThemeContextData>(null!);

const STORAGE_KEY = '@app:theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [choice, setChoiceState] = useState<ThemeOption>('light');
  const [appTheme, setAppTheme] = useState<AppTheme>(lightTheme);

  // Carrega escolha salva
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(stored => {
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        setChoiceState(stored);
      }
    });
  }, []);

  // Persiste e aplica tema sempre que choice muda
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, choice);
    setAppTheme(selectTheme(choice));
  }, [choice]);

  // Se for 'system', ouve mudanças do sistema
  useEffect(() => {
    if (choice === 'system') {
      const sub = Appearance.addChangeListener((prefs) => {
        // tslint:disable-next-line: no-unused-expression
        prefs.colorScheme; // só para rodar o listener, sem erro de variável não usada
        setAppTheme(selectTheme('system'));
      });
      return () => sub.remove();
    }
  }, [choice]);

  return (
    <ThemeContext.Provider
      value={{ choice, setChoice: setChoiceState, appTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
