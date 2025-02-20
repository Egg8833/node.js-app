//review /rating /createdAt /ref to tour /ref to user

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review can not be empty!']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  tour:{
    type:mongoose.Schema.ObjectId,
    ref:'Tour',
    required:[true,'Review must belong to a tour.']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user']
  }
},{
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
})

reviewSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name photo'
  }).populate({
    path: 'tour',
    select: 'name' // 只選取 tour 的 `name` 欄位，減少查詢壓力
  });
  next();
});


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;