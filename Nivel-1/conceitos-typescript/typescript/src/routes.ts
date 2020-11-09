import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
  const user = createUser({
    email: 'thales@email.com',
    password: '1234',
    techs: [
      'nodejs', 
      'reactjs', 
      'javascript',
      {title: 'javascript', experience: 100},
    ],
  });
  
  return response.json({ message: 'Hello world'});
}