from django.db import models

# Create your models here.

class Question(models.Model):
    red_option = models.TextField()
    blue_option = models.TextField()
    red_votes = models.PositiveIntegerField(default=0)
    blue_votes = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def total_votes(self):
        return self.red_votes + self.blue_votes

    def majority_percentage(self):
        total = self.total_votes()
        if total == 0:
            return {"red": 0, "blue": 0}
        return {
            "red": round((self.red_votes / total) * 100, 2),
            "blue": round((self.blue_votes / total) * 100, 2),
        }
    @property
    def current_majority(self):
        if self.red_votes > self.blue_votes:
            return "red"
        elif self.blue_votes > self.red_votes:
            return "blue"
        return "tie"  
    
    def make_dict(self):
        return {
            "id" : self.id,
            "red" : self.red_option,
            "blue" : self.blue_option,
            "majority":self.current_majority
        }

    def __str__(self):
        return f"{self.red_option} vs {self.blue_option}"