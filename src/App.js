import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import ProfileCreateForm from "./components/ProfileCreateForm";

import HomeOutlined from "@ant-design/icons/HomeOutlined";
import ToolOutlined from "@ant-design/icons/ToolOutlined";
import CreditCardOutlined from "@ant-design/icons/CreditCardOutlined";
import Loading3QuartersOutlined from "@ant-design/icons/Loading3QuartersOutlined";
import BgColorsOutlined from "@ant-design/icons/BgColorsOutlined";
import YuqueOutlined from "@ant-design/icons/YuqueOutlined";
import FilterOutlined from "@ant-design/icons/FilterOutlined";

import AllMyLogs from "./components/AllMyLogs";
import "./App.css";

const { Header, Footer, Sider } = Layout;

function App() {
	const [show, setShow] = useState(false);

	return (
		<Router>
			<div>
				<Layout>
					<div
						style={{
							backgroundImage: "url(/nfsHeat-2.png)",
							height: "100%",
							width: "100%",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							position: "absolute",
						}}
					></div>
					<Header style={{ padding: 10, zIndex: 10 }}>
						<Avatar style={{ float: "right" }} src="./car_wheel_icon.png" />
						<Title />
						<p id="neonText">Boca Tune-Up</p>
					</Header>
					<Layout
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: 20,
						}}
					>
						<Sider>
							<Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
								<Menu.Item key="Dashboard">
									<HomeOutlined />
									<span>Garage</span>
								</Menu.Item>

								<SubMenu
									key="0"
									title={
										<span>
											<ToolOutlined />
											<span>Parts</span>
										</span>
									}
								>
									<Menu.ItemGroup key="0">
										<Menu.Item key="1" onClick={() => setShow(true)}>
											<span>
												<Loading3QuartersOutlined />
												<span>Tires</span>
											</span>
										</Menu.Item>
										<Menu.Item key="2" onClick={() => setShow(true)}>
											<span>
												<BgColorsOutlined />
												<span>Oil</span>
											</span>
										</Menu.Item>
										<Menu.Item key="3" onClick={() => setShow(true)}>
											<span>
												<YuqueOutlined />
												<span>Brakes</span>
											</span>
										</Menu.Item>
										<Menu.Item key="4" onClick={() => setShow(true)}>
											<span>
												<CreditCardOutlined />
												<span>Battery</span>
											</span>
										</Menu.Item>
										<Menu.Item key="5" onClick={() => setShow(true)}>
											<span>
												<FilterOutlined />

												<span>Air Filter</span>
											</span>
										</Menu.Item>
									</Menu.ItemGroup>
								</SubMenu>
							</Menu>
						</Sider>
						<AllMyLogs visible={show} setShow={setShow} />
					</Layout>
					<Layout>
						<ProfileCreateForm visible={show} setShow={setShow} />
						<Footer
							style={{
								opacity: 0.6,
								lineHeight: 0,
								zIndex: 99,
								position: "fixed",
							}}
						></Footer>
					</Layout>
				</Layout>
			</div>
		</Router>
	);
}

export default App;
