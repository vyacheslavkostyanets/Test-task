import React from "react";

const Pagination = ({ albumPerPage, totalAlbums, paginate, currentPage }) => {
  const pageNumbers = [];
  console.log(currentPage, "currentPage");

  for (let i = 1; i <= Math.ceil(totalAlbums / albumPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="d-flex align-content-start flex-wrap list-unstyled">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          {pageNumbers.map((number) => {
            return (
              <div>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="#"
                    onClick={() => {
                      console.log("number", number);
                      return paginate(number);
                    }}
                  >
                    {number}
                  </a>
                </li>
              </div>
            );
          })}
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Pagination };
