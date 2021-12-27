import time
import threading

import eel

import backend.rpm.rpm as rpm
import backend.oil_temp.oil_temp as oil_temp

eel.init('frontend')

# for RPM
rpm_thread = threading.Thread(target=rpm.rpm)
rpm_thread.start()

# for oil temp
oil_temp_thread = threading.Thread(target=oil_temp.oil_temp)
oil_temp_thread.start()

eel.start('index.html')