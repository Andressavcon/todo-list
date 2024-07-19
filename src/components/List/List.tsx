import { ListProps } from '../../interface/ListInterfaces';
import styles from './List.module.css';

export function List({ items, setItems, modalUpdate }: ListProps): JSX.Element {
  function deleteItem(id: string): void {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  function handleCheckboxChange(id: string): void {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setItems(updatedItems);
  }

  const notCompletedItems = items.filter((item) => !item.isChecked);
  const completedItems = items.filter((item) => item.isChecked);

  return (
    <>
      <h4>To Do</h4>
      <ul>
        {notCompletedItems.map((item) => (
          <li key={item.id} className={styles.listItemContent}>
            <div>
              <input
                type="checkbox"
                id={item.id}
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <label htmlFor={item.id}>
                {' '}
                {item.amount !== 0 && <span>{item.amount} - </span>}
              </label>
              <label htmlFor={item.id}>{item.item} </label>
            </div>
            <div>
              <button onClick={() => modalUpdate(item)}>
                <i className="fa-solid fa-pen"></i>
              </button>
              <button onClick={() => deleteItem(item.id)}>
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h4>Completed</h4>
      <ul>
        {completedItems.map((item) => (
          <li key={item.id} className={styles.listItemContent}>
            <div>
              <input
                type="checkbox"
                id={item.id}
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <label htmlFor={item.id}>
                {item.amount !== 0 && <span>{item.amount} - </span>}
                {item.item}{' '}
              </label>
            </div>
            <div>
              <button onClick={() => deleteItem(item.id)}>
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
