import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import { connect } from 'react-redux';
import { Typography, Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, } from '@material-ui/core';
import { Link } from 'react-router-dom'
import People from '../people.js'
import Films from '../films'
import Species from '../species'

const STYLES = theme => ({
    marginXY: {
        marginTop: 80,
        marginLeft: 150,
        marginRight: 150
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 400,
        color: '#000'
    },
})

class Results extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }


    render() {
        const { classes } = this.props
        let data = this.props.details || false
        let type = this.props.type
        console.log('result type', type)
        let content
        if (type == "films") {
            if (data)
                content = data.map((e, index) => {
                    return <Films data={e} key={index} />
                })
        }
        else if (type == "people") {
            if (data)
                content = data.map((e, index) => {
                    return <People data={e} key={index} />
                })
        }
        else {
            if (data)
                content = data.map((e, index) => {
                    return <Species data={e} key={index} />
                })
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ..._.pick(state.ResultPage, ['details'])
    }
}
export default connect(mapStateToProps, null)(withStyles(STYLES)(Results))