import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../../webpack.config.js'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 9000;

async function startDevServer() {
  const compiler = webpack(config);

  const server = new WebpackDevServer(
    {
      port,
      static: path.resolve(__dirname, '../../../dist'), // ← тоже исправлен путь
      open: false,
      hot: true,
      client: {
        logging: 'info',
      },
    },
    compiler
  );

  await server.start();

  console.log(`DevServer started on http://localhost:${port}`);
}

startDevServer().catch(err => {
  console.error(err);
  process.exit(1);
});
