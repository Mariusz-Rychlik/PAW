__copyright__="Zespol Szkol Komunikacji"
__author__="Mariusz Rychlik 4C"
class Teacher:
    def __init__(self, _id: int, name: str, surname: str):
        self._id = _id
        self.name = name
        self.surname = surname

    def string_of_teacher(self):
        imie = self.name
        nazwisko = self.surname
        return imie + nazwisko
