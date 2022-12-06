const { Schema, Types, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String.set("trim", true),
      required: true,
      unique: true,
    },
    email: {
      type: String,
      match: [/.+@.+\..+/, "Please provide a valid email address"],
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

const User = db.model("User", userSchema);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = User;
