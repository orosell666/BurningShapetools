const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			snowparks: [],
			companies: [],
			countries: [],
			jobs: [],

		},

		actions: {
			// Use getActions to call a function within a fuction
			LoadSnowpark: async () => {

				await fetch(process.env.BACKEND_URL + "/api/snowparks")
					.then(resp => resp.json())

					.then(data => setStore({ snowparks: data }))
					.catch(error => console.log("Error al cargar snowparks", error));
			},

			LoadSelectedSnowpark: async (id) => {

				await fetch(process.env.BACKEND_URL + "/api/selectedsnowparks/" + id)
					.then(resp => resp.json())

					.then(data => setStore({ snowparks: data }))
					.catch(error => console.log("Error al cargar snowpark seleccionado", error));
			},

			LoadSelectedSnowparkByCountry: async (id) => {

				await fetch(process.env.BACKEND_URL + "/api/snowparkbycountry" + country)
					.then(resp => resp.json())

					.then(data => setStore({ snowparks: data }))
					.catch(error => console.log("Error al cargar snowpark seleccionado", error));
			},





			LoadCountryParks: async () => {

				await fetch(process.env.BACKEND_URL + "/api/countries")
					.then(resp => resp.json())

					.then(data => setStore({ countries: res.results }))
					.catch(error => console.log("Error al cargar countries", error));
			},

			LoadJobs: async () => {

				await fetch(process.env.BACKEND_URL + "/api/jobs")
					.then(resp => resp.json())

					.then(data => setStore({ jobs: data }))
					.catch(error => console.log("Error al cargar countries", error));
			},

			LoadCompanies: async () => {

				await fetch(process.env.BACKEND_URL + "/api/companies")
					.then(resp => resp.json())

					.then(data => setStore({ companies: data }))
					.catch(error => console.log("Error al cargar countries", error));
			}
		}
	};

}
export default getState;
