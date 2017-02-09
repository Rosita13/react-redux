/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Col, ControlLabel, FormControl, Button,
  HelpBlock
} from 'react-bootstrap';
import * as cooperationShowActions from 'redux/modules/cooperation';
import * as cooperationActions from 'redux/modules/cooperationupdate';
import * as notifActions from 'redux/modules/notifs';

@connect(
  state => ({
    cooperation: state.cooperation.detail,
    loadDetail: PropTypes.func.isRequired,
  }),
  { ...cooperationActions, ...notifActions, ...cooperationShowActions })
export default class CooperationEditForm extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    loadDetail: PropTypes.func.isRequired,
    params: PropTypes.string.isRequired
  }

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
    this.handleEdit = this._handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.loadDetail(this.props.params.slug);
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
    if (e.target.value.length < 1) {
      this.setState({ validQuality: 'error', msgQuality: 'Quality must be required' });
    } else {
      this.setState({ validQuality: '', quality: e.target.value, msgQuality: '' });
    }
  }

  _handleType(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 3) {
      this.setState({ validType: 'error', msgType: 'Type must greather than 4 character' });
    } else {
      this.setState({ validType: '', type: e.target.value, msgType: '' });
    }
  }

  _handleTotal(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 6) {
      this.setState({ validTotal: 'error', msgTotal: 'Type must greather than 10 character' });
    } else {
      this.setState({ validTotal: '', total: e.target.value, msgTotal: '' });
    }
  }

  _handleEdit(e) {
    e.preventDefault();
    const {
      name,
      price,
      quality,
      type,
      total,
    } = this.state;

    const data = {
      name: name,
      price: price,
      quality: quality,
      type: type,
      total: total,
    };

    this.props.Edit(data).then(this.successEdit);
  }

  successEdit = result => {
    this.props.notifSend({
      message: 'Data has been Edit!',
      kind: 'success',
      dismissAfter: 2000
    });
    this.setState({
      name: '',
      price: '',
      quality: '',
      type: '',
      total: '',
    })
    this.refs.form.reset();
    return result;
  }

  render() {
    const {
      validName, validPrice, validQuality, validType, validTotal,
      msgName, msgPrice, msgQuality, msgType, msgTotal
    } = this.state;
    console.log(this.props.detail);
    return (
      <div>
        <Form horizontal style={{ marginTop: '40px' }} ref="form">
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
              <Button type="button" onClick={this.handleEdit}>
                Edit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
