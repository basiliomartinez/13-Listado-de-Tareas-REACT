import {ListGroup, Button} from 'react-bootstrap';

const ItemTarea = ({item, borrarTarea}) => {
    return (
        <div>
                  <ListGroup.Item className='d-flex justify-content-between align-items-center
                  '> {item} <Button variant='outline-danger' 
                 onClick={()=> borrarTarea(item)} >❌</Button></ListGroup.Item>

        </div>
    );
};

export default ItemTarea;