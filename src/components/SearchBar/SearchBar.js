import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import { searchPressed } from '../../actions/index'
import { COLORS } from '../../resources/theme';
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Grid } from '@material-ui/core'
import Autosuggestion from '../autosuggestion'
import _ from 'lodash'


const STYLE = theme => ({
    searchBarAlign: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    searchBar: {
        width: 200,
        '& label': {
            color: COLORS.black
        }
    },
    buttonSection: {
        marginLeft: 10,
        marginTop: 10
    },
    formLabel: {
        color: theme.palette.text.primary
    },
    checkbox: {
        color: theme.palette.text.tertiary
    }
})

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            pin: "",
            filter: false,
            searchButton: true,
            male: false,
            female: false,
            NA: false,
            less100: false,
            less80: false,
            less40: false,
            mammal: false,
            elk: false,
            spirit: false,
            god: false,
        }
    }

    // handlePriceCheck = event => {
    //     this.setState({ priceCheck: !this.state.priceCheck })
    // }

    handlePriceCheck = (name, event) => {
        console.log('Inside handlepricecheck')
        this.setState({ [name]: event.target.checked }, () => {
            console.log(this.state)
        });
    };

    componentDidMount() {
        let filters = []
        if (this.props.type == "films") {
            filters = [50, 80, 100]
        }
        else if (this.props.type == "people") {
            filters = ["Male", "Female", "NA"]
        }
        else {
            filters = ["Mammal", "Elk", "Spirit", "God"]
        }
        //let filters = [this.state.saving, this.state.checking, this.state.auto, this.state.creditCard, this.state.investment, this.state.personal, this.state.money, this.state.home, this.state.deposit, this.state.withdrawal, this.state.invoice, this.state.payment]
        console.log('filters in submit:', filters)
        this.props.searchPressed(filters, this.props.type)
    }

    submit = () => {
        console.log(this.props)
        let filters = []
        if (this.props.type == "films") {
            filters = [(this.state.less40) ? 50 : false, (this.state.less80) ? 80 : false, (this.state.less100) ? 100 : false]
        }
        else if (this.props.type == "people") {
            filters = [(this.state.male) ? "Male" : false, (this.state.female) ? "Female" : false, (this.state.NA) ? "NA" : false]
        }
        else {
            filters = [(this.state.mammal) ? "Mammal" : false, (this.state.elk) ? "Elk" : false, (this.state.spirit) ? "Spirit" : false, (this.state.god) ? "God" : false]
        }
        //let filters = [this.state.saving, this.state.checking, this.state.auto, this.state.creditCard, this.state.investment, this.state.personal, this.state.money, this.state.home, this.state.deposit, this.state.withdrawal, this.state.invoice, this.state.payment]
        console.log('filters in submit:', filters)
        this.props.searchPressed(filters, this.props.type)
    }

    render() {
        const { classes } = this.props
        console.log(this.props)
        let filter
        if (this.props.type == "films") {
            filter = (
                <div>
                    <Autosuggestion suggest={this.props.details} />
                    <FormLabel className={classes.formLabel} component="legend">RT Score</FormLabel>
                    <FormGroup >
                        <FormControlLabel
                            control={
                                <Checkbox className={classes.checkbox} color="primary" checked={this.state.less40} onClick={(event) => this.handlePriceCheck('less40', event)} value="1" />
                            }
                            label="Less <= 50"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox className={classes.checkbox} color="primary" checked={this.state.less80} onChange={(event) => this.handlePriceCheck('less80', event)} value="2" />
                            }
                            label="Less <= 80"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox className={classes.checkbox} color="primary" checked={this.state.less100} onChange={(event) => this.handlePriceCheck('less100', event)} value="2" />
                            }
                            label="Less <= 100"
                        />


                    </FormGroup>
                </div>
            )
        }
        else if (this.props.type == "people") {
            filter = (
                <div>
                    <Autosuggestion suggest={this.props.details} />
                    <FormLabel className={classes.formLabel} component="legend">Gender</FormLabel>
                    <FormGroup >
                        <FormControlLabel
                            control={
                                <Checkbox className={classes.checkbox} color="primary" checked={this.state.male} onClick={(event) => this.handlePriceCheck('male', event)} value="1" />
                            }
                            label="Male"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox className={classes.checkbox} color="primary" checked={this.state.female} onChange={(event) => this.handlePriceCheck('female', event)} value="2" />
                            }
                            label="Female"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox className={classes.checkbox} color="primary" checked={this.state.NA} onChange={(event) => this.handlePriceCheck('NA', event)} value="2" />
                            }
                            label="N/A"
                        />
                    </FormGroup>
                </div>
            )
        }
        else {
            filter = (<div>
                <FormLabel className={classes.formLabel} component="legend">Classification</FormLabel>
                <FormGroup >
                    <FormControlLabel
                        control={
                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.mammal} onClick={(event) => this.handlePriceCheck('mammal', event)} value="1" />
                        }
                        label="Mammal"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.elk} onChange={(event) => this.handlePriceCheck('elk', event)} value="2" />
                        }
                        label="Elk"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.spirit} onChange={(event) => this.handlePriceCheck('spirit', event)} value="2" />
                        }
                        label="Spirit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.god} onChange={(event) => this.handlePriceCheck('god', event)} value="2" />
                        }
                        label="God"
                    />
                </FormGroup>
            </div>)
        }
        return (
            <div>
                <div className={classes.searchBarAlign}>
                    <div className={classes.buttonSection}>
                        <Button color="primary" variant="contained" onClick={() => this.submit()}>Search</Button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginLeft: 20 }}>

                    <FormControl component="fieldset">
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                {filter}
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ..._.pick(state.ResultPage, ['details'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPressed: (filters, type) => dispatch(searchPressed(filters, type))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(STYLE)(SearchBar))