import './App.css'
import { useState } from 'react';
import ContactList from './components/ContactList.jsx'
import SelectedContact from "./components/SelectedContact";
function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <div id="page">
      {selectedContactId ? (<SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}/>) : (<ContactList setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} />)}
    </div>
  )
}

export default App
