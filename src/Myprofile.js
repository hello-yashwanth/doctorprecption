import React, { useState } from "react";
import './index.css';

const Myprofile = () => {
  const [user, setUser] = useState({
    name: "Yash",
    image: '/assects/image.png',
    email: 'helloyash@gmail.com',
    phone: '+123456789',
    address: {
      line1: "Gachibowli Hyderabad",
      line2: ""
    },
    gender: 'Male',
    dob: '2004-11-19'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="Myprofile-container">
      <div className="profile-header">
        <img src={user.image} alt="Profile" className="profile-image" />
        {isEdit ? (
          <input
            type="text"
            className="profile-input"
            value={user.name}
            onChange={e => setUser(prev => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className="profile-name">Name:{user.name}</p>
        )}
        <hr className="divider"/>
      </div>

     
      <div className="profile-section">
        <p className="section-title">Contact Information</p>

        <div className="field-label">Email:</div>
        <p className="field-value">{user.email}</p>

        <div className="field-label">Phone:</div>
        {isEdit ? (
          <input
            type="text"
            className="profile-input"
            value={user.phone}
            onChange={e => setUser(prev => ({ ...prev, phone: e.target.value }))}
          />
        ) : (
          <p className="field-value">{user.phone}</p>
        )}

        <div className="field-label">Address:</div>
        {isEdit ? (
          <>
            <input
              type="text"
              className="profile-input"
              value={user.address.line1}
              onChange={e => setUser(prev => ({
                ...prev,
                address: { ...prev.address, line1: e.target.value }
              }))}
            />
            <input
              type="text"
              className="profile-input"
              value={user.address.line2}
              onChange={e => setUser(prev => ({
                ...prev,
                address: { ...prev.address, line2: e.target.value }
              }))}
            />
          </>
        ) : (
          <p className="field-value">{user.address.line1} {user.address.line2}</p>
        )}

        <div className="field-label">Gender:</div>
        {isEdit ? (
          <select
            className="profile-input"
            value={user.gender}
            onChange={e => setUser(prev => ({ ...prev, gender: e.target.value }))}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p className="field-value">{user.gender}</p>
        )}

        <div className="field-label">DOB:</div>
        <p className="field-value">{user.dob}</p>

      
        <div className="button-container">
          {isEdit ? (
            <button className="profile-button" onClick={() => setIsEdit(false)}>Save</button>
          ) : (
            <button className="profile-button" onClick={() => setIsEdit(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
