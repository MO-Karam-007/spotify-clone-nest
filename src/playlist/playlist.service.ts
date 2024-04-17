import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Repository } from 'typeorm';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/user/user.entity';
import { CreatePlaylistDTO } from './DTO/creat-playlist.dto';

@Injectable()
export class PlaylistService {
    constructor(
        @InjectRepository(Playlist)
        private playlistRepo: Repository<Playlist>,

        @InjectRepository(Song)
        private songRepo: Repository<Song>,

        @InjectRepository(User)
        private userRepo: Repository<User>
    ) { }

    async create(createPlaylistDTO: CreatePlaylistDTO): Promise<Playlist> {
        const playlist = new Playlist()

        playlist.name = createPlaylistDTO.name

        const songs = await this.songRepo.findByIds(createPlaylistDTO.songs)
        playlist.songs = songs;

        const user = await this.userRepo.findOneBy({ id: createPlaylistDTO.user })
        playlist.user = user;
        return this.playlistRepo.save(playlist)
    }



}
