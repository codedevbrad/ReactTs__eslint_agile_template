import * as React from 'react';
import { useEffect } from 'react';
import './App.css';

export default function App() {

  const add = ( firstNum: number , secondNum: number ) => {
    return firstNum + secondNum;
  };

  const a = 1;
  const b = 1;

  if (a == b) {
    useEffect(function persistForm() {
      localStorage.setItem('formData', 'name');
    });
    add( 5 , 5 );
  }

  return (
    <div className="App">
    </div>
  );
}