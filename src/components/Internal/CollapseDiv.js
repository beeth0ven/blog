import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { defaultMargin } from './constants';

class CollapseDiv extends Component {

  constructor() {
    super();

    this.state = {
      isShow: false
    }
  }

  onClick = () => this.setState({isShow: !this.state.isShow});
  buttonTitle = () => {
    const { showButtonTitle = 'Show', hideButtonTitle = 'Hide' } = this.props;
    return !this.state.isShow ? showButtonTitle : hideButtonTitle;
  };

  buttonBSStyle = () => !this.state.isShow ? 'default' : 'info' ;

  render() {
    return (
      <div style={{marginTop:defaultMargin}}>
        <Button
          bsStyle={this.buttonBSStyle()}
          onClick={this.onClick}>
          {this.buttonTitle()}
        </Button>
        <Collapse in={this.state.isShow}>
          <div style={{marginTop:defaultMargin}}>
            {this.props.children}
          </div>
        </Collapse>
      </div>
    )
  }
}

export default CollapseDiv;