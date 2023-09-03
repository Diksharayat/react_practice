import React, { useState } from "react";
import Navbar from "./navbar";

function Home() {
        var a = 20;
        var name = "riya"


        var obj = { Name: 'riya', Id: 0 }

        var arr = [1, 2, 3, 4, 8];

        var obj2 = [{ Name: 'riya', Id: 1 },
        { Name: 'priya', Id: 2 },
        { Name: 'rahul', Id: 3 },
        { Name: 'david', Id: 4 },]


        const [name1, setname1] = useState("ishmeet")
        function fun1() {
                alert("hello")
        }
        function fun2(x) {
                // alert(x)
                setname1(x);
        }

        return (
                <div>
                <Navbar/>
                        {name1}
                        <br />
                        <button className="btn btn-primary" onClick={fun1}>click here</button>
                        <button onClick={() => fun2("riya")}>click here</button>
                        <h1 className='abc'>{5 + 5}</h1>
                        <b>{a}</b>
                        <br />
                        <input type='text' />
                        <br />
                        <b>{a}</b>
                        <br />
                        {name}
                        <br />
                        {obj.Name}
                        {obj.Id}
                        <br />
                        {arr}
                        <br />
                        {arr.map((value) => (
                                <p>
                                        {value}
                                </p>
                        ))}

                        {obj2.map((value) => (
                                <div>
                                        <p>
                                                {value.Name}
                                        </p>
                                        <p>
                                                {value.Id}
                                        </p>
                                </div>
                        ))}

                        {(10 > 20) ? (
                                <>hello</>
                        ) : (
                                <>byy</>
                        )}
                        <table className="table  table-bordered table-striped table-hover">
                                <thead>
                                        <th>Name</th>
                                        <th>Id</th>
                                </thead>
                                <tbody>
                                        {obj2.map((value) => (
                                                <tr>
                                                        <td>{value.Name}</td>
                                                        <td>{value.Id}</td>
                                                        <td><button onClick={() => fun2(value.Name)}>click</button></td>
                                                </tr>
                                        ))}
                                </tbody>
                        </table>

                </div>
        )
}

export default Home;