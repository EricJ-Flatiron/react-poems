import React from 'react';
import { EditPoemButton } from './EditPoemButton';



// export function handleDelete(e) {
//     console.log("E", e.target)
//     return this.props.deletePoem(this.state)
// }

export function PoemCard(props){
    //  console.log(props)
    return (
        
        <div className="ui card">
            <div className="content">
                <div className="header">{props.name}</div>
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="content">
                <button onClick={() => props.deletePoem(props.poem)} className="ui red button">Delete</button>
                <EditPoemButton poem={props.poem} editPoem={props.editPoem}/>
            </div>
        </div>
    )
}