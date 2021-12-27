import time
import threading

import eel

import backend.rpm.rpm as rpm
# import backend.rpm.rpm as rpm

eel.init('frontend')

# for RPM
rpm_thread = threading.Thread(target=rpm.rpm)
rpm_thread.start()

# for oil temp
oil_temp_thread = threading.Thread(target=threading)

eel.start('index.html')