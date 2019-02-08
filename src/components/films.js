import React, { Component } from 'react'
import { Card, CardContent, Modal, Typography, Button, CardActions } from '@material-ui/core'
import { addToFavourites } from '../actions/index'
import { connect } from 'react-redux';


class Film extends Component {

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
            this.props.addToFavourites('Film - ' + data.title)
        })
    }

    render() {
        let data = this.props.data
        if (!data.title) {
            return null
        }
        return (
            <div>
                <Card style={{ width: '100%', marginBottom: 10 }}  >
                    <CardContent>
                        Title: {data.title}<br />
                        Description: {data.description}
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
                            Title: {data.title}<br /><br />
                            Description: {data.description}<br /><br />
                            Director:{data.director}<br /><br />
                            Release Date:{data.release_date}<br /><br />
                            RT Score:{data.rt_score}<br /><br />
                            Producer:{data.producer}<br /><br />
                            ID: {data.id}
                        </Typography><br />
                        {(this.state.favourite) ? <span style={{ color: '#ccc' }}>Saved in Favorites</span> : <Button color="primary" onClick={() => this.addToFavourites(data)}>Favourite it</Button>}
                    </div>
                </Modal>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavourites: (data) => dispatch(addToFavourites(data))
    }
}
export default connect(null, mapDispatchToProps)(Film)