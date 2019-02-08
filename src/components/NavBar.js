import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const STYLES = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: 10
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center'
    },
    toolbar2: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    appbar: {
    },
    primaryText: {
        color: theme.palette.text.primary
    },
    secondaryText: {
        color: theme.palette.secondary.main,
    },
    link: {
        textDecoration: 'none'
    }
});

class NavBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="fixed" color="primary">
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.secondaryText} variant="title">
                            STUDIO GHIBLI
                        </Typography>
                    </Toolbar>
                    <div className={classes.toolbar2}>
                        <Link className={classes.link} to="/"><Typography className={classes.secondaryText}>
                            Categories
                        </Typography></Link>
                        <Link className={classes.link} to="/favourites">
                            <Typography className={classes.secondaryText}>
                                Favourites
                        </Typography>
                        </Link>
                    </div>
                </AppBar>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(STYLES)(NavBar);