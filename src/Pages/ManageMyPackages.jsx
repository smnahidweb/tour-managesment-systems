import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PackRow from '../Components/PackRow';
import Swal from 'sweetalert2';

import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const ManageMyPackages = () => {
  const [allPackages, setAllPackages] = useState([]);
   const { user ,loading} = useContext(AuthContext);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://booking-management-system-server-si.vercel.app/myPackages?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then(res =>{
         setAllPackages(res.data)
        setDataLoading(false)
        })
      .catch(err => console.error(err));
  }, [user]);



  const handleDelete = (id) => {
   
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this package?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`https://booking-management-system-server-si.vercel.app/allPackages/${id}`,{
          headers:{
            authorization: `Bearer ${user?.accessToken}`
          }
        })
          .then(res => {
            if (res.data.deletedCount > 0) {
              setAllPackages(prev => prev.filter(pack => pack._id !== id));
              Swal.fire('Deleted!', 'Your package has been deleted.', 'success');
            }
          })
          .catch(err => console.error(err));
      }
    });
  };
 if(loading || dataLoading){
  return <Loading></Loading>
}
  return (
   <div className="p-6">
  <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">
    Manage Your Added Packages
  </h2>

  {allPackages.length === 0 ? (
    <p className="text-red-500 text-center text-2xl font-semibold">
      You haven't added any tour yet.
    </p>
  ) : (
    <div className="overflow-x-auto rounded-xl shadow-lg">
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-green-500 dark:bg-gray-800 text-white uppercase">
          <tr>
            <th className="px-5 py-3">Tour Name</th>
            <th className="px-5 py-3">Image</th>
            <th className="px-5 py-3">Duration</th>
            <th className="px-5 py-3">Price (৳)</th>
            <th className="px-5 py-3">Route</th>
            <th className="px-5 py-3">Departure</th>
            <th className="px-5 py-3">Guide</th>
            <th className="px-5 py-3">Contact</th>
            <th className="px-5 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[var(--TEXT-COLOR)] divide-y divide-gray-200 dark:text-gray-100">
          {allPackages.map(pack => (
            <PackRow
              key={pack._id}
              pack={pack}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default ManageMyPackages;
