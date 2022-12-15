const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String.set("trim", true),
      required: true,
      unique: true,
    },
    email: {
      type: String,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please provide a valid email address",
      ],
      required: true,
      unique: true,
    },
    thoughts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thought" }],
    },
    friends: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
  },
  { toJSON: { getters: true, virtuals: true } }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
