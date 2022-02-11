import {app} from './app';
import env from './config/env';

app.listen(env.PORT, (error?: Error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`app running on port: ${env.PORT}`);
  }
});
