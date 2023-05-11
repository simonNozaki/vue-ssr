import express from 'express';
import { createApp } from "./app.js";
import { renderToString } from 'vue/server-renderer';

const server = express();
server.use(express.static("."));

server.get('/', (req, res) => {
  const app = createApp();
  
  renderToString(app).then((html) => {
    console.log(html);
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
        {
          "imports": {
            "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
          }
        }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  });
});

server.listen(3000, () => {
  console.log("server listening ...");
});
