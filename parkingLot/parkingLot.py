# Parking Lot class  --top level--
  # Keep track of meta information
  # Schedule tasks
  # Grid of levels of parking spaces
  # Staff
  # Levels
  # Supported vehnicles

# Grid of spaces
  # Rows of spaces

# Space
  # Empty or full

# Staff
  # Role
  # Tasks

# Role Types inherit from stafff

# Vehicles
  #vehicle infor

#Cars, Buses, Motorcycle


class ParkingLot:
  def __init__(self, size, supported_vehicles, num_levels=1):
    self.staff = []
    self.capacity = 0
    self.parking_spots = Grid(size)
    self.supported_vehicles = []
    self.num_levels = num_levels

  def checkTimers(self):
    staff = find_available_staff_member()
    if ( staff == None ):
      print 'no available staff members'
      return

  def handleJobTimes(self):



  def findAvailableStaffMember(self):
    first_available_staff = None
    for staff in self.staff:
      if staff.onDuty == True:
        firstAvailableStaff = staff
        break

    return first_available_staff

  def addSupportedVehicles(self):




class Grid:
  def __init__(self, size):
    self.grid = []
    for row in range(size):
      self.grid.append([Space() for column in range(size)])

class Space:
  def __init__(self):
    self.full = False

class Staff:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def update(self):
    print ('update')

  __update = update  #private copy of original update (just a convention)

class Attendent(Staff):
  def __init__(self):
    self.onDuty = False

  def update(self):
    print('Attendant update')
    print(_update)

class Vehicle:
  def __init__(self, license_plate, num_spots, size):
    self.license_plate = license_plate
    self.num_spots = num_spots
    self.size = size

class Car(Vehicle):
  def __init__(self):
    self.spots_needed =1
    self.size =


test_parking_lot = parking_lot(10)
