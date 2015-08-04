def add(a, b):
    if (b == 0):
        return b
    sum = a ^ b
    carry = a & b << 1
    add(sum, carry)
