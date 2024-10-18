// server.js
const express = require('express');
const request = require('request');
const app = express();
const PORT = 4000;

app.use('/proxy', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // CORS 헤더 추가
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  const url = req.query.url; // 요청 URL을 쿼리로 받음
  if (!url) {
    res.status(400).send('URL is required');
    return;
  }

  // 요청된 URL로 프록시 요청을 수행
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`프록시 서버가 포트 ${PORT}에서 실행 중입니다.`);
});