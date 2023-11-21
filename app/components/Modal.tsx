import { IoIosClose } from "react-icons/io";

interface ModalProps{
    modalOpen: boolean
    setModalOpen: (open : boolean) => boolean | void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className='modal-box relative'>
          <label
            onClick={() => setModalOpen(false)}
            className='btn btn-sm btn-circle absolute right-2 top-2 color-red-400'
          >
             <IoIosClose size="25"/>
          </label>
          {children}
        </div>
      </div>
)}

export default Modal