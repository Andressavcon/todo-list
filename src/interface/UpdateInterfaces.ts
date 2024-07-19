import { Dispatch, SetStateAction } from 'react';
import { ItemsProps } from './ItemsInterfaces';

export interface UpdateProps {
  openCloseModal: boolean;
  setOpenCloseModal: Dispatch<SetStateAction<boolean>>;
  items: ItemsProps[];
  setItems: Dispatch<SetStateAction<ItemsProps[]>>;
  currentItem: ItemsProps;
  setCurrentItem: Dispatch<SetStateAction<ItemsProps>>;
}
