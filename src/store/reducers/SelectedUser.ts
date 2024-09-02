import { IGetUsers } from "../../api/user/types";

export interface ISelectedUser {
  selectedUser: IGetUsers | null;
}
export enum SelectUserActionType {
  USER_SELECT = "USER_SELECT",
}

const initState: ISelectedUser = {
  selectedUser: null,
};

export const SelectedUserReducer = (
  state = initState,
  action: any
): ISelectedUser => {
  switch (action.type) {
    case SelectUserActionType.USER_SELECT: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }
    default:
      return state;
  }
};
