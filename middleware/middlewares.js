const validApiKeys = ["furkanapikey123"];

// Middleware for validate api keys check api key with req.headers()
function validateApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || !validApiKeys.includes(apiKey)) {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" });
  }

  next();
}

module.exports = { validateApiKey };
