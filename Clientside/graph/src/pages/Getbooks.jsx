import { useQuery, gql } from '@apollo/client'
import React from 'react'

const GET_BOOKS = gql `
    query GetBooks {
        books {
            title,
            author,
            country,
            _id,
            bookcover
        }
    }
`
const Getbooks = () => {
    const {error, loading, data } = useQuery(GET_BOOKS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            {data.books.map(({title, author, _id, country, bookcover}) => (
                <div key={_id}>
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                    <h4>{country}</h4>
                    <img src={bookcover} />
                </div>
            ))}
        </>
    )
}

export default Getbooks