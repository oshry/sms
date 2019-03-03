import React, {Component} from "react";

const axios = require('axios');
import Messages from "../presentational/Messages.jsx";

class MessagesContainer extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            user: "",
            country: "",
            dateFrom: "",
            dateTo: ""
        };
    }

    buildResults = (my_list) => {
        this.setState(({list}) => ({
            list: my_list.data
        }));

    }

    searchMessage = () => {
        console.log(document.getElementById("dateFrom").value);
        let dateFrom = document.getElementById("dateFrom").value;
        let dateTo = document.getElementById("dateTo").value;
        let country = document.getElementById("country").value;
        let user = document.getElementById("user").value;
        axios.get(`http://localhost:8070/api/v1/filter`, {
            params: {
                from: dateFrom,
                to: dateTo,
                cnt: country,
                uid: user
            }
        })
            .then(response => response)
            .then(
                response => {
                    this.buildResults(response);
                }
            )
            .catch(function (error) {
                // handle error
            })
    };

    handleChange = event => {
        console.log('handleChange');
        this.setState({[event.target.id]: event.target.value});
    }

    handleFilter = e => {
        e.preventDefault();
        console.log('submit');
        this.searchMessage();

    };

    render() {
        const {list, country, user, dateFrom, dateTo} = this.state;
        return (
            <div id="messages">
                <Messages
                    list={list}
                    country={country}
                    user={user}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    handleSort={this.handleFilter}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default MessagesContainer;