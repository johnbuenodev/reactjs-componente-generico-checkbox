import { useEffect, useState } from 'react';

function CheckboxGeneric(props) {

  const [datavalue, setDatavalue] = useState([]);

  useEffect(() => {
    setDatavalue(props.arrayData) 
  }, []);

  const { handleValueCheckbox } = props; //function callback
  const { titleComponent } = props

  const handleCheckValue = (e) => {
    //console.log(e.target.value);
    //Extraindo
    const {name, checked} = e.target;
    console.log(name);
    console.log(checked);
    let tempArray = datavalue.map(register => register.name === name ? {...register, isChecked: checked} : register)
    setDatavalue(tempArray);
    console.log(tempArray);
    handleValueCheckbox(tempArray); //function callback
  }

  return (
    <div className="container my-4" style={{width: 400 }}>
     <form className="form">
      { titleComponent ? <h3>{titleComponent}</h3> : null }
      {
        datavalue.map((register) => {
          return(
            <div className="form-check" key={register.name}>
             <input 
               type="checkbox" 
               className="form-check-input" 
               name={register.name}
               checked={register?.isChecked || false} 
               onChange={handleCheckValue}  />
             <label className='form-check-label ms-2'>{register.name}</label>
            </div> 
          )
        })
      }
     </form>
    </div>
  );
}

export default CheckboxGeneric;
