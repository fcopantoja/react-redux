import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import store from '../store'
import AppBar from 'material-ui/AppBar'
import PostDialog from './AddPostDialog'
import PostDetail from './PostDetail'
import {fetchPosts, selectPost} from '../actions'

class PostItem extends React.Component {
  onSelectedClick() {
    store.dispatch(selectPost(this.props.index))
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText={this.props.data.title}
        secondaryText={this.props.data.id}
        onClick={this.onSelectedClick.bind(this)}
      />
    )
  }
}

class PostsList extends React.Component {
  state = {
    posts: [],
    selectedIndex: -1
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

  componentDidMount() {
    store.dispatch(fetchPosts())
  }

  render() {
    var items = []

    this.state.posts.forEach((item, index) => {
      items.push(<PostItem
        key={index}
        index={index}
        data={item}
      />)
    })

    return (
      <div>
        <PostDetail/>
        <AppBar title="Post Lists" iconElementLeft={<PostDialog />}/>
        <List>{ items }</List>
      </div>
    )
  }
}

module.exports = {PostItem, PostsList}
