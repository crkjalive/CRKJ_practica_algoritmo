def palindromo(palabra):
	palindromo = palabra == palabra[::-1]
	return palindromo

palabra = input("escribe palabra: ")

if palindromo(palabra):
	print("Es palindromo")
else:
	print("No es palindromo")


