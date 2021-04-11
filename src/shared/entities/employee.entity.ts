import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Timestamp, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Profile } from "./profile.entity";
import { Team } from "./team.entity";

@Entity()
export class Employee {

    @PrimaryColumn()
    id: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column({type: "timestamp"})
    registered: Timestamp;
    
    @Column()
    isActive: boolean;

    @ManyToOne(() => Team)
    @JoinColumn()
    team: Team;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}