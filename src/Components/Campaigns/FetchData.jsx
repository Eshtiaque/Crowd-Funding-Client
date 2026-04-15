import { useEffect, useState } from "react";
import axios from "axios";

const PaginatedData = () => {
  const totalData = 3;
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://crowdfunding-gamma.vercel.app/campaigns?&page=${currentPage + 1}`);
        setPages(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return {
    pages,
    totalData,
    currentPage,
    setCurrentPage,
  };
};

export default PaginatedData;