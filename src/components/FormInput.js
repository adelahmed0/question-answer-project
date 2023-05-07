import { Button, Row, Form, Col } from "react-bootstrap";

const FormInput = () => {
  return (
    <Row className="my-3">
      <Col sm="12" md="5" className="mb-sm-2">
        <Form.Control className="py-2" type="text" placeholder="ادخل السؤال" />
      </Col>
      <Col sm="12" md="5" className="mb-sm-2">
        <Form.Control className="py-2" type="text" placeholder="ادخل الإجابة" />
      </Col>
      <Col sm="12" md="2">
        <button className="btn-color w-100" type="submit">
          إضافة
        </button>
      </Col>
    </Row>
  );
};
export default FormInput;
