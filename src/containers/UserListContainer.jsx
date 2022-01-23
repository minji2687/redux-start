import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersPromise, getUsersSagaStart } from "../redux/modules/users";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();

  //   const getUsers = useCallback(async () => {}, [dispatch]);

  const getUsers = () => {
    dispatch(getUsersSagaStart());
  };

  return <UserList users={users} getUsers={getUsers} />;
}
