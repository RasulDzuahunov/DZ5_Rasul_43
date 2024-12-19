import React, { useState } from 'react';

const MainPage = () => {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleAddName = () => {
    if (name.trim()) {
      setNamesList([...namesList, name.trim()]);
      setName('');
    }
  };

  const handleChangeName = (index) => {
    if (name.trim()) {
      const updatedList = [...namesList];
      updatedList[index] = name.trim();
      setNamesList(updatedList);
      setName('');
    }
  };

  return (
    <div>
      <h1>Список имён</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={handleAddName} disabled={!name.trim()}>
        Добавить
      </button>

      {namesList.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {namesList.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button onClick={() => handleChangeName(index)} disabled={!name.trim()}>
                Поменять
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainPage;