export default `

    type User {
        _id: String!
        name: String!
        lastName: String!
        phoneNumber: String!
        profilePricture: String!
        email: String!
        activePin: String!
        isActive: Boolean!
        conversations: [Conversation]
    }

`;