import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QaList from "./components/QaList";
import { question } from "./data";

function App() {
  const [data, setData] = useState(question);
  // to add new item
  const addItem = () => {
    setData([...question]);
  };
  // to delete all data items
  const deleteAllItems = () => {
    question.splice(0, question.length);
    setData([]);
  };
  // to delete one item from array
  const deleteOneItem = (items) => {
    setData([...items]);
  };
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4" className="col-sm-10 col-md-4">
            <div className="fs-3 text-center py-2">اسئلة وأجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} />
            <QaList data={data} deleteOneItem={deleteOneItem} />
            {data.length >= 1 ? (
              <button onClick={deleteAllItems} className="btn-color w-100 my-2">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
