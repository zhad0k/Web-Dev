def cigar_party(cigars, is_weekend):

  return cigars >= 40 if is_weekend else cigars in range(40,61)

def date_fashion(you, date):

  if you <= 2 or date <=2:
    return 0
  elif you >=8 or date >=8:
    return 2
  else:
    return 1

def squirrel_play(temp, is_summer):

  return temp in range(60, 101 if is_summer else 91)

def caught_speeding(speed, is_birthday):

  speeding = speed - (65 if is_birthday else 60)
  if speeding > 20:
    return 2
  elif speeding > 0:
    return 1
  else:
    return 0

def sorta_sum(a, b):

  return 20 if a+b in range(10,20) else a+b

def alarm_clock(day, vacation):
  pronto = "7:00" if not vacation else "10:00"
  tarde = "10:00" if not vacation else "off"
  return pronto if day not in [6,0] else tarde

def alarm_clock(day, vacation):

  week_preset = "7:00" if not vacation else "10:00"
  weekend_preset = "10:00" if not vacation else "off"
  return week_preset if day not in [6,0] else weekend_preset

def love6(a, b):

  return a == 6 or b == 6 or a+b == 6 or abs(a-b) == 6

def in1to10(n, outside_mode):

  if n == 1 or n == 10:
    return True
  return (n in range(1,11)) ^ outside_mode

def near_ten(num):
  within = num%10
  
  return within in [8,9,2,1,0]
