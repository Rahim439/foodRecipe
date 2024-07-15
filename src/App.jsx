import Card from "./components/Card";
import { useState, useEffect } from "react";
import useRecipe from "./hooks/useRecipe";
import { Audio } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const recipe = useRecipe();
  console.log(recipe);
  useEffect(() => {
    if (recipe && recipe.length > 0) {
      setLoading(false);
    }
  }, [recipe]);

  return (
    <>
      <h1 className="py-4 font-serif text-4xl text-center text-white rounded-lg shadow-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Food Recipe App
      </h1>
      {loading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <div className="flex flex-wrap items-center justify-center">
          {recipe.map((recipes, index) => (
            <Card
              key={index} // Assuming show_id is a unique identifier
              title={recipes.name}
              image={recipes.thumbnail_url}
              description={recipes.description}
              link={`https://tasty.co/recipe/${recipes.slug}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
