from django.db import models

class Manufacturer(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Car(models.Model):
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE, related_name='cars')

    def __str__(self):
        return f"{self.manufacturer.name} {self.model}"