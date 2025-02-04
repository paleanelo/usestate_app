import React, { useEffect, useState } from 'react';
import "./style.css";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 10) + 1; // Генерируем случайное число от 1 до 10
    fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
    </div>
  );
}

export default UserProfile;
