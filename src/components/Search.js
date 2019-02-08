import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import Results from './Results/Results'

export default class Search extends Component {
    render() {
        console.log(this.props)
        let data = this.props.location.state || false
        if (data) {
            data = data.type
        }
        else {
            window.location.href = '/'
        }
        return (
            <div style={{ marginTop: 120, marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                Search for {data}
                <SearchBar type={data} />
                <Results type={data} />
            </div>
        )
    }
}
