import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phoneNum: Yup.number().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    when: Yup.string().required("Required"),
    where: Yup.string().required("Required"),
    quote: Yup.string().required("Required"),
  });

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
      validationSchema={validationSchema}
    >
      <Form>
        <FormGroup row>
          <Col md="10">
            <Field name="name" placeholder="Name" className="form-control" />
            <ErrorMessage name="name" component={TextError} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="10">
            <Field
              name="phoneNum"
              placeholder="Phone Number"
              className="form-control"
            />

            <ErrorMessage name="phoneNum" component={TextError} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="10">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
            />
            <ErrorMessage name="email" component={TextError} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="10">
            <Field
              name="when"
              as="textarea"
              rows="2"
              className="form-control"
              placeholder="Date?  When would you like us to schedule service?"
            />
            <ErrorMessage name="when" component={TextError} />
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
              placeholder="Address?  Please tell us your service address and/or zip code"
            />
            <ErrorMessage name="where" component={TextError} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="10">
            <Field
              name="quote"
              as="textarea"
              rows="8"
              className="form-control"
              placeholder="How can we help you? Please let us know all the rooms/areas you would like cleaned."
            />
            <ErrorMessage name="quote" component={TextError} />
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

export default ContactForm;
