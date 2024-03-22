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
    const fireResources = await FireResourceModel.find()
      .populate({ path: 'user', select: ['fullName', 'avatarUrl'] })
      .exec();
    res.json(fireResources);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить данные о ресурсах',
    });
  }
};

export const getOneFireResource = async (req, res) => {
  try {
    const fireResourceId = req.params.id;
    const doc = await FireResourceModel.findOne({ _id: fireResourceId });

    if (!doc) {
      return res.status(404).json({
        message: 'Данные о ресурсе не найдены',
      });
    }

    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить данные о ресурсе',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const fireResourceId = req.params.id;
    const doc = await FireResourceModel.findOneAndDelete({ _id: fireResourceId });

    if (!doc) {
      return res.status(404).json({
        message: 'Ресурс не найден',
      });
    }
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось удалить ресурс',
    });
  }
};

export const update = async (req, res) => {
  try {
    const fireResourceId = req.params.id;
    await FireResourceModel.updateOne(
      { _id: fireResourceId },
      {
        name: req.body.name,
        type: req.body.type,
        status: req.body.status,
        user: req.userId,
      },
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить ресурс',
    });
  }
};
