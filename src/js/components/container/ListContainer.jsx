import React, {Component} from 'react';
import ResultsList from "../presentational/ResultsList.jsx";

class List extends Component {
    render() {
        {console.log('this.props')}
        {console.log(this.props)}
        return (
                <ResultsList
                    list={this.props.list}
                />
        );
    }
}

export default List;