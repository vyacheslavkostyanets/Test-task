function Albums({
  id,
  thumbnailUrl,
  title,
  url,
  deleteElement,
  showModalBigImg,
}) {
  return (
    <div className="col col-md-3">
      <img src={thumbnailUrl} alt="" />
      <p>{title}</p>

      <div className="row">
        <div className="col-xs-1">
          <p>
            <button
              className="btn btn-success"
              onClick={(event) => {
                event.preventDefault();
                return showModalBigImg(url);
              }}
            >
              <a href={url} className="fw-bold link-warning">
                {url}
              </a>
            </button>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1">
          <p>
            <button
              className="btn btn-danger"
              onClick={() => deleteElement(id)}
            >
              Delete {id}
            </button>
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export { Albums };
