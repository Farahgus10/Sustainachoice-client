import React from 'react';
import Homepage from '../../Components/Homepage/Homepage'

export default class HomepageRoute extends React.Component{
    render() {
        return(
            <div>
                <Homepage results={this.props.results} searchTerm={this.props.searchTerm} handleSearchSubmit={this.props.handleSearchSubmit}
                updateSearch={this.props.updateSearch} handleMenuChange={this.props.handleMenuChange} path={this.props.path}
                typeFilter={this.props.typeFilter}/>
            </div>
        )
    }
}