import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom"

const Contact = () => {

    const { actions } = useContext(Context)
    const navigate = useNavigate()

    {/* Define a state to save the info entered into the form */ }

    const [user, setUser] = useState({
        "full_name": "",
        "email": "",
        "phone": "",
        "address": "",
        "agenda_slug": "juanvicente0104"
    });

    const handleChange = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const handleAddingContact = async (event) => {

        event.preventDefault()

        // Verifica que todos los campos requeridos estén completos
        if (user.full_name === "" || user.email === "" || user.phone === "" || user.address === "") {
            alert("You must fill all the information")
            return
        }
        else {
            let result = await actions.addContact(user)
            navigate("/")
            //console.log(result)
        }
    }

    return (

        <>
            <div className="container">
                <div className="row m-3 p-2">
                    <form className="border border-secondary" onSubmit={handleAddingContact}>
                        <h1 className="d-flex justify-content-center bg bg-primary rounded text-white m-2 p-2"> Add Contact </h1>
                        {/* Enter Full Name */}
                        <div className="mb-3">
                            <label className="form-label"> Full Name </label>
                            <input type="text"
                                className="form-control"
                                placeholder="John Doe"
                                name="full_name" /* Here we add the event.target keys (name and value) to modify the state  */
                                value={user.full_name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Enter email */}
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                placeholder="example@email.com"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Enter Phone */}
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text"
                                className="form-control"
                                placeholder="000000000"
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Enter Address */}
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="text"
                                className="form-control"
                                placeholder="1600 Pennsylvania ave"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="m-2 btn btn-primary"> Save </button>
                    </form>
                </div>

                <Link to="/"> Back to my contacts</Link>

            </div>

        </>

    )
}

export default Contact
