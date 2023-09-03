import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { db } from "./firebase";

export default function About() {

        function subform(event) {

                event.preventDefault();
                var d = new FormData(event.currentTarget);
                var name = d.get("name");
                var email = d.get("email");
                var password = d.get("pword");
                var contact = Number(d.get("contact"));

                console.log(name)
                console.log(email)
                console.log(password)
                console.log(contact)

                event.target.reset();
                event.target.name.focus();

                db.collection("Users").add({
                        Name: name,
                        Email: email,
                        Password: password,
                        Contact: contact
                }).then((succ) => {
                        alert("data has been added ")
                }).catch((err) => {
                        alert("cant add data")
                })
        }


        const [data, setdata] = useState([])
        function getdata() {
                // db.collection("Users").get().then((succ) => {
                db.collection("Users").onSnapshot((succ) => {
                        console.log(succ)

                        var ar = []
                        succ.forEach((abc) => {
                                ar.push(abc)
                                // console.log(abc.data())
                        })
                        setdata(ar);
                })
        }
        useEffect(() => {
                getdata()
        }, [])

        return (
                <>
                        <Navbar />
                        <div className="col-lg-3" style={{ marginTop: 80 }}>
                                <form className="form-group" onSubmit={subform}>
                                        <input type={"text"} placeholder="Name" className="form-control" name="name" autoComplete="off" /><br />
                                        <input type={"email"} placeholder="Email" className="form-control" name="email" autoComplete="off" /><br />
                                        <input type={"password"} placeholder="Password" className="form-control" name="pword" autoComplete="off" /><br />
                                        <input type={"number"} autoComplete="off" placeholder="Contact" className="form-control" name="contact" /><br />

                                        <input type={"submit"} className="btn btn-success" />
                                </form>
                        </div>

                        <div className="col-lg-6 " style={{ marginTop: 80 }}>
                                <table className="table table-bordered">
                                        <thead>
                                                <tr>
                                                        <th className="col-lg-2">Name</th>
                                                        <th className="col-lg-2">Email</th>
                                                        <th className="col-lg-2">Password</th>
                                                        <th className="col-lg-2">Contact</th>
                                                        <th className="col-lg-2">Action</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {data.map((row) => (
                                                        <tr>
                                                                <td>
                                                                        {row.data().Name}
                                                                </td>
                                                                <td>
                                                                        {row.data().Email}
                                                                </td>
                                                                <td>
                                                                        {row.data().Password}
                                                                </td>
                                                                <td>
                                                                        {row.data().Contact}
                                                                </td>
                                                        </tr>
                                                ))}
                                        </tbody>
                                </table>
                        </div>


                </>
        )
}