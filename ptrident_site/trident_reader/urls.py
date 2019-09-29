from django.urls import path
from . import views
from django.contrib.auth.views import login, logout

urlpatterns = [
  url(r'^$', views.home)
  url('login', login, {'template_name': 'login'}),
  url('logout', logout, {'template_name': 'logout'}),
]
