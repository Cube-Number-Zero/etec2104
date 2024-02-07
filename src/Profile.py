#src/Profile.py
import tornado.web
import os.path
import json
import base64

p = None

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
months = {
    "01": "Jan. ",
    "02": "Feb. ",
    "03": "Mar. ",
    "04": "Apr. ",
    "05": "May ",
    "06": "Jun. ",
    "07": "Jul. ",
    "08": "Aug. ",
    "09": "Sep. ",
    "10": "Oct. ",
    "11": "Nov. ",
    "12": "Dec. "
}

class Handler(tornado.web.RequestHandler):
    def get(self):
        p = self.request.path.split('/')[2]
        self.render(os.path.join(os.path.dirname(__file__), "..", "html", "Profile.html"),
                    name = data["name"][p],
                    dob = data["dob"][p],
                    email = data["email"][p],
                    pfp = data["pfp"][p],
                    user = p)
        
    def post(self):
        J = json.loads(self.request.body)
        if "name" in J:
            data["name"][p] = J["name"]
            print("WE GOT:", data["name"][p])
            resp = {"ok": True}
        if "dob" in J:
            data["dob"][p] = months[J["dob"][5:7]] + str(int(J["dob"][8:]))
            print("WE GOT:", data["dob"][p])
            resp = {"new": data["dob"][p]}
        if "pic" in J:
            data["pfp"][p] = J["pic"]
            ppic = base64.b64decode(J["pic"])
            print("WE GOT:", ppic[:20])
            resp = {"ok": True}
        self.write(json.dumps(resp))
