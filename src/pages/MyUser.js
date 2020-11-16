import { useState, useEffect } from 'react';
import fakeApi from '../services/fakeApi';

const MyUser = () => {
  const [user, setUser] = useState({});
  const [parents, setParents] = useState([]);
  const [spouse, setSpouse] = useState({});
  const [siblings, setSiblings] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const userObj = fakeApi.getMyUser();
    const parentsObj = fakeApi.getParents(userObj);
    const spouseObj = fakeApi.getSpouse(userObj);
    const siblingsObj = fakeApi.getSiblings(userObj);
    const childrenObj = fakeApi.getChildren(userObj);
    setUser(userObj);
    setParents(parentsObj);
    setSpouse(spouseObj);
    setSiblings(siblingsObj);
    setChildren(childrenObj);
  }, []);

  return (
    <div>
      <div>{user.name} me</div>
      {
        parents.length
        ?
        <div>{parents[0].name}</div>
        : 
        null
      }
      {
        spouse
        ?
        <div>{spouse.name}</div>
        : null
      }
      {
        siblings.length
        ?
        <div>{siblings[0].name}</div>
        : 
        null
      }
      {
        children.length
        ?
        <div>{children[0].name}</div>
        : 
        null
      }
    </div>
  );
};

export default MyUser;
