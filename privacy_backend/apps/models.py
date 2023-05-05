from django.db import models

# Create your models here.
class App(models.Model):
    privacy_options = [
        ("NC", "Data Not Collected"),
        ("NL", "Data Not Linked To You"),
        ("L", "Data Linked To You"),
        ("T", "Data Used To Track You")
    ]

    data_options = [
        ("B", "Browsing History"),
        ("CI", "Contact Info"),
        ("C", "Contacts"),
        ("D", "Diagnostics"),
        ("F", "Financial Info"),
        ("H", "Health and Fitness"),
        ("I", "Identifiers"),
        ("L", "Location Info"),
        ("O", "Other Data"),
        ("P", "Purchases"),
        ("SH", "Search History"),
        ("SI", "Sensitive Info"),
        ("UD", "Usage Data"), 
        ("UC", "User Content")
    ]


    app_name = models.CharField(max_length=255)
    privacy_type = models.CharField(max_length=255, choices=privacy_options, default="NC")
    data_category = models.CharField(max_length=255, choices=data_options)
    def __str__(self):
        return self.app_name
    