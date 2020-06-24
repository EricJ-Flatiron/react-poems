import React from 'react';
import { PoemCard } from './PoemCard';

//esport default class PoemList estend Compnent{
// constructor(props){
//     super(props)
//     this.state={
//         name:
//     }
// }
//}

export function PoemList(props){
    // console.log("PROPS", props)
    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
        {props.poems.map( poem => (
            <PoemCard 
                poem={poem}
                key={poem.id}
                name={poem.name}
                content={poem.content}
                deletePoem={props.deletePoem}
                editPoem={props.editPoem}
            />
        ))}
        </div>
    )
}