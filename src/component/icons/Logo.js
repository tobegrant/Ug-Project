import { Link } from "react-router-dom";
import * as React from "react";
import styles from './Logo.module.css';

function SvgLogo(props) {
  return (
    <Link className={styles.link} to="/">
      <h1><strong className={styles.text}>Ong</strong>aku</h1>
    </Link>
  );
}

export default SvgLogo;
