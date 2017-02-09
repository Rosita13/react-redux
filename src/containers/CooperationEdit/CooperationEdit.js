/* eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react';
import { CooperationEditForm } from 'components';

export default class CooperationEdit extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <CooperationEditForm />
        </div>
      </div>
    );
  }
}
