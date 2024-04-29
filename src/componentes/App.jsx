import React, { useState } from 'react';
import './ToDoList.css'; // Importando o arquivo CSS

function TodoList() {
  const [productInput, setProductInput] = useState('');
  const [quantityInput, setQuantityInput] = useState('');
  const [items, setItems] = useState([]);

  const handleProductChange = (event) => {
    setProductInput(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantityInput(event.target.value);
  };

  const addItem = () => {
    if (productInput.trim() !== '' && quantityInput.trim() !== '') {
      setItems([...items, { name: productInput, quantity: parseInt(quantityInput) }]);
      setProductInput('');
      setQuantityInput('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="todo-list-container">
      <h2>Lista de Compras</h2>
      <div className="input-container">
        <input
          type="text"
          value={productInput}
          onChange={handleProductChange}
          placeholder="Nome do produto"
        />
      </div>
      <div className="input-container">
        <input
          type="number"
          value={quantityInput}
          onChange={handleQuantityChange}
          placeholder="Quantidade"
        />
        <button onClick={addItem}>Adicionar</button>
      </div>
      <ul className="items-list">
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - Quantidade: {item.quantity}
            <button onClick={() => removeItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
