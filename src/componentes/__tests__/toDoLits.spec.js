import React from "react";
import { render } from "@testing-library/react";

import TodoList from './App';

test('Campos de entrada estão vazios inicialmente', () => {
  const todoList = new TodoList(); 
  expect(todoList.state.productInput).toBe(''); 
  expect(todoList.state.quantityInput).toBe(''); 
});

test('Adiciona um item à lista de compras corretamente', () => {
  const todoList = new TodoList(); 
  todoList.addItem('Maçã', 5); 
  const items = todoList.state.items; 
  expect(items[0]).toEqual({ name: 'Maçã', quantity: 5 }); 
});

test('Remove o último item da lista de compras corretamente', () => {
  const todoList = new TodoList();
  todoList.addItem('Banana', 3);
  todoList.removeItem(0);
  const items = todoList.state.items;
  expect(items.length).toBe(0);
});
