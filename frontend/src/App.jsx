import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import {Button} from "react-bootstrap";
import NavBar from "./components/Nav";
// import Post from "./components/Post";
// import Header from "./components/Header";
// import LeftCard from "./components/LeftCard";
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SdgData from "./components/SdgData";
const App = () => (
<>
  <NavBar/>
  <Routes>

    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/sdgdata" element={<SdgData/>}></Route>
  </Routes>
</>
    // <Fragment>
    //     {/* <Header /> */}

    //     <main className="my-5 py-5">
    //         <Container className="px-0">
    //             <Row
    //                 // noGutters
    //                 className="pt-2 pt-md-5 w-100 
    //                     px-4 px-xl-0 position-relative"
    //             >
    //                 <Col
    //                     xs={{ order: 2 }}
    //                     md={{ size: 4, order: 1 }}
    //                     tag="aside"
    //                     className="pb-5 mb-5 pb-md-0 
    //                         mb-md-0 mx-auto mx-md-0"
    //                 >
    //                     {/* <LeftCard /> */}
    //                 </Col>

    //                 <Col
    //                     xs={{ order: 1 }}
    //                     md={{ size: 7, offset: 1 }}
    //                     tag="section"
    //                     className="py-5 mb-5 py-md-0 mb-md-0"
    //                 >
    //                     {/* <Post /> */}
    //                 </Col>
    //             </Row>
    //         </Container>
    //     </main>
    // </Fragment>
    
);

export default App;
