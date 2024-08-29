const uploadMeasure = async (req, res) => {
  try {
    // Verifique se todos os campos necessários estão presentes
    if (!req.body.customer_code || !req.body.measure_datetime || !req.body.measure_type) {
      return res.status(400).json({
        error_code: 'MISSING_FIELDS',
        error_description: 'Todos os campos são necessários.',
      });
    }

    // Simule um erro para fins de teste
    throw new Error('Simulated error for testing purposes');

    // Caso não haja erro, retorne um sucesso
    res.status(200).json({ message: 'Measure uploaded successfully' });

  } catch (error) {
    console.error('Error in uploadMeasure:', error.message);
    res.status(500).json({
      error_code: 'UPLOAD_ERROR',
      error_description: error.message,
    });
  }
};

module.exports = { uploadMeasure };
