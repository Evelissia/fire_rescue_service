import FireResourceModel from '../models/FileResources.js';

export const createFireResource = async (req, res) => {
  try {
    const doc = new FireResourceModel({
      name: req.body.name,
      type: req.body.type,
      status: req.body.status,
      user: req.userId,
    });

    const fireResource = await doc.save();

    res.json(fireResource);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать ресурс',
    });
  }
};

export const getAllFireResources = async (req, res) => {
  try {
    const fireResources = await FireResourceModel.find().populate('user').exec();
    res.json(fireResources);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить отчеты о ресурсах',
    });
  }
};
