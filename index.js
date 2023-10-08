const express = require('express');
const _ = require('lodash');
const https = require('https');
const Router = require('./routes/api.js');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi =require("swagger-ui-express");
const specs=require('./swagger/swaggerJson.js');



const app = express();
const PORT = 3000||process.env.PORT;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api", Router);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
