const request = require('supertest');
const apiUrl = 'https://swapi.dev/api';

test('Verificar status da API', async () => {
  const res = await request(apiUrl).get('/people/1/');
  expect(res.statusCode).toBe(200);
});
test('Verificar dados do Luke Skywalker', async () => {
    const res = await request(apiUrl).get('/people/1/');
    expect(res.body.name).toBe('Luke Skywalker');
    expect(res.body.height).toBe('172');
    expect(res.body.mass).toBe('77');
  });
  test('Rota inexistente - deve retornar 404', async () => {
    const res = await request(apiUrl).get('/heroes');
    expect(res.statusCode).toBe(404);
  });
  test('Verificar dados do planeta Tatooine', async () => {
    const res = await request(apiUrl).get('/planets/1/');
    expect(res.body.name).toBe('Tatooine');
  });
  test('Verificar dados da Millennium Falcon', async () => {
    const res = await request(apiUrl).get('/starships/10/');
    expect(res.body.name).toBe('Millennium Falcon');
    expect(res.body.model).toBe('YT-1300 light freighter');
  });
  test('Verificar dados do filme Uma Nova Esperança', async () => {
    const res = await request(apiUrl).get('/films/1/');
    expect(res.body.title).toBe('A New Hope');
    expect(res.body.episode_id).toBe(4);
  });
  test('Verificar dados de um veículo', async () => {
    const res = await request(apiUrl).get('/vehicles/4/');
    expect(res.body.name).toBe('Sand Crawler');
  });
  test('Verificar pessoa inexistente - deve retornar 404', async () => {
    const res = await request(apiUrl).get('/people/9999/');
    expect(res.statusCode).toBe(404);
  });
  test('Verificar nave inexistente - deve retornar 404', async () => {
    const res = await request(apiUrl).get('/starships/9999/');
    expect(res.statusCode).toBe(404);
  });
  