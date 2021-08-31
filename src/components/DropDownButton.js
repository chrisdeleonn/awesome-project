import { Dropdown } from "antd";

const DropDownButton = () => {
	return (
		<div>
			<img
				alt=""
				onClick={(e) => e.preventDefault()}
				style={{ float: "right", width: "auto", height: 45 }}
				src="./car_wheel_icon.png"
			/>
		</div>
	);
};

export default DropDownButton;
