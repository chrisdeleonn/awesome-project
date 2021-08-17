import { Layout, Menu, Avatar } from 'antd';
import Title from 'antd/lib/typography/Title'
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons'

import './App.css';


const { Header, Footer, Sider, Content } = Layout


function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
        <Avatar style={{float: 'right'}} src='./among_us_avatar.png' />
      <Title style={{color: 'white'}} level={3}>Chris</Title>
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
            <Menu.Item key='1'>Tires</Menu.Item>
            <Menu.Item key='2'>Oil</Menu.Item>
            <Menu.Item key='3'>Brakes</Menu.Item>
            <Menu.Item key='4'>Battery</Menu.Item>
            <Menu.Item key='5'>Air Filter</Menu.Item>

         </Menu.ItemGroup>
        </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content>Content</Content>
      <Footer>Footer</Footer>
      </Layout>
      </Layout>
      </Layout>
    </div>
  );
}

export default App;
