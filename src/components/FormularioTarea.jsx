import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex">
            <Form.Control type="text" placeholder=" Ingresa una tarea" />
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
          <Form.Text className="text-danger">Aqui muestro un error</Form.Text>
        </Form.Group>
      </Form>
      <ListaTareas/>
    </section>
  );
};

export default FormularioTarea;
