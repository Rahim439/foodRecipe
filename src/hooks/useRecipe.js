import { useEffect, useState } from "react";

function useRecipe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7040152bf1mshedf940e43d78002p1f3049jsn0c092b0ea74e",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
      },
    };

    fetch(
      `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.error(error));
  }, []);

  return data;
}

export default useRecipe;
