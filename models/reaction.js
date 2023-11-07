const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.Schema.Types.ObjectId,
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString()
    }
            
}); 

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;