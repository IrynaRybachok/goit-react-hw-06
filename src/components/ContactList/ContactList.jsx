import Contact from "../Contact/Contact";
import { nanoid } from 'nanoid'
import s from './ContactList.module.css'
const ContactList = ({ dataListContact, onDelete }) =>{
    return (
        <ul className={s.contactList}>
            {dataListContact.map(data =>(
                <li className={s.contactItem} key={nanoid()}>
                    <Contact
                        data={data}
                        onDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;