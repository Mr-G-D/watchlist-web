import React, { useContext } from "react";
import { signInWithGoogle } from "../config/firebase";
import { TypeConext } from "../App";
import { Button } from "antd";

const Profile = () => {
  const { user, setUser } = useContext(TypeConext);

  const handleSignIn = async () => {
    const { user } = await signInWithGoogle();
    console.log(user.photoURL);
    setUser({
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    });
  };
  return (
    <div className="flex flex-row justify-between items-center">
      {/* <p className="font-medium">{user.name}</p>
      <img
        onClick={handleSignIn}
        src={user.image}
        className="w-12 m-2 rounded-full"
        alt="logo"
      /> */}

      <div className="mx-8 my-4 flex flex-row justify-between align-middle items-center">
        <Button type="primary">Search</Button>
      </div>
    </div>
  );
};

export default Profile;
