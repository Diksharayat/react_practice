import React, { useEffect, useState }  from "react";
import Navbar from "./navbar";
import { db } from "./firebase";
 export default function Form1(){
    
    function subform(event) {

        event.preventDefault();
        var d = new FormData(event.currentTarget);
        var name = d.get("name");
        var father = d.get("father");
        var mother = d.get("mother");
        var contact = Number(d.get("contact"));

        console.log(name)
        console.log(father)
        console.log(mother)
        console.log(contact)

        event.target.reset();
        event.target.name.focus();

        db.collection("Users").add({
                Name: name,
                Father: father,
                Mother: mother,
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
        <div className="col-lg-3">
        <h1 className="text-danger">Enter your Details Here</h1>
        <div className="form-group" onSubmit={subform}>
        <label className="text-primary" name="name" for="name"style={{fontStyle:'italic', fontSize:17 }}>Name:
            <input className="form-control" type="text" id="name" placeholder="enter your name" />

        </label>
        <br/>
        <label className="text-primary" for="father" name="father" style={{fontStyle:'italic', fontSize:17 }}><b>Father's Name:</b>
            <input className="form-control" type="text" id="father" placeholder="father's name" />

        </label>
        <br/>
        <label className="text-primary" for="Mother" name="mother" style={{fontStyle:'italic', fontSize:17 }}><b>Mother's Name:</b>
            <input className="form-control"  type="text" id="Mother" placeholder="Mother's Name" />

        </label>
        <br/>
        <label className="text-primary" for="contact" name="contact" style={{fontStyle:'italic', fontSize:17 }}><b>contact:</b>
            <input className="form-control"  type="text" id="Mother" placeholder="Mother's Name" />

        </label>
        <br/>

        {/* <label className="text-primary" for="gender" name="gender" style={{fontStyle:'italic', fontSize:17 }}>Gender:
        male:<input type="radio" id="gender" name="gender" /> female:<input type="radio" id="gender" name="gender" />


        </label> */}
        <br/>
        {/* <label className="text-primary" for="date" style={{fontStyle:'italic', fontSize:17 }} >Date:
        <input type="date" id="date" />
            
            
            </label>  
            <br/> */}
            <input className="btn btn-success" type="submit" />   
        </div>
        
        </div>
        <div className="col-lg-6 " style={{ marginTop: 80 }}>
                                <table className="table table-bordered">
                                        <thead>
                                                <tr>
                                                        <th className="col-lg-2">Name</th>
                                                        <th className="col-lg-2">Father</th>
                                                        <th className="col-lg-2">Mother</th>
                                                        <th className="col-lg-2">Contact</th>
                                                        
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {data.map((row) => (
                                                        <tr>
                                                                <td>
                                                                        {row.data().Name}
                                                                </td>
                                                                <td>
                                                                        {row.data().Father}
                                                                </td>
                                                                <td>
                                                                        {row.data().Mother}
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