__copyright__="Zespol Szkol Komunikacji"
__author__="Mariusz Rychlik 4C"
from datetime import date


class Student:
    def __init__(self, _id: int, first_name: str, last_name: str, birth_date: date):
        self._id = _id
        self.first_name = first_name
        self.last_name = last_name
        self.birth_date = birth_date

    @property
    def age(self):
        age = date.today().year - self.birth_date.year
        return int(age)

    def string_of_student(self):
        imie = self.first_name
        nazwisko = self.last_name
        wiek = self.age
        return imie +" "+ nazwisko +" "+ '(' + str(wiek) + ')'
