import Products from './products.json';

// Use built-in api from next to expose products.json
export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(Products))
}