import React , {useState, useMemo, useCallback, useContext} from "react";
import './PetProfiles.css'

const PetProfiles = () => {
    return(
        <div className="accountsettings">
            <h1>Pet Profiles</h1>

            <div className="form">
                <div className="form-group">
                    <label htmlFor="petName">Pet Name <span>*</span></label>
                    <input type="text" name="petName" id="petName"/>
                </div>

                <div className="form-group">
                    <label htmlFor="petAge">Age<span>*</span></label>
                    <input type="text" name="petAge" id="petAge"/>
                </div>

                <div className="form-group">
                    <label htmlFor="petBreed">Breed<span>*</span></label>
                    <input type="text" name="petBreed" id="petBreed"/>
                </div>

                <div className="form-group">
                    <label htmlFor="petWeight">Weight<span>*</span></label>
                    <input type="text" name="petWeight" id="petWeight"/>
                </div>

            </div>

            <button className="savebutton">Save Changes</button>
        </div>
    )
}

export default PetProfiles;