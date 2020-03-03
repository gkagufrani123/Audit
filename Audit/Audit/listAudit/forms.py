from django import forms

class QueryForm(forms.Form):        
    team = forms.CharField(widget=forms.HiddenInput())
    member = forms.CharField(widget=forms.HiddenInput())
    weekStart = forms.CharField(widget=forms.HiddenInput())
    weekEnd = forms.CharField(widget=forms.HiddenInput())
    class Meta:
        fields = ('team', 'member','weekStart','weekEnd')