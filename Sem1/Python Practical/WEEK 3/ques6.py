"""A vehicle moves with an initial velocity u (m/s) and accelerates at a constant rate
a (m/s²) for a time t seconds.
The final velocity v and the distance travelled s can be calculated using the
following formulas from physics:
v=u + a * t
s=u * t + (1/2) * a * t2
Write a Python program to input u, a, and t and then display both v (final velocity)
and s (distance travelled)."""

u = float(input("Enter initial velocity (u) in m/s: "))
a = float(input("Enter acceleration (a) in m/s^2: "))
t = float(input("Enter time (t) in seconds: "))

v = u + a * t
s = u * t + 0.5 * a * (t ** 2)

print("Final velocity (v) is:", v)
print("Distance travelled (s) is:", s)