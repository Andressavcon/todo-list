import { Dispatch, SetStateAction } from 'react';
import { ItemsProps } from './ItemsInterfaces';

export interface RegisterProps {
  setItems: Dispatch<SetStateAction<ItemsProps[]>>;
}
