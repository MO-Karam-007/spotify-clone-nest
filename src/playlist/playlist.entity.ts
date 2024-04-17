import { Song } from "src/songs/song.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('playlists')
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    /*
    Each playlist will has a multi songs
     */
    @OneToMany(() => Song, (song) => song.playlist)
    songs: Song[];

    /*
    Many Playlist may belong to one user
     */

    @ManyToOne(() => User, (user) => user.playlists)
    user: User


}