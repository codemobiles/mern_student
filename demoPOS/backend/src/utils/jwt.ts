/* eslint-disable import/no-anonymous-default-export */
import { Request, Response } from "express";
import { exit } from "process";

const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

if (!process.env.ROOT_PATH) {
  console.log("Please set ROOT_PATH first");
  console.log("for mac: export ROOT_PATH=$(pwd)");
  console.log("for win: set ROOT_PATH=%cd%");
  exit(0);
}

var publicKEY = fs.readFileSync(path.join(process.env.ROOT_PATH + "/public.key"), "utf8");
var privateKEY = fs.readFileSync(path.join(process.env.ROOT_PATH + "/private.key"), "utf8");

var i = "CodeMobiles Ltd"; // Issuer (Software organization who issues the token)
var s = "chaiyasit.t@gmail.com"; // Subject (intended user of the token)
var a = "http://codemobiles.com"; // Audience (Domain within which this token will live and function)

export default {
  sign: (payload) => {
    // Token signing options
    var signOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: "30d", // 30 days validity
      algorithm: "RS256",
    };
    return jwt.sign(payload, privateKEY, signOptions);
  },
  verify: (req, res: Response, next) => {
    // next()
    // return;

    const segments = req.path.split("/");
    const endPoint = segments[segments.length - 1];

    if (endPoint === "login" || endPoint === "register") {
      return next();
    }

    var token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;

    if (!token) return res.status(403).json({ result: "nok", message: "No token provided." });

    var verifyOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: "12h",
      algorithm: ["RS256"],
    };

    jwt.verify(token, publicKEY, verifyOptions, function (err, decoded) {
      // console.log(JSON.stringify(decoded));
      if (err) return res.status(500).json({ result: "nok", message: "Failed to authenticate token." });
      // if everything good, save to request for use in other routes
      req.userId = decoded.id;
      req.userLevel = decoded.level;
      next();
    });
  },
};
