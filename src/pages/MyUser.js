import useFamilyTree from '../hooks/useFamilyTree';

const MyUser = () => {
  const USER_ID = 3;
  const { user, parents, spouse, siblings, children } = useFamilyTree(USER_ID);

  return (
    <div>
      <div>{user.name}</div>
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
