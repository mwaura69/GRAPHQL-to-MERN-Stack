import { Books } from "../modules/book.js"

const resolvers = {
    Query: {
        books() {
            return Books.find().exec()
        },
        book(parent,{_id}) {
            return Books.findById(_id).exec()
        },
        author(_,{_id}) {
            return Books.findById(_id).exec()
        }
    }, 
    Mutation: {
        createBook(_, {title, author, country, bookcover}) {
            return Books.create({title, author, country, bookcover})
        },
        updateBook(_, {_id, title, author, country, bookcover}) {
            return Books.findByIdAndUpdate(_id, {title, author, country, bookcover},{ new:true}).exec()
        },
        deleteBook(_, {_id}) {
            return Books.findByIdAndRemove(_id).exec()
        }
    }
}

export default resolvers