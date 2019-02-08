import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

const STYLES = theme => ({
    link: {
        textDecoration: 'none',
        color: '#000'
    }
})

class Categories extends Component {
    render() {
        let { classes } = this.props
        return (
            <div style={{ marginTop: 120, marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Link to={{ pathname: '/search', state: { type: 'films' } }} className={classes.link}><Card style={{ padding: 20, marginBottom: 20, marginTop: 20, background: '#ccc' }}>
                    <CardContent>
                        Films
                </CardContent>
                </Card>
                </Link>
                <Link to={{ pathname: '/search', state: { type: 'people' } }} className={classes.link}><Card style={{ padding: 20, marginBottom: 20, marginTop: 20, background: '#ccc' }}>
                    <CardContent >
                        <span style={{ color: '#000' }}>People</span>
                    </CardContent>
                </Card>
                </Link>
                <Link to={{ pathname: '/search', state: { type: 'species' } }} className={classes.link}>
                    <Card style={{ padding: 20, marginBottom: 20, marginTop: 20, background: '#ccc' }}>
                        <CardContent>
                            Species
                </CardContent>
                    </Card>
                </Link>
            </div >
        )
    }
}

export default withStyles(STYLES)(Categories)