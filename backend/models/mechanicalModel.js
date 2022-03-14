import mongoose from 'mongoose';

// const reviewSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     rating: { type: Number, default: 0 },
//     comment: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );
const mechanicalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  speclization: { type: String, required: true },
  place: { type: String, required: true },
  contact: { type: Number, default: 0, required: true },
  // category: { type: String, required: true },
  // countInStock: { type: Number, default: 0, required: true },
  // description: { type: String, required: true },
  // rating: { type: Number, default: 0, required: true },
  // reviews: [reviewSchema],
});

const mechanicalModel = mongoose.model('Mechanical', mechanicalSchema);

export default mechanicalModel;
