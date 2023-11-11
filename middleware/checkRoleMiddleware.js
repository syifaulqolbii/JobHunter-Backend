// checkRoleMiddleware.js
const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      const { user } = req;
  
      if (!user || !user.role || !allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Tidak memiliki izin untuk mengakses resource ini' });
      }
  
      next();
    };
  };
  
  module.exports = checkRole;
  