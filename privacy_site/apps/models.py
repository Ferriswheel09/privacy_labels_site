from django.db import models
import datetime


# Create your models here.
class App(models.Model):
    privacy_type_options = [
        ("NC", "Data Not Collected"),
        ("NL", "Data Not Linked To You"),
        ("L", "Data Linked To You"),
        ("T", "Data Used To Track You"),
    ]

    purpose_options = [
        ("A", "Analytics"),
        ("AP", "App Functionality"),
        ("D", "Developer's Advertising or Marketing"),
        ("O", "Other Purposes"),
        ("P", "Product Personalization"),
        ("T", "Third-party Advertising"),
    ]

    data_category_options = [
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
        ("UC", "User Content"),
    ]

    data_type_options = [
        ("AD", "Advertising Data"),
        ("AU", "Audio Data"),
        ("B", "Browsing History"),
        ("CL", "Coarse Location"),
        ("C", "Contacts"),
        ("CD", "Crash Data"),
        ("CI", "Credit Info"),
        ("CS", "Customer Support"),
        ("D", "Device ID"),
        ("E", "Email Address"),
        ("ET", "Emails or Text Messages"),
        ("F", "Fitness"),
        ("G", "Gameplay Content"),
        ("H", "Health"),
        ("N", "Name"),
        ("PI", "Payment Info"),
        ("PD", "Performance Data"),
        ("PN", "Phone Number"),
        ("PV", "Photos or Videos"),
        ("PA", "Physical Address"),
        ("PL", "Precise Location"),
        ("PR", "Product Interaction"),
        ("PH", "Purchase History"),
        ("SH", "Search History"),
        ("SI", "Sensitive Info"),
        ("U", "User ID"),
        ("O", "Other"),
    ]

    app_name = models.CharField(max_length=255)
    privacy_type = models.CharField(
        max_length=255, choices=privacy_type_options, default=None
    )
    purpose = models.CharField(max_length=255, choices=purpose_options, default=None)
    data_category = models.CharField(
        max_length=255, choices=data_category_options, default=None
    )
    data_type = models.CharField(
        max_length=255, choices=data_type_options, default=None
    )
    release_date = models.DateField(
        auto_now=False, auto_now_add=False, default=datetime.date.today
    )
    version_release_date = models.DateField(
        auto_now=False, auto_now_add=False, default=datetime.date.today
    )
    app_url = models.URLField(max_length=200, default=None, blank=True)

    def __str__(self):
        return self.app_name
