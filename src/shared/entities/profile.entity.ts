import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Profile {

    @PrimaryColumn()
    id: string;

    @Column()
    firstname: string;
    
    @Column()
    lastname: string;

}