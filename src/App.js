import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QaList from "./components/QaList";

function App() {
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4" className="col-sm-10 col-md-4">
            <div className="fs-3 text-center py-2">اسئلة وأجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput />
            <QaList />
            <button className="btn-color w-100 my-2">مسح الكل</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
