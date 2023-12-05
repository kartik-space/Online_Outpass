// ... (imports)

import axios from "axios";
import { useEffect, useState } from "react";

function Hostel() {
    const [hostel, setHostel] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3002/hostel')
        .then(response => {
          console.log(response.data);  // Check if data is received
          setHostel(response.data);
        })
        .catch(err => console.log(err));
    }, []);
  
    return (
      <div>
        {hostel.map(item => (
          <div key={item._id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "80%", height: "80%" }}>
              <div style={{ fontSize: "2rem", paddingTop: "50px", fontWeight: "600" }}>
                <h1>LIST OF ALL USERS</h1>
                <h2>{item.name}</h2> {/* Use h2 for user name */}
              </div>
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={item.image} 
                        alt="User"
                      />
                    </div>
                    <div>
                      <p style={{ color: "black" }}>{item.name}</p>
                      <p>{item.email}</p>
                      {/* Add more details as needed */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Hostel;
  