import React from "react";
import PropTypes from "prop-types";
import Li from "../container/LiContainer.jsx";

const ResultsList = ({ list }) => (
    <div className="my-list">
        <ul className="list-group">
            {list.map((item, key) => {
                    return <Li
                        key={key}
                        item={item.showDate}
                        success={item.success}
                        failed={item.failed}
                    />
            })
            }
        </ul>

    </div>
);
ResultsList.propTypes = {
    list: PropTypes.array,
};
export default ResultsList;