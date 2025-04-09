with open("sygnaly.txt", "r") as file:
    lines = file.readlines()

message = ""
for i in range(39, len(lines), 40):
    message += lines[i][9]
print(message)

maxLetters = 0
maxWord = ""
for line in lines:
    Letters = len(set(line.strip()))
    if Letters > maxLetters:
        maxLetters = Letters
        maxWord = line

print(maxWord + str(maxLetters))

words = []


def isWordWordsWorthy(word):
    for i in range(len(word)):
        for j in range(i + 1, len(word)):
            if abs(ord(word[i]) - ord(word[j])) > 10:
                return False
    return True


for line in lines:
    if isWordWordsWorthy(line.strip()):
        words.append(line.strip())

with open("wyniki4.txt", "w") as anwserToAllLifeAndMeaning:
    anwserToAllLifeAndMeaning.write("Zad 1\n")
    anwserToAllLifeAndMeaning.write(message + "\n")
    anwserToAllLifeAndMeaning.write("\n")
    anwserToAllLifeAndMeaning.write("Zad 2\n")
    anwserToAllLifeAndMeaning.write(f"{maxWord} {maxLetters}\n")
    anwserToAllLifeAndMeaning.write("\n")
    anwserToAllLifeAndMeaning.write("Zad 3\n")
    anwserToAllLifeAndMeaning.write("\n".join(words) + "\n")