import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contacts/contacts-operation';
import { getItems, getFilter, getLoading } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import Loader from '../../components/Loader';
import call from '../../img/call.svg'


const Contacts = () => {
  
  const dispatch = useDispatch();

  const items = useSelector(getItems)
  const filter = useSelector(getFilter)
  const isLoading = useSelector(getLoading)

  
  useEffect(() => {
    dispatch(getContacts())
    
  }, [dispatch])

  
  
  const NormalizeFilter = filter.toLowerCase();
  
  const contactsArr = items.filter((item) =>
  item.name.toLowerCase().includes(NormalizeFilter)
  );
  
 

  return (
    
    
    <ul className={s.contactsList}>
      {isLoading && <Loader/>}
      {contactsArr.map(({ name, number, id}) =>
        <li key={id} className={s.contactItem}>
          <p className={s.contactsName}> {name}: <span className={s.contactsNumber}>{number}</span></p> 
          <button className={s.delBtn} onClick={()=> dispatch(deleteContact(id))} type="button">Delete</button>
         
          {/* <a href="tel:{number}" ><img src={call} alt={number} /></a> */}
        </li>)
      
      }
    </ul>
    
  )
}

export default Contacts;
