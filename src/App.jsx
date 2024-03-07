import "./App.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import ContactCard from "./components/ContactCard";
import AddandUpdateContact from "./components/AddandUpdateContact";
import NotFoundContact from './components/NotFoundContact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [contacts, setContacts] = useState([]);

  const [isOpen,setOpen] = useState(false);
  
  const onOpen = () => {
    setOpen (true)
  };
  const onClose = () => {
    setOpen (false)
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
         

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })

        
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
         

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase ().includes(value.toLowerCase));
          setContacts(filteredContacts);
          return filteredContacts;
        })
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex relative items-center gap-2">
          <FiSearch className="text-white text-2xl absolute ml-1 flex-grow" />
          <input onChange={filterContacts}
            type="text"
            className="border bg-transparent rounded-md h-[40px] flex-grow text-white pl-9 outline-none"
          />

          <AiFillPlusCircle
            onClick={onOpen}
            className=" text-5xl text-white cursor-pointer"
          />
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {contacts.length < 0 ? < NotFoundContact /> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddandUpdateContact onClose={onClose} isOpen={isOpen} />
      < ToastContainer
      position=" bottom-center "
       />
    </>
  );
}

export default App;
