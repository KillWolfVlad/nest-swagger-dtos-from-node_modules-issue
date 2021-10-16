import { ProductDto } from '@enterprise-scope/some-dtos';
import { Controller, Post } from '@nestjs/common';

@Controller({
  path: '/products',
  version: '1',
})
export class AppController {
  @Post('/')
  public createProduct(): Promise<ProductDto> {
    throw new Error('NotImplementedException');
  }
}
