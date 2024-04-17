import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { db_Connection } from 'src/common/CONSTANTS/connections';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import { Artist } from 'src/artists/artist.entity';

export const portValue: number = 9009
@Module({
  imports: [TypeOrmModule.forFeature([Song, Playlist, Artist])],
  controllers: [SongsController],
  providers: [SongsService,
    {
      provide: "CONNECTION",
      useValue: db_Connection
    }, {
      provide: "PORT",
      useFactory: () => {
        return portValue
      }
    }]
})
export class SongsModule { }
