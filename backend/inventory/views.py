from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db import models
from .models import Inventory
from .serializers import InventorySerializer

class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

    @action(detail=False, methods=['get'])
    def low_stock(self, request):
        low_stock_items = Inventory.objects.filter(quantity__lte=models.F('min_quantity'))
        serializer = self.get_serializer(low_stock_items, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def update_quantity(self, request, pk=None):
        inventory = self.get_object()
        new_quantity = request.data.get('quantity')
        if new_quantity is not None:
            inventory.quantity = int(new_quantity)
            inventory.save()
        serializer = self.get_serializer(inventory)
        return Response(serializer.data)