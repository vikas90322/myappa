import React, { Component } from 'react'
import Comp2 from './Comp2'

export default class Comp1 extends Component {
    State={
        name1:'French Vanilla',
        pic1:'https://nicicecreams.com/wp-content/uploads/2023/01/IP-French-Vanilla.png'
    }
  render() {
    return (
      <div>
        
<Comp2 name1={this.State.name1} pic1={this.State.pic1}/>

      </div>
    )
  }
}
