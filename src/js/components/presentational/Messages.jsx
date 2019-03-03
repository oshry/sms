import React from "react";
import PropTypes from "prop-types";
import List from "../container/ListContainer.jsx";
const Messages = ({ list, country, user, dateFrom, dateTo, handleSort, handleChange }) => (
    <div className="form-group">
        <form>
            <div className="form-group">
                <label htmlFor="">Date From</label>
                <input id="dateFrom" className="form-control" type="date" onChange={handleChange} value={dateFrom}/>
            </div>
            <div className="form-group">
                <label htmlFor="dateTo">Date To</label>
                <input id="dateTo" className="form-control" type="date" onChange={handleChange} value={dateTo}/>
            </div>
            <div className="form-group">
                <label htmlFor="country">Country Name</label>
                <input id="country" className="form-control" type="text" onChange={handleChange} value={country}/>
            </div>
            <div className="form-group">
                <label htmlFor="user">User ID</label>
                <input id="user" className="form-control" type="text" onChange={handleChange} value={user}/>
            </div>
            <button onClick={handleSort.bind(this)}>Filter</button>
        </form>

        <div className="my-list">
            <ul>
                <List
                    list={list}
                />
            </ul>

        </div>
    </div>
);
Messages.propTypes = {
    user: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    handleSort: PropTypes.func,
    handleChange: PropTypes.func,
    list: PropTypes.array,
};
export default Messages;