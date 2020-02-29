# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

#importing loading from django template
from django.template import loader
from .forms import QueryForm
# Create your views here.
import json
import sys
import os
import xlrd
from datetime import timedelta 
from django import template
from django.template.defaultfilters import stringfilter
from datetime import datetime
register = template.Library()
@register.filter
def lookup(d, key):
    return d[key]

def getExcelData(form):
    data=[]
    
    workbook = xlrd.open_workbook('/home/arshad/Downloads/Mohammed_QA_Jan.xlsx')
    worksheet = workbook.sheet_by_name('Sheet2')
    
    keys = [v.value for v in worksheet.row(1)]
    
    for row_number in range(worksheet.nrows):
        if row_number == 0 or row_number == 1:            
            continue
        
        key2 = [v.value for v in worksheet.row(row_number)]
        #row_data = {"incident":key2[0]}
        row_data = {'incident':key2[0],'engineerName':key2[1],'auditedBy':key2[2],'auditDate':datetime(*xlrd.xldate_as_tuple(key2[3], 0)),'GeneralKnoledgeEmpathy':{'comment':key2[4],'YesNoPartial':key2[5],'score':key2[6]},'incidentManager':{'comments':key2[7],'yesNoPartial':key2[8],'score':key2[9]},'holdTime':{'yesNo':key2[10],'score':key2[11]},'correctCIitem':{'yesNo':key2[12],'score':key2[13]},'resolutionNotes':{'comments':key2[14],'yesNoPartial':key2[15],'score':key2[16]},'OLAbreach':{'yesNo':key2[17],'score':key2[18]},'comments':key2[19],'totalScore':key2[20],'scopeOfSOPKBCreation':key2[21]}
       # for col_number, cell in enumerate(worksheet.row(row_number)):
       #     row_data[keys[col_number]] = cell.value


#Call function to get dates range 

        if form.cleaned_data['member'] == row_data['engineerName']:
            bo=dateReturn(form.cleaned_data['weekStart'],form.cleaned_data['weekEnd'],row_data['auditDate'])
            if(bo):
                data.append(row_data)
    
    return data

def dateReturn(obj1,obj2,obj3):
    end = datetime.strptime(obj1 + '-1', "%Y-W%W-%w")- timedelta(days=1)
    #end1 =obj2
    start = end- timedelta(days=6)
    end = datetime.strptime(obj2 + '-1', "%Y-W%W-%w")- timedelta(days=1)
    if end > obj3 and start < obj3:
        return True
    else :
        return False
def fetchData(request):
    tList = getTeam()
    form = QueryForm(request.POST)
        # check whether it's valid:
    dat=[]
    if form.is_valid():
        dat=getExcelData(form)
        #cat=json.dumps(dat) 
    return render(request, "basic-forms.html", {'form':'active','tList':tList,'data':dat})
def getTeam():
   workbook = xlrd.open_workbook(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/TeamInfo.xlsx')
   worksheet = workbook.sheet_by_name('Sheet1')
   data=[]
   team_dict={}
   keys = [v.value for v in worksheet.row(0)]
   for row_number in range(worksheet.nrows):
       if row_number == 0:
           continue
       row_data = {}
       k=''
       try:
           k=team_dict[str(worksheet.row(row_number)[0].value)]
       except:
           k=''
       team_dict[worksheet.row(row_number)[0].value]=k+'|'+worksheet.row(row_number)[1].value
   return team_dict
def basicForm(request):
   template = loader.get_template('basic-forms.html') # getting our template
   tList = getTeam();  
   return render(request, "basic-forms.html", {'form':'active','tList':tList})
def index(request):    
    tList = getTeam()
    template = loader.get_template('index.html') # getting our template  
    form = QueryForm()
    return render(request, "index.html", {'form': form,'tList':tList})