#src/TemplateTest.py
import tornado.web
import random

quotes = [
    "The only thing we have to fear is fear itself.",
    "Fourscore and seven years ago...",
    "We the People of the United States..."
]

class Handler(tornado.web.RequestHandler):
    def get(self):
        q = random.choice(quotes)
        self.render(os.path.join(os.path.dirname(__file__), "..", "html", "TemplateTest.html"), quotation = q)
