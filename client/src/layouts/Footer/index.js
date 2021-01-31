import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

import {navLinks} from '../../mocks/LinksData'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeader}>
          <p>Информация для создания проекта предоставлена центральной городской библиотекой имени К. Маркса учреждения культуры "Централизованная система государственных публичных библиотек г. Могилева"</p>
        </div>
        <div className={styles.footerLinks}>
          {navLinks.map((link) => {
            return (
              <Link to={link.path} key={link.title} className={styles.footerLink}>
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
     
    </div>
  );
}