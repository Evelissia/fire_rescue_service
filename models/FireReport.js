import mongoose from 'mongoose';

const FireReportSchema = new mongoose.Schema(
  {
    location: {
      type: {
        latitude: Number,
        longitude: Number,
      },
      required: true,
    },
    dangerLevel: {
      type: String,
      required: true,
    },
    areaSize: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('FireReport', FireReportSchema);
