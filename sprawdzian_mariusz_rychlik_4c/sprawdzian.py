__copyright__="Zespol Szkol Komunikacji"
__author__="Mariusz Rychlik 4C"
from models import Teacher
from models import Subject
from models import Student
from models import Grades
from datetime import date
from year_grade import year_grade
import json
teachers: list[Teacher.Teacher] = []
subjects: list[Subject.Subject] = []
students: list[Student.Student] = []
grades: list[Grades.Grades] = []

with open("teachers.txt", 'r') as file:
    lines = file.readlines()

for line in lines:
    text = line.split()
    teachers.append(Teacher.Teacher(int(text[0]), text[1], text[2]))

with open("subjects.txt", 'r') as file:
    lines = file.readlines()

i = 0
for line in lines:
    text = line.split()
    if teachers[int(text[2])-1] in teachers:
        subjects.append(Subject.Subject(int(text[0]), text[1], teachers[int(text[2])-1]))
        i = i + 1
    else:
        pass

with open("students.txt", 'r') as file:
    lines = file.readlines()

i = 0
for line in lines:
    text = line.split()
    students.append(Student.Student(int(text[0]), text[1], text[2], date.fromisoformat(text[3])))
    i = i + 1

with open("grades.txt", 'r') as file:
    lines = file.readlines()

i = 0
for line in lines:
    text = line.split()
    if students[int(text[0])-1] in students and subjects[int(text[1])-1] in subjects:
        grades.append(Grades.Grades(students[int(text[0])-1], subjects[int(text[1])-1]))
        temp=[]
        for ocena in text[2].split(','):
            temp.append(int(ocena))
        grades[i].grades.extend(temp)
        i = i + 1
    else:
        pass
print("Oceny i srednie poszczegolnych uczniow")
j=0
for student in students:
    print(student.string_of_student() + ":")
    for subject in subjects:
        print("     "+subject.name+":")
        print("          Oceny: ", end="")
        k=0
        for single in grades[j].grades:
            print(str(single),end="")
            if k<=i:
                print(", ",end="")
                k=k+1
        print()
        print("         Srednia: ",end="")
        average:float=float(round(grades[j].get_average(),2))
        print(average)
        end_grade=year_grade(average)
        print("         Ocena koncowa: "+str(end_grade))
        j=j+1
    print()


# TO DO JSON ZADANIE N

for p in range(50):
    print("=",end="")
print()
print()
j=0
for subject in subjects:
    print(subject.name+": ")
    print("     Nauczyciel: "+subject.teacher.name+" "+subject.teacher.surname)
    print("          Oceny: ", end="")
    k=0
    for single in grades[j].grades:
        print(str(single), end="")
        if k <= i:
            print(", ", end="")
            k = k + 1
    print()
    print("         Srednia: ", end="")
    average: float = float(round(grades[j].get_average(), 2))
    print(average)
    j=j+1
    print()

# TO DO JSON ZADANIE S

