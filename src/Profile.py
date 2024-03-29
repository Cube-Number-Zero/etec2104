#src/Profile.py
import tornado.web
import os.path

data = {
    "name": {
        "alice": "Alice Smith",
        "bob": "Bob Jones",
        "carol": "Carol Ling",
        "dave": "Dave N. Port"
    },
    "dob": {
        "alice": "Jan. 1",
        "bob": "Dec. 31",
        "carol": "Jul. 17",
        "dave": "Mar. 14"
    },
    "email": {
        "alice": "alice@example.com",
        "bob": "bob@bob.xyz",
        "carol": "carol@example.com",
        "dave": "dave@dave.dave"
    },
    "pfp": {
        "alice": "/static/alicepfp.png",
        "bob": "/static/bobpfp.png",
        "carol": "/static/carolpfp.png",
        "dave": "/static/davepfp.png"
    }
}

class Handler(tornado.web.RequestHandler):
    def get(self):
        p = self.request.path.split('/')[2]
        self.render(os.path.join(os.path.dirname(__file__), "..", "html", "Profile.html"),
                    name = data["name"][p],
                    dob = data["dob"][p],
                    email = data["email"][p],
                    pfp = data["pfp"][p])
