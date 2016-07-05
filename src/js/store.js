import { createStore } from 'redux'
import {addPost, deletePost, deletePost2, listPosts} from './actions'
import $ from 'jquery'

var defaultState = {
  posts: []
}

function postsApp(state, action) {
  switch (action.type) {
    case 'ADD_POST':
      action.post.id = state.posts.length + 1
      $.ajax('http://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        data: action
      }).then(function(data) {
        var items = [].concat(state.posts).concat(action.post)
        store.dispatch(listPosts(items))
      })
      return state

    case 'DELETE_POST':
      $.ajax('http://jsonplaceholder.typicode.com/posts/' + (action.index + 1), {
        method: 'DELETE'
      }).then(function(data) {
        var items = [].concat(state.posts)
        items.splice(action.index, 1)

        store.dispatch(listPosts(items))
      })
      return state

    case 'FETCH_POSTS':
      $.ajax('http://jsonplaceholder.typicode.com/posts/', {
        method: 'GET'
      }).then(function(data) {
        var count = 0
        var posts = []

        data.forEach((post) => {
          if (count < 20) {
            posts.push(post)
            count += 1
          }
        })
        store.dispatch(listPosts(posts))

      })
      return state

    case 'LIST_POSTS':
      return Object.assign({}, state, {
        posts: action.posts,
        selectedIndex: 0
      })
      return state

    case 'SELECT_POST':
      return Object.assign({}, state, {
        posts: state.posts,
        selectedIndex: action.index
      })

    case 'UPDATE_POST':
      /*$.ajax('http://jsonplaceholder.typicode.com/posts/', {
        method: 'UPDATE',
        data: action.post
      }).then(function(data) {
      })*/
        
      var state = state
      state.posts[action.index].title = action.post.title
      state.posts[action.index].body = action.post.content
      state.updated = true
      return state

    default:
      return state
  }
}

var store = createStore(postsApp, defaultState)
module.exports = store
