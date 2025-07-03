// src/theme/index.ts
import { DefaultTheme as NavLight, DarkTheme as NavDark } from '@react-navigation/native';
import { Appearance, ColorSchemeName } from 'react-native';

export interface AppTheme {
  colors: {
    background: string;      // tela
    card: string;            // container branco
    text: string;            // texto padrão
    heading: string;         // títulos
    border: string;          // bordas / separadores
    primary: string;         // cor principal (botões, acentos)
    placeholder: string;     // texto de placeholder
    inputBackground: string; // fundo de inputs
  };
  navigation: typeof NavLight | typeof NavDark;
}

export const lightTheme: AppTheme = {
  colors: {
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#555555',
    heading: '#77697F',
    border: '#E5E5E5',
    primary: '#FF8C65',
    placeholder: '#AAAAAA',
    inputBackground: '#F9F9F9',
  },
  navigation: NavLight,
};

export const darkTheme: AppTheme = {
  colors: {
    background: '#121212',
    card: '#1E1E1E',
    text: '#CCCCCC',
    heading: '#B39DA3',
    border: '#333333',
    primary: '#FF8C65',
    placeholder: '#777777',
    inputBackground: '#2A2A2A',
  },
  navigation: NavDark,
};

export function selectTheme(choice: ColorSchemeName | 'system'): AppTheme {
  const system = choice === 'system' ? (Appearance.getColorScheme() ?? 'light') : choice;
  return system === 'dark' ? darkTheme : lightTheme;
}
