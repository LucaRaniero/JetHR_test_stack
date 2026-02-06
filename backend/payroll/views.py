from rest_framework import viewsets
from .models import Employee
from .serializer import EmployeeSerializer

# ModelViewSet è una scatola magica che crea automaticamente le 5 operazioni CRUD:
# GET (List), GET (Detail), POST (Create), PUT (Update), DELETE.
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer