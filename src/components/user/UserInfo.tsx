import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const UserInfo = memo(() => {
  const { selectedUser } = useSelector(
    (store: RootState) => store.selectedUser
  );
  return (
    <div className="flex items-center justify-center">
      <div>
        <p>Name: {selectedUser?.name}</p>
        <p>Username: {selectedUser?.username}</p>
        <p>Email: {selectedUser?.email}</p>
        <p>Phone: {selectedUser?.phone}</p>
      </div>
    </div>
  );
});

export default UserInfo;
