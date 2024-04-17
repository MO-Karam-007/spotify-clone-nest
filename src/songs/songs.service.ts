import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { User } from 'src/user/user.entity';
import { CreateSongDTO } from './DTOs/create-song-dto';
import { Artist } from 'src/artists/artist.entity';
import { Playlist } from 'src/playlist/playlist.entity';

@Injectable({
    // scope : Scope.TRANSIENT
})
export class SongsService {
    private readonly songs = []

    constructor(
        // @Inject('CONNECTION') private dbConnect: Connection,
        @InjectRepository(Artist) private artistRepo: Repository<Artist>,
        @InjectRepository(Playlist) private playlistRepo: Repository<Playlist>,
        @InjectRepository(Song) private songRepo: Repository<Song>,

    ) {
        // console.log(`See tje value ${this.dbConnect.CONNECTION_STRING}`);

    }

    async create(createSongDTO: CreateSongDTO): Promise<Song> {
        const song = new Song()
        song.title = createSongDTO.title
        song.releasedDate = createSongDTO.releasedDate
        song.duration = createSongDTO.duration
        song.lyrics = createSongDTO.lyrics

        // const playlist = this.playlistRepo.findBy()
        const artists = await this.artistRepo.findByIds(createSongDTO.artists)
        song.artists = artists

        return this.songRepo.save(song)
    }

    async findALl(): Promise<Song[]> {
        return await this.songRepo.find();
    }


    async findOne(id: number): Promise<Song> {
        return await this.songRepo.findOneBy({ id });
    }

    async remove(id: number): Promise<DeleteResult> {
        return await this.songRepo.delete(id);
    }

    // async update(id: number): Promise<UpdateResult> {
    //     return await this.songRepo.update(id,);
    // }

    



}
