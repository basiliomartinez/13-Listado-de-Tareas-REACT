import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({arrayTareas, borrarTarea}) => {
    return (
     <ListGroup>{
   arrayTareas.map((item, indice)=>  <ItemTarea key={indice} item={item} borrarTarea= {borrarTarea}/>)
     }
    </ListGroup>
    );
};

export default ListaTareas;