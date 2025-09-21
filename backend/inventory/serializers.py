from rest_framework import serializers
from .models import Inventory

class InventorySerializer(serializers.ModelSerializer):
    sweet_name = serializers.CharField(source='sweet.name', read_only=True)
    needs_restock = serializers.BooleanField(read_only=True)

    class Meta:
        model = Inventory
        fields = ['id', 'sweet', 'sweet_name', 'quantity', 'min_quantity', 'needs_restock', 'last_updated']