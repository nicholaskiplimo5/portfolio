const ModalView = ({ isOpen, url, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <iframe
                    src={url}
                    width="100%"
                    height="500px"
                    title="Document Viewer"
                />
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ModalView;