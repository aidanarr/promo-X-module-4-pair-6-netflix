const mysql = require('mysql2/promise');
const supertest = require('supertest');
const server = require('../src/index.js');

const api = supertest(server)

test('movies are returned as json', async () => {
  await api
    .get('/movies')
    .expect(200)
    .expect('Content-Type', 'application/json')
}, 1000000)