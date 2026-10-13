import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `method "${request.method}" not allowed`,
    });
  }

  let dbClient;

  try {
    dbClient = await database.getNewClient();
    const defaultMigrationOptions = {
      dbClient: dbClient,
      dryRun: true, //rodar o endpoint, sem necessariamente precisar rodar de fato, só pra saber qual seria o resultado
      dir: join("infra", "migrations"), //método para acessar um diretório, sem importar qual o sistema operacional
      direction: "up",
      verbose: true, //trazer mais informações do que a migração está fazendo
      migrationsTable: "pgmigrations", //uma forma de setar essa tabela como a default, conseguimos fazer isso no cli, mas aqui não estava fazendo o mesmo. Assim indicamos qual a tabela
    };
    if (request.method === "GET") {
      const pendingMigrations = await migrationRunner(defaultMigrationOptions);
      return response.status(200).json(pendingMigrations);
    }

    if (request.method === "POST") {
      const migratedMigrations = await migrationRunner({
        ...defaultMigrationOptions,
        dryRun: false,
      });

      if (migratedMigrations.length > 0) {
        return response.status(201).json(migratedMigrations);
      }
      return response.status(200).json(migratedMigrations);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (dbClient) await dbClient.end();
  }
}
