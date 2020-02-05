import { Provider} from 'react-redux'
import GlobalState from './reducers'
import { createStore } from 'redux'
import React from 'react'
import App from "../components/App"

export default class ReduxProvider extends React.Component {

    constructor(props){
        super(props);
        this.initialState = { 
            awardsItems: [],
            educationItems: [],
            experienceItems: [],
            presentationItems: [],
            projectItems: [],
            learnMoreItems: []
         };
        this.store = this.configureStore()
    }

    render(){
        return(
        <Provider store={this.store}>
            <App />
        </Provider>
        );
    }

    configureStore(){
        return createStore(GlobalState, this.initialState);
    }

}