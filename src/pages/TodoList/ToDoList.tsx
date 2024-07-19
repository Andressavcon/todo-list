import { useEffect, useState } from 'react';
import styles from './todolist.module.css';
import { ItemsProps } from '../../interface/ItemsInterfaces';
import { List } from '../../components/List/List';
import { RegisterItem } from '../../components/RegisterItem/RegisterItem';
import { SearchItems } from '../../components/SeachItems/SearchItems';
import { ButtonTheme } from '../../components/ButtonTheme/ButtonTheme';
import { UpdateItem } from '../../components/UpdateItem/UpdateItem';

export function TodoList() {
  const [theme, setTheme] = useState<string>('dark');
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openCloseModal, setOpenCloseModal] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<ItemsProps>({
    id: '',
    item: '',
    amount: 0,
    isChecked: false,
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedItems = localStorage.getItem('todoItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function modalUpdate(item: ItemsProps): void {
    setCurrentItem(item);
    setOpenCloseModal(true);
  }

  return (
    <section className={styles.todoList}>
      <div className={styles.title}>
        <h2>TODOLIST</h2>
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>

      <RegisterItem setItems={setItems} />
      <SearchItems searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <List
        items={filteredItems}
        setItems={setItems}
        modalUpdate={modalUpdate}
      />
      <UpdateItem
        items={items}
        setItems={setItems}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        openCloseModal={openCloseModal}
        setOpenCloseModal={setOpenCloseModal}
      />
    </section>
  );
}
