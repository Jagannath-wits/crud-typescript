import express from 'express';
import router from './routes';
const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use('/api', router);
app.use((req, res) => {
  return res.send('Not Found you need to check stuff');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
