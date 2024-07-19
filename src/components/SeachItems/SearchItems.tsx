import { ChangeEvent } from 'react';
import styles from './SearchItems.module.css';
import { SearchProps } from '../../interface/SearchInterfaces';

export function SearchItems({
  searchTerm,
  setSearchTerm,
}: SearchProps): JSX.Element {
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <div className={styles.searchItem}>
        <input
          type="text"
          placeholder="Seach Item"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </>
  );
}
