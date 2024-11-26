import React, {useEffect} from "react";

const Modal = ({ isOpen, onClose, title, role, timeline, description, contributions, skills }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup to ensure class is removed when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
  <div className="bg-[#181818] p-6 rounded-lg shadow-lg w-4/5 sm:w-[800px] h-auto sm:[500px] relative">
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-[#235347]"
    >
      ✖
    </button>

    {/* Modal Content */}
    {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
    {role && <h2 className="text-[#235347] text-2xl mb-2">{role}</h2>}
    {timeline && <h2 className="text-xl mb-2">{timeline}</h2>}
    {description && <i className="mb-2">{description}</i>}

    {/* Contributions */}
    {contributions.length > 0 && (
          <div className="mt-6">
            <h3 className="text-[#235347] text-2xl font-bold">Contributions:</h3>
            <ul className="list-disc ml-6">
              {contributions.map((contributions, index) => (
                <li key={index} className="text-lg mt-1">
                  {contributions}
                </li>
              ))}
            </ul>
          </div>
        )}
    
    {/* Skills */}
    {skills.length > 0 && (
      <div className="mt-6">
        <h3 className="text-[#235347] text-2xl font-bold">Skills:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#235347] rounded text-white font-bold"
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
