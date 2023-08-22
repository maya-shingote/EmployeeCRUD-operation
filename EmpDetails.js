import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {

        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div>

            <div className="container">
                <div className="card-row" style={{ "textalign": "left" }}>
                    <div className="card-title">
                        <h1  style={{ backgroundColor: 'black', color: 'white' }}>  Employee Create</h1>

                    </div>
                    {empdata &&
                        <div>
                            <h2>The Employee Name is : <b>{empdata.name}</b>{empdata.id}</h2>
                            <h3>Contact Details</h3>
                            <h4>Email is : {empdata.email}</h4>
                            <h5>Phone is : {empdata.phone}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>

                        </div>
                    }
                </div>



            </div>
        </div>
    );

}


export default EmpDetail;