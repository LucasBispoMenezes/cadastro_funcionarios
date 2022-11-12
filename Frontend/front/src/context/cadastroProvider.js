import React, { useState } from 'react';
import  cadastroContext from './contextCadastros';

export default function DataValueConcat({ children }) {
  const [data, setData] = useState([]);

  function addNewData(obj) {
    setData(
       ...data,
       obj
    );
  }
  
const total ={
    data,
   addNewData 
}
  return (
    <cadastroContext.Provider value={total}>
      <div>
        { children }
      </div>
    </cadastroContext.Provider>
  );
}