from django.contrib import admin
from .models import Question

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("red_option", "blue_option", "red_votes", "blue_votes", "majority_display")
    list_editable = ("red_votes", "blue_votes")
    search_fields = ("red_option", "blue_option")

    def majority_display(self, obj):
        return obj.current_majority
    majority_display.short_description = "Majority"
