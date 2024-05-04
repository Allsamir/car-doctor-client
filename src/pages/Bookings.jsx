import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/checkouts?email=${user?.email}`)
      .then((res) => res.json())
      .then((bookings) => setBookings(bookings))
      .catch((err) => console.error(err));
  }, [user]);
  return (
    <div>
      <h1 className="text-center text-5xl">Your Bookings {bookings.length}</h1>
    </div>
  );
};

export default Bookings;
