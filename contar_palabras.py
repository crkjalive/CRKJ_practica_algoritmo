"""
Contar palabras de un texto y saber cuantas veces aparece cada palabra 
"""
texto = "Texto dentro de la Calle, vendiendo comida, el ayuno es la falta de comer, la Migracion es el diario vivir, la gente Saldra de las playas. probando. Limpiando. Lower..."

def toLowerCase(text):
    alowerCase = text.lower()
    return alowerCase


def cleanText(text):
    cleanText = text.replace(',','').replace('.','')
    separatedText = cleanText.split(" ")
    return separatedText


def countWords(text):
    dictionary = {}
    for word in text:
        if word in dictionary:
            dictionary[word] += 1
        else:
            dictionary[word] = 1
    return dictionary


textoLower = toLowerCase(texto)
cleanedText = cleanText(textoLower)
countedWords = countWords(cleanedText)

print(countedWords)








