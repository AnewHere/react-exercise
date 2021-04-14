import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../../components/Admin/SiderMenu';
import { Route, Switch, withRouter } from 'react-router-dom';
import { mainRouters } from '../../config/Routers';
import LinkButton from '../../utils/LinkButton';

const { Header, Footer, Sider, Content } = Layout;
class Admin extends Component {


  //退出登陆
  logout = () => {
    localStorage.removeItem('username');
    this.props.history.replace('/login');
  }

  //组件挂载生命周期函数
  componentDidMount = () => {
    let user = localStorage.getItem('username');
    if (!user || user !== 'admin') {
      this.props.history.replace('/login');
    }
  }
  render () {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: 'white' }}>
            <div style={{ textAlign: 'right' }}>
              <LinkButton onClick={this.logout}>退出登陆</LinkButton>
            </div>
          </Header>
          <Content style={{ margin: '15px', background: 'white', }}>
            <Switch>
              {/* 循环遍历路由 */}
              {mainRouters.map(item => {
                return <Route key={item.path} {...item} />
              })}
            </Switch>
          </Content>
          <Footer >Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default withRouter(Admin);
