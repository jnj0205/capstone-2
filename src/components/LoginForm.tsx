import UserType from "../types/auth";
// import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

type Props = {setUser:(user:UserType)=>void }


export default function LoginForm({setUser}: Props) {
  return (
    <div>
      <Container fluid bg-sm>
            <h1>Login</h1>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form>
                            <Form.Label>Email</Form.Label>
                            <Form.Control  name='email' type='email' />
                            <Form.Label>Password</Form.Label>
                            <Form.Control  name='password' type='password'  />
                            <Button variant='outline-primary' className='mt-3 w-100' type='submit'>Log In</Button>
                            {/* {message} */}
                        </Form>
                    </Col>
                </Row>
        </Container> 

    </div>
  )
}