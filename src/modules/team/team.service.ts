import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { Team } from 'src/shared/entities/team.entity';
import { EntityManager, getRepository, Repository, RepositoryNotTreeError } from 'typeorm';
import {getManager} from "typeorm";


@Injectable()
export class TeamService {

  private manager: EntityManager;

  constructor(){
      this.manager = getManager();
  }

  async createTeam(team: Team): Promise<Team>{
    const findTeam = await this.manager.findOne(Team, team.id);
    if (findTeam){
        throw new HttpException("Team already exists", HttpStatus.CONFLICT);
    }
    const createdTeam =  await this.manager.save(Team, team);
    return createdTeam;
  }

  async getAllTeams(): Promise<Team[]>{
      const teams = await this.manager.find(Team);
      if(!teams) throw new HttpException('not found', HttpStatus.NOT_FOUND);
      return teams;
  }

  async getOneTeam(id: string): Promise<Team>{
    const team = await this.manager.findOne(Team, id)
    if(!team) throw new HttpException('not found', HttpStatus.NOT_FOUND);
    return team;
  }

  async updateTeam(team: Team): Promise<Team>{
    const findTeam = await this.manager.findOne(Team, team.id);
    if (!findTeam){
        throw new HttpException("Team does not exists", HttpStatus.NOT_FOUND);
    }
    const updatedTeam =  await this.manager.save(Team, team);
    return updatedTeam;
  }

  async deleteTeam(id: string): Promise<Team>{
    const findTeam = await this.manager.findOne(Team, id);
    if (!findTeam){
        throw new HttpException("Team does not exists", HttpStatus.NOT_FOUND);
    }
    await this.manager.delete(Team, id);
    return findTeam;
  }
}
