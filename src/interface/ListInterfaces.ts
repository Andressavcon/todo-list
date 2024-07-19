import { Dispatch, SetStateAction } from 'react';
import { ItemsProps } from './ItemsInterfaces';

export interface ListProps {
  items: ItemsProps[];
  setItems: Dispatch<SetStateAction<ItemsProps[]>>;
  modalUpdate: (item: ItemsProps) => void;
}
