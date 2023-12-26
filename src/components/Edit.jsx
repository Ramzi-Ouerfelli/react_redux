import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/actions/taskActions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Edit = ({ task }) => {
  // console.log("task : " , task)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [Text, setText] = useState(task.Text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    dispatch(editTask(task.id, Text));
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Update Task </Form.Label>
            <Form.Control
              type="text"
              value={Text}
              name="Text"
              onChange={(e) => setText(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleEdit();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
