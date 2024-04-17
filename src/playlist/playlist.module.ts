import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { User } from 'src/user/user.entity';
import { Song } from 'src/songs/song.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist, User, Song])],
  providers: [PlaylistService],
  controllers: [PlaylistController]
})
export class PlaylistModule { }
