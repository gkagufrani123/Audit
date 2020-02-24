from django.conf.urls import url
from django.contrib import admin
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^pages/forms/basic-forms.html$', views.basicForm),
    url(r'^fetch-data', views.fetchData)
    
]