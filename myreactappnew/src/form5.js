import React, { useEffect, useState } from "react";
import { db, storage } from "./firebase";
import Navbar from "./navbar"


function Form5() {

    function sendform(e) {
        e.preventDefault();

        var d = new FormData(e.currentTarget);

        var name = d.get("uname")
        var email = d.get("email")
        var cont = Number(d.get("num"))
        var img = d.get("image")

        console.log(name)
        console.log(email)
        console.log(cont)
        console.log(img)

        var storageref = storage.ref("/images/" + img.name).put(img);
        storageref.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url)

            db.collection("user1").add({
                Name: name,
                Email: email,
                PhoneNumber: cont,
                Image: url
            }).then((succ) => {
                alert("data added")
            })
        })
    }

    const [data, setdata] = useState([])
    function getdata() {
        var ar = [];
        db.collection("user1").onSnapshot((succ) => {
            succ.forEach((abc) => {
                // console.log(abc.data())
                // console.log(abc.id)
                ar.push(abc)
            })
            setdata(ar)
        })
    }
    useEffect(() => {
        getdata()
    }, [])

    function del(x) {
        console.log(x.id)
        console.log(x.data())

        if (window.confirm("ready to delete it")) {
            db.collection("user1").doc(x.id).delete();
            storage.refFromURL(x.data().Image).delete();
            alert("data deleted")
            getdata()
        }
    }


    const [id, setid] = useState("")
    function edit(x) {
        console.log(x)
        setid(x)
    }

    const [nm,setnm] = useState("")
    const [em,setem] = useState("")
    const [ph,setph] = useState()
    function getonedata(){
        if(id){
            db.collection("user1").doc(id).get().then((succ)=>{
                console.log(succ.data())
                setnm(succ.data().Name)
                setem(succ.data().Email)
                setph(succ.data().PhoneNumber)
            })
        }
    }
    useEffect(()=>{
        getonedata()
    },[id])

    function updateform(){
        db.collection("user1").doc(id).update({
            Name:nm,
            Email:em,
            PhoneNumber:ph
        }).then((Succ)=>{
            alert("data updated")
        })
    }
    return (
        
        <div>
            <Navbar/>
            <br />
            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                <form encType="multipart/form-data" onSubmit={ id ? (updateform) : (sendform)}>
                    <div className="form-group">
                        <input className="form-control" onChange={(e)=>setnm(e.target.value)} value={nm} type={'text'} placeholder="enter name" name="uname" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" onChange={(e)=>setem(e.target.value)} value={em} type={'email'} placeholder="enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" onChange={(e)=>setph(e.target.value)} value={ph} type={'number'} placeholder="enter contact" name="num" />
                    </div>

                    <div className="form-group">
                        <input className="form-control" type={'file'} name="image" />
                    </div>

                    <div className="form-group">
                        {id ? (
                            <input className="btn btn-block" type={'submit'} value=
                                "edit" />
                        ) : (
                            <input className="btn btn-block" type={'submit'} />
                        )}
                    </div>
                </form>
            </div>
            <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12' style={{ height: "100vh", overflowX: 'scroll' }}>
                {data.map((value) => (
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{ border: '2px solid grey', height: 250, marginBottom: 10 }}>
                        <p>{value.data().Name}</p>
                        <p>{value.data().Email}</p>
                        <p>{value.data().PhoneNumber}</p>
                        <img src={value.data().Image} width={100} /><br />
                        <button className="btn" onClick={() => del(value)}>delete</button>
                        <button className="btn" onClick={() => edit(value.id)}>edit</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Form5;