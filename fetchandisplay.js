import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserClick = (email) => {
    alert(`User Email: ${email}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="bg-white p-4 rounded shadow-md">
        {users.map((user) => (
          <li
            key={user.id}
            className="cursor-pointer text-blue-600 hover:underline py-2"
            onClick={() => handleUserClick(user.email)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
