/* eslint linebreak-style: ["error", "windows"]*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as cooperationActions from 'redux/modules/cooperation';
import { CooperationCard } from 'components';

@connect(
  state => ({
    cooperation: state.cooperation.detail,
    loadDetail: PropTypes.func.isRequired,
  }),
  { ...cooperationActions })
export default class Cooperation extends Component {
  static propTypes = {
    cooperation: PropTypes.object.isRequired,
    loadDetail: PropTypes.func.isRequired,
    params: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.loadDetail(this.props.params.slug);
  }
  render() {
    const { cooperation } = this.props;
    console.log(cooperation);
    return (

      <div className="container">
        <div className="row">
          {cooperation && <CooperationCard cooperation={cooperation} />}
        </div>
      </div>
    );
  }
}
