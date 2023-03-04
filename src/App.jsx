import React, { useState, useEffect } from "react";

const PaginationExample = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageCount]);

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items
      .slice(start, end)
      .map((item) => <div key={item.id}>{item.text}</div>);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className="item-list">{renderItems()}</div>
      <div className="pagination">{renderPageNumbers()}</div>
      <select
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default function App() {
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 6" },
    { id: 7, text: "Item 7" },
    { id: 8, text: "Item 8" },
    { id: 9, text: "Item 9" },
    { id: 10, text: "Item 10" },
    { id: 11, text: "Item 11" },
    { id: 12, text: "Item 12" },
    { id: 13, text: "Item 13" },
    { id: 14, text: "Item 14" },
    { id: 15, text: "Item 15" }
  ];

  return (
    <div>
      <PaginationExample items={items} />
    </div>
  );
}
