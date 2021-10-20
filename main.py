import time
import threading

import eel

# import rpm

eel.init('frontend')

# @eel.expose
# def demo(a, b):
#    # print(a, b, a + b)

#    return a + b


# @eel.expose
# def loop(a, b):
#    while a < b:
#       a += 1 

# def test_data():   
#    for i in range(1000):
#       eel.sendData(i)

#       time.sleep(0.5)

# x = threading.Thread(target=test_data)
# x.start()
# test_data()

def rpm():
   for i in range(55):
      eel.updateRPM(i)

      time.sleep(0.05)

x = threading.Thread(target=rpm)
x.start()


eel.start('index.html')