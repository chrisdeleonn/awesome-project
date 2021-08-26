import { data } from "browserslist";
import React from "react";

const AllMyLogs = () => {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/cars/getEntries`, {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => setData(data.data));
	}, []);
	return (
		<div style={{ zIndex: 10, background: "black", opacity: 0.7 }}>
			{data.length === 0 ? (
				<span>loading</span>
			) : (
				<div>
					{data.map((item) => (
						<p style={{ color: "white", padding: 5 }}>{item.brand}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default AllMyLogs;
