# UpdateProfile.py
import tornado.web
import json
import base64

class Handler(tornado.web.RequestHandler):
    def post(self):
        J = json.loads(self.request.body)
        firstName = J["firstName"]
        lastName = J["lastName"]
        dob = J["birthDate"]
        ppic = base64.b64decode(J["pic"])
        print("WE GOT:", firstName, lastName, dob, ppic[:20])
        resp={"ok": True}
        self.write( json.dumps(resp) )