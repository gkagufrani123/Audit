from django import forms

class QueryForm(forms.Form):        
    team = forms.CharField(widget=forms.HiddenInput())
    member = forms.CharField(widget=forms.HiddenInput())
    week = forms.CharField(widget=forms.HiddenInput())
    class Meta:
        fields = ('team', 'member','week')