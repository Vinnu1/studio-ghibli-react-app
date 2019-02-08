import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux';

class Favourites extends Component {
    render() {
        console.log(this.props)
        let favourites = this.props.favourites || false
        let content = (<div>No favourites yet, go and make some.</div>)
        if (favourites.length > 0) {
            content = favourites.map(e => {
                return <li>{e}</li>
            })
        }
        return (
            <div style={{ marginTop: 120, marginBottom: 50, display: 'flex', justifyContent: 'center' }}>
                <ul>
                    {content}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ..._.pick(state.ResultPage, ['favourites'])
    }
}
export default connect(mapStateToProps, null)(Favourites)
