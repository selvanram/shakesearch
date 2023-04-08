import React from 'react';

import styles from "./styles.module.css";

export default ({ searchResult, onSave, onDelete, idx }: {
  searchResult: string;
  onSave?: (searchResult: string) => void;
  onDelete?: (searchId: number) => void;
  idx: number;
}) => {
  const handleOnClick = () => {
    onSave && onSave(searchResult)
  }

  const handleDelete = () => {
    onDelete && onDelete(idx)
  }

  return (
    <div className={styles.cardContainer}>
      <div>
        { searchResult }
      </div>
      <div>
        { onSave && <button onClick={handleOnClick}>Save</button> }
        { onDelete && <button onClick={handleDelete}>Delete</button> }
      </div>
    </div>
  )
}