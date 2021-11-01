import time
from random import seed
from random import randint

import eel

def rpm():
   # for i in range(13000):
   #    eel.updateRPM(i)

   #    time.sleep(0.01)


   # i = 0
   # while i < 13000:
   #    eel.updateRPM(i)

   #    i += 1000

   #    time.sleep(0.1)

   # seed(1)
   while True:
      eel.updateRPM(randint(0, 13000))
      
      time.sleep(0.1)