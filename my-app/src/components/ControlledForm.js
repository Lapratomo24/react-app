import React, { Component } from 'react'

export class ControlledForm extends Component {
constructor(props) {
  super(props)

  this.state = {
     name: '',
     website: 'website',
     comments: '',
  }
}

    handleNameChange = (e) => {
        let newValue = e.target.value
        this.setState({
            name: newValue
        })
    }

    handleCategoryChange = (e) => {
        let newValue = e.target.value
        this.setState({
            category: newValue
        })
    }

    handleCommentsChange = (e) => {
        let newValue = e.target.value
        this.setState({
            comments: newValue
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input value={this.state.name} onChange={this.handleNameChange} id='id-name' name='name' type='text' />
                <input type='submit' value='Submit' />
            </div>
            <div>
                <label htmlFor='id-category'>Query category</label>
                <select value={this.state.category} onChange={this.handleCategoryChange} id='id-category' name='category'>
                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>   
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange} id='id-comments' name='comments' />
            </div>
            <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default ControlledForm