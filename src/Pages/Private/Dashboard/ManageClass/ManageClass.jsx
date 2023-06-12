import { useEffect, useState } from 'react';
import MangeClassTable from './MangeClassTable';

const ManageClass = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
      fetch("https://summer-camp-school-server-steel.vercel.app/instructors")
        .then((res) => res.json())
        .then((data) => {
          const filteredClasses = data.filter((c) => c.status === "Pending");
          setClasses(filteredClasses);
        });
    }, []);
    
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Photo</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((Class, index) =>
                                <MangeClassTable key={index} Class={Class}></MangeClassTable>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;