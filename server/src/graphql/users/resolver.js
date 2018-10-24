import * as securePin from 'secure-pin';
import { SMS } from '../../services';

export default {
    
    Query: {
        users: async (root, args, { Users }, info) => {
            const response = await Users.find()
            return response;
        },
        

        user: async (root, { _id }, { Users }, info) => {
            
            const response = await Users.findById(_id)
            return response;
        }
    },

    User: {
        conversations: async (user, args, { Conversations }) => {
        
            const response = await Conversations.find({
                $or:[
                    {'owner_id': user._id},
                    {'invited_id': user._id}
                ]
            })
            return response;
        },
    },

    Mutation: {
        createUser: async (root, args, { Users }) => {
            const  pin = securePin.generatePinSync(6)
            args.activePin = pin;

            const sms = await SMS(pin, args.phoneNumber);
            const response = await Users.create(args);
            return response;
        },
    },
};