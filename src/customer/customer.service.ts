import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer-dto';
import { UpdateCustomerDto } from './dto/update-customer-dto';

@Injectable()
export class CustomerService {
  private customer = [
    {
      id: '652e4f52b1d3f1a1c89d3010',
      name: 'Hasan Mahmud',
      email: 'hasan.mahmud@gmail.com',
      phone: '01711223344',
      address: 'Dhanmondi, Dhaka',
    },
    {
      id: '652e4f52b1d3f1a1c89d3011',
      name: 'Rima Akter',
      email: 'rima.akter@yahoo.com',
      phone: '01822123456',
      address: 'Khilgaon, Dhaka',
    },
    {
      id: '652e4f52b1d3f1a1c89d3012',
      name: 'Sazzad Hossain',
      email: 'sazzad.h@gmail.com',
      phone: '01999887766',
      address: 'Agrabad, Chattogram',
    },
    {
      id: '652e4f52b1d3f1a1c89d3013',
      name: 'Nasima Khatun',
      email: 'nasima.bd@gmail.com',
      phone: '01744556677',
      address: 'Rajshahi Sadar',
    },
    {
      id: '652e4f52b1d3f1a1c89d3014',
      name: 'Jahidul Islam',
      email: 'jahidul.i@hotmail.com',
      phone: '01611778899',
      address: 'Kushtia',
    },
    {
      id: '652e4f52b1d3f1a1c89d3015',
      name: 'Farzana Haque',
      email: 'farzana.h@outlook.com',
      phone: '01733445566',
      address: 'Uttara, Dhaka',
    },
    {
      id: '652e4f52b1d3f1a1c89d3016',
      name: 'Moniruzzaman',
      email: 'monir.bd@mail.com',
      phone: '01888776655',
      address: 'Sylhet',
    },
    {
      id: '652e4f52b1d3f1a1c89d3017',
      name: 'Taslima Begum',
      email: 'taslima.begum@gmail.com',
      phone: '01955667788',
      address: 'Barisal',
    },
    {
      id: '652e4f52b1d3f1a1c89d3018',
      name: 'Rubel Ahmed',
      email: 'rubel.a@gmail.com',
      phone: '01766554433',
      address: 'Rangpur',
    },
    {
      id: '652e4f52b1d3f1a1c89d3019',
      name: 'Nayeem Chowdhury',
      email: 'nayeem.c@bdmail.com',
      phone: '01522334455',
      address: 'Mymensingh',
    },
  ];

  getAllCustomer() {
    return this.customer;
  }

  getSingleCustomer(id: string) {
    return this.customer.find((customer) => customer.id == id);
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customer.push({ ...createCustomerDto });

    return this.customer;
  }

  deleteCustomer(id: string) {
    return this.customer.filter((customer) => customer.id != id);
  }

  updateCustomer(id: string, updateCustomerDto: UpdateCustomerDto) {
    const updatedData = this.customer.map((customer) => {
      if (customer.id == id) {
        return {
          ...customer,
          ...updateCustomerDto,
        };
      }
      return customer;
    });
    return updatedData;
  }
}
