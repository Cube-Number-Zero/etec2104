#src/main.py
import asyncio
import os.path
import tornado.web
import Index, Quote, TemplateTest, Profile, Roulette, UpdateProfile

HTMLDIR = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "..","html"
    )
)

def makeApp():
    endpoints=[
        ("/", Index.Handler),
        ("/quote", Quote.Handler),
        ("/fancy", TemplateTest.Handler),
        ("/quote", Quote.Handler),
        ("/profile/.*", Profile.Handler),
        ("/roulette", Roulette.Handler),
        ("/updateprofile", UpdateProfile.Handler)
    ]
    app = tornado.web.Application(
        endpoints,
        static_path=HTMLDIR
    )
    app.listen(8000)
    print("")
    print("Point your browser to http://localhost:8000")
    print("")
    return app

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()
