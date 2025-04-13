__copyright__="Zespol Szkol Komunikacji"
__author__="Mariusz Rychlik 4C"

from .Student import *
from .Subject import *
from statistics import mean
class Grades:
    def __init__(self, student: Student, subject: Subject):
        self.grades = []
        self.student = student
        self.subject = subject

    def add_grade(self,grade:int):
        if int(grade)<1 or int(grade)>6:
            raise ValueError("Grade must be between 1 and 6.")
        else:
            self.grades.append(grade)

    def get_grades(self):
        return self.grades

    def get_average(self):
        return mean(self.grades)