import React from 'react'
import Results from '../../Components/Results/ResultsPage'

export default class ResultsRoute extends React.Component{
    render() {
        return (
            <div>
                <Results results={this.props.results} searchTerm={this.props.searchTerm} expandedView={this.props.expandedView} 
        toggleExpandedItem={this.props.toggleExpandedItem} handleSearchSubmit={this.props.handleSearchSubmit} updateSearch={this.props.updateSearch} 
        handleMenuChange={this.props.handleMenuChange} typeFilter={this.props.typeFilter}/>
            </div>
        )
    }
}