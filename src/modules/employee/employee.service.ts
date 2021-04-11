import { HttpException, HttpModule, HttpStatus, Injectable} from '@nestjs/common';
import { Employee } from 'src/shared/entities/employee.entity';
import { Profile } from 'src/shared/entities/profile.entity';
import { EntityManager, getRepository, Repository, RepositoryNotTreeError } from 'typeorm';
import {getManager} from "typeorm";


@Injectable()
export class EmployeeService {

  private manager: EntityManager;

  constructor(){
      this.manager = getManager();
  }

  async createEmployee(employee: Employee): Promise<Employee>{
    const findEmployee = await this.manager.findOne(Employee, employee.id);
    if (findEmployee){
        throw new HttpException("Employee already exists", HttpStatus.CONFLICT);
    }
    const createdProfile = await this.manager.save(Profile, employee.profile);
    let createdEmployee = employee;
    createdEmployee.profile = createdProfile;
    createdEmployee =  await this.manager.save(Employee, employee);
    return createdEmployee;
  }

  async getAllEmployee(): Promise<Employee[]>{
      let employees = await this.manager.find(Employee, { relations: ["team", "profile"]})
      employees.map(employee => {
        delete employee.profile.id
      })
      if(!employees) throw new HttpException('not found', HttpStatus.NOT_FOUND);
      return employees;
  }

  async getOneEmployee(id: string): Promise<Employee>{
    let employee = await this.manager.findOne(Employee, id, { relations: ["team", "profile"] });
    delete employee.profile.id;
    if(!employee) throw new HttpException('not found', HttpStatus.NOT_FOUND);
    return employee;
  }

  async updateEmployee(employee: Employee): Promise<Employee>{
    const findEmployee = await this.manager.findOne(Employee, employee.id);
    if (!findEmployee){
        throw new HttpException("Employee does not exists", HttpStatus.NOT_FOUND);
    }
    const updatedEmployee =  await this.manager.save(Employee, employee);
    return updatedEmployee;
  }

  async deleteEmployee(id: string): Promise<Employee>{
    const findEmployee = await this.manager.findOne(Employee, id);
    if (!findEmployee){
        throw new HttpException("Employee does not exists", HttpStatus.NOT_FOUND);
    }
    await this.manager.delete(Employee, id);
    return findEmployee;
  }
}
