import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BasicAuthMiddleware implements NestMiddleware {
  private readonly username: string;
  private readonly passwordHash: string;

  constructor(private readonly configService: ConfigService) {
    this.username = 'username';
    this.passwordHash = 'password';
  }

  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.get('authorization');

    if (!authHeader?.startsWith('Basic ')) {
      this.sendUnauthorizedResponse(res);
      return;
    }

    const encodedCreds = authHeader.split(' ')[1];
    const decodedCreds = Buffer.from(encodedCreds, 'base64').toString('utf-8');
    const [username, password] = decodedCreds.split(':');

    console.log('the user name password are', username, password);

    if (!this.username || !this.passwordHash || username !== this.username) {
      this.sendUnauthorizedResponse(res);
      return;
    }

    const isPasswordValid = password === this.passwordHash;
    console.log('the passowrd Valid', isPasswordValid);

    if (!isPasswordValid) {
      this.sendUnauthorizedResponse(res);
      return;
    }

    next();
  }

  private sendUnauthorizedResponse(res: Response): void {
    res.setHeader(
      'WWW-Authenticate',
      'Basic realm="Restricted Area", charset="UTF-8"',
    );
    res.sendStatus(401);
  }
}
