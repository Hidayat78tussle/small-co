import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import '../../src/App.css';
const FinancialDataEntry = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        id: "0",
        name: "",
        units: "",
        totalCash: "",
        filterType: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleReset = () => {
        setFormData({
            id: "0",
            name: "",
            units: "",
            totalCash: "",
            filterType: "",
        });
    };

    return (
        <div className="container py-5 mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-black text-white">
                    <h1 className="h5 mb-0">Financial Data Entry </h1>
                </div>

                <div className="card-body card-shadow">
                    <div className="mb-5">
                        <div className="row g-3">
                            <div className="col-md-9">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control ps-5"
                                        placeholder="Search records..."
                                    />
                                    <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                                        <i className="fa fa-search text-muted"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <select
                                    className="form-select form-selctcss"
                                    name="filterType"
                                    value={formData.filterType}
                                    onChange={handleChange}
                                >
                                    <option value="">Filter by type</option>
                                    <option value="SBFTotal">SBFTotal</option>
                                    <option value="SIFTotal">SIFTotal</option>
                                    <option value="SGFTotal">SGFTotal</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-4">
                                <label htmlFor="id" className="form-label">
                                    ID
                                </label>
                                <input
                                    type="text"
                                    id="id"
                                    name="id"
                                    className="form-control bg-light"
                                    value={formData.id}
                                    disabled
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="name" className="form-label">
                                    Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="units" className="form-label">
                                    Units <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="units"
                                    name="units"
                                    required
                                    className="form-control"
                                    placeholder="Enter units"
                                    value={formData.units}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="totalCash" className="form-label">
                                    Total Cash <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text text-muted">$</span>
                                    <input
                                        type="number"
                                        id="totalCash"
                                        name="totalCash"
                                        required
                                        className="form-control"
                                        placeholder="Enter total cash"
                                        value={formData.totalCash}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-end">
                            <button
                                type="button"
                                className="btn btn-outline-secondary me-3"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                onMouseEnter={() => setIsHovered(true)} // Hover start
                                onMouseLeave={() => setIsHovered(false)} // Hover end
                                style={{
                                    backgroundColor: isHovered ? 'white' : 'black',  // Change background on hover
                                    color: isHovered ? 'black' : 'white',            // Change text color on hover
                                    borderRadius: '5px',
                                    border: `2px solid ${isHovered ? 'black' : 'transparent'}`,  // Change border on hover
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem',
                                    paddingTop: '0.5rem',
                                    paddingBottom: '0.5rem',
                                    margin: '10px',
                                    cursor: 'pointer', // Make it look clickable
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FinancialDataEntry;
