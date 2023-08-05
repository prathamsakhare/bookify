import React, {useEffect, useState} from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from '../components/Card';
const Home = () => {

    const [books, setBooks] = useState([]);

    const firebase = useFirebase();

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    })
  return (
    <div className='container mt-5'>
        {books?.map(book => <BookCard {...book.data()} />)}
        
    </div>
  )
}

export default Home