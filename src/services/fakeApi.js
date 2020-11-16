import people from './people.js';

const fakeApi = {
  getAllUsers() {
    return people;
  },
  getUser(id) {
    return people.find(person => {
      return person.id == id;
    });
  },
  getParents(user) {
    let i = 1;
    let parents = [];
    while (user[`parentId${i}`] !== undefined) {
      let parentId = user[`parentId${i}`];
      let parent = people.find(par => {
        return parentId == par.id;
      })
      parents.push(parent);
      i++;
    }

    return parents;
  },
  getSpouse(user) {
    return people.find(person => {
      return person.id == user.spouseId;
    });
  },
  getSiblings(user) {
    return people.filter(person => {
      console.log(person.parentId1, user.parentId1, person.parentId2, user.parentId2)
      if (user.parentId1 || user.parentId2) {
        return (person.parentId1 === user.parentId1 || person.parentId2 === user.parentId2) && person.id !== user.id;
      }
    });
  },
  getChildren(user) {
    return people.filter(person => {
      return person.parentId1 == user.id || person.parentId2 == user.id;
    });
  }
};

export default fakeApi;