import React, { useState } from "react";
import { Row, Form, Col } from "react-bootstrap";
import { question } from "../data";

const FormInput = ({ onAdd }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  // to push data to array
  const addNewItem = () => {
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
  };
  return (
    <Row className="my-3">
      <Col sm="12" md="5" className="mb-sm-2">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          className="py-2"
          type="text"
          placeholder="ادخل السؤال"
        />
      </Col>
      <Col sm="12" md="5" className="mb-sm-2">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          className="py-2"
          type="text"
          placeholder="ادخل الإجابة"
        />
      </Col>
      <Col sm="12" md="2">
        <button onClick={addNewItem} className="btn-color w-100" type="submit">
          إضافة
        </button>
      </Col>
    </Row>
  );
};
export default FormInput;
