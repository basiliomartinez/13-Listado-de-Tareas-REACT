import {ListGroup, Button} from 'react-bootstrap';

const ItemTarea = ({item}) => {
    return (
        <div>
                  <ListGroup.Item className='d-flex justify-content-between align-items-center
                  '> {item} <Button variant='outline-danger'>❌</Button></ListGroup.Item>

        </div>
    );
};

export default ItemTarea;