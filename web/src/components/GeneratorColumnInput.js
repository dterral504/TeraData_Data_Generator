import React, { Component } from "react";
import { FormGroup, Col, Input } from "reactstrap";
import { OptionsModal } from "./OptionsModal";

class GeneratorColumnInput extends Component {
  constructor(props) {
    super(props);
    this.onDataTypeChange = this.onDataTypeChange.bind(this);
    this.onNumColsChange = this.onNumColsChange.bind(this);
    this.onModalChange = this.onModalChange.bind(this);
    this.state = {
      dataType: "",
      numCols: "",
      modalOptions: {
        option1: "",
        option2: "",
        option3: ""
      }
    };
  }

  onDataTypeChange(event) {
    this.setState({ dataType: event.target.value });
    const { dataTypeChanged, id } = this.props;
    dataTypeChanged(id, event.target.value);
  }

  onNumColsChange(event) {
    this.setState({ numCols: event.target.value });
    const { numColsChanged, id } = this.props;
    numColsChanged(id, event.target.value);
  }

  onModalChange(opt1, opt2, opt3) {
    var modalOptions = { ...this.state.modalOptions };
    modalOptions.option1 = opt1;
    modalOptions.option2 = opt2;
    modalOptions.option3 = opt3;
    this.setState({ modalOptions });
    const { colOptionsChanged, id } = this.props;
    colOptionsChanged(id, modalOptions);
  }

  render() {
    return (
      <FormGroup row>
        <Col md={3}>
          <Input
            type="select"
            name="datatype"
            id={`type-${this.props.id}`}
            onChange={this.onDataTypeChange}
          >
            <option value="integer">Integer</option>
            <option value="time-series">Time-Series</option>
            <option value="email">Email</option>
            <option value="phone">Phone Number</option>
          </Input>
        </Col>
        <Col md={3}>
          <Input
            type="number"
            name="numcols"
            id={`numcols-${this.props.id}`}
            onChange={this.onNumColsChange}
          />
        </Col>
        <Col md={2}>
          <OptionsModal
            type={this.state.dataType}
            onModalChange={this.onModalChange}
          />
        </Col>
      </FormGroup>
    );
  }
}

export { GeneratorColumnInput as GeneratorInput };
