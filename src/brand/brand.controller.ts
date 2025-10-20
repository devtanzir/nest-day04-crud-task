import { CreateBrandDto } from './dto/create-brand-dto';
import { BrandService } from './brand.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateBrandDto } from './dto/update-brand-dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  getAllBrand() {
    return this.brandService.getAllBrand();
  }

  @Get(':id')
  getSingleBrand(@Param('id') id: string) {
    return this.brandService.getSingleBrand(id);
  }

  @Post()
  createBrand(@Body(ValidationPipe) createBrandDto: CreateBrandDto) {
    return this.brandService.createBrand(createBrandDto);
  }

  @Delete(':id')
  deleteBrand(@Param('id') id: string) {
    return this.brandService.deleteBrand(id);
  }

  @Patch(':id')
  updateBrand(
    @Param('id') id: string,
    @Body(ValidationPipe) updateBrandDto: UpdateBrandDto,
  ) {
    return this.brandService.updateBrand(id, updateBrandDto);
  }
}
