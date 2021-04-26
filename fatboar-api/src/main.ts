import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env.MYSQL_USER);

  const config = new DocumentBuilder()
  .setTitle('Fatboar API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  SwaggerModule.setup('api', app, document);

  // TODO
  // The DocumentBuilder helps to structure a base document that conforms to the OpenAPI Specification.
  // It provides several methods that allow setting such properties as title, description, version, etc. 
  // In order to create a full document (with all HTTP routes defined) we use the createDocument() method of the SwaggerModule class.
  // This method takes two arguments, an application instance and a Swagger options object. 
  // Alternatively, we can provide a third argument, which should be of type SwaggerDocumentOptions.
  // More on this in the Document options section.

  await app.listen(3000);
}
bootstrap();
