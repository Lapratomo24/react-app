import React, { Component } from 'react'
import namess from './names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: namess
        }
    }

    handleChange = (e) => {
        const inputText = e.target.value.toLowerCase()
        const filteredNames = namess.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }

    render() {
        return (
        <div>
            <h1>Name Search</h1>
            <p>matching names found: {this.state.names.length}</p>
            <form>
                <input onChange={(e) => this.handleChange(e)} type='text' placeholder='search names...' />
            </form>
            <div style={{margin: 'auto'}}>
                {this.state.names.map(name => {
                    return <p key={name}>{name}</p>
                })}
            </div>
        </div>
        )
    }
}

export default SearchBar