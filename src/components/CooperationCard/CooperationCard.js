/* eslint linebreak-style: ["error", "windows"]*/
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CooperationCard = ({ cooperation }) => (
  <div>
    <div className="media well">
      <div className="media-body">
        <h4 className="media-heading">
          <strong>
            <Link to={`/cooperation/${cooperation.slug}`}>{cooperation.name}</Link>
            <Link to={`/cooperation/${cooperation.slug}/edit`}> edit</Link>
          </strong>
        </h4>
        {cooperation.name} <br />
        {cooperation.price} <br />
        {cooperation.quality} <br />
        {cooperation.type} <br />
        {cooperation.total} <br />
        <br />
        <Link to={'/cooperations'}>Back</Link>
      </div>
    </div>
  </div>
);

CooperationCard.propTypes = {
  cooperation: PropTypes.object.isRequired
};

export default CooperationCard;
