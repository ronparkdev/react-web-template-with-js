import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const DetailCard = ({ id, title }) => {
  return (
    <Link to={`/details/${id}`}>
      <div>{title}</div>
    </Link>
  );
};

DetailCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DetailCard;
