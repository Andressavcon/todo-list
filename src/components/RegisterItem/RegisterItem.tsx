import { FormEvent, useRef } from 'react';
import { RegisterProps } from '../../interface/RegisterInterfaces';
import styles from './RegisterItem.module.css';

export function RegisterItem({ setItems }: RegisterProps): JSX.Element {
  const nameNewItem = useRef<HTMLInputElement>(null);
  const newAmoutItem = useRef<HTMLInputElement>(null);

  function addItemToDo(event: FormEvent) {
    event.preventDefault();
    const nameNewItemValue = nameNewItem?.current?.value;
    const nameNewAmountItem = Number(newAmoutItem?.current?.value);

    if (!nameNewItemValue) {
      alert('Por favor insira um item na lista!');
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      item: nameNewItemValue,
      amount: nameNewAmountItem,
      isChecked: false,
    };

    setItems((prevList) => [...prevList, newItem]);

    nameNewItem.current.value = '';
  }

  return (
    <>
      <form onSubmit={addItemToDo}>
        <div className={styles.addItem}>
          <div className={styles.addItemInputs}>
            <input
              className={styles.addItemAdd}
              ref={nameNewItem}
              type="text"
              placeholder="Add Item"
            />
            <input
              className={styles.addItemAmount}
              ref={newAmoutItem}
              type="number"
              min="0"
              placeholder="Qtde"
              defaultValue={0}
            />
          </div>
          <button>
            <i className="fa-solid fa-circle-check"></i>
          </button>
        </div>
      </form>
    </>
  );
}
