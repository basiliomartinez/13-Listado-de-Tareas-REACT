import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";


const FormularioTarea = () => {
    const [arrayTareas, setArrayTareas]= useState([])
    const[tarea, setTarea]= useState('')

const handlesubmit= (e)=>{e.preventDefault()
    //Verificar que la tarea no este repetida
    const tareaBuscada= arrayTareas.find((itemTarea)=>itemTarea.toLowerCase()===tarea.toLowerCase().trim())
    console.log(tareaBuscada)
    if(tareaBuscada){
        return alert('Ya existe una tarea con ese nombre')
    }
//tomar el valor del state tarea y almacenarlo en el arrayTareas
setArrayTareas([...arrayTareas, tarea.trim()])
//limpiar el state tarea
setTarea('')
}

const borrarTarea= (nombreTarea)=>{
    const arrayFiltrado= arrayTareas.filter((itemTarea=>itemTarea !== nombreTarea))
//actualizar estado
setArrayTareas(arrayFiltrado)

}


  return (
    <section>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex">
            <Form.Control type="text" placeholder=" Ingresa una tarea" onChange={( e)=>setTarea (e.target.value)} value={tarea} />
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
    
        </Form.Group>
      </Form>
      <ListaTareas arrayTareas={arrayTareas} borrarTarea={borrarTarea}/>
    </section>
  );
};

export default FormularioTarea;
