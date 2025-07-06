import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserForm = ({ user, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDob(user.dob ? new Date(user.dob) : null);
    } else {
      setName('');
      setEmail('');
      setDob(null);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!dob) {
      alert('Please select a valid Date of Birth.');
      return;
    }
    const userData = { name, email, dob: dob ? dob.toISOString() : '' };
    try {
      if (user) {
        await updateUser(user._id, userData);
      } else {
        await createUser(userData);
      }
      onClose();
    } catch (error) {
      console.error('Failed to save user', error);
      alert('Failed to save user. Please check console for details.');
    }
  };

  return (
    <div className="form-container">
      <h3>{user ? 'Edit User' : 'Add New User'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Date of Birth:
            <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select date"
              maxDate={new Date()}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </label>
        </div>
        <div className="form-buttons">
          <button type="submit">{user ? 'Update' : 'Create'}</button>
          <button type="button" onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
