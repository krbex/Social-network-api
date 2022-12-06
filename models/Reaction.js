const { Schema, Types, default: mongoose } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Typers.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      get: (date) => date && moment(date).unix(),
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
  }
);

const Reaction = db.model("Reaction", reactionSchema);

module.exports = Reaction;
