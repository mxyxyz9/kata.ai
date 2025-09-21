from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Sweet
from .serializers import SweetSerializer

class SweetViewSet(viewsets.ModelViewSet):
    queryset = Sweet.objects.all()
    serializer_class = SweetSerializer

    @action(detail=False, methods=['get'])
    def available(self, request):
        available_sweets = Sweet.objects.filter(is_available=True)
        serializer = self.get_serializer(available_sweets, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def toggle_availability(self, request, pk=None):
        sweet = self.get_object()
        sweet.is_available = not sweet.is_available
        sweet.save()
        serializer = self.get_serializer(sweet)
        return Response(serializer.data)