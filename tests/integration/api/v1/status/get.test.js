test("Get to /api/v1/status return 200", async () => {
  // Aqui eu estou chamando o endpoint para ver qual status ele retorna
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("get to /api/v1/status responseBody.updated_at is equal to a defined date", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  //Aqui se a a updatedAt do response é a mesma new date que estou setando na variável parsed. o new é de novo objeto.
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // //Aqui estou salvando o response em uma variável e verificando se a chave updated_at existe e está definida
  // const responseBody = await response.json();
  // expect(responseBody.updated_at).toBeDefined();
});

test("get to /api/v1/status responseBody.postgres_version is defined", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  const postgres_version = responseBody.dependencies.database.postgres_version;
  expect(postgres_version).toEqual("16.0");
});

test("get to /api/v1/status responseBody.max_connections to be a number and greater than 0", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  const max_connections = responseBody.dependencies.database.max_connections;

  expect(typeof max_connections).toBe("number");
  expect(max_connections).toBeGreaterThan(0);
});

test("get to /api/v1/status responseBody.active_connections to be a number and lass than 1", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  const database = responseBody.dependencies.database;
  const active_connections = database.active_connections;
  const max_connections = database.max_connections;

  expect(typeof active_connections).toBe("number");
  expect(active_connections).toBeLessThanOrEqual(1);
});
