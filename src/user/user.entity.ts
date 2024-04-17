import { Playlist } from "src/playlist/playlist.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean

    @OneToMany(() => Playlist, (playlist) => playlist.user)
    playlists: Playlist[]
}