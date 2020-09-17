import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentSelection: 'profile'
  }

  changeState = (arg) => {
    this.setState({ currentSelection: arg })
  }

  renderSelect = () => {
    if (this.state.currentSelection === 'profile') {
      return <Profile/>
    } else if (this.state.currentSelection === 'photo') {
      return <Photos/>
    }else if (this.state.currentSelection === 'cocktail') {
      return <Cocktails/>
    } else if (this.state.currentSelection === 'pokemon') {
      return <Pokemon/>
    }
  }

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.renderSelect()}</div>

    return (
      <div>
        <MenuBar changeState={this.changeState} currentSelection={this.state.currentSelection}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
