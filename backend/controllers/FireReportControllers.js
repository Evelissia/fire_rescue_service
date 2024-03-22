import FireReportModel from '../models/FireReport.js';

export const createFireReport = async (req, res) => {
  try {
    const doc = new FireReportModel({
      location: req.body.location,
      dangerLevel: req.body.dangerLevel,
      areaSize: req.body.areaSize,
      description: req.body.description,
      resources: req.body.resources,
      user: req.userId,
    });

    const fireReport = await doc.save();

    res.json(fireReport);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать отчет о пожаре',
    });
  }
};

export const getAllFireReports = async (req, res) => {
  try {
    const fireReports = await FireReportModel.find()
      .populate({ path: 'user', select: ['name', 'avatar'] })
      .exec();
    res.json(fireReports);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить отчеты о пожарах',
    });
  }
};

export const getOneFireReport = async (req, res) => {
  try {
    const fireReportId = req.params.id;
    const doc = await FireReportModel.findOne({ _id: fireReportId });

    if (!doc) {
      return res.status(404).json({
        message: 'Отчет о пожаре не найден',
      });
    }

    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить отчет о пожаре',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const fireReportId = req.params.id;
    const doc = await FireReportModel.findOneAndDelete({ _id: fireReportId });

    if (!doc) {
      return res.status(404).json({
        message: 'Отчет не найден',
      });
    }
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось удалить отчет',
    });
  }
};

export const update = async (req, res) => {
  try {
    const fireReportId = req.params.id;
    await FireReportModel.updateOne(
      { _id: fireReportId },
      {
        location: req.body.location,
        dangerLevel: req.body.dangerLevel,
        areaSize: req.body.areaSize,
        description: req.body.description,
        resources: req.body.resources,
      },
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить отчет о пожаре',
    });
  }
};
