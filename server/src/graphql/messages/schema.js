export default ` 

    type Message {
        _id: String!
        owner_id: String!
        conversation_id: String!
        message: String!
        messageType: String!
        user: User
    }

`;