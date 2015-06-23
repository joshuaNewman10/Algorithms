# Two 32 bit integers m, n
# Insert m into n in positions i, through j
# i = start, j= end
# j and j will definitely have room

"""
Strategy:
  1) Clear out the bits of n via a mask
  2) Insert m into the i->j gap
  3) Merge and return
"""

def bitInsertion(n, m, i, j):
  #sequence of all 1s
  allOnes = ~0
  print('allones', bin(allOnes))

  #1s beofre position j, then 0s left=11100000
  left = allOnes << (j+1)
  print('left', bin(left))

  #1s after positin i right = 00000011
  right = ((1 << i) -1)
  print('right', bin(right))

  #all 1s except for 0s between i and j --> mask=11100011
  mask = left | right
  print('mask', bin(mask))

  #Now clear bits j through i
  n_cleared = n & mask
  print('cleared n', bin(n_cleared))

  #shift m into the correct position (shifts m over i places so fits)
  m_shifted = m << i 
  print('shfited m', bin(m_shifted))

  #final or to get answer
  return n_cleared | m_shifted


print(bin(bitInsertion(1000, 001, 2, 4)))