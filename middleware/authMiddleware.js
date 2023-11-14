const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'sangatrahasia');
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const { role } = req.userData;

    if (allowedRoles.includes(role)) {
      next();
    } else {
      return res.status(403).json({ error: 'Forbidden' });
    }
  };
};

module.exports = {
  authenticate,
  authorize,
};
