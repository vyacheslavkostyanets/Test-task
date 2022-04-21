import "./modal.css";

const Modal = ({ handleClose, isBigModal, children }) => {
  return (
    <div>
      {isBigModal.show ? (
        <div className="modal modal display-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  onClick={handleClose}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button className="btn btn-danger" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { Modal };
