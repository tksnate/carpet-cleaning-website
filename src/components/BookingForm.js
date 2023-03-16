import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";
import BookingDatePicker from "../features/booking/BookingDatePicker";

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
        when: "",
        where: "",
        quote: "",
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="name" md="2" hidden>
            Name
          </Label>
          <Col md="10">
            <Field name="name" placeholder="Name" className="form-control" />
            <ErrorMessage name="name">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2" hidden>
            Phone
          </Label>
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
          <Label htmlFor="email" md="2" hidden>
            Email
          </Label>
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
          <Label htmlFor="when" md="2" hidden>
            When
          </Label>
          <Col md="10">
            <Field
              name="when"
              as="textarea"
              rows="2"
              className="form-control"
              placeholder="Date?  When would you like us to schedule service?  Tell us the days & times that work for you!"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="where" md="2" hidden>
            Where
          </Label>
          <Col md="10">
            <Field
              name="where"
              as="textarea"
              rows="2"
              className="form-control"
              placeholder="Address?  Please tell us your service address and/or zip code"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="quote" md="2" hidden>
            Quote Details
          </Label>
          <Col md="10">
            <Field
              name="quote"
              as="textarea"
              rows="12"
              className="form-control"
              placeholder="How can we help you? Please let us know all the rooms/areas you would like cleaned.  Include number of rooms, hallways, closets, stairs, and if any rooms need pet or deep stain treatment."
            />
          </Col>
        </FormGroup>
        <BookingDatePicker />
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
