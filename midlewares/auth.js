const adminAuth = (req,res,next) => {
    // Logic of checking if the req is authorized
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized) {
        res.status(401).send("unotherized token");
    } else {
      next();
    }
  };

  const userAuth = (req,res,next) => {
    // Logic of checking if the req is authorized
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized) {
        res.status(401).send("unotherized token");
    } else {
      next();
    }
  };

  module.exports = { adminAuth, userAuth };