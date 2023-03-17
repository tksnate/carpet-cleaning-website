import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { Row, Col } from "reactstrap";

const BookingDatePicker = () => {
  const [selectedDate, setselectedDate] = useState(new Date());

  return (
    <>
      <Row>
        <Col xs={6}>
          <p>Select Service Date:</p>
        </Col>
        <Col xs={6}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setselectedDate(date)}
            minDate={addDays(new Date(), 2)}
            maxDate={addDays(new Date(), 30)}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
          />
        </Col>
      </Row>
    </>
  );
};

export default BookingDatePicker;
