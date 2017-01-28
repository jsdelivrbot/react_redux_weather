import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        // CONTEXT
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term : event.target.value });

    }
    onFormSubmit(event) {
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Give a five-day forecast in your favorite cities."
                       className="form-control"
                       value={this.state.term}
                       // IF YOU USE THIS TYPE OF SENDING DATA YOU NEED TO SET THE CONTEXT ANYWAY YOU CAN DO THIS WAY WITHOUT THE CONTEXT:
                      // onChange = { event => this.onInputChange(event.target.value) }
                       onChange={ this.onInputChange }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}
