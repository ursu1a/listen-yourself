import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

import { SearchResult } from "@/types";
import axios from "@/lib/axios";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const fetchResults = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery) return; // Don't make a request if empty string

      try {
        const { data } = await axios.get("/api/search", {
          params: { q: searchQuery },
        });

        setResults(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Search error: ", error);
      } finally {
        setLoading(false);
      }
    }, 400), // delay
    [],
  );

  useEffect(() => {
    if (!query) {
      setResults([]);

      return;
    }

    setLoading(true);
    fetchResults(query);

    return () => {
      fetchResults.cancel(); // Отменяем предыдущий вызов при изменении запроса
    };
  }, [query]);

  return { query, results, loading, setQuery };
};
