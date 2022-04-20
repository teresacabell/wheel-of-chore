const { AuthenticationError } = require('apollo-server-express');
<<<<<<< HEAD
const { signToken } = require('../utils/auth');
const { User } = require('../models');
=======
const { User } = require('../models');
const { signToken } = require('../utils/auth');
>>>>>>> develop

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
<<<<<<< HEAD
                const userData = await User.findOne({ _id: context.user._id}).select('__v -password');
                return userData
            }
            throw new AuthenticationError('You are not logged in');
        },
    },
}
=======
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                
                return userData;
            }

            throw new AuthenticationError('Not logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials!');
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect credentials!');
            }

            const token = signToken(user);
            return { token, user };
        },
    },
};

module.exports = resolvers;
>>>>>>> develop
