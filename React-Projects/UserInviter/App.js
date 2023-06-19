import React, { useState, useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";


function App() {
  //list of users,loader toggle , searchInput
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [isSuccess, setSuccess] = useState(false);
  // monitor search input
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  // on invite send
  const onSuccessChange = () => {
    if (invites.length > 0) {
      setSuccess(true);
    } else {
      alert("Please select user to invite!");
    }
  };
  // on invite finish
  const onGoBackClick = () => {
    setSuccess(false);
    setInvites([]);
  };
  // on user add to invite list
  const onInviteAdd = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites([...invites, id]);
    }
  };
  //request users list data
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  });
  return (
    <div className="App">
      {isSuccess ? (
        <Success count={invites.length} onGoBackClick={onGoBackClick} />
      ) : (
        <Users
          searchValue={searchValue}
          onInviteAdd={onInviteAdd}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onSuccessChange={onSuccessChange}
        />
      )}
      {/* <Success /> */}
    </div>
  );
}

export default App;
