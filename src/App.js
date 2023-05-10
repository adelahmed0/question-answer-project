import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QaList from "./components/QaList";
import { question } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);
  // to add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تم الإضافة بنجاح", "Success");
  };
  // to delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف الكل بنجاح", "Success");
  };
  // to delete one item from array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    notify("تم حذف السؤال بنجاح", "Success");
    setData([...items]);
    if (items.length <= 0) {
      deleteAllItems();
    }
  };
  // to push notification
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else if (type === "Success") {
      toast.success(message);
    }
  };
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4" className="col-sm-10 col-md-4">
            <div className="fs-3 text-center py-2">اسئلة وأجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QaList data={data} deleteOneItem={deleteOneItem} />
            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllItems} className="btn-color w-100 my-2">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer autoClose={3000} />
      </Container>
    </div>
  );
}

export default App;
