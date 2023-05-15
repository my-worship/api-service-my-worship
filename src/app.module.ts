import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CmsAuthController } from '@apps/cms/cms-auth/cms-auth.controller';
import { DbConfig } from '@config/db-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@entities/User';
import { JwtModule } from '@nestjs/jwt';
import { ENV } from '@constants/ENV';
import { CmsAuthService } from '@apps/cms/cms-auth/cms-auth.service';
import { Artist } from '@entities/Artist';
import { CmsArtisService } from '@apps/cms/cms-artis/cms-artis.service';
import { CmsArtisController } from '@apps/cms/cms-artis/cms-artis.controller';

@Module({
  imports: [
    DbConfig,
    TypeOrmModule.forFeature([User, Artist]),
    JwtModule.register({
      secret: ENV.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController, CmsAuthController, CmsArtisController],
  providers: [CmsAuthService, CmsArtisService],
})
export class AppModule {}
