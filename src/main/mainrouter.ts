import {Router as router, Request, Response} from 'express';
import {authRouter} from '../auth/auth.router';

export const main = router();

main.use('/auth', authRouter);

main.get('/:name?', (req:Request, res: Response) => {
  res.send(`hello, ${req.params.name ? req.params.name: 'tonto'}!`);
});
