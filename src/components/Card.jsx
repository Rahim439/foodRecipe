import React from "react";

const Card = ({ title, image, description, link }) => {
  const truncatedDescription = description
    ? description.split(" ").slice(0, 30).join(" ") + "..."
    : "Blueberry Creammmm Muffins are tender, moist treats packed with juicy blueberries and a creamy texture, making them irresistible for breakfast or a delightful snack...";

  return (
    <div className="w-full p-4 m-2 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 sm:m-4 md:m-6 lg:w-1/3 lg:m-6 xl:w-1/4 xl:m-8">
      <a href={link}>
        <img
          className="object-cover w-full h-48 rounded-t-lg"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-4">
        <a href={link}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncatedDescription}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
