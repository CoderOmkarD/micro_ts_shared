import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use((req, res, next) => {
    console.log("Gateway Hit:", req.method, req.url);
    next();
  });

app.use(
  "/students",
  createProxyMiddleware({
    target: "http://localhost:3001/",
      changeOrigin: true,
      pathRewrite: {
        "^/students": "",
      },
  })
);

app.listen(3000, () => {
  console.log("Gateway Running On 3000");
});