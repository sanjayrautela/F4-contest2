import React, { useEffect, useState } from "react";
import TabularData from "./TabularData";

function Profile() {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Error fetching user data");
        }
      } catch (err) {
        console.error("Error fetching user data: ", err);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="info-container">
      <h1 className="heading">User's Info</h1>
      <TabularData data={user} />
    </div>
  );
}

export default Profile;