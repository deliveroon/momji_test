import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { Employee } from 'src/shared/entities/employee.entity';
import { EmployeeService } from './employee.service';
import { Request } from 'express';

// Routage du Controlleur sur '/employee'
@Controller('/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // Créer un employee
  @Post()
  createTeam(@Body() body: Employee): Promise<Employee> {
    return this.employeeService.createEmployee(body);
  }

  // Liste tous les employees
  @Get('/')
  getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.getAllEmployee();
  }

  // Récupérer un employee
  @Get('/:id')
  getOneEmployee(@Req() request: Request): Promise<Employee> {
    return this.employeeService.getOneEmployee(request.params.id);
  }

  // Modifier un employee
  @Put()
  updateEmployee(@Body() body: Employee): Promise<Employee> {
    return this.employeeService.updateEmployee(body);
  }

  // Supprimer un employee
  @Delete(':id')
  deleteEmployee(@Req() request: Request): Promise<Employee> {
    return this.employeeService.deleteEmployee(request.params.id);
  }
}
