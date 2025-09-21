# Django Inventory App
from django.db import models
from sweets.models import Sweet

class Inventory(models.Model):
    sweet = models.OneToOneField(Sweet, on_delete=models.CASCADE, related_name='inventory')
    quantity = models.PositiveIntegerField(default=0)
    min_quantity = models.PositiveIntegerField(default=10)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.sweet.name} - Quantity: {self.quantity}"

    @property
    def needs_restock(self):
        return self.quantity <= self.min_quantity

    class Meta:
        verbose_name_plural = "Inventories"