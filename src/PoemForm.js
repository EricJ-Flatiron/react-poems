import React from 'react';
// import { PoemCard } from './PoemCard';


export class PoemForm extends React.Component{

    state = {
        name: '',
        content: '',
        id: this.props.poems.length + 1
    }

    

    setName = e => this.setState({ name: e.target.value })

    setContent = e => this.setState({ content: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        const newPoem = {...this.state}
        return this.props.makePoem(newPoem)
    }


    render(){
 
        //  console.log("!!!submit", this.handleSubmit)
        //  console.log("FORM", this)
        return (
            <div className="ui form">
                <h1>Create Poem</h1>
                <div className="field">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.setName}/>
                </div>
                <div className="field">
                    <label>Content:</label>
                    <textarea value={this.state.content} onChange={this.setContent}/>
                </div>
                <button className="ui green button" onClick={this.handleSubmit} >Create</button>
            </div>
        )
    }


}