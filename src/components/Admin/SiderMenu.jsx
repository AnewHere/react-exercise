import React, { Component } from 'react';
import { Menu } from 'antd';
import menuList from '../../config/MenuList';
import { Link, withRouter } from 'react-router-dom';

const { SubMenu } = Menu;
class SiderMenu extends Component {


  //循环遍历获取菜单列表
  getMenu = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path} icon={item.icon}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.path} icon={item.icon} title={item.title}>
            {this.getMenu(item.children)}
          </SubMenu>
        );
      }
    })
  }


  render () {
    return (
      <div style={{ width: "100%", marginTop: '60px' }}>
        <Menu
          defaultSelectedKeys={'/product'}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {this.getMenu(menuList)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(SiderMenu)