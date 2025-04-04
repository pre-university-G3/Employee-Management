import React from "react";
import { HiX } from "react-icons/hi";

const Panding = ({ isOpen, onClose, onApprove, onDeny, request }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 border-4 border-blue-600">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-blue-900">Pending request</h2>
          <button onClick={onClose} className="text-blue-900 hover:text-blue-700">
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Request Details */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">ID: {request.id}</p>
          <div className="space-x-2">
            <button
              onClick={onApprove}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200"
            >
              Approve
            </button>
            <button
              onClick={onDeny}
              className="px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200"
            >
              Deny
            </button>
          </div>
        </div>

        {/* Employee Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-500 text-sm">Employee</label>
            <input
              type="text"
              value={request.employee}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-50 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-sm">Start Date</label>
            <div className="relative">
              <input
                type="text"
                value={request.startDate}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-50 text-gray-700"
              />
              <svg
                className="absolute right-2 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-gray-500 text-sm">End Date</label>
            <div className="relative">
              <input
                type="text"
                value={request.endDate}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-50 text-gray-700"
              />
              <svg
                className="absolute right-2 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-gray-500 text-sm">Reason</label>
            <textarea
              value={request.reason}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-50 text-gray-700"
              rows="3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panding; 