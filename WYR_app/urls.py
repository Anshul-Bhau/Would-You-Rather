from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path("", intro, name='intro'),
    path("questions/", questions_list, name="question_list"),
    path('vote/<int:question_id>/', vote, name="vote"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)