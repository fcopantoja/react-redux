import React from 'react'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import UpdatePostDialog from './UpdatePostDialog'
import store from '../store'
import {deletePost, updatePost} from '../actions'

class PostDetail extends React.Component {
  state = {
    posts: [],
    selectedIndex: -1
  }

  onDeleteClick() {
    store.dispatch(deletePost(this.state.selectedIndex))
  }

  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState()
      
      this.setState({
        posts: state.posts,
        selectedIndex: state.selectedIndex
      })
    })
  }

  render() {
    const style = {
      margin: 12,
    }

    return (
      <Drawer width={600} openSecondary={true} open={true}>
        <AppBar title="Detail" />
        {this.state.selectedIndex >= 0 ?
          <div style={{padding: '30px'}}>
            <h3>{this.state.posts[this.state.selectedIndex].title}</h3>
            <span>{this.state.posts[this.state.selectedIndex].body}</span>
            <br/>
            <br/>
            <div>
              <span>User ID: {this.state.posts[this.state.selectedIndex].userId}</span>
              <br/>
              <span>Post ID: {this.state.posts[this.state.selectedIndex].id}</span>
            </div>
            <div style={{textAlign: 'center'}}>
              <UpdatePostDialog label="Edit" style={style} selectedIndex={this.state.selectedIndex} />
              <RaisedButton label="Delete" secondary={true} style={style} onClick={this.onDeleteClick.bind(this)}/>
            </div>
          </div>: null}
      </Drawer>
    )
  }
}

module.exports = PostDetail
