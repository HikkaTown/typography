"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Урок по nest')
        .setDescription('ДОКА ЕБАНА!')
        .setVersion('111')
        .addTag('FUCK')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`Start on ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map