a = int(input())
l = []
for i in range(1, a + 1):
    if (a % i == 0):
        l.append(i)
print(l)
