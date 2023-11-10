import React, { Component } from 'react'

export default class Comp2 extends Component {
  render() {
    return (
      <div>
        
<div >
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={this.props.pic1} alt="" />
      </figure>
      <div class="article-body">
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
      
      </div>
    </div>
  </article>
</section>
  
</div>

      </div>
    )
  }
}
