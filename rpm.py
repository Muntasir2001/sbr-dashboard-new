import time

import eel

def rpm():
   for i in range(1100):
      eel.updateRPM(i)

      time.sleep(1)