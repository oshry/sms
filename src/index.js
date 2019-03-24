import React from "react";
import {Provider} from 'react-redux'
// import ReactDOM from "react-dom";
import {render} from 'react-dom'
import configureStore from './js/redux/configureStore'
import MessagesContainer from "./js/components/container/MessagesContainer.jsx";

const messages = document.getElementById("messages");

// messages ? ReactDOM.render(<MessagesContainer />, messages) : false;



// Create a fresh store
const store = configureStore()

render(
    <Provider store={store} >
        <MessagesContainer />
    </Provider>,
    messages
)
// render(
// <Provider store={store} >
//     <App />
//     </Provider>,
// document.querySelector('#app')
// )