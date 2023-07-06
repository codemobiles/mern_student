export const interceptor1 = (req, res, next) => {
  if (req.query.token1 == "1234") {
    next();
  } else {
    res.json({ result: "nok", message: "no token1" });
  }
};

export const interceptor2 = (req, res, next) => {
  if (req.query.token2 == "555") {
    next();
  } else {
    res.json({ result: "nok", message: "no token2" });
  }
};
