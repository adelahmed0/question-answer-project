import { Accordion, Row } from "react-bootstrap";
import { question } from "../data";

const QaList = ({ data, deleteOneItem }) => {
  // to Delete one Item from array
  const onDeleteItem = (id) => {
    if (data.length >= 1) {
      const index = question.findIndex((item) => item.id === id);
      question.splice(index, 1);
      deleteOneItem(question);
    }
  };
  return (
    <Row>
      {data.length >= 1 ? (
        data.map((item, index) => {
          return (
            <Accordion key={index}>
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <h6 className="m-auto">{item.q}</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="mx-5 d-inline text-start">{item.a}</div>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color m-sm-2"
                  >
                    مسح السؤال
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })
      ) : (
        <h2 className="fs-4 text-center p-5">لا يوجد اسئلة الأن</h2>
      )}
    </Row>
  );
};
export default QaList;
