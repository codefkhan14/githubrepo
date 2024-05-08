const express = require("express");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swaggerConfig");

const { validateApiKey } = require("./middleware/middlewares");
const app = express();
const PORT = 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
// Middleware for parsing incoming request bodies as JSON
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hellofurka is a good maen docker file dfvfsfsyes isrt adds successfully");
});
app.use(validateApiKey);
// Middleware function to validate API key

// CustomerRoutes route to handle requests starting with "/api/customers"
app.use("/api", customerRoutes);

// Start the server and listen on the port 3000
app.listen(PORT, () => {
  console.log(`Server port is ${PORT}`);
});
