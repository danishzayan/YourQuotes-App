import {useState , useEffect, useRef} from 'react'
import { toast, ToastContainer } from "react-toastify";

const EditNotePopup = ({
    editingNoteId,
    editingtext,
  handleEditNote,
  setEditNotePopupIsOpen,
}
) => {
    const characterLimit = 200;

    const [editedText, setEditedText] = useState(editingtext)


    const handleChange = (event)=>{
        if (characterLimit - event.target.value.length >= 0) {
            setEditedText(event.target.value)
          }
    }
    const handleSubmit =(e)=>{
        if(editedText.trim().length >0){
            handleEditNote(editingNoteId, editedText)
            setEditNotePopupIsOpen(false)
        }
        else{
            toast.error('Enter Some Text', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
    }
    let editPopup = useRef()

    useEffect(() => {
        let handler = (e) => {
          if (!editPopup.current.contains(e.target)) {
            setEditNotePopupIsOpen(false);
          }
        };
        document.addEventListener("mousedown", handler);
      
        return () => {
          document.removeEventListener("mousedown", handler);
        };
      }, [editPopup, setEditNotePopupIsOpen]);

  return (
    < >
        <ToastContainer />
      <div ref={editPopup} className="card new popup" data-target="popup">
        <h1 className="popup-title" data-target="popup">
          Edit Your Quote
        </h1>
        <textarea
          cols="10"
          rows="6"
          onChange={handleChange}
          value={editedText}
          data-target="popup"
        ></textarea>
        <div className="footer" data-target="popup">
          <small data-target="popup">
            {characterLimit - editedText.length} Remaining
          </small>
          <button className="save" onClick={handleSubmit} data-target="popup">
            Save
          </button>
        </div>
      </div>

    </>
  )
}

export default EditNotePopup
