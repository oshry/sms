import React from "react";
import PropTypes from "prop-types";
const ListItem = ({ text, success, failed}) => (
    <li className="li-item list-group-item d-flex justify-content-between align-items-center">
        <span>{text}</span>
        <span className="badge badge-primary badge-pill">{success}</span>
        <span className="badge badge-danger badge-pill">{failed}</span>
    </li>
);
ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
    failed: PropTypes.string.isRequired,
};
export default ListItem;