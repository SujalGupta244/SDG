import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import { UserContext } from '../context/context';
import { Navigate } from 'react-router-dom';

function SdgData() {

    const {user} = useContext(UserContext) 

    const [rows, setRows] = useState(0);
    const [dataset, setDataSet] = useState('');
    const [format, setFormat] = useState('');

    if (user.length == 0) {
        return (
          <Navigate to="/login" />
        )
    }
    

    // const handleSelect = (e) =>{
        
    // }



    const handleRequest = async(e) =>{
        e.preventDefault()
        const data = await axios.post("http://127.0.0.1:5000/api/data",{
            rows,
            dataset,
            format
        })
        console.log(data)

        console.log(rows, dataset, format)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        console.log(email, password)
    }


  return (
    <Container className='mt-5'>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Number of rows</Form.Label>
        <Form.Control type="number" placeholder="" value={rows} onChange={(e) => setRows(e.target.value)}/>
        <Form.Text className="text-muted">
          Please eneter whole number
        </Form.Text>
      </Form.Group>

      <div className='mb-5 grid '>
      <DropdownButton className="p-2 g-col-6" id="dropdown-basic-button" title={dataset.length > 0 ? dataset : "Data Set"} onSelect={(e) => setDataSet(e)}>
        <Dropdown.Item href="Employee Dataset">Employee Dataset</Dropdown.Item>
        <Dropdown.Item href="PCI Dataset">PCI Dataset</Dropdown.Item>
        </DropdownButton>
      <DropdownButton className="p-2 g-col-6" id="dropdown-basic-button" title={format.length > 0 ? format : "Format"} onSelect={(e) => setFormat(e)}>
        <Dropdown.Item href="CSV">CSV</Dropdown.Item>
        <Dropdown.Item href="Excel">Excel</Dropdown.Item>
        <Dropdown.Item href="Doc">Doc</Dropdown.Item>
        <Dropdown.Item href="Json">Json</Dropdown.Item>
    </DropdownButton>
      </div>
      <Button variant="primary" className='me-3' type="submit" onClick={handleRequest}>
        Generate
      </Button>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Download
      </Button>
    </Form>
    </Container>

  );
}

export default SdgData;