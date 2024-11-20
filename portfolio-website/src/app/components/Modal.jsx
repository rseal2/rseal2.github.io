import React from "react";

const Modal = ({ isOpen, onClose, title, role, description, skills }) => {
  if (!isOpen) return null;

return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
  <div className="bg-[#181818] p-6 rounded-lg shadow-lg w-4/5 sm:w-[600px] h-auto sm:[500px] relative">
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
    >
      ✖
    </button>

    {/* Modal Content */}
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    {role && <p className="mb-4">{role}</p>}
    {description && <p className="mb-4">{description}</p>}
    



    {/* Skills */}
    {skills.length > 0 && (
      <div className="mt-6">
        <h3 className="font-bold">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 rounded text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
</div>
    );  
};

export default Modal;
