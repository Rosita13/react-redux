import React, { Component } from 'react';
import {
  Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button,
  HelpBlock
} from 'react-bootstrap';

export default class CooperationCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      quality: '',
      type: '',
      total: '',
      validName: '',
      validPrice: '',
      validQuality: '',
      validType: '',
      validTotal: '',
      msgName: '',
      msgPrice: '',
      msgQuality: '',
      msgType: '',
      msgTotal: '',
    };
    this.handleName = this._handleName.bind(this);
    this.handlePrice = this._handlePrice.bind(this);
    this.handleQuality = this._handleQuality.bind(this);
    this.handleType = this._handleType.bind(this);
    this.handleTotal = this._handleTotal.bind(this);
  }

  _handleName(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 5) {
      this.setState({ validName: 'error', msgName: 'Name must be 5 character' });
    } else {
      this.setState({ validName: '', name: e.target.value, msgName: '' });
    }
  }

  _handlePrice(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 4) {
      this.setState({ validPrice: 'error', msgPrice: 'Price must greather than 1000 character' });
    } else {
      this.setState({ validPrice: '', price: e.target.value, msgPrice: '' });
    }
  }

  _handleQuality(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 5) {
      this.setState({ validQuality: 'error', msgQuaity: 'Quality must greather than 1000 character' });
    } else {
      this.setState({ validQuality: '', quality: e.target.value, msgQuality: '' });
    }
  }

  _handleType(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 3) {
      this.setState({ validType: 'error', msgType: 'Type must greather than 1000 character' });
    } else {
      this.setState({ validType: '', type: e.target.value, msgType: '' });
    }
  }

  _handleTotal(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 6) {
      this.setState({ validTotal: 'error', msgTotal: 'Type must greather than 1000 character' });
    } else {
      this.setState({ validTotal: '', total: e.target.value, msgTotal: '' });
    }
  }

  render() {
    const {
      validName, validPrice, validQuality, validType, validTotal,
      msgName, msgPrice, msgQuality, msgType, msgTotal
    } = this.state;
    return (
      <div>
        <Form horizontal style={{ marginTop: '40px' }}>
          <FormGroup controlId="formHorizontalName" validationState={validName}>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" onChange={this.handleName} />
              {validName === 'error' &&
                <HelpBlock>{msgName}</HelpBlock>
              }
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPrice" validationState={validPrice}>
            <Col componentClass={ControlLabel} sm={2}>
              Price
            </Col>
            <Col sm={10} className={validPrice}>
              <FormControl type="text" placeholder="Price" onChange={this.handlePrice} />
              {validPrice === 'error' &&
                <HelpBlock>{msgPrice}</HelpBlock>
              }
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalQuality" validationState={validQuality}>
            <Col componentClass={ControlLabel} sm={2}>
              Quality
            </Col>
            <Col sm={10} className={validQuality}>
              <FormControl type="text" placeholder="Quality" onChange={this.handleQuality} />
              {validQuality === 'error' &&
                <HelpBlock>{msgQuality}</HelpBlock>
              }
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalType" validationState={validType}>
            <Col componentClass={ControlLabel} sm={2}>
              Type
            </Col>
            <Col sm={10} className={validType}>
              <FormControl type="text" placeholder="Type" onChange={this.handleType} />
              {validType === 'error' &&
                <HelpBlock>{msgType}</HelpBlock>
              }
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTotal" validationState={validTotal}>
            <Col componentClass={ControlLabel} sm={2}>
              Total
            </Col>
            <Col sm={10} className={validTotal}>
              <FormControl type="text" placeholder="Total" onChange={this.handleTotal} />
              {validTotal === 'error' &&
                <HelpBlock>{msgTotal}</HelpBlock>
              }
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
