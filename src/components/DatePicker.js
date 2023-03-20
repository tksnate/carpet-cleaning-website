import React from "react";
import { Col, FormGroup } from "reactstrap";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      {/* <div className="form-control"> */}
      <FormGroup row>
        <Col md="10">
          <label htmlFor={name}>{label}</label>
          <Field name={name}>
            {({ form, field }) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  onChange={(val) => setFieldValue(name, val)}
                  minDate={addDays(new Date(), 2)}
                  maxDate={addDays(new Date(), 30)}
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  isClearable
                  required
                  placeholderText="Select Appointment Date"
                />
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
          {/* </div> */}
        </Col>
      </FormGroup>
    </>
  );
};

export default DatePicker;
