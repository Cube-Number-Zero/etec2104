#src/main.py

import asyncio
import tornado.web

class IndexPage(tornado.web.RequestHandler):
    def get(self):
        self.write("Tornado Warning!")

def makeApp():
    endpoints = [
        ("/", IndexPage)
    ]
    app = tornado.web.Application(endpoints)
    app.listen(8000)
    return app


if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()