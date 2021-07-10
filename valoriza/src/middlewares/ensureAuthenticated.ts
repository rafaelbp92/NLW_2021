import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
    //Receber o token
    const authToken = request.headers.authorization;
  
    //Validar se o token esta preenchido
    if (!authToken) {
      return response.status(401).end();
    }

    //Validar se o token e valido
    const [,token] = authToken.split(" ");
    try {
      const { sub } = verify(
        token,
        "4f93ac9d10cb751b8c9c646bc9dbccb9"
      ) as IPayload;
      
      //Recuperar informacoes do usuario
      request.user_id = sub;

      return next();
  
    }
    catch(error) {
      return response.status(401).end();
    }
}