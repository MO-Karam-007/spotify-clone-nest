import { Module } from '@nestjs/common';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artist, User])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
  exports: [ArtistsService]
})
export class ArtistsModule { }
