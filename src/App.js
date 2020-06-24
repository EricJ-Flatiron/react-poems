import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';
// import { PoemCard } from './PoemCard';

class App extends React.Component {
  
  

  state = {
    poems: poems
  }

  makePoem = (poem) => {
    this.setState({poems: [...this.state.poems, poem]})
  }

  deletePoem = (delPoem) => {
    this.setState({poems: this.state.poems.filter( poem => poem != delPoem)})
  }

  editPoem = (editPoem, editContent) => {
    // console.log("EDIT POEM" , editPoem)
    // console.log("EDIT POEM C" , editContent)
    
    editPoem.content = editContent
    let newArr = this.state.poems.map(p=> p.id === editPoem.id ? editPoem : p) //everything EXCEPT the poe
    this.setState({poems: newArr})
    // this.setState({poems: this.state.poems.map(poem => poem.content = editContent)})
    
    // editPoem.content = editContent
    // this.setState({})
    
  }
  
  
  render(){
    //  console.log(this.state.poems)
    return (
      <div className="ui container">
        <PoemForm poems={this.state.poems} makePoem={this.makePoem}/>
        <PoemList poems={this.state.poems} deletePoem={this.deletePoem} editPoem={this.editPoem}/>
      </div>
    );
  }

}

export default App;
