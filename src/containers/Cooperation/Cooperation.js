import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as cooperationActions from 'redux/modules/cooperations';
import { CooperationList } from 'components';

@connect(
  state => ({
    cooperations: state.cooperations.data,
    load: PropTypes.func.isRequired,
  }),
  { ...cooperationActions })
export default class Cooperation extends Component {
  static propTypes = {
    cooperations: PropTypes.array.isRequired,
    load: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.load();
  }
  render() {
    const { cooperations } = this.props;
    console.log(cooperations);
    return (

      <div className="container">
        <div className="row">
          {cooperations && cooperations.map(cooperation => <CooperationList cooperation={cooperation} />)}
        </div>
      </div>
    );
  }
}
