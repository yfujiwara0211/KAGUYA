import React, { useContext } from "react";
import Headers from "../templates/Header";
import { Navigate } from "react-router-dom";
import { LoginUserContext } from "../providers/LoginUserProvider";

const Home = () => {
    const { isLogined } = useContext(LoginUserContext);
    if (!isLogined) {
      return <Navigate to="/login" />;
    }
    else {
    }
    return (
      <>
        <Headers />
        <h3>ホーム画面</h3>
      </>
    );
};

export default Home;
