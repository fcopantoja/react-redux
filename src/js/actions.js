function addPost(post) {
  return {
    type: 'ADD_POST',
    post: post
  }
}

function deletePost(index) {
  return {
    type: 'DELETE_POST',
    index: index
  }
}

function fetchPosts() {
  return {
    type: 'FETCH_POSTS'
  }
}

function listPosts(posts) {
  return {
    type: 'LIST_POSTS',
    posts: posts
  }
}

function selectPost(index) {
  return {
    type: 'SELECT_POST',
    index: index
  }
}

function updatePost(index, post) {
  return {
    type: 'UPDATE_POST',
    index: index,
    post: post
  }
}

module.exports = {addPost, deletePost, listPosts, fetchPosts, selectPost, updatePost}
