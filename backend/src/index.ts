import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import client from 'prom-client';
import { toRoman } from './romanConverter';

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(morgan('combined'));

// Prometheus metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get('/metrics', async (_req: Request, res: Response) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/romannumeral', (req: Request, res: Response): void => {
  const query = req.query.query;
  const num = parseInt(query as string, 10);

  if (isNaN(num) || num < 1 || num > 3999) {
    res.status(400).send('Invalid input. Must be an integer between 1 and 3999.');
    return;
  }

  const output = toRoman(num);
  res.json({ input: num.toString(), output });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
