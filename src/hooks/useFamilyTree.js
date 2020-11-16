import { useState, useEffect } from 'react';
import fakeApi from '../services/fakeApi';

const useFamilyTree = (id) => {
  const [user, setUser] = useState({});
  const [parents, setParents] = useState([]);
  const [spouse, setSpouse] = useState({});
  const [siblings, setSiblings] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const userObj = fakeApi.getMyUser(3);
    const parentsObj = fakeApi.getParents(userObj);
    const spouseObj = fakeApi.getSpouse(userObj);
    const siblingsObj = fakeApi.getSiblings(userObj);
    const childrenObj = fakeApi.getChildren(userObj);
    setUser(userObj);
    setParents(parentsObj);
    setSpouse(spouseObj);
    setSiblings(siblingsObj);
    setChildren(childrenObj);
  }, [id]);

  return { user, parents, spouse, siblings, children };
};

export default useFamilyTree;