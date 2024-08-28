import React from "react";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  let array = [];
  for (let i = 1; i <= totalPages; i++) {
    array.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {array.map((item) => (
        <button
          key={item}
          onClick={() => setCurrentPage(item)}
          className={`px-3 py-1 mx-1 rounded ${
            item === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
