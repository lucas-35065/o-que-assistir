test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody); //log pra entender o que o respondeBody retorna, pois passou no teste sem sabermos bem o motivo

  expect(Array.isArray(responseBody)).toBe(true);
});
