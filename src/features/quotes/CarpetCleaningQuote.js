import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ContactForm from "../../components/ContactForm";

class HeroModal extends React.Component {
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
        <Button color="warning" onClick={this.toggle}>
          Get Carpet Cleaning Quote
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Cleaning Service Quote</ModalHeader>
          <ModalBody>
            <ContactForm />
            You can also call or text us!
            <br />
            <span className="bold">TEXT: </span> 623-277-6461{" "}
            <span>&nbsp;</span>&nbsp;&nbsp;
            <span className="bold">CALL: </span> 602-699-4822
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default HeroModal;
