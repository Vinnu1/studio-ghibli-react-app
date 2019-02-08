import React, { Component } from 'react'
import { Card, CardContent, Modal, Typography, Button, CardActions } from '@material-ui/core'
import { addToFavourites } from '../actions/index'
import { connect } from 'react-redux';


class People extends Component {
    constructor(props) {
        super()
        this.state = {
            open: false,
            favourite: false
        }
    }

    handleOpen() {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({ open: false })
    }

    addToFavourites(data) {
        this.setState({ favourite: true }, () => {
            this.props.addToFavourites('People - ' + data.name)
        })
    }

    render() {
        let data = this.props.data
        if (!data.gender) {
            return null
        }
        return (
            <div>
                <Card style={{ width: '100%', marginBottom: 10 }}  >
                    <CardContent>
                        Name: {data.name}<br />
                        Gender: {data.gender}
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={() => this.handleOpen()}>Show More</Button>
                    </CardActions>
                </Card>
                <Modal
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                ><div style={{ marginTop: 150, backgroundColor: '#000', display: 'flex', justifyContent: 'center', padding: 20 }}>
                        <Typography variant="title" color="secondary" id="modal-title">
                            Name: {data.name}<br /><br />
                            Gender: {data.gender}<br /><br />
                            Age:{data.age}<br /><br />
                            Hair Color:{data.age}<br /><br />
                            Eye Color:{data.eye_color}<br /><br />
                            ID: {data.id}
                        </Typography><br />
                        {(this.state.favourite) ? <span style={{ color: '#ccc' }}>Saved in Favorites</span> : <Button color="primary" onClick={() => this.addToFavourites(data)}>Favourite it</Button>}
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavourites: (data) => dispatch(addToFavourites(data))
    }
}
export default connect(null, mapDispatchToProps)(People)