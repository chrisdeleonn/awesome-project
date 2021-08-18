import { Form, Input, Button, Checkbox } from 'antd';

const Profile = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="DateLastChecked"
        name="datelastchecked"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Brand"
        name="brand"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      </Form>
      )};

      export default Profile;