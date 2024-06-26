import { CanActivate, ExecutionContext, HttpException, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/auth.service';

export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {

      const token = req.headers.authorization;

      if (!token || token === '' || token === undefined) {
        throw new UnauthorizedException({message: 'No token provided.'});
      }

      return true;
    } catch (err) {
      throw new UnauthorizedException({message: 'No token provided.'});
    }
  }

}