import Card from "./components/Card";
import { useState, useEffect } from "react";
import useRecipe from "./hooks/useRecipe";
import { TailSpin } from "react-loader-spinner";
import Pagination from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(6);
  const recipe = useRecipe();

  useEffect(() => {
    if (recipe.length > 0) {
      setLoading(false);
    }
  }, [recipe]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const displayedRecipes = search
    ? recipe.filter((rec) =>
        rec.name.toLowerCase().includes(search.toLowerCase())
      )
    : recipe;

  const lastIndex = currentPage * cardPerPage;
  const firstIndex = lastIndex - cardPerPage;
  const currentCards = displayedRecipes.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(displayedRecipes.length / cardPerPage);

  return (
    <>
      <h1 className="py-4 font-serif text-4xl text-center text-white rounded-lg shadow-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Food Recipe App
      </h1>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <TailSpin height="80" width="80" color="purple" ariaLabel="loading" />
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter Recipe name"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="block w-3/4 max-w-lg px-6 py-3 mx-auto my-4 text-lg text-gray-700 placeholder-gray-400 transition duration-300 ease-in-out transform border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:scale-105"
          />

          <div className="flex flex-wrap items-center justify-center">
            {currentCards.length > 0 ? (
              currentCards.map((rec, index) => (
                <Card
                  key={index}
                  title={rec.name}
                  image={rec.thumbnail_url}
                  description={rec.description}
                  link={`https://tasty.co/recipe/${rec.slug}`}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No recipes found</p>
            )}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
}

export default App;
