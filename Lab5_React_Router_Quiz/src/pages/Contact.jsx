import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (form.checkValidity()) {
      alert('Contact form submitted successfully!');
    }
  };

  return (
    <section>
      <h2 className="text-danger mb-4">Contact Page</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="Username" />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCity">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="City" />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationState">
            <Form.Label>State</Form.Label>
            <Form.Control required type="text" placeholder="State" />
            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control required type="text" placeholder="Zip" />
            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </section>
  );
}

export default Contact;
