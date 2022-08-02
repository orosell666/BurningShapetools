const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			snowparks: {},
			companies: {},
			countries: {},
			jobs: {},

		},
		actions: {
			// Use getActions to call a function within a fuction
			LoadSnowpark: async () => {

				await fetch(process.env.BACKEND_URL + "/api/snowparks")
					.then(resp => resp.json())

					, then(data => setStore({ snowparks: data }))
						.catch(error => console.log("Error al cargar snowparks", error));
			}
		}
	};
};

export default getState;
