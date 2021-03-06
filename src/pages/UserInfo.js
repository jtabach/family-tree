import { useEffect } from 'react'
import useFamilyTree from '../hooks/useFamilyTree';
import styles from './MyUser.module.css';
import {
  useParams
} from "react-router-dom";

import Card from '../components/Card';

const UserInfo = () => {
  const { id } = useParams();
  const { user, parents, spouse, siblings, children } = useFamilyTree(id);

  return (
    <div className={styles['UserInfo']}>
      <h1 className={styles['title']}>User Info</h1>
      <div className={styles['card-wrapper']}>
        <ul className={styles['card-list']}>
          <Card user={user} clickable={false} />
        </ul>
      </div>
      { 
        parents.length &&
        <div className={styles['card-wrapper']}>
          <h3 className={styles['header']}>Parents</h3>
          <ul className={styles['card-list']}>
            {parents.map(parent => {
              return (
                <Card user={parent} clickable={true} />
              );
            })}
          </ul>
        </div>
      }
      {
        spouse &&
        <div className={styles['card-wrapper']}>
          <h3 className={styles['header']}>Spouse</h3>
          <ul className={styles['card-list']}>
            <Card user={spouse} clickable={true} />
          </ul>
        </div>
      }
      {
        siblings.length &&
        <div className={styles['card-wrapper']}>
          <h3 className={styles['header']}>Siblings</h3>
          <ul className={styles['card-list']}>
            {siblings.map(sibling => {
              return (
                <Card user={sibling} clickable={true} />
              );
            })}
          </ul>
        </div>
      }
      {
        children.length &&
        <div className={styles['card-wrapper']}>
          <h3 className={styles['header']}>Children</h3>
          <ul className={styles['card-list']}>
            {children.map(child => {
              return (
                <Card user={child} clickable={true} />
              );
            })}
          </ul>
        </div>
      }
    </div>
  );
};

export default UserInfo;
