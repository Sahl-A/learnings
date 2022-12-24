from .models import Drink
from .serializers import DrinkSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET','POST'])
def drink_list(request):
  if request.method == 'GET':
    # get all drinks
    # serialize them
    # return json
    drinks = Drink.objects.all()
    serialized_drinks = DrinkSerializer(drinks, many=True)
    return JsonResponse(serialized_drinks.data, safe=False)
  
  if request.method == 'POST':
    serialized_data = DrinkSerializer(data=request.data)
    if serialized_data.is_valid():
      serialized_data.save()
      return Response(serialized_data.data, status=status.HTTP_201_CREATED)

