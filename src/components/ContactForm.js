import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../src/App.css'; 
import '../../src/App.css'; 
const ContactForm = () => {
  return (
    <div className="container py-5 mt-4">
      <div className="text-center mb-4 bg-custom text-white">
        <h1 className="h3">Contact Information Form</h1>
        <p>Please fill in all required fields marked with an asterisk (*)</p>
      </div>

      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Search records..."
          />
          <button className="btn btn-outline-primary ms-2">Advanced Search</button>
        </div>
      </div>

      <form>
        {/* Personal Information Section */}
        <div className="card  card-shadow mb-4">
          <div className="card-body ">
            <h5 className="card-title">Personal Information</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">ID *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Name *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Surname</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Account Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select className="form-select">
                  <option>Select category</option>
                  <option>Individual</option>
                  <option>Corporate</option>
                  <option>Institution</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">Contact Information</h5>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Telephone 1</label>
                <input type="tel" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Telephone 2</label>
                <input type="tel" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Telephone 3</label>
                <input type="tel" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email 1 *</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email 2</label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email 3</label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Fax</label>
                <input type="tel" className="form-control" />
              </div>
            </div>
            <div className="mt-3">
              <label className="form-label">Contact Preference</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="monthly"
                />
                <label className="form-check-label" htmlFor="monthly">
                  Monthly
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="quarterly"
                />
                <label className="form-check-label" htmlFor="quarterly">
                  Quarterly
                </label>
              </div>
            </div>
          </div>


          <div className="card-body">
            <h5 className="card-title">Address Information</h5>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Address Line 1 *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-12">
                <label className="form-label">Address Line 2</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <label className="form-label">Address Line 3</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <label className="form-label">Address Line 4</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">Additional Information</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">TIN/GIIN</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Business Type</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agent"
                  />
                  <label className="form-check-label" htmlFor="agent">
                    Agent
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="dealer"
                  />
                  <label className="form-check-label" htmlFor="dealer">
                    Dealer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="distributor"
                  />
                  <label className="form-check-label" htmlFor="distributor">
                    DDO Distributor
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Form Buttons */}
        <div className="text-center">
          <button type="button" className="btn btn-outline-secondary me-2">
            Cancel
          </button>
          <button type="reset" className="btn btn-outline-secondary me-2">
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
