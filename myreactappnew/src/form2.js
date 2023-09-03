import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { db } from "./firebase";
export default function Form2() {
        function sub(e) {

                e.preventDefault();
                var a = new FormData(e.currentTarget);
                var mob = a.get("mobile");
                var br = a.get("brand");
                var cp = a.get("cost");
                var sp = Number(a.get("sell"));
                console.log(mob);
                console.log(br);
                console.log(cp);
                console.log(sp);

                db.collection("Diksha").add({
                        Mobile: mob,
                        Brand: br,
                        Cost: cp,
                        Sell: sp
                }).then((succ) => {
                        alert("data has been added ")
                        e.target.reset();
                        e.target.mobile.focus();
                }).catch((err) => {
                        alert("cant add data")
                })

        }

        const [data, setdata] = useState([])
        function getdata() {
                // db.collection("Users").get().then((succ) => {
                db.collection("Diksha").onSnapshot((succ) => {
                        console.log(succ)

                        var arr = []
                        succ.forEach((ab) => {
                                arr.push(ab)
                                // console.log(abc.data())
                        })
                        setdata(arr);
                })
        }
        useEffect(() => {
                getdata()
        }, [])

        function del(x){
                console.log(x);
                if(window.confirm("ready to delete it")){
                        db.collection('Diksha').doc(x).delete().then((succ=>{
                                alert("Deleted")
                        }))
                }

        
        }

        
     const [id, setid] = useState('')

     function edit(x) {
          console.log(x)
          setid(x)
     }

     const [mob, setmob] = useState();
     const [br, setbr] = useState();
     const [cp, setcp] = useState();
     const [sp, setsp] = useState();

     function getonedata() {
        if (id) {
             db.collection("Diksha").doc(id).get().then((succ) => {
                  setmob(succ.data().Mobile);
                  setbr(succ.data().Brand);
                  setcp(succ.data().Cost);
                  setsp(succ.data().Sell);
                 
                  // setgend(succ.data().Gender)
             })
        }
   }
   useEffect(() => {
        getonedata()
   }, [id])

   function updatedata(e) {
        e.preventDefault()
        db.collection('Diksha').doc(id).update({
             Mobile: mob,
             Brand: br,
             Cost: cp,
             Sell: sp,
            
             // Gender: gend
        }).then((succ) => {
             alert("Data updated");
        })
   }


        return (
                <>
                        <Navbar />


                        <div className="col-lg-3" style={{ marginTop: 80 }}>
                                <form className="form-group" onSubmit={sub}>
                                        <label className="text-primary" for="mobile" style={{ fontStyle: 'italic', fontSize: 17 }}>Mobile
                                                <input className="form-control" type="text" id="name" name="mobile" placeholder="enter your number" />

                                        </label>
                                        <br />
                                        <label className="text-primary" for="Brand" style={{ fontStyle: 'italic', fontSize: 17 }}><b>Brand Name:</b>
                                                <input className="form-control" type="text" id="Brand" name="brand" placeholder="brand's name" />

                                        </label>
                                        <br />
                                        <label className="text-primary" for="cost" style={{ fontStyle: 'italic', fontSize: 17 }}><b>Cost Prize</b>
                                                <input className="form-control" type="text" id="cost" name="cost" placeholder="cost prize" />

                                        </label>
                                        <br />
                                        <label className="text-primary" for="sell" style={{ fontStyle: 'italic', fontSize: 17 }}><b>Sell Prize</b>
                                                <input className="form-control" type="text" id="sell" name="sell" placeholder="sell prize" />

                                        </label>
                                        <br />






                                        <br />
                                        <input className="btn btn-success" type="submit" />
                                </form>
                        </div>

                        <div className="col-lg-6 " style={{ marginTop: 80 }}>
                                <table className="table table-bordered">
                                        <thead>
                                                <tr>
                                                        <th className="col-lg-2">Mobile</th>
                                                        <th className="col-lg-2">Brand Name</th>
                                                        <th className="col-lg-2">Sell prize</th>
                                                        <th className="col-lg-2">Cost prize</th>
                                                        <th colSpan={2}>Action</th>

                                                </tr>
                                        </thead>
                                        <tbody>
                                                {data.map((row) => (
                                                        <tr>
                                                                <td>
                                                                        {row.data().Mobile}
                                                                </td>
                                                                <td>
                                                                        {row.data().Brand}
                                                                </td>
                                                                <td>
                                                                        {row.data().Cost}
                                                                </td>
                                                                <td>
                                                                        {row.data().Sell}
                                                                </td>
                                                                <td>
                                                                        <button className="btn btn-warning" onClick={()=> del(row.id)}> <span className="glyphicon glyphicon-trash"></span></button>


                                                                </td>
                                                                <td>
                                                                        <button className="btn btn-info" onClick={()=> edit(row.id)}><span className="glyphicon glyphicon-pencil"></span></button>
                                                                </td>
                                                        </tr>
                                                ))}
                                        </tbody>
                                </table>
                        </div>



                        <div className="col-lg-3">
                        <form className="form-group" onSubmit={updatedata}>
                              <input type={"text"} onChange={(e) => setmob(e.target.value)} value={mob} placeholder="Mobile Name" className="form-control" autoComplete="off" name="mobile" /><br />

                              <input type={"text"} onChange={(e) => setbr(e.target.value)} value={br} placeholder="Brand Name" className="form-control" autoComplete="off" name="brand" /><br />

                              <input type={"number"} onChange={(e) => setcp(e.target.value)} value={cp} placeholder="Cost Price" className="form-control" autoComplete="off" name="cost" /><br />

                              <input type={"number"} onChange={(e) => setsp(e.target.value)} value={sp} placeholder="Selling Price" className="form-control" autoComplete="off" name="sell" /><br />
                              <input type={"submit"} value="update" className="btn btn-success" />
                              
                        </form>
                        </div>





                </>


        )
}