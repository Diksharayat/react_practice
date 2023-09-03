import React, { useEffect, useState } from "react";
import { db,storage} from "./firebase";
import Navbar from "./navbar";

export default function Form2() {

        function subform(e) {
                e.preventDefault();
                var data = new FormData(e.currentTarget);
                var mob = data.get('mobile');
                var bnd = data.get('brand');
                var cp = Number(data.get('cp'));
                var sp = Number(data.get('sp'));
                var mrp = Number(data.get('mrp'));
                var type = data.get('type');
                var mm = data.get('memory');
                var ram = data.get('ram');
                var gend = data.get("gender");
                var img1 = data.get("img");
                console.log(img1)

                var storageref = storage.ref("/images/" + img1.name).put(img1)

                storageref.then((succ) => {
                        storageref.snapshot.ref.getDownloadURL().then((downloadURL) => {
                                console.log(downloadURL);
                                // db.collection("Images").add({
                                //         Img : downloadURL
                                // }).then((succ)=>{
                                //         alert("image uploaded")
                                // })
                                db.collection('MobileData').add({
                                    
                                        MobileName: mob,
                                        BrandName: bnd,
                                        CPrice: cp,
                                        SPrice: sp,
                                        MRP: mrp,
                                        Type: type,
                                        Memory: mm,
                                        Ram: ram,
                                        Gender: gend,
                                        Image: downloadURL
                                }).then((succ) => {
                                        alert("Data Added");
                                        e.target.reset();
                                })
                        })

                })

        }


        const [data, setdata] = useState([]);

        const [order,setorder] = useState('asc')

        const [bname,setbname] = useState()

        console.log(bname)
        function getdata() {
                // db.collection("".get().then((succ)=>{}))
               
                var qry ;
                if(order){
                        qry = db.collection("MobileData").orderBy("MRP",order)
                }
                else{
                        qry = db.collection("MobileData");
                }
               
                if(bname){
                        qry=db.collection('MobileData').where("BrandName",'==',bname);
                }
                qry.limit(10).onSnapshot((succ) => {
                        var arr = [];
                        succ.forEach((abc) => {
                                arr.push(abc);
                        })
                        setdata(arr);
                })
        }
        useEffect(() => {
                getdata();
        }, [order,bname])

        function del(x) {
                console.log(x)
                if (window.confirm("ready to delete it")) {
                        db.collection('MobileData').doc(x.id).delete().then((succ) => {
                                alert("deleted")
                        })

                        storage.refFromURL(x.data().Image).delete().then((succ)=>{
                                alert("deleted from storage")
                        })
                }
        }

        const [id, setid] = useState('')
         
        const [mn, setmn] = useState();
        const [bn, setbn] = useState();
        const [cp, setcp] = useState();
        const [sp, setsp] = useState();
        const [mrp, setmrp] = useState();
        const [type, settype] = useState();
        const [mm, setmm] = useState();
        const [ram, setram] = useState();
        const [gend, setgend] = useState();

        function edit(x) {
                console.log(x)
                setid(x)
        }

        function getonedata() {
                if (id) {
                        db.collection("MobileData").doc(id).get().then((succ) => {
                                setmn(succ.data().MobileName);
                                setbn(succ.data().BrandName);
                                setcp(succ.data().CPrice);
                                setsp(succ.data().SPrice);
                                setmrp(succ.data().MRP);
                                settype(succ.data().Type);
                                setmm(succ.data().Memory);
                                setram(succ.data().Ram);
                                setgend(succ.data().Gender)
                        })
                }
        }
        useEffect(() => {
                getonedata()
        }, [id])

        function updatedata(e) {
                e.preventDefault()
                db.collection('MobileData').doc(id).update({
                        MobileName: mn,
                        BrandName: bn,
                        CPrice: cp,
                        SPrice: sp,
                        MRP: mrp,
                        Type: type,
                        Memory: mm,
                        Ram: ram,
                        Gender: gend
                }).then((succ) => {
                        alert("Data updated");
                })
        }
        return (
                <>
                        <Navbar />
                        <div className="col-lg-2">
                                <h3>select order of pricing</h3>
                                <select className="form-control" onChange={(e)=>setorder(e.target.value)}>
                                        <option value={'asc'}>low to high</option>
                                        <option value={'desc'}>high to low</option>
                                </select>
                                <br/><br/>

                                <input type={'text'} onChange={(e)=>setbname(e.target.value)}  placeholder="search by brand" className="form-control" />
                                <br/>

                                <form className="form-group" onSubmit={subform}>
                                        <input type={"text"} placeholder="Mobile Name" className="form-control" autoComplete="off" name="mobile" /><br />
                                        {/* <input type={'radio'} name="gender" value={'male'} />male
                                        <input type={'radio'} name="gender" value={'female'} />female */}
                                        <input type={"text"} placeholder="Brand Name" className="form-control" autoComplete="off" name="brand" /><br />
                                        <input type={"number"} placeholder="Cost Price" className="form-control" autoComplete="off" name="cp" /><br />
                                        <input type={"number"} placeholder="Selling Price" className="form-control" autoComplete="off" name="sp" /><br />
                                        <input type={"number"} placeholder="MRP" className="form-control" autoComplete="off" name="mrp" /><br />
                                        Type:
                                        <select name="type" className='form-control'>
                                                <option value="Android" >Android</option>
                                                <option value="IOS" >IOS</option>
                                        </select><br />
                                        <input type={"text"} placeholder="Memory" autoComplete="off" className="form-control" name="memory" /><br />
                                        <input type={"text"} placeholder="Ram" autoComplete="off" className="form-control" name="ram" /><br />
                                        <input type={"file"}  className="form-control" name="img" /><br />
                                        <input type={"submit"} className="btn btn-success" />
                                </form>
                        </div>

                        <div className="col-lg-7">
                                <table className="table table-bordered">
                                        <thead>
                                                <tr>

                                                        <th>Image</th>
                                                        <th>Mobile Name</th>
                                                        <th>Brand Name</th>
                                                        <th>Cost Price</th>
                                                        <th>Selling Price</th>
                                                        <th>MRP</th>
                                                        <th>Type</th>
                                                        <th>Memory</th>
                                                        <th>Ram</th>
                                                        <th colSpan={2}>Action</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {data.map((row) => (
                                                        <tr>
                                                                <td><img src={row.data().Image} height={80}/></td>
                                                            
                                                                <td>{row.data().MobileName}</td>
                                                                <td>{row.data().BrandName}</td>
                                                                <td>{row.data().CPrice}</td>
                                                                <td>{row.data().SPrice}</td>
                                                                <td>{row.data().MRP}</td>
                                                                <td>{row.data().Type}</td>
                                                                <td>{row.data().Memory}</td>
                                                                <td>{row.data().Ram}</td>
                                                                {/* <td>{row.data().Gender}</td> */}

                                                                <td><button className="btn btn-warning" onClick={() => del(row)}><span className="glyphicon glyphicon-trash"></span></button></td>

                                                                <td><button className="btn btn-info" onClick={() => edit(row.id)}><span className="glyphicon glyphicon-pencil"></span></button></td>
                                                        </tr>
                                                ))}
                                        </tbody>
                                </table>
                        </div>


                        {id && (
                                <div className="col-lg-3">
                                        <form className="form-group" onSubmit={updatedata}>
                                                <input type={"text"} onChange={(e) => setmn(e.target.value)} value={mn} placeholder="Mobile Name" className="form-control" autoComplete="off" name="mobile" /><br />
                                                <input type={"text"} onChange={(e) => setbn(e.target.value)} value={bn} placeholder="Brand Name" className="form-control" autoComplete="off" name="brand" /><br />
                                                <input type={"number"} onChange={(e) => setcp(e.target.value)} value={cp} placeholder="Cost Price" className="form-control" autoComplete="off" name="cp" /><br />
                                                <input type={"number"} onChange={(e) => setsp(e.target.value)} value={sp} placeholder="Selling Price" className="form-control" autoComplete="off" name="sp" /><br />
                                                <input type={"number"} onChange={(e) => setmrp(e.target.value)} value={mrp} placeholder="MRP" className="form-control" autoComplete="off" name="mrp" /><br />

                                                <input type={'radio'} value={"male"} onChange={(e) => setgend(e.target.value)} name="gender" checked={gend == "male" &&
                                                        "true"} />male
                                                <input type={'radio'} value={'female'} onChange={(e) => setgend(e.target.value)} name="gender" checked={gend == "female" &&
                                                        "true"} />female

                                                Type:
                                                <select name="type" value={type} className='form-control' onChange={(e) => settype(e.target.value)}>
                                                        <option value="Android" >Android</option>
                                                        <option value="IOS" >IOS</option>
                                                </select><br />
                                                <input type={"text"} onChange={(e) => setmm(e.target.value)} value={mm} placeholder="Memory" autoComplete="off" className="form-control" name="memory" /><br />
                                                <input type={"text"} value={ram} onChange={(e) => setram(e.target.value)} placeholder="Ram" autoComplete="off" className="form-control" name="ram" /><br />

                                                <input type={"submit"} value="update" className="btn btn-success" />
                                        </form>
                                </div>
                        )}

                </>
        )
}