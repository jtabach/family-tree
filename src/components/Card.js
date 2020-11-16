import styles from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({ user, clickable }) => {
  return (
    <li className={styles['card']}>
      <Link to={clickable ? `/user/${user.id}`: ''}>
        <h3>{user.name}</h3>
        <p>Born: {user.born}</p>
        <p>hometown: {user.hometown}</p>
      </Link>
    </li>
  );
};

export default Card;