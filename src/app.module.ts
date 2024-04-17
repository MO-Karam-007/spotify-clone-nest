import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevServices } from './common/DevConfig/DevConfigService';
import { ConfigModule } from '@nestjs/config';
import { PlaylistModule } from './playlist/playlist.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      autoLoadEntities: true,
      database: process.env.POSTGRES_DB,
      password: process.env.PASSWORD,
      port: Number(process.env.PORT),
      username: process.env.USER,
      // synchronize: true 

    }),
    SongsModule,
    PlaylistModule,
    UserModule,
    ArtistsModule,


  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: "DevServices",
      useClass: DevServices
    }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {

    // consumer.apply(LoggerMiddleware).forRoutes({path : 'songs' , method : RequestMethod.POST})
    consumer.apply(LoggerMiddleware).forRoutes(SongsController)

  }
  // configure(consumer: MiddlewareConsumer) {
  //   // consumer.apply(LoggerMiddleware).forRoutes('songs')
  //   // consumer.apply(LoggerMiddleware).forRoutes({ path: "songs", method: RequestMethod.POST })
  //   consumer.apply(LoggerMiddleware).forRoutes(SongsController)

  // }
}
