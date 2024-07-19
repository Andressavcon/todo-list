import { Dispatch, SetStateAction } from 'react';

export interface ThemeProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
