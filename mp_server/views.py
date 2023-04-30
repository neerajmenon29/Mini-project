from django.shortcuts import render
from django.http import HttpResponse , HttpRequest
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


# Create your views here.
@csrf_exempt
def predict(request):
    if request.method == 'POST':
        data = request.POST
        print(data)
        return JsonResponse({'success':"succeess"})