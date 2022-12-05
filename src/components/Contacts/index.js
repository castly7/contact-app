import {useState, useEffect} from 'react';
import "./styles.css";
import List from './List';
import Form from './Form';


function Contacts() {
  const [contacts, setContacts] = useState ([
    {
      fullname : 'Yusuf' ,
      phone_number : '505100',
    },{
      fullname : 'Castly' ,
      phone_number : '507589',
    },{
      fullname : 'Joseph' ,
      phone_number : '658987',
    }
  ]);

  useEffect (() => {
    console.log(contacts);
  },[contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
