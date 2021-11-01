import time
import threading

import eel

import rpm

eel.init('frontend')

# for RPM
x = threading.Thread(target=rpm.rpm)
x.start()


eel.start('index.html')