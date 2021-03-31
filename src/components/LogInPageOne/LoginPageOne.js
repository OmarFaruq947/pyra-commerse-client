import "./LoginPageOne.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
firebase.initializeApp(firebaseConfig);

const LoginPageOne = () => {
  const [user, setUser] = useState({});
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        var errorMessage = error.message;
      });
  };

  return (
    <div>
      <br />
      <br />
      <div className="card">
        <Container>
          <Row>
            <Col>
              <div className="logIn_box">
                <div className="login_box_inner">
                  <h5>Create Account</h5>
                  {/* <Form onClick={handleSubmit}> */}
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Control
                          className="inputBox"
                          type="text"
                          name="FirstName"
                          title="Space is not acceptable"
                          placeholder="First name"
                          //   onBlur={handleBlur}
                          required
                        />
                        <br />
                        <br />
                        <Form.Control
                          className="inputBox"
                          type="email"
                          name="email"
                          placeholder="Username or Email"
                          //   onBlur={handleBlur}
                          required
                        />
                        <br />
                        <br />
                        <Form.Control
                          className="inputBox"
                          type="password"
                          name="password"
                          placeholder="Password"
                          //   onBlur={handleBlur}
                          required
                        />
                        <br />
                        <br />
                      </Col>
                    </Form.Row>
                    <button
                      to="/Home"
                      type="submit"
                      value="Submit"
                      className="createAcountBtn"
                      onClick={handleGoogleSignIn}
                    >
                      Creat account
                    </button>
                  </Form>
                  <p className="alraedy_text">
                    <small>
                      Already have an account?
                      <Link to="/Login_2">
                        <a className="login_text">Login</a>
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
              <div>
                <div className="googleSignInSection">
                  <br />
                  <br />
                  <Button
                    to="/Home"
                    className="btn"
                    variant="outlined"
                    color="primary"
                    onClick={handleGoogleSignIn}
                  >
                    Google
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <h3>email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default LoginPageOne;
