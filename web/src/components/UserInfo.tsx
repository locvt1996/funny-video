import React, { useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// types
import { IUserInfo } from "../store/authen/type";

// actions
import { logoutAction } from "../store/authen";
import { useHistory } from "react-router-dom";

interface UserInfoProps {
  userInfo: IUserInfo;
}

const AuthenForm: React.FC<UserInfoProps> = ({ userInfo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
    history.push("/");
  }, [dispatch]);

  return (
    <div className="flex justify-end items-center" data-testid="user-info">
      <div className="mr-8">
        <span>{userInfo?.email}</span>
      </div>
      <div className="mr-8">
        <Link to="/share-video" title="share a movies">
          share a movies
        </Link>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default memo(AuthenForm);
