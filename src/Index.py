#src/Index.py
import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('<a href="/quote">Get a quote</a>')
