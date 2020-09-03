import React, { Component } from 'react';
import fblogo from '../svgFiles/fb.svg'
import { Menu } from 'antd';
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item >
        <img  src={fblogo} alt='' />
          
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;
