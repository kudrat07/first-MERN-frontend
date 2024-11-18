import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:3000");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
    }
  }
 
  console.log(data);

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    })
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setError("Deleted successfully")

      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
      
    }

  }

  return (
    <div className="container my-2">
    {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center mb-4">All data</h2>
      <div className="row">
        {data.map((ele) => (
          <>
            <div className="col-3" key={ele.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-2">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                  <p className="text-muted">{ele.age}</p>
                  <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>
                    Delete
                  </a>
                  <Link to={`/${ele._id}`} className="card-link">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Read;
