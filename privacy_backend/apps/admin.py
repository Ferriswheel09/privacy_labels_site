from django.contrib import admin
from . import models
# Register your models here.

class AppAdmin(admin.ModelAdmin):
    list_display = ['app_name', 'privacy_type', 'data_category']

admin.site.register(models.App, AppAdmin)