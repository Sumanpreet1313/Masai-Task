import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postResponse, setPostResponse] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserClick = (email) => {
    alert(`User Email: ${email}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert("Both fields are required.");
      return;
    }

    const newPost = { title, body, userId: 1 };
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      setPostResponse(data);
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="bg-white p-4 rounded shadow-md mb-6">
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

      <h2 className="text-xl font-bold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block font-semibold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {postResponse && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="font-bold">Post Created Successfully!</h3>
          <p><strong>ID:</strong> {postResponse.id}</p>
          <p><strong>Title:</strong> {postResponse.title}</p>
          <p><strong>Body:</strong> {postResponse.body}</p>
        </div>
      )}
    </div>
  );
}
