import React from 'react'
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib'

class PostForm extends React.Component{
  getData() {
    return this.refs['formsyForm'].getModel()
  }

  render() {
    return (
      <Formsy.Form ref="formsyForm"
        onValidSubmit={this.submitForm}
      >
        <FormsyText style={{width: '100%'}}
          name="title"
          required
          hintText="What is the title of the post?"
          floatingLabelText="Post Title"
          value={this.props.post ? this.props.post.title : null}
        />
        <br/>
        <FormsyText style={{width: '100%'}}
          name="content"
          required
          hintText="What is the content of the post?"
          floatingLabelText="Post Content"
          value={this.props.post ? this.props.post.body : null}
        />
      </Formsy.Form>
    )
  }
}

module.exports = PostForm
