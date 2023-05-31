from django.contrib import admin
from .models import App

# Register your models here.


class AppAdmin(admin.ModelAdmin):
    list_display = (
        "app_name",
        "privacy_type",
        "purpose",
        "data_category",
        "data_type",
        "release_date",
        "version_release_date",
        "app_url",
    )


admin.site.register(App, AppAdmin)
