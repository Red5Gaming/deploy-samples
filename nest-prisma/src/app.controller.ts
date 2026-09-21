import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller()
export class AppController {
  @Get()
  async hello() {
    await prisma.visit.create({ data: {} });
    const visits = await prisma.visit.count();
    return { message: `Hello from ${process.env.APP_NAME ?? 'nest-prisma'}`, visits };
  }

  @Get('healthz')
  healthz() {
    return 'ok';
  }
}
