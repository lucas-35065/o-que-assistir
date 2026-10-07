import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  if (request.method === "GET") {
    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL, //forma de pegar a senha do banco de dados e conseguir acessar
      dryRun: true, //rodar o endpoint, sem necessariamente precisar rodar de fato, só pra saber qual seria o resultado
      dir: join("infra", "migrations"), //método para acessar um diretório, sem importar qual o sistema operacional
      direction: "up",
      verbose: true, //trazer mais informações do que a migração está fazendo
      migrationsTable: "pgmigrations", //uma forma de setar essa tabela como a default, conseguimos fazer isso no cli, mas aqui não estava fazendo o mesmo. Assim indicamos qual a tabela
    });
    return response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: false,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });
    return response.status(200).json(migrations);
  }

  return response.status(405).end();
}
