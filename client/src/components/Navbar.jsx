import { Button, Dropdown, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { TypeConext } from "../App";
import { signInWithGoogle } from "../config/firebase";
import { TfiClose } from "react-icons/tfi";
import { FilterProvider } from "../pages/Home";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlLogout } from "react-icons/sl";
import secureLocalStorage from "react-secure-storage";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch, handleSearch }) => {
  const { filter, setFilter } = useContext(FilterProvider);
  const { user, setUser } = useContext(TypeConext);
  const { setSidebar } = useContext(FilterProvider);
  const { Search } = Input;
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const { user } = await signInWithGoogle();
    setUser({
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
    });
  };

  const logout = async () => {
    await secureLocalStorage.clear();
    window.location.reload();
  };

  const items = [
    {
      label: "Logout",
      key: 1,
      icon: <SlLogout />,
      onClick: logout,
    },
    {
      label: "Watchlist",
      key: 2,
      icon: <MdFavorite />,
      onClick: () => navigate("/watchlist"),
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <div
      className="mx-8 my-2 flex flex-row justify-between align-middle items-center"
      style={{
        height: 64,
      }}
    >
      <div className="flex align-middle items-center justify-start w-full">
        {filter ? (
          <div className="flex w-[100%]  items-center">
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
          <>
            <div className="xl:hidden">
              <GiHamburgerMenu
                onClick={() => setSidebar(true)}
                size={20}
                className="mx-4"
              />
            </div>
            <Button
              onClick={() => setFilter(true)}
              type="primary"
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </>
        )}
      </div>

      <div className="flex flex-row justify-between items-center">
        {user ? (
          <>
            <p className="font-medium hidden md:block whitespace-nowrap">
              {user.name}
            </p>
            <Dropdown menu={menuProps}>
              <img
                src={user.image}
                className="w-10 md:w-12 m-2 rounded-full"
                alt="logo"
              />
            </Dropdown>
          </>
        ) : (
          <Button type="primary" onClick={handleSignIn}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
