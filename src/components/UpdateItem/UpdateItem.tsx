import { ChangeEvent, FormEvent } from 'react';
import { UpdateProps } from '../../interface/UpdateInterfaces';
import style from './UpdateItem.module.css';

export const UpdateItem = ({
  openCloseModal,
  setOpenCloseModal,
  items,
  setItems,
  currentItem,
  setCurrentItem,
}: UpdateProps): JSX.Element => {
  function updateNameItem(event: ChangeEvent<HTMLInputElement>) {
    const newItem = {
      ...currentItem,
      id: currentItem.id,
      item: event.target.value,
    };
    setCurrentItem(newItem);
  }

  function updateAmount(event: ChangeEvent<HTMLInputElement>) {
    const newItem = {
      ...currentItem,
      id: currentItem.id,
      amount: Number(event.target.value),
    };
    setCurrentItem(newItem);
  }

  function updateItem(event: FormEvent) {
    event.preventDefault();

    const indexItemUpdate = items.findIndex(
      (item) => item.id === currentItem.id
    );
    if (indexItemUpdate == -1) return;

    const newItems = [...items];

    const newItem = {
      ...newItems[indexItemUpdate],
      item: currentItem.item,
      amount: currentItem.amount,
    };

    newItems[indexItemUpdate] = newItem;

    setItems(newItems);
    setOpenCloseModal(false);
  }

  function closeModal() {
    setCurrentItem({
      id: '',
      item: '',
      amount: 0,
      isChecked: false,
    });
    setOpenCloseModal(false);
  }
  return (
    <>
      {openCloseModal ? (
        <div className={style.modal}>
          <form onSubmit={updateItem} className={style.form}>
            <div className={style.title}>
              <h3>Editar Item</h3>
              <button onClick={closeModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className={style.updateItem}>
              <div className={style.updateItemInputs}>
                <input
                  className={style.updateItemAdd}
                  type="text"
                  placeholder="Digite o nome do o item"
                  onChange={updateNameItem}
                  value={currentItem.item}
                />
                <input
                  className={style.updateItemAmount}
                  type="number"
                  min="0"
                  placeholder="Qtde"
                  onChange={updateAmount}
                  value={currentItem.amount}
                />
              </div>
              <button>
                <i className="fa-solid fa-circle-check"></i>
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};
