import React from "react";
import './AccountSettings.css'

const AccountSettings = () => {
    return (
        <div className="accountsettings">
            <h1>Personal Infromation</h1>

            <div className="form">
                <div className="form-group">
                    <label htmlFor="name">Your Name<span>*</span></label>
                    <input type="text" name="name" id="name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email<span>*</span></label>
                    <input type="email" name="email" id="email"/>
                </div>

            </div>

            <button className="savebutton">Save Changes</button>
        </div>
    )
}

export default AccountSettings;