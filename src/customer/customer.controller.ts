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
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer-dto';
import { UpdateCustomerDto } from './dto/update-customer-dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomer();
  }

  @Get(':id')
  getSingleCustomer(@Param('id') id: string) {
    return this.customerService.getSingleCustomer(id);
  }

  @Post()
  createCustomer(@Body(ValidationPipe) createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }

  @Patch(':id')
  updateCustomer(
    @Param('id') id: string,
    @Body(ValidationPipe) updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(id, updateCustomerDto);
  }
}
