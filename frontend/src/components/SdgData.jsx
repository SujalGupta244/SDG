import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { UserContext } from "../context/context";
import { Navigate } from "react-router-dom";
import fileDownload from 'js-file-download'
// import {OutTable, ExcelRenderer} from 'react-excel-renderer';

function SdgData() {
//   const { user } = useContext(UserContext);

  const [rows, setRows] = useState(0);
  const [dataset, setDataSet] = useState("");
  const [format, setFormat] = useState("");

  const [data, setData] = useState("");

//   if (user.length == 0) {
//     return <Navigate to="/login" />;
//   }

  const handleDataSet = (e) => {
    setDataSet(e);
  };
  const handleFormat = (e) => {
    setFormat(e);
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://127.0.0.1:5000/api/data", {
      rows,
      dataset,
      format,
    });
    const d = await data.data
    // console.log(data);
    setData(d)

    // console.log(rows, dataset, format);
  };

  console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(format == "csv"){
        fileDownload(data, "Data.csv")
        return true;
    
    }
    else if(format == "json"){
        fileDownload(data, "Data.json")
        return true;
    }
    else if(format == "excel"){
        fileDownload(data, "Data.xlsx")
        return true;
    }
    // console.log(email, password);
  };

  let columns = dataset == "Employee Dataset" ?
  ["Name","UserId", "Email","SSN","Blood Group", "Gender","Address","DOB","US Driver License Number"]
  :
  ["Card Holder Number","CVV","Expiration date","Credit Card Number","Card Provider"]

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number of rows</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            value={rows}
            onChange={(e) => setRows(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please enter a whole number
          </Form.Text>
        </Form.Group>

        <div className="mb-5 grid ">
          <DropdownButton
            className="p-2 g-col-6"
            title={dataset.length > 0 ? dataset : "Data Set"}
            onSelect={handleDataSet}
          >
            <Dropdown.Item eventKey="Employee Dataset">
              Employee Dataset
            </Dropdown.Item>
            <Dropdown.Item eventKey="PCI Dataset">PCI Dataset</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            className="p-2 g-col-6"
            title={format.length > 0 ? format : "Format"}
            onSelect={handleFormat}
          >
            <Dropdown.Item eventKey="csv">CSV</Dropdown.Item>
            <Dropdown.Item eventKey="excel">Excel</Dropdown.Item>
            <Dropdown.Item eventKey="doc">Doc</Dropdown.Item>
            <Dropdown.Item eventKey="json">Json</Dropdown.Item>
          </DropdownButton>


        </div>
        <Button
          variant="primary"
          className="me-3"
          type="submit"
          onClick={handleRequest}
        >
          Generate
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Download
        </Button>
      </Form>

      {/* <OutTable data={"this.state.rows"} columns={"this.state.cols"} tableClassName={dataset} tableHeaderRowClass="heading" /> */}
    </Container>
  );
}

export default SdgData;
