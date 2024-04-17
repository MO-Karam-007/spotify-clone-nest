import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlaylistDTO } from './DTO/creat-playlist.dto';
import { Playlist } from './playlist.entity';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
    constructor(
        private playlistService: PlaylistService
    ) { }
    @Post()
    create(
        @Body()
        createPlaylistDTO: CreatePlaylistDTO
    ): Promise<Playlist> {
        return this.playlistService.create(createPlaylistDTO)
    }
}
