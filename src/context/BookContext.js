import React, { createContext, useReducer, useEffect } from 'react';
import uuid from 'uuid/v1';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localdata = localStorage.getItem('books');
        return localdata ? JSON.parse(localdata) : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);
    return(
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider