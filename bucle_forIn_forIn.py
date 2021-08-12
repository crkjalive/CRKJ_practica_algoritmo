# bucle in bucle
arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
]
for i in arr:
    print(f"ciclo {i}")
    for j in i:
        print(f"j {j}")

# convirtamos un string en un array para poderlo iterar
string = "Hola mundo separando string de palabras a un array"
array = string.split(' ')
print(array)

abc = []

# recorriendo palabras del array
for palabra in array:
    print(palabra)
    # recorriendo 
    for letras in palabra[::-1]:
        abc.append(letras)
print(abc)
print(len(abc))
