import {useState} from 'react'
import {useEffect} from 'react'
export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState({})
    async function fetchContact() {
        try{
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json();
            await setContact(result);
        }
        catch(error){
            console.error(error.message);
        }
    }
    useEffect(() => {
        fetchContact()
    },[])
    return (
        <>
            <h1>{contact.name}</h1>
            <h3>username: {contact.username}</h3>
            <h3>email: {contact.email}</h3>
            <h3>phone: {contact.phone}</h3>
            <h3>website: {contact.website}</h3>
            <button onClick={() => {setSelectedContactId(null)}}>
                Go Back
            </button>
        </>
    );
}