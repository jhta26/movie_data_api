if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });
}

module.exports = {
  PGHOST: process.env.PGHOST,
  PGUSER: process.env.PGUSER,
  PGPASSWORD: process.env.PGPASSWORD,
  PGDATABASE: process.env.PGDATABASE,
  JWT_KEY: process.env.JWT_KEY,
  API_KEY:'4d5bf8d10c6b03d87d1ad39ff4d7e296'
};
