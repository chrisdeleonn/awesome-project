import { Modal, Form, Input, Button } from "antd";

const ProfileCreateForm = ({ visible, setShow }) => {
	const handleFormSubmit = (formValues) => {
		console.log(formValues);

		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/cars/addEntry`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(formValues),
		})
			.then((res) => {
				setShow(false);
				return res;
			})
			.then((data) => console.log(data));
	};

	return (
		<Modal
			visible={visible}
			title="Create a New Entry"
			footer={null}
			onCancel={() => setShow(false)}
		>
			<Form
				onFinish={handleFormSubmit}
				layout="vertical"
				name="form_in_modal"
				initialValues={{
					modifier: "public",
				}}
			>
				<Form.Item
					name="datelastchecked"
					label="Date Last Checked"
					rules={[
						{
							required: true,
							message: "Please enter the date last checked.",
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="brand" label="Brand">
					<Input type="textarea" />
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Save
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default ProfileCreateForm;
