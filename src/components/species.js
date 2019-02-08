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
            this.props.addToFavourites('Species - ' + data.name)
        })
    }

    render() {
        let data = this.props.data
        if (!data.classification) {
            return null
        }
        return (
            <div>
                <Card style={{ width: '100%', marginBottom: 10 }}  >
                    <CardContent>
                        Name: {data.name}<br />
                        Classification: {data.classification}
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
                            Classification: {data.classification}<br /><br />
                            Eye Colors: {data.eye_colors}<br /><br />
                            Hair Colors: {data.hair_colors}<br /><br />
                            ID:{data.id}<br /><br />
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