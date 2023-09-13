import PropTypes from 'prop-types';

const UserListFunction = ({users}) => {
  const userItems = users.map( i => <li key="">{i.name} - {i.age}</li> );
  return <ul> {userItems} </ul>;
}

UserListFunction.propTypes = {
  users: PropTypes.object.isRequired
}

export default UserListFunction;
