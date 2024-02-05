#src/Sock.py
import tornado.websocket
import random
import math

activeClients = []

class Handler(tornado.websocket.WebSocketHandler):
    async def open(self):
        activeClients.append(self)

    async def on_message(self, msg):
        i = str(math.floor(random.random() * 38))
        for client in activeClients:
            await client.write_message(i)

    def on_close(self):
        for i in range(len(activeClients)):
            if activeClients[i] == self:
                del activeClients[i]
                break

    def check_origin(self, *args):
        return True
