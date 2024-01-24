#src/Roulette.py
import tornado.web
import os.path

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.render(os.path.join(os.path.dirname(__file__), "..", "html", "Roulette.html"))