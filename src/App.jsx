import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Note from './components/note';
import notes from './note';

const createNote = (item) => {
    return <Note key={item.key} title={item.title} content={item.content} />
}





function App() {
    return ( <div>
        <Header />
        {notes.map(createNote)}
        <Footer /> 
    </div> );
}

export default App;