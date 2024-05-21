import { useState } from "react";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="enter name"
            value={formData.name}
            onChange={handleChange}
            name="name"
          ></Form.Control>
        </FormGroup>
        <FormGroup className="my-2" controlId="email">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          ></Form.Control>
        </FormGroup>

        <FormGroup className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          ></Form.Control>
        </FormGroup>
        <FormGroup className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
          ></Form.Control>
        </FormGroup>

        <Button type="submit" variant="primary" className="mt-3">
          Register
        </Button>

        <Row className="py-3">
          <Col>
            Already has been user ? <Link to={"/login"}>Log in</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
