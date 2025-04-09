

with open("students.txt", 'r') as file:
    students = file.readlines()
with open("courses.txt", 'r') as file:
    courses = file.readlines()


class Student:
    def __init__(self, StudentId: int, firstName: str, lastName: str, age: int):
        self.StudentId = StudentId
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
        self.courses = []


class Course:
    def __init__(self, StudentId: int, Coursename: str):
        self.StudentId = StudentId
        self.Coursename = Coursename


Students = {}
for line in students:
    something = ""
    id = 0
    firstName = ""
    lastName=""
    age = 0
    for letter in line:
        if letter == ",":
            if id == 0:
                id = int(something)
                something = ""
            elif firstName == "":
                firstName = something
                something = ""
            elif lastName == "":
                lastName = something
                something = ""

        else:
            something += letter
    age = int(something)
    Students[id] = Student(id, firstName,lastName, age)

Courses = {}
for line in courses:
    something = ""
    id = 0
    Name = ""
    for letter in line:
        if letter == ",":
            if id == 0:
                id = int(something)
                something = ""
        else:
            something += letter
    Name = something.strip()
    something = ""
    Students[id].courses.append(Name)


for i in range(1,len(Students)+1,1):
    with open(Students[i].firstName+"_"+Students[i].lastName+".txt",'w') as teixtek:
        teixtek.write("Kursy:\n")
    print(Students[i].firstName+" "+Students[i].lastName+" ("+str(Students[i].age)+" lat): ", end='')
    for j in range(0,len(Students[i].courses),1):
        print(Students[i].courses[j], end=' ')
        with open(Students[i].firstName + "_" + Students[i].lastName + ".txt", 'a') as teixtek:
            teixtek.write("- "+Students[i].courses[j]+"\n")
    print()