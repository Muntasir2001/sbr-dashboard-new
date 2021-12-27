import time
from random import seed
from random import randint

import eel

def oil_temp():
   while True:
      eel.updateOilTemp(randint(0, 100))
   
      time.sleep(1)