

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CooperationList = ({ cooperation }) => (
  <div>
    <div className="media well">
      <div className="media-body">
        <h4 className="media-heading">
          <strong>
            <Link to={`cooperation/${cooperation.slug}`}>{cooperation.name}</Link>
          </strong>
        </h4>
        {cooperation.name} <br />
        {cooperation.price} <br />
        {cooperation.quality} <br />
        {cooperation.type} <br />
        {cooperation.total} <br />
        <br />
      </div>
    </div>
  </div>
);

CooperationList.propTypes = {
  cooperation: PropTypes.object.isRequired
};

export default CooperationList;
