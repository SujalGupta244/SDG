import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SdgData() {
  return (
    <Container className='mt-5'>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Number of rows</Form.Label>
        <Form.Control type="number" placeholder="" />
        <Form.Text className="text-muted">
          Please eneter whole number
        </Form.Text>
      </Form.Group>

      <div className='mb-5 grid'>
      <DropdownButton className="p-2 g-col-6" id="dropdown-basic-button" title="Dataset Type">
        <Dropdown.Item href="#/action-1">Employee Dataset</Dropdown.Item>
        <Dropdown.Item href="#/action-2">PCI Dataset</Dropdown.Item>
        </DropdownButton>
      {/* </Form.Group> */}
      {/* <Form.Group className='mb-5'> */}
      <DropdownButton className="p-2 g-col-6" id="dropdown-basic-button" title="Format">
        <Dropdown.Item href="#/action-1">CSV</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Excel</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Doc</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Json</Dropdown.Item>
    </DropdownButton>
      </div>
      <Button variant="primary" type="submit">
        Download
      </Button>
    </Form>
    </Container>

  );
}

export default SdgData;