import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import BookingForm from "../../components/BookingForm";
import TestForm from "../../components/TestForm";
import OldTestForm from "../../components/oldTestForm";
import FormikContainer from "../../components/FormikContainer";

class ScheduleService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Button color="warning" outline onClick={this.toggle}>
          Schedule Service
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="text-primary" toggle={this.toggle}>
            Schedule Cleaning Service
          </ModalHeader>
          <ModalBody className="text-primary">
            {/* <FormikContainer /> */}
            <BookingForm />
            CALL or TEXT if you have any questions before you schedule service!
            <br />
            <div className="mt-2">
              <span className="bold text-danger">TEXT: </span> 623-277-6461{" "}
              <span>&nbsp;</span>&nbsp;&nbsp;
              <span className="bold text-danger">CALL: </span> 602-699-4822
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ScheduleService;
