const Measure = require('../models/measure');

exports.listMeasures = async (req, res) => {
  try {
    const { customer_code, measure_type } = req.query;

    if (!customer_code) {
      return res.status(400).json({
        error_code: 'INVALID_DATA',
        error_description: 'Código do cliente é obrigatório',
      });
    }

    let query = { customerCode: customer_code };

    if (measure_type) {
      const validTypes = ['WATER', 'GAS'];
      const upperCaseType = measure_type.toUpperCase();
      if (!validTypes.includes(upperCaseType)) {
        return res.status(400).json({
          error_code: 'INVALID_TYPE',
          error_description: 'Tipo de medição não permitido',
        });
      }
      query.measureType = upperCaseType;
    }

    const measures = await Measure.find(query).sort({ measureDateTime: -1 });

    if (measures.length === 0) {
      return res.status(404).json({
        error_code: 'MEASURES_NOT_FOUND',
        error_description: 'Nenhuma leitura encontrada',
      });
    }

    const response = {
      customer_code,
      measures: measures.map(m => ({
        measure_uuid: m.uuid,
        measure_datetime: m.measureDateTime,
        measure_type: m.measureType,
        has_confirmed: m.confirmed,
        image_url: m.imageUrl,
      })),
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Erro na listagem das medições:', error);
    res.status(500).json({
      error_code: 'SERVER_ERROR',
      error_description: 'Erro interno do servidor',
    });
  }
};