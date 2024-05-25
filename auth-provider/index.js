const express = require("express");
const app = express();
app.listen("9000");
app.post("/login", (req, res) => {
  res.json({
    access_token: {
      aud: "http://api.example.com",
      iss: "https://krakend.io",
      sub: "1234567890qwertyuio",
      jti: "mnb23vcsrt756yuiomnbvcx98ertyuiop",
      roles: ["user", "admin"],
      exp: 1735689600,
    },
    refresh_token: {
      aud: "http://api.example.com",
      iss: "https://krakend.io",
      sub: "1234567890qwertyuio",
      jti: "mnb23vcsrt756yuiomn12876bvcx98ertyuiop",
      exp: 1735689600,
    },
    exp: 1735689600,
  });
});
app.get("/protected/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ id: req.params.id });
});
app.get("/jwk", (req, res) => {
  res.json({
    keys: [
      {
        kty: "oct",
        k: "AyM1SysPpbyDfgZld3umj1qzKObwVMkoqQ-EstJQLr_T-1qS0gZH75aKtMN3Yj0iPS4hcgUuTwjAzZr1Z9CAow",
        kid: "sim2",
        alg: "HS256",
      },
    ],
  });
});
