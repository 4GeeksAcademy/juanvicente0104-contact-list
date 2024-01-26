import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard.jsx"
import { Context } from "./../store/appContext.js"

export const Home = () => {

	const { store, actions } = useContext(Context)
	const { contacts } = store

	return (
		<>

			{contacts.map((contact, index) => {

				return (
					<ContactCard person={contact} />
				)

			})}
		</>

	)

};
