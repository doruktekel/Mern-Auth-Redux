import { useState } from "react";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      <h1>Sign in</h1>

      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" variant="primary" className="mt-3">
          Log in
        </Button>

        <Row className="py-3">
          <Col>
            New Customer ? <Link to={"/register"}>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
