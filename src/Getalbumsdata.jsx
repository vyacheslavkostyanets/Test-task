import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Albums } from "./Albums";
import { FilterCategory } from "./FilterCategory";
import { Modal } from "./Modal";
import { Pagination } from "./Pagination";

function Getalbumsdata() {
  const [album, setAlbums] = useState([]);
  const [albumCategory, setAlbumCategory] = useState([]);

  const [isBigModal, setIsBigModal] = useState({ show: false });
  const [currentPage, setCurrentPage] = useState(1);
  const [albumPerPage] = useState(10);
  const url = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    async function fetchPhotosJSON() {
      const response = await fetch(url);
      const Photos = await response.json();
      return Photos;
    }
    fetchPhotosJSON().then((Photos) => {
      setAlbums(Photos);
    });
  }, []);

  useEffect(() => {
    album.map((el) => albumCategory.push(el.albumId));
    setAlbumCategory(() => [...new Set(albumCategory)]);
  }, [albumCategory]);

  const choseAlbum = useCallback(
    (id) => {
      async function fetchPhotosJSON() {
        const response = await fetch(url);
        const Photos = await response.json();
        return Photos;
      }
      fetchPhotosJSON().then((Photos) => {
        if (id === 0) {
          setAlbums(Photos);
        } else {
          const filtered = Photos.filter((el) => {
            return el.albumId === +id;
          });
          setAlbums(filtered);
        }
      });
    },
    [album]
  );

  function deleteElement(id) {
    const filtered = album.filter((el) => el.id !== id);
    setAlbums(filtered);
  }

  function showModalBigImg(url) {
    console.log(url, "showModal");
    if (!isBigModal.show) {
      setIsBigModal(() => {
        return {
          show: true,
          bigImage: url,
        };
      });
    }
  }

  function closeModalBigImg() {
    setIsBigModal((prev) => ({
      show: false,
    }));
  }

  const lastAlbumIndex = currentPage * albumPerPage;
  const firstAlbumIndex = lastAlbumIndex - albumPerPage;
  const currentAlbum = album.slice(firstAlbumIndex, lastAlbumIndex);

  function paginate(pageNumber) {
    return setCurrentPage(pageNumber);
  }

  return (
    <div>
      <FilterCategory choseAlbum={choseAlbum} numbersCategory={albumCategory} />
      <main>
        <h1>React Modal</h1>
        <Modal isBigModal={isBigModal} handleClose={closeModalBigImg}>
          <img className="modal-width" src={isBigModal.bigImage} alt="" />
          <p>Modal</p>
        </Modal>
      </main>
      <div className="row">
        {currentAlbum.map((el) => {
          return (
            <Albums
              albumId={el.albumId}
              key={el.id}
              thumbnailUrl={el.thumbnailUrl}
              title={el.title}
              url={el.url}
              id={el.id}
              deleteElement={deleteElement}
              showModalBigImg={showModalBigImg}
            />
          );
        })}
      </div>

      <Pagination
        albumPerPage={albumPerPage}
        totalAlbums={album.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export { Getalbumsdata };
