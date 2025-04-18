import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user?.email}</p>
      <p>First Name: {user?.name}</p>
      <p>Last Name: {user?.lastName}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
