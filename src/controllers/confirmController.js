
import Measure from '../models/measure';
exports.confirmMeasure = async (req, res) => {
  try {
    const { measure_uuid, confirmed_value } = req.body;

    if (!measure_uuid || confirmed_value === undefined) {
      return res.status(400).json({
        error_code: 'INVALID_DATA',
        error_description: 'UUID da medição e valor confirmado são obrigatórios',
      });
    }

    const measure = await Measure.findOne({ uuid: measure_uuid });

    if (!measure) {
      return res.status(404).json({
        error_code: 'MEASURE_NOT_FOUND',
        error_description: 'Leitura não encontrada',
      });
    }

    if (measure.confirmed) {
      return res.status(409).json({
        error_code: 'CONFIRMATION_DUPLICATE',
        error_description: 'Leitura já confirmada',
      });
    }

    measure.measureValue = confirmed_value;
    measure.confirmed = true;
    await measure.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro na confirmação da medição:', error);
    res.status(500).json({
      error_code: 'SERVER_ERROR',
      error_description: 'Erro interno do servidor',
    });
  }
};
