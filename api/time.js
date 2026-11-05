// Vercel Serverless Function：GET /api/time
// 返回服务器当前时间（JSON），供首页实时展示“服务器时间”
module.exports = (req, res) => {
  const now = new Date();

  // 统一按中国标准时间（UTC+8）给出易读字符串，避免部署机时区差异
  const utc8 = new Date(now.getTime() + 8 * 3600 * 1000);
  const pad = (n) => (n < 10 ? '0' + n : '' + n);
  const week = ['日', '一', '二', '三', '四', '五', '六'][utc8.getUTCDay()];
  const serverClock =
    utc8.getUTCFullYear() + '-' + pad(utc8.getUTCMonth() + 1) + '-' + pad(utc8.getUTCDate()) +
    ' 星期' + week + ' ' +
    pad(utc8.getUTCHours()) + ':' + pad(utc8.getUTCMinutes()) + ':' + pad(utc8.getUTCSeconds());

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.end(JSON.stringify({
    iso: now.toISOString(),
    timestamp: now.getTime(),
    timezone: 'Asia/Shanghai (UTC+8)',
    serverClock: serverClock,
    runtime: 'nodejs ' + process.version,
    region: process.env.VERCEL_REGION || 'local'
  }));
};
