import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext.js"

const ContactCard = (props) => {

	//console.log(props)
	const { store, actions } = useContext(Context)

	return (

		<div className="d-flex justify-content-space-between align-items-center bg-white border m-5">

			<img src="https://picsum.photos/500" className="col-2 p-5 rounded-circle" alt="picsum" />

			<div className="col-9 justify-content-start">

				<h5>  {props.person.full_name} </h5>

				<p> <i className="fas fa-map-marker-alt"></i> {props.person.address} </p>
				<p> <i className="fas fa-phone"></i> {props.person.phone}</p>
				<p> <i className="fas fa-envelope"></i> {props.person.email} </p>

			</div>

			<div className="col-1 justify-content-between d-flex align-items-start p-4">

				<Link to={`/editcontact/${props.person.id}`}> <i className="fas fa-pencil-alt"></i> </Link>

				<Link to="/" onClick={() => actions.deleteContact(props.person.id)} > <i className="fas fa-trash-alt"></i> </Link>

			</div>

		</div>

	)

};

export default ContactCard
