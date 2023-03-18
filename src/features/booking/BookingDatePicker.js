import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { Row, Col } from "reactstrap";

const BookingDatePicker = () => {
  const [selectedDate, setselectedDate] = useState(new Date());

  return (
    <>
      {/* <Row> */}
      {/* <Col xs="12">Select Service Date</Col> */}
      <Col>Select Service Date</Col>
      <Col className="mb-3">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setselectedDate(date)}
          minDate={addDays(new Date(), 2)}
          maxDate={addDays(new Date(), 30)}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
          isClearable
          // placeholderText="Click To Select A Date"
          inline
          required
        />
      </Col>
      {/* </Row> */}
    </>
  );
};

export default BookingDatePicker;
