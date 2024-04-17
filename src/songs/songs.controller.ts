/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Scope } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './DTOs/create-song-dto';
import { Song } from './song.entity';
import { DeleteResult } from 'typeorm';
// import { Connection } from 'src/common/CONSTANTS/connections';

@Controller("songs")
export class SongsController {
    constructor(
        private songsService: SongsService,
        // @Inject('PORT') private portV: { port: string }
    ) {
    }
    @Get('')
    findAdll(): Promise<Song[]> {
        try {
            return this.songsService.findALl()
        } catch (error) {
            throw new HttpException(
                "server error",
                HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            }
            )
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Song> {
        return this.songsService.findOne(id)
    }

    @Post('')
    craeteSong(@Body() createSongDTO: CreateSongDTO): Promise<Song> {
        return this.songsService.create(createSongDTO)
    }

    @Put(':id')
    updateSong() {
        return "Update song"
    }

    @Delete(':id')
    deleteSong(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.songsService.remove(id)
    }
}
