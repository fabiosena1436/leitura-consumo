const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    res.status(500).json({
      error_code: 'SERVER_ERROR',
      error_description: 'Erro interno do servidor',
    });
  };
  
  module.exports = errorHandler;