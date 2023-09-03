import React, { useState } from "react";
import { Link } from "react-router-dom";
import {db,auth , provider} from './firebase'

export default function Navbar() {
    
    const [id, setid] = useState(false)
    function login() {
    
        auth.signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
    
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
    
    
                console.log(user)
    
                db.collection('User1').where("Email", "==", user.email).get().then((succ) => {
                    if (succ.size == 0) {
                        db.collection("User1").add({
                            Name: user.displayName,
                            Email: user.email,
                            UID: user.uid
                        }).then((succ) => {
                            alert("user added")
                            localStorage.setItem("UserID", succ.id)
                            setid(true)
                        })
                    } else {
                        db.collection("User1").get().then((succc) => {
                            succc.forEach((abc) => {
                                console.log(abc.id)
                                localStorage.setItem("UserID", abc.id)
                                setid(true)
                            })
                        })
                    }
                })
    
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    function logout(){
        localStorage.removeItem("UserID")
        setid(false)
    }
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" herf="#">Website</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/">home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/mui">Mui</a></li>
                    <li><a href="/mui2">Mui2</a></li>
                    <li><a href="/stepper">stepper</a></li>
                    <li><a href="/form1">Form1</a></li>
                    <li><a href="/form2">Form2</a></li>
                    <li><a href="/form3">Form3</a></li>
                    <li><a href="/form4">Form4</a></li>
                    <li><a href="/form5">Form5</a></li>
                    
                    {id ? (
                        <li onClick={logout}><Link to="">logout</Link></li>
                    ) : (
                        <li onClick={login}><Link to="">login</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    )

}