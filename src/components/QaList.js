import { Accordion, Row } from "react-bootstrap";

const QaList = () => {
  return (
    <Row>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h6 className="m-auto">السؤال الاول</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="mx-5 d-inline text-start">السؤال الاول</div>
            <button className="btn-color m-sm-2">مسح السؤال</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );
};
export default QaList;
