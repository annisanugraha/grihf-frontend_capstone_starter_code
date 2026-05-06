import React, { useState } from "react";
import "./FindDoctorSearch.css";

const specialties = [
  "Dentist", "Gynecologist/Obstetrician", "General Physician",
  "Dermatologist", "Ear-Nose-Throat (ENT) Specialist",
  "Homeopath", "Ayurveda", "Cardiologist", "Neurologist",
  "Orthopedist", "Pediatrician", "Psychiatrist"
];

const FindDoctorSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);

  const filtered = specialties.filter((s) =>
    s.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (specialty) => {
    setSearchValue(specialty);
    setShowList(false);
    if (onSearch) onSearch(specialty);
  };

  return (
    <div className="finddoctor-search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search doctors by specialty"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (onSearch) onSearch(e.target.value);
          }}
          onFocus={() => setShowList(true)}
          onBlur={() => setTimeout(() => setShowList(false), 200)}
        />
        <button className="search-btn">🔍</button>
      </div>
      {showList && filtered.length > 0 && (
        <ul className="specialty-dropdown">
          {filtered.map((s) => (
            <li key={s} onMouseDown={() => handleSelect(s)} className="specialty-item">
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;