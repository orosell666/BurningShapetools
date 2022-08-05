import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { SnowparkCard } from "../component/snowparklist";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {

		actions.LoadSnowpark(store.snowparks);

	}, [])

	return (
		<div className="container text-center mt-5">
			<p>
				<img src="https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.6435-9/38041916_1699864110111867_5266485659949858816_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UGmfznHHIjAAX_45Maj&_nc_ht=scontent.fbcn9-1.fna&oh=00_AT9pcYBxFKIcYIZAmZWEKvDl8CVNeFQN328AEljZ3CEBsQ&oe=6311A0CA" />
			</p>
			<h1>Burning Shapetools!!</h1>
			<p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate efficitur augue non volutpat. Morbi ultricies vitae ex vitae luctus. Praesent efficitur eleifend ex non aliquam. Curabitur sodales felis a erat lobortis, at pretium dui elementum. Curabitur porttitor ipsum quis bibendum rhoncus. In vitae dapibus ex, tristique efficitur tellus. Phasellus at dapibus magna. Vivamus sit amet nulla accumsan urna gravida scelerisque.</p>

			<div className="container mt-5">
				{store.snowparks.map((snowpark) => {
					return (<SnowparkCard key={snowpark.id} snowpark={snowpark} />)
				})}

			</div>

		</div>
	);
};
