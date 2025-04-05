import React from "react";
import Icon from "../../assets/close.png"; // Ensure this path is correct for your close icon

const PendingCard = ({ selectedRequest, closeModal }) => {
  return (
    <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white/90 rounded-lg shadow-lg p-6 w-100 relative">
        {/* Leave for request */}
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-gray-800 font-semibold text-lg">Request for Leave</h2>
          <button onClick={closeModal}>
            <img src={Icon} alt="close" className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-between mb-4">
          <p>ID: {selectedRequest.id}</p>
          <div className="ml-2">
            <button
              type="button"
              className="w-25 bg-green-200 text-green-700 border-2 border-green-700 text-center font-bold py-1 rounded-md hover:bg-green-400 duration-1000"
            >
              Approve
            </button>
          </div>
          <div className="mr-1.5">
            <button
              type="button"
              className="w-25 bg-red-300 ml-2 border-2 text-center border-red-800 text-red-700 font-bold py-1 rounded-md hover:bg-red-400 duration-1000"
            >
              Deny
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="flex items-center">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 w-24">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={selectedRequest.name}
              className="w-[71%] rounded-md border border-gray-300 px-3 py-1.5 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="startDate" className="text-sm font-medium text-gray-700 w-24">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={selectedRequest.StartDate}
              className="w-[71%] rounded-md border border-gray-300 px-3 py-1.5 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="endDate" className="text-sm font-medium text-gray-700 w-24">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={selectedRequest.StartEnd}
              className="w-[71%] rounded-md border border-gray-300 px-3 py-1.5 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          <div className="flex items-start">
            <label htmlFor="reason" className="text-sm font-medium text-gray-700 w-24">
              Reason
            </label>
            <textarea
              name="reason"
              id="reason"
              placeholder="Enter your reason"
              rows="3"
              className="w-[71%] rounded-md border border-gray-300 px-3 py-1.5 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingCard;
