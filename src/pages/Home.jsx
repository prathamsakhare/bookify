import React, {useEffect, useState} from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from '../components/Card';
const Home = () => {

    const [books, setBooks] = useState([]);

    const firebase = useFirebase();

    useEffect(() => {
        firebase.listAllBooks().then((book) => setBooks(book.docs))
    }, [])
    console.log(books)
    return (
    <div className='container mt-5 d-flex gap-5 flex-wrap'>
        {books?.map(book => <BookCard key={book.id} id={book.id} {...book.data()} />)}
        
    </div>
  )
}

export default Home