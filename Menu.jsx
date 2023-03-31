import React, { Component } from 'react'
import "../Components/Menu.css"
import SubMenu from './SubMenu';
import pic1 from "../images/coffee.png"

export default class Menu extends Component {
    state={Posts:[
      {title:"Americano"},
      {title:"chocolate"},
      {title:"Macchiato"},
      {title:"Espressoo"},
    ]}
  render() {
    return (
      <section id='menu'>
        <div className='innerMenu'>
        <h1>Bill of Fare</h1>
        <div className=''>
        <SubMenu img={pic1} title={this.state.Posts[0].title} description={this.state.Posts[0].description} price="$3" />
        <SubMenu img={pic1} title={this.state.Posts[1].title} description={this.state.Posts[1].description} price="$5" />
        <SubMenu img={pic1} title={this.state.Posts[2].title} description={this.state.Posts[2].description} price="$5" />
        <SubMenu img={pic1} title={this.state.Posts[3].title} description={this.state.Posts[3].description} price="$4" />
        </div>
        </div>
      </section>
    )
  }
}
