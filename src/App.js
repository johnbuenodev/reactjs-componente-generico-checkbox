import { useEffect, useState } from 'react';
import './App.css';
import CheckboxGeneric from './components/CheckboxGeneric';

const arrayData = [
  {name:"segunda", isChecked:false,value:1},
  {name:"terca", isChecked:false,value:2},
  {name:"quarta", isChecked:false,value:3},
  {name:"quinta", isChecked:false,value:4},
  {name:"sexta", isChecked:false,value:5},
  {name:"sabado", isChecked:false,value:6},
  {name:"domingo", isChecked:false,value:0}
 ];

 const arrayDataEstilosMusicais = [
  {name:"hard rock", isChecked:false},
  {name:"Metal", isChecked:false},
  {name:"Blues", isChecked:false},
  {name:"Synthwave", isChecked:false},
  {name:"Goth metal", isChecked:false},
  {name:"pop", isChecked:false},
 ];

 const arrayDataAcessorios = [
  {name:"Acessorio 1", isChecked:false,value:250},
  {name:"Acessorio 2", isChecked:false,value:650},
  {name:"Acessorio 3", isChecked:false,value:500},
 ];

 const titleComponent = "Selecione - Dias da semana";

 const titleComponent2 = "Selecione - estilos musicais";

function App() {

  const handleValueCheckbox = (values) => {
    console.log("Array de checkbox:");
    console.log(values);
  }

  return (
    <>
    <div className="container">
     <CheckboxGeneric handleValueCheckbox={handleValueCheckbox} titleComponent={titleComponent} arrayData={arrayData}/>
    </div>
    <div className="container">
     <CheckboxGeneric handleValueCheckbox={handleValueCheckbox} titleComponent={titleComponent2} arrayData={arrayDataEstilosMusicais}/>
    </div>
    <div className="container">
     <CheckboxGeneric handleValueCheckbox={handleValueCheckbox} arrayData={arrayDataAcessorios}/>
    </div>
    </>
  );
}

export default App;
