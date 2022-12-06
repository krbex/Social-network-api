const { Schema, Types, default: mongoose } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      get: (date) => date && moment(date).unix(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
  }
);

const Thought = db.model("Thought", thoughtSchema);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thought;
