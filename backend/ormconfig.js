require("dotenv").config();

module.exports = [
  {
    name: "default",
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_POSTGRES_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    migrations: [
        "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations"
    },
  },
  {
    name: "mongo",
    type: "mongodb",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_MONGO_PORT, 10),
    database: process.env.DATABASE_NAME,
    useUnifiedTopology: true,
    entities: [
        "./src/modules/**/infra/typeorm/schemas/*.ts"
    ]
  }
];
