import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import PostForm from './PostForm'
import store from '../store'
import {addPost} from '../actions'


class AddPostDialog extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }
  
  handleSubmit = () => {
    var data = this.refs['form'].getData()
    store.dispatch(addPost({title: data.title, body: data.content, userId: 1}))
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({open: false})
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
        <FloatingActionButton mini={true} secondary={true} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add Post"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <PostForm ref="form"/>
        </Dialog>
      </div>
    )
  }
}

module.exports = AddPostDialog
