// 中间件 实现接口

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('logger中间件');
    // console.log('request:?', req.params, req.url);
    console.log('requrl', req.url);
    next();
  }
}
