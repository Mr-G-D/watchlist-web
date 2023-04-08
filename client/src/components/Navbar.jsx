import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { TypeConext } from "../App";
import { signInWithGoogle } from "../config/firebase";
import { TfiClose } from "react-icons/tfi";
import { FilterProvider } from "../pages/Home";

const Navbar = ({ onSearch, handleSearch }) => {
  const { filter, setFilter } = useContext(FilterProvider);
  const { user, setUser } = useContext(TypeConext);
  const { Search } = Input;

  const handleSignIn = async () => {
    const { user } = await signInWithGoogle();
    setUser({
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
    });
  };

  return (
    <div
      className="mx-8 my-2 flex flex-row justify-between align-middle items-center"
      style={{
        height: 64,
      }}
    >
      {filter ? (
        <div className="flex w-[80%] items-center">
          <Search
            placeholder="Search"
            onSearch={onSearch}
            onChange={handleSearch}
            style={{ width: "70%", padding: 25, height: "auto" }}
          />

          <div>
            <TfiClose
              className="cursor-pointer"
              size={20}
              onClick={() => setFilter(false)}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setFilter(true)}
          type="primary"
          icon={<SearchOutlined />}
        >
          Search
        </Button>
      )}

      <div className="flex flex-row justify-between items-center">
        {user ? (
          <>
            <p className="font-medium">{user.name}</p>
            <img
              src={user.image}
              className="w-12 m-2 rounded-full"
              alt="logo"
            />
          </>
        ) : (
          <Button
            type="primary"
            onClick={handleSignIn}
            icon={<SearchOutlined />}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;