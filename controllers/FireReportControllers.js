import FireReportModel from '../models/FireReport.js';

export const createFireReport = async (req, res) => {
  try {
    const doc = new FireReportModel({
      location: req.body.location,
      dangerLevel: req.body.dangerLevel,
      areaSize: req.body.areaSize,
      description: req.body.description,
      userId: req.userId,
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
