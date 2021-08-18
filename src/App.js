import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Menu, Avatar } from 'antd';
import Title from 'antd/lib/typography/Title'
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css';

const { Header, Footer, Sider, Content } = Layout
const logo = require('./assests/og_miata.png')


function App() {
  return (
    <Router>
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
        <Avatar style={{float: 'right'}} src='./car_wheel_icon.png' />
      <Title style={{color: 'white'}} level={3}>Welcome Chris</Title>
      </Header>
      <Layout>
      <Sider>
        <Menu defaultSelectedKeys={['Dashboard']}
        mode="inline"
        >
          <Menu.Item key='Dashboard'>
          Garage
        </Menu.Item>
        <SubMenu
        title={
          <span>
            <Icon type='mail' />
            <span>Profile</span>
          </span>
        }
        >
          <Menu.ItemGroup key='0' title='Log History'>
            <Menu.Item key='1' >Tires
            <Switch>
            <Route path='/login' component={Login} />
          </Switch>
            </Menu.Item>
           
            <Menu.Item key='2'>Oil</Menu.Item>
            <Menu.Item key='3'>Brakes</Menu.Item>
            <Menu.Item key='4'>Battery</Menu.Item>
            <Menu.Item key='5'>Air Filter</Menu.Item>

         </Menu.ItemGroup>
        </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content>
      Content     
      </Content>
      <Footer>Footer
        <h1>"Racing is living, everything else is waiting"</h1>
        <p>-Chris De Leon</p>
      </Footer>
      </Layout>
      </Layout>
      </Layout>
    </div>
    </Router>
  );
}

export default App;
