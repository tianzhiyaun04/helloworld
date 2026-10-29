from http.server import BaseHTTPRequestHandler
import json


def greeting():
    """保留原 hello.py 的问候逻辑，供本地脚本与线上接口共用。"""
    return "Hello, World!"


class handler(BaseHTTPRequestHandler):
    """Vercel Python Serverless Function，部署后路由为 /api。"""

    def do_GET(self):
        message = greeting()
        payload = json.dumps(
            {"message": message, "source": "Vercel Python Function"},
            ensure_ascii=False,
        ).encode("utf-8")

        self.send_response(200)
        self.send_header("Content-type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(payload)
        return

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.end_headers()
