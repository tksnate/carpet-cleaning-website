import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";
import BookingDatePicker from "../features/booking/BookingDatePicker";
import DatePicker from "./DatePicker";

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phoneNum: "",
        email: "",
        where: "",
        quote: "",
        when: "",
        cleaningDate: null,
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      <Form>
        <FormGroup row>
          {/* <Label htmlFor="name" md="2" hidden>
            Name
          </Label> */}
          <Col md="10">
            <Field name="name" placeholder="Name" className="form-control" />
            <ErrorMessage name="name">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label htmlFor="phoneNum" md="2" hidden>
            Phone
          </Label> */}
          <Col md="10">
            <Field
              name="phoneNum"
              placeholder="Phone Number"
              className="form-control"
            />
            <ErrorMessage name="phoneNum">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label htmlFor="email" md="2" hidden>
            Email
          </Label> */}
          <Col md="10">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
            />
            <ErrorMessage name="email">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label htmlFor="where" md="2" hidden>
            Where
          </Label> */}
          <Col md="10">
            <Field
              name="where"
              as="textarea"
              rows="2"
              className="form-control"
              placeholder="Address"
            />
            <ErrorMessage name="where">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label htmlFor="quote" md="2" hidden>
            Quote Details
          </Label> */}
          <Col md="10">
            <Field
              name="quote"
              as="textarea"
              rows="8"
              className="form-control"
              placeholder="How can we help you? Please let us know all the rooms/areas you would like cleaned.  Include number of rooms, hallways, closets, stairs, and if any rooms need pet or deep stain treatment."
            />
          </Col>
        </FormGroup>
        <DatePicker name="cleaningDate" />
        <FormGroup row>
          <Col md="10">
            <div className="form-control">
              <div id="my-radio-group">Select Arrival Time</div>
              <div role="group" aria-labelledby="my-radio-group">
                <Label>
                  <Field type="radio" name="when" value="9" /> 9-10 am
                </Label>
                <Label>
                  <Field type="radio" name="when" value="11" className="ms-4" />{" "}
                  11am-noon
                </Label>
                <Label>
                  <Field type="radio" name="when" value="1" className="ms-4" />{" "}
                  1-2pm
                </Label>
              </div>
              <ErrorMessage name="when">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default BookingForm;
