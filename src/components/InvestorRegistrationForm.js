import React, { useState } from 'react';

const InvestorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    firstName: '',
    surname: '',
    telephone1: '',
    telephone2: '',
    telephone3: '',
    fax: '',
    email1: '',
    email2: '',
    category: '',
    agent: '',
    dealer: '',
    ddoDistributor: '',
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    otherAddress1: '',
    otherAddress2: '',
    otherAddress3: '',
    otherAddress4: '',
    drp: '0',
    crs: '',
    auditedReport: null,
    preferredMethod: 'Email',
    contactPerson: '',
    tinGiIN: '',
    mthEmail1: false,
    qtrEmail1: false,
    mthEmail2: false,
    qtrEmail2: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      auditedReport: file,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            
            <h1 className="text-2xl font-semibold text-gray-900">Investor Registration</h1>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ID</label>
                    <input
                      type="text"
                      name="id"
                      value={formData.id}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Surname</label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-medium text-gray-900 pt-4">Contact Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Telephone 1</label>
                    <input
                      type="tel"
                      name="telephone1"
                      value={formData.telephone1}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Telephone 2</label>
                    <input
                      type="tel"
                      name="telephone2"
                      value={formData.telephone2}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Telephone 3</label>
                    <input
                      type="tel"
                      name="telephone3"
                      value={formData.telephone3}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fax</label>
                    <input
                      type="tel"
                      name="fax"
                      value={formData.fax}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Email Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Email 1</label>
                      <input
                        type="email"
                        name="email1"
                        value={formData.email1}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                      />
                    </div>
                    <div className="flex items-center space-x-4 pt-6">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="mthEmail1"
                          checked={formData.mthEmail1}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 text-custom focus:ring-custom"
                        />
                        <span className="ml-2 text-sm text-gray-600">Mth</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="qtrEmail1"
                          checked={formData.qtrEmail1}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 text-custom focus:ring-custom"
                        />
                        <span className="ml-2 text-sm text-gray-600">Qtr</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Email 2</label>
                      <input
                        type="email"
                        name="email2"
                        value={formData.email2}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                      />
                    </div>
                    <div className="flex items-center space-x-4 pt-6">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="mthEmail2"
                          checked={formData.mthEmail2}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 text-custom focus:ring-custom"
                        />
                        <span className="ml-2 text-sm text-gray-600">Mth</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="qtrEmail2"
                          checked={formData.qtrEmail2}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 text-custom focus:ring-custom"
                        />
                        <span className="ml-2 text-sm text-gray-600">Qtr</span>
                      </label>
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-medium text-gray-900 pt-4">Business Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Agent</label>
                    <input
                      type="text"
                      name="agent"
                      value={formData.agent}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Dealer</label>
                    <input
                      type="text"
                      name="dealer"
                      value={formData.dealer}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DDO Distributor</label>
                    <input
                      type="text"
                      name="ddoDistributor"
                      value={formData.ddoDistributor}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    >
                      <option value="">Select category</option>
                      <option value="Individual">Individual</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Institution">Institution</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Primary Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                    <input
                      type="text"
                      name="address1"
                      value={formData.address1}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                    <input
                      type="text"
                      name="address2"
                      value={formData.address2}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 3</label>
                    <input
                      type="text"
                      name="address3"
                      value={formData.address3}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 4</label>
                    <input
                      type="text"
                      name="address4"
                      value={formData.address4}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Other Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Other Address Line 1</label>
                    <input
                      type="text"
                      name="otherAddress1"
                      value={formData.otherAddress1}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Other Address Line 2</label>
                    <input
                      type="text"
                      name="otherAddress2"
                      value={formData.otherAddress2}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Other Address Line 3</label>
                    <input
                      type="text"
                      name="otherAddress3"
                      value={formData.otherAddress3}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Other Address Line 4</label>
                    <input
                      type="text"
                      name="otherAddress4"
                      value={formData.otherAddress4}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DRP (0=cash)</label>
                    <select
                      name="drp"
                      value={formData.drp}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    >
                      <option value="0">Cash</option>
                      <option value="1">DRP</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CRS</label>
                    <input
                      type="text"
                      name="crs"
                      value={formData.crs}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Audited Fin Report</label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-custom file:text-white hover:file:bg-custom/80"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Communication Preference</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Method</label>
                    <select
                      name="preferredMethod"
                      value={formData.preferredMethod}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    >
                      <option>Email</option>
                      <option>Phone</option>
                      <option>Mail</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Person</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">TIN/GIIN</label>
                    <input
                      type="text"
                      name="tinGiIN"
                      value={formData.tinGiIN}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-end space-x-4 rounded-b-lg">
            <button
              type="button"
              onClick={() => setFormData({})}
              className="!rounded-button px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
            >
              Reset
            </button>
            <button
              type="submit"
              className="!rounded-button px-4 py-2 border border-transparent text-sm font-medium text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvestorRegistrationForm;
