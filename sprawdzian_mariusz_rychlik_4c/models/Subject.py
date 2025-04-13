__copyright__="Zespol Szkol Komunikacji"
__author__="Mariusz Rychlik 4C"
from .Teacher import *


class Subject:
    def __init__(self, _id: int, name: str, teacher: Teacher):
        self._id = _id
        self.name = name
        self.teacher = teacher

    def string_of_subject(self):
        nazwa_przedmiotu = self.name
        nauczyciel = self.teacher
        return nazwa_przedmiotu + str(nauczyciel)
