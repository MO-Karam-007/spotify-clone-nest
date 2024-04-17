import { Artist } from "src/artists/artist.entity";
import { Playlist } from "src/playlist/playlist.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('date')
    releasedDate: Date;

    @Column('time')
    duration: Date

    @Column('text')
    lyrics: string;
    /*
    Many songs can belong for one playlist for each user
     */
    @ManyToOne(() => Playlist, (playlist) => playlist.songs)
    playlist: Playlist;


    @ManyToMany(() => Artist, (artist) => artist.songs, { cascade: true })
    @JoinTable({ name: 'songs_artists' })
    artists: Artist[];


}