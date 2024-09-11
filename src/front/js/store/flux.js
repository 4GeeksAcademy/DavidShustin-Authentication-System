const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			goPrivate: async () => {
				if (sessionStorage.getItem("token")) {
					try {
						let response = await fetch(process.env.BACKEND_URL+"/api/private", {
							headers: {
								Authorization: "Bearer " +sessionStorage.getItem("token")
							}
						})
						if (!response.ok) {
							return false
						} else {
							let data = await response.json()
								console.log(data)
								return true
							
						}
					} catch (error) {
						console.log(error)
						return false
					}
				}
			},
			signup: async (email, password) => {
				try {
					const response= await fetch(process.env.BACKEND_URL+"/api/sign-up", {
						method: "POST",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify({
							email: email, password: password
						})
					});
					const data= await response.json();
					console.log(data);
					return data;
				} catch (error) {
					console.log("There was an error with your sign up.", error)
					throw error;
				}
			},
			login: async (email, password) => {
				try {
					const response = await fetch (process.env.BACKEND_URL+ "/api/log-in", {
						method: "POST",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify({
							email: email, password: password
						})
					});
					if(response.status === 200){
						let data= await response.json();
						sessionStorage.setItem("token", data.token);
						return true
					} else if (response.status === 401){
						alert("Invalid username/password.")
						return false
					} else {
						console.log("Unexpected error.", response.status)
						return false
					}
				} catch (error) {
					console.log("Unexpected error.", error)
						return false
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
