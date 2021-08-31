import { ReactElement, useEffect, useState } from 'react'
import Navi from '../../layouts/Navi'
import BookService from '../../services/bookService';


export default function Books(): ReactElement {
    const [books, setBooks] = useState({});
   
    useEffect(() => {
        let bookService = new BookService();
        bookService.getBooks().then(book => setBooks(book.data));
    }, [])


    return (
        <div>
            <Navi/>
            
        </div>
    )
}
