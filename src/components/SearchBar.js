import React, { Component } from 'react';   

class SearchBar extends Component {
    constructor(props)
    {
        super(props);
        this.state = { term:'' }
    }

    
    render() { 
        return ( 
                 <div className="form-input">
                    <input placeholder="search" className="form-control" onChange={event=>this.onInputChange(event.target.value)}/>
                    <br/>
                </div>
 
        );
    }

    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
 
export default SearchBar;
