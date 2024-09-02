import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import CustomSelect from "../UI/CustomSelect";
import { IGetUsers } from "../../api/user/types";
import { getUsers } from "../../api/user/getUsers";
import CustomInput from "../UI/CustomInput";
import { useDispatch } from "react-redux";
import { SelectUserActionType } from "../../store/reducers/SelectedUser";
import { useNavigate } from "react-router-dom";
import { pagesName } from "../../App";

const UserTable = memo(() => {
  const [users, setUsers] = useState<IGetUsers[]>([]);
  const [selectedOption, setSelectedOption] = useState<keyof IGetUsers>("name");
  const [searchTitle, setSearchTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value as keyof IGetUsers);
    },
    []
  );

  const tags = useMemo(
    () => [
      { value: "name", label: "Name" },
      { value: "username", label: "Username" },
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
    ],
    []
  );

  const selectUser = (user: IGetUsers) => {
    console.log("user: ", user);
    dispatch({ type: SelectUserActionType.USER_SELECT, payload: user });
    navigate(pagesName.USER_PAGE);
  };

  const searchByTags = useMemo(() => {
    const searchedByTitle = users.filter((user) =>
      user[selectedOption].toLowerCase().includes(searchTitle.toLowerCase())
    );
    return searchedByTitle;
  }, [searchTitle, users]);

  return (
    <div className="w-full lg:5/6 xl:w-4/6 ">
      <div className="flex gap-2 mb-2">
        <CustomSelect
          options={tags}
          value={selectedOption}
          onChange={handleSelectChange}
        />
        <CustomInput
          className="w-1/3"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col rounded-2xl shadow-lg bg-gray-50">
        <table className="w-full">
          <thead>
            <tr>
              {tags.map((tag) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  key={tag.value}
                >
                  {tag.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {searchByTags.map((user) => (
              <tr
                key={user.id}
                onClick={() => selectUser(user)}
                className="border-b border-gray-200"
              >
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.username}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.email}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default UserTable;
