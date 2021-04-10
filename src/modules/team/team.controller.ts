import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { Team } from 'src/shared/entities/team.entity';
import { TeamService } from './team.service';
import { Request } from 'express';

@Controller('/team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  createTeam(@Body() body: Team): Promise<Team> {
    return this.teamService.createTeam(body);
  }

  @Get('/')
  getAllTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  @Get('/:id')
  getOneTeam(@Req() request: Request): Promise<Team> {
    return this.teamService.getOneTeam(request.params.id);
  }

  @Put()
  updateTeam(@Body() body: Team): Promise<Team> {
    return this.teamService.updateTeam(body);
  }

  @Delete(':id')
  deleteTeam(@Req() request: Request): Promise<Team> {
    return this.teamService.deleteTeam(request.params.id);
  }
}