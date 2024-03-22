import mongoose from 'mongoose';

const FileResourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['fire truck', 'ambulance', 'rescue vehicle'], // типы ресурсов
      required: true,
    },
    status: {
      type: String,
      enum: ['available', 'busy', 'maintenance'], // возможные статусы ресурсов
      default: 'available', // статус по умолчанию
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('FileResource', FileResourceSchema);
