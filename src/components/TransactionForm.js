import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../src/App.css'; 

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        totalCash: '',
        units: '',
        transactionType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="bg-custom text-white rounded-lg shadow-lg p-4 mb-3 mt-4">
                        <h1 className="h3">Transaction Details</h1>
                        <p className="mb-0">Please fill in the transaction information below</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-4 card-shadow ">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="totalCash" className="form-label">Total Cash</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input
                                        type="text"
                                        className="form-control focus-custom"
                                        id="totalCash"
                                        name="totalCash"
                                        value={formData.totalCash}
                                        onChange={handleChange}
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="units" className="form-label">Units</label>
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control focus-custom"
                                        id="units"
                                        name="units"
                                        value={formData.units}
                                        onChange={handleChange}
                                        placeholder="Enter quantity"
                                    />
                                    <button type="button" className="btn btn-outline-secondary">
                                        <i className="bi bi-plus-slash-minus"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="transactionType" className="form-label">Transaction Type</label>
                                <select
                                    className="form-select focus-custom"
                                    id="transactionType"
                                    name="transactionType"
                                    value={formData.transactionType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select type</option>
                                    <option value="purchase">Purchase</option>
                                    <option value="sale">Sale</option>
                                    <option value="transfer">Transfer</option>
                                </select>
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-custom text-white">
                                    <i className="bi bi-send"></i> Submit Transaction
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionForm;
