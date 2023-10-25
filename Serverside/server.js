import { ApolloServer } from '@apollo/server'
import express from "express"
import cors from "cors"
import { mongoDBURL, PORT} from "./server/modules/db.js"
import resolvers from "./server/graphql/resolvers.js"
import typeDefs from "./server/graphql/schema.js"
import { buildSubgraphSchema } from '@apollo/subgraph';
import mongoose from "mongoose"
import { expressMiddleware } from '@apollo/server/express4';


const app = express()
app.use(cors())
app.use(express.json())

const server = new ApolloServer({
    schema: buildSubgraphSchema({typeDefs, resolvers})
})

await server.start()
app.use('/graphql', cors(), expressMiddleware(server));


mongoose.connect(mongoDBURL)
.then(() => {
    console.log(`connected to database`)
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})