/* eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react';
import { CooperationCreateForm } from 'components';

export default class Cooperation extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <CooperationCreateForm />
        </div>
      </div>
    );
  }
}
