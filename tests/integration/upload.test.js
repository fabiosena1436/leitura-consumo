const request = require('supertest');
const express = require('express');
const app = require('../../src/app'); // Certifique-se de que isso está correto

let server;
beforeAll((done) => {
  server = app.listen(3000, done); // Inicia o servidor e chama 'done' quando estiver pronto
});

afterAll((done) => {
  server.close(done); // Fecha o servidor após os testes
});

test('should upload a new measure with error', async () => {
  const res = await request(server).post('/upload').send({
    customer_code: '12345',
    measure_datetime: new Date(),
    measure_type: 'WATER',
  });
  expect(res.statusCode).toEqual(500); // Verifique se o status retornado está correto
  expect(res.body).toHaveProperty('error_code');
  expect(res.body).toHaveProperty('error_description');
});
