/* eslint linebreak-style: ["error", "windows"]*/
import React, { Component, PropTypes } from 'react';
import { CooperationEditForm } from 'components';
import * as cooperationShowActions from 'redux/modules/cooperation';
import { connect } from 'react-redux';

@connect(
  state => ({
    cooperation: state.cooperation.detail,
    loadDetail: PropTypes.func.isRequired,
  }),
  { ...cooperationShowActions })
export default class CooperationEdit extends Component {
  static propTypes = {
    cooperation: PropTypes.object.isRequired,
    loadDetail: PropTypes.func.isRequired,
    params: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.loadDetail(this.props.params.slug);
  }

  render() {
    const { cooperation } = this.props;
    return (
      <div className="container">
        <div className="row">
          <CooperationEditForm cooperation={cooperation} />
        </div>
      </div>
    );
  }
}
