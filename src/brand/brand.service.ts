import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand-dto';
import { UpdateBrandDto } from './dto/update-brand-dto';

@Injectable()
export class BrandService {
  private brand = [
    {
      id: '652e4f52b1d3f1a1c89d4010',
      name: 'Walton',
      origin: 'Bangladesh',
      category: 'Electronics',
    },
    {
      id: '652e4f52b1d3f1a1c89d4011',
      name: 'Singer',
      origin: 'Bangladesh',
      category: 'Home Appliance',
    },
    {
      id: '652e4f52b1d3f1a1c89d4012',
      name: 'Pran',
      origin: 'Bangladesh',
      category: 'Food & Beverage',
    },
    {
      id: '652e4f52b1d3f1a1c89d4013',
      name: 'RFL',
      origin: 'Bangladesh',
      category: 'Plastic & Furniture',
    },
    {
      id: '652e4f52b1d3f1a1c89d4014',
      name: 'Bashundhara',
      origin: 'Bangladesh',
      category: 'Paper & Consumer',
    },
    {
      id: '652e4f52b1d3f1a1c89d4015',
      name: 'Teletalk',
      origin: 'Bangladesh',
      category: 'Telecom',
    },
    {
      id: '652e4f52b1d3f1a1c89d4016',
      name: 'ACI',
      origin: 'Bangladesh',
      category: 'Pharmaceutical & FMCG',
    },
    {
      id: '652e4f52b1d3f1a1c89d4017',
      name: 'Aarong',
      origin: 'Bangladesh',
      category: 'Fashion & Lifestyle',
    },
    {
      id: '652e4f52b1d3f1a1c89d4018',
      name: 'Bajaj',
      origin: 'India',
      category: 'Electronics & Auto',
    },
    {
      id: '652e4f52b1d3f1a1c89d4019',
      name: 'Fresh',
      origin: 'Bangladesh',
      category: 'Food & Dairy',
    },
  ];

  getAllBrand() {
    return this.brand;
  }

  getSingleBrand(id: string) {
    return this.brand.find((brand) => brand.id == id);
  }

  createBrand(createBrandDto: CreateBrandDto) {
    this.brand.push({ ...createBrandDto });

    return this.brand;
  }

  deleteBrand(id: string) {
    return this.brand.filter((brand) => brand.id != id);
  }

  updateBrand(id: string, updateBrandDto: UpdateBrandDto) {
    const updatedData = this.brand.map((brand) => {
      if (brand.id == id) {
        return {
          ...brand,
          ...updateBrandDto,
        };
      }
      return brand;
    });
    return updatedData;
  }
}
