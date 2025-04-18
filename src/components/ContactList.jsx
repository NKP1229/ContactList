import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import ContactRow from "./ContactRow";

// const dummyContacts = [
//     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//     { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//  ];

export default function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState([])
    // console.log("Contacts: ", contacts)
    useEffect(()=>{
        async function fetchContacts() {
            try {
              const response = await fetch(
                "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
              );
              const result = await response.json();
              setContacts(result);
            } catch (error) {
              console.error(error);
            }
          }
          fetchContacts()
    },[])
    //console.log("Contacts: ", contacts);
    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3"><h1>Contact List</h1></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><h2>Name</h2></td>
              <td><h2>Email</h2></td>
              <td><h2>Phone</h2></td>
            </tr>
            {
               contacts.map((contacts) => {
                return <ContactRow key={contacts.id} setSelectedContactId={setSelectedContactId} contacts={contacts} />;
               })
             }
          </tbody>
        </table>
    );
}