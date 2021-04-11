import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { Team } from 'src/shared/entities/team.entity';
import { TeamService } from './team.service';
import { Request } from 'express';

// Routage du Controlleur sur '/team'
@Controller('/team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  // Créer une team
  @Post()
  createTeam(@Body() body: Team): Promise<Team> {
    return this.teamService.createTeam(body);
  }

  // Liste toutes les teams
  @Get('/')
  getAllTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  // Récupérer une team
  @Get('/:id')
  getOneTeam(@Req() request: Request): Promise<Team> {
    return this.teamService.getOneTeam(request.params.id);
  }

  // Modifier une team
  @Put()
  updateTeam(@Body() body: Team): Promise<Team> {
    return this.teamService.updateTeam(body);
  }

  // Supprimer une team
  @Delete(':id')
  deleteTeam(@Req() request: Request): Promise<Team> {
    return this.teamService.deleteTeam(request.params.id);
  }
}
