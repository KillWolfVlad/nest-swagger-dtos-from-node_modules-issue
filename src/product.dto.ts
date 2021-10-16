import { IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  public readonly id!: string;

  @IsString()
  public readonly name!: string;
}
