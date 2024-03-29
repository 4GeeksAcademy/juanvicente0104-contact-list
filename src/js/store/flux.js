const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			urlBase: "https://playground.4geeks.com/apis/fake/contact/",
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			},
			//Define a function to get my contacts from the API
			getContacts: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}agenda/juanvicente0104`)
					let data = await response.json()

					//console.log("this is the data")
					//console.log(data)

					setStore({ contacts: data })

				} catch (error) {
					console.log(error)
				}
			},
			//Define a function to add a contact to my agenda
			addContact: async (data) => {
				console.log(data)
				let store = getStore()
				try {

					let response = await fetch(`${store.urlBase}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data)
					})
					//console.log(data)
					if (response.ok) {
						alert("Sucess creating contact")
					}
					else {
						alert("Error creating contact")
					}

				} catch (error) {

					console.log(error)

				}
			},
			//Define a function to add a contact to my agenda
			editContact: async (data, id) => {
				console.log(data)
				let store = getStore()
				try {

					let response = await fetch(`${store.urlBase}` + `${id}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data)
					})
					//console.log(data)
					if (response.ok) {
						alert("Success deleting this contact")
						getActions().getContacts()
					}
					else {
						alert("Error deleting this contact")
					}

				} catch (error) {
					console.log(error)
				}
			},
			//Define a function to delete a contact from my agenda
			deleteContact: async (id) => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}` + `${id}`, {
						method: "DELETE",
						//headers: { "Content-Type": "application/json" },
						//body: JSON.stringify(data)
					})
					//console.log(data)
					if (response.ok) {
						alert("Success editing contact")
					}
					else {
						alert("Error editing contact")
					}


				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
