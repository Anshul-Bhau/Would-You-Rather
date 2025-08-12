from django.shortcuts import render
from .models import Question
from django.http import JsonResponse, HttpResponse
# Create your views here.

def intro(request):
    return render(request, 'index.html')

def questions_list(request):
    ques = Question.objects.all()
    data = [q.make_dict() for q in ques]
    return JsonResponse(data, safe=False)

def vote(request, question_id):
    choice = request.GET.get("choice")
    question = Question.objects.get(id = question_id)

    if choice == "red":
        question.red_votes += 1
    elif choice == "blue":
        question.blue_votes += 1

    question.save()

    return JsonResponse(
        {
            "majority" : question.current_majority,
            "percentages" : question.majority_percentage()
        }
    )