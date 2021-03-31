import React from "react";
import { Col, Form } from "react-bootstrap";
import "./LoginPageTow.css";

const LogInPageTwo = () => {
  return (
    <div>
        <br/><br/>
      <div className="logIn_box_two">
        <div className="login_box_inner_two">
          <h5>Login</h5>
          {/* <Form onClick={handleSubmit_t}> */}
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                className="inputBox"
                  type="email"
                  name="email"
                  placeholder="Email"
                //   onBlur={handleBlur_t}
                  required
                />
                <br/> <br/>
                <Form.Control
                className="inputBox"
                  type="password"
                  name="password"
                  placeholder="Password"
                //   onBlur={handleBlur_t}
                  required
                />
                <br/>
                <Form.Check
                  type="checkbox"
                  name="checkbox"
                  label="Remember Me"
                //   onBlur={handleBlur_t}
                  required
                />
              </Col>
            </Form.Row>
            <br />
            <button
              type="submit"
              value="submit"
              className="createAcountBtn_two"
            >
              Login
            </button>
          </Form>
          <p className="alraedy_text_two">
            <small>
              Don't have an account?
              <a className="login_text_two" href="/LoginPageOne">
                Creat an account
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPageTwo;
