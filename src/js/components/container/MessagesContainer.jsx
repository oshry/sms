import React, {Component} from "react";
import { connect } from 'react-redux'
import { fetchAppsIfNeeded, fetchAppsSearch } from '../../redux/actions'

const axios = require('axios');
import Messages from "../presentational/Messages.jsx";

class MessagesContainer extends Component {
    constructor() {
        super();
        // this.onChange = this.onChange.bind(this);
        this.state = {
            list: [],
            user: "",
            country: "",
            dateFrom: "",
            dateTo: ""
        };
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchAppsIfNeeded())
    }

    buildResults = (my_list) => {
        this.setState(({list}) => ({
            list: my_list.data
        }));

    }

    searchMessage = () => {
        const { dispatch } = this.props
        dispatch(fetchAppsSearch())
    };

    handleChange = event => {
        console.log('handleChange');
        console.log(event.target);

        this.setState({[event.target.id]: event.target.value});
    }

    handleFilter = e => {
        e.preventDefault();
        console.log('submit');
        this.searchMessage();

    };

    render() {
        let country = "";
        let user = "";
        let dateFrom = "2016-01-01";
        let dateTo = "2222-01-01";
        const { isFetching, apps} = this.props

        return (
            typeof apps !== "undefined"?
            <div id="messages">
                <Messages
                    list={apps}
                    country={country}
                    user={user}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    handleSort={this.handleFilter}
                />
            </div>
                :
                <span>Loading wells...</span>
        );
    }
}

function mapStateToProps(state) {
    const { isFetching, apps } = state

    return {
        isFetching,
        apps
    }
}

export default connect(mapStateToProps)(MessagesContainer)
