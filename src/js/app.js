import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { createStore } from 'redux'

import {PostsList} from './components/PostsList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import getMuiTheme from 'material-ui/styles/getMuiTheme'


ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Paper zDepth={1}>
      <PostsList />
    </Paper>
  </MuiThemeProvider>,
  document.getElementById('container')
)