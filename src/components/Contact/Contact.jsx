import s from './Contact.module.css'
import { IoMdContact } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div className={s.contactContainer}>
            <div className={s.contactData}>
                <h2 className={s.contactName}><IoMdContact size='20'/> {name}</h2>
                <p className={s.contactPhone}><FaPhoneSquareAlt size='20'/> {number}</p>
            </div>
            <button className={s.contactBtnDelete} onClick={() => onDelete(id)}><MdDelete size='20'/> Delete</button>
        </div>
    )
}

export default Contact;