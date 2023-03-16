import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingDatePicker = () => {
  const [selectedDate, setselectedDate] = useState(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setselectedDate(date)}
      //   minDate={addDays(new Date(), 2)}
      //   maxDate={addDays(new Date(), 30)}
      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      isClearable
    />
  );
};

export default BookingDatePicker;
