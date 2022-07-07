import React, { memo } from "react";
import { Link } from "react-router-dom";

// components
import AuthenForm from "./AuthenForm";
import logo from "../assets/logo.jpg";

// selector
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/useAppSelector";
import { getUserInfo } from "../store/authen/selector";
import UserInfo from "./UserInfo";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const userInfo = useAppSelector(getUserInfo);

  return (
    <nav className="container flex items-center mb-16">
      <div className="w-2/5 flex items-center">
        <Link to="/" title="funny-video">
          <img src={logo} alt="funny-video" width="60" />
        </Link>
        <h1 className="text-6xl ml-8">Funny Video</h1>
      </div>
      <div className="w-3/5">
        {userInfo ? <UserInfo userInfo={userInfo} /> : <AuthenForm />}
      </div>
    </nav>
  );
};

export default memo(NavBar);
