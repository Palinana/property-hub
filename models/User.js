import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema (
    {
        email: {
            type: String,
            unique: [true, 'Email already exists'],
            required: [true, 'Email is required'],
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
        },
        image: {
            type: String,
        },
        bookmarks: [ // properties ids
            {
                type: Schema.Types.ObjectId,
                ref: 'Property' // model name
            }
        ]
    },
    { // created and updated date
        timestamps: true,
    }
)
