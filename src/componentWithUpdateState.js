import React, {Component} from 'react';
class ComponentWithUpdateState extends Component
{
  constructor(props) {
    super(props);
    props.state = {data: ''};
  }

  changeState(event){
    this.state = {data: event.target.value}
  }

  render()
  {
    return (<form>
      <input type="text" value={this.state.data} onKeyUp={(event) => this.changeState(event)}/>
      <p>{this.state.data}</p>
    </form>)
  }
}


export default ComponentWithUpdateState;
