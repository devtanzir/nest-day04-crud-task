import { UpdateProductDto } from './dto/update-product-dto';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';

@Injectable()
export class ProductService {
  private Product = [
    {
      id: '652e4f52b1d3f1a1c89d2010',
      name: 'Walton Refrigerator 260L',
      category: 'Electronics',
      price: 32000,
      brand: 'Walton',
    },
    {
      id: '652e4f52b1d3f1a1c89d2011',
      name: 'Singer Washing Machine 7kg',
      category: 'Home Appliance',
      price: 28500,
      brand: 'Singer',
    },
    {
      id: '652e4f52b1d3f1a1c89d2012',
      name: 'Pran Mango Juice 1L',
      category: 'Food & Beverage',
      price: 110,
      brand: 'Pran',
    },
    {
      id: '652e4f52b1d3f1a1c89d2013',
      name: 'RFL Plastic Table',
      category: 'Furniture',
      price: 1500,
      brand: 'RFL',
    },
    {
      id: '652e4f52b1d3f1a1c89d2014',
      name: 'Bashundhara Toilet Tissue Pack',
      category: 'Daily Essentials',
      price: 120,
      brand: 'Bashundhara',
    },
    {
      id: '652e4f52b1d3f1a1c89d2015',
      name: 'Teletalk Agami SIM',
      category: 'Telecom',
      price: 100,
      brand: 'Teletalk',
    },
    {
      id: '652e4f52b1d3f1a1c89d2016',
      name: 'ACI Aerosol 475ml',
      category: 'Home Care',
      price: 250,
      brand: 'ACI',
    },
    {
      id: '652e4f52b1d3f1a1c89d2017',
      name: 'Aarong Cotton Saree',
      category: 'Fashion',
      price: 2200,
      brand: 'Aarong',
    },
    {
      id: '652e4f52b1d3f1a1c89d2018',
      name: 'Bajaj Ceiling Fan',
      category: 'Electronics',
      price: 3600,
      brand: 'Bajaj',
    },
    {
      id: '652e4f52b1d3f1a1c89d2019',
      name: 'Fresh Milk Powder 500g',
      category: 'Groceries',
      price: 380,
      brand: 'Fresh',
    },
  ];

  getAllProduct() {
    return this.Product;
  }

  getSingleProduct(id: string) {
    return this.Product.find((product) => product.id == id);
  }

  createProduct(createProductDto: CreateProductDto) {
    this.Product.push({ ...createProductDto });

    return this.Product;
  }

  deleteProduct(id: string) {
    return this.Product.filter((product) => product.id != id);
  }

  updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const updatedData = this.Product.map((product) => {
      if (product.id == id) {
        return {
          ...product,
          ...updateProductDto,
        };
      }
      return product;
    });
    return updatedData;
  }
}
