import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button
} from "reactstrap";

class OptionsModal extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
    this.state = {
      type: this.props.type,
      option1: "",
      option2: "",
      option3: "",
      isOpen: false
    };
  }

  toggleModal() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  confirmModal() {
    this.toggleModal();
    const { onModalChange } = this.props;
    onModalChange(this.state.option1, this.state.option2, this.state.option3);
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggleModal}>
          Options
        </Button>
        <Modal
          isOpen={this.state.isOpen}
          toggle={this.toggleModal}
          //   className={this.props.className}
          unmountOnClose={false}
        >
          <ModalHeader toggle={this.toggleModal}>Options</ModalHeader>
          <ModalBody>
            <Input
              type="select"
              name="datatype"
              id={`type-${this.props.id}`}
              onChange={e => this.setState({ option1: e.target.value })}
            >
              <option>Integer</option>
              <option>Time-Series</option>
              <option>Email</option>
              <option>Phone Number</option>
            </Input>
            <Input
              type="number"
              name="numcols"
              id={`numcols-${this.props.id}`}
              onChange={e => this.setState({ option2: e.target.value })}
            />
            <Input
              type="number"
              name="foo"
              id={`foo-${this.props.id}`}
              onChange={e => this.setState({ option3: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.confirmModal}>
              Confirm Options
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export { OptionsModal };
