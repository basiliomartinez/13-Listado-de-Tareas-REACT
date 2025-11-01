import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
import ItemTarea from "./ItemTarea";

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
          <Form.Text className="text-danger">Aqui muestro un error</Form.Text>
        </Form.Group>
      </Form>
      <ListaTareas arrayTareas={arrayTareas}/>
    </section>
  );
};

export default FormularioTarea;
