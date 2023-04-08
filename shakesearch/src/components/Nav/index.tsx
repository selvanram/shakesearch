import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

export default () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Search</Link>
      <Link href="/saved">Saved</Link>
    </div>
  )
}