import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./Contact.css";
import SMS from "../../img/sms.png";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);
const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Row className="contactPageSection">
          <Col className="col-1">
            <img className="SMSImg" src={SMS} alt="" />
          </Col>
          <Col className="col-2">
            <form className={classes.root} noValidate autoComplete="off">
              <Input
                defaultValue="First Name"
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                placeholder="Last Name"
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                placeholder="Your Email"
                inputProps={{ "aria-label": "description" }}
              />
              <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
