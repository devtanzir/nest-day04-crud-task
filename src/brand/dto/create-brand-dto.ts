import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Length,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  @Matches(/^[a-zA-Z\s]*$/, {
    message: 'Name can only contain letters and spaces',
  })
  name: string;

  @IsString()
  @IsOptional()
  @Length(2, 100)
  origin: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
