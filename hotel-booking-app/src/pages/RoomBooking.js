import React, { useState } from 'react';
import { database } from '../firebase'; // Import the database
import { ref, push } from 'firebase/database'; // Import functions for writing data
import "../App.css";

export default function RoomBooking() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    roomtype: "",
    guestnumber: "",
  };

  const [values, setValues] = useState(initialState);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues({
      ...values,
      [name]: type === "radio" ? (checked ? value : values[name]) : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add current date and time to the values
    const timestamp = new Date().toISOString(); // ISO string format: "YYYY-MM-DDTHH:mm:ss.sssZ"

    const dataToSave = {
      ...values,
      timestamp,
    };

    try {
      // Push data to Firebase Realtime Database
      const bookingsRef = ref(database, 'bookings'); // Reference to 'bookings' node
      await push(bookingsRef, dataToSave); // Push the form values to Firebase

      // Show success popup
      setPopup({
        show: true,
        message: 'Booking Successful!',
        type: 'success',
      });

      // Reset form values
      setValues(initialState);
    } catch (error) {
      console.error('Error saving data:', error);
      setPopup({
        show: true,
        message: 'Booking Failed. Please try again.',
        type: 'error',
      });
    }
  };

  const handleReset = () => {
    setValues(initialState);
  };

  const closePopup = () => {
    setPopup({ ...popup, show: false });
  };

  return (
    <div className="form-container">
      <h1>Book a room</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-input-field">
          <label htmlFor="firstname">First name*</label>
          <input
            id="firstname"
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            onChange={handleChange}
            required
            value={values.firstname}
          />
        </div>

        <div className="booking-form-input-field">
          <label htmlFor="lastname">Last name*</label>
          <input
            id="lastname"
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            onChange={handleChange}
            required
            value={values.lastname}
          />
        </div>

        <div className="booking-form-input-field">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            onChange={handleChange}
            required
            value={values.email}
          />
        </div>

        <div className="booking-form-input-field">
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            placeholder="Enter phone number"
            name="contact"
            onChange={handleChange}
            required
            value={values.contact}
          />
        </div>

        <div className="booking-form-input-field">
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={values.gender === "Male"}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={values.gender === "Female"}
          /> Female
        </div>

        <div className="booking-form-input-field">
          <label htmlFor="roomtype">Room type</label>
          <input
            type="text"
            placeholder="Enter room type"
            name="roomtype"
            id="roomtype"
            onChange={handleChange}
            value={values.roomtype}
          />
        </div>

        <div className="booking-form-input-field">
          <label htmlFor="guestnumber">Number of Guests</label>
          <input
            type="number"
            name="guestnumber"
            id="guestnumber"
            onChange={handleChange}
            value={values.guestnumber}
          />
        </div>

        <div className="booking-btns">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Book Now</button>
        </div>
      </form>

      {popup.show && (
        <div className={`popup ${popup.type}`}>
          <p>{popup.message}</p>
          <button onClick={closePopup}>OK</button>
        </div>
      )}
    </div>
  );
}
