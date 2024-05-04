import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert("Deleted successfully");
            setBookings(bookings.filter((booking) => booking._id !== id));
          }
        });
    }
  };

  const handleBooking = (id) => {
    const procced = confirm(`You are going to book this service`);
    if (procced) {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            const remainingBookings = bookings.filter(
              (booking) => booking._id !== id,
            );
            const confirmedBooking = bookings.find(
              (booking) => booking._id === id,
            );
            confirmedBooking.status = "confirm";
            setBookings([confirmedBooking, ...remainingBookings]);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/checkouts?email=${user?.email}`)
      .then((res) => res.json())
      .then((bookings) => setBookings(bookings))
      .catch((err) => console.error(err));
  }, [user]);
  return (
    <div>
      <h1 className="text-center text-5xl mb-12">
        Your Bookings {bookings.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <>
                <tr key={index}>
                  <th>
                    <button
                      className="btn btn-circle"
                      onClick={() => handleDelete(booking._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded w-24 h-24">
                          <img
                            src={booking.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{booking.serviceName}</td>
                  <td>{booking.date}</td>
                  <td>{booking.price}</td>
                  <td>
                    {booking?.status ? (
                      <h5 className="text-orange-600 font-bold">Confirmed</h5>
                    ) : (
                      <button
                        className="btn btn-outline text-orange-600"
                        onClick={() => handleBooking(booking._id)}
                      >
                        Confirm
                      </button>
                    )}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
