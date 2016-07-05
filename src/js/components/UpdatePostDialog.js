import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import PostForm from './PostForm'
import store from '../store'
import {updatePost} from '../actions'


class UpdatePostDialog extends React.Component {
  state = {
    open: false,
    post: null
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }
  
  handleSubmit = () => {
    var data = this.refs['updateForm'].getData()
    store.dispatch(updatePost(this.state.selectedIndex, data))
  }

  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState()
      state.post = state.posts[state.selectedIndex]
      this.setState(state)

      if(state.updated)
        this.handleClose()
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ]

    return (
      <div>
        <RaisedButton label="Update" secondary={false} onClick={this.handleOpen}/>
        <Dialog
          title="Update Post"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <PostForm ref="updateForm" post={this.state.post}/>
        </Dialog>
      </div>
    )
  }
}

module.exports = UpdatePostDialog
