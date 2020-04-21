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
import numpy as np
from datetime import timedelta
from django import template
from django.template.defaultfilters import stringfilter
from datetime import datetime
register = template.Library()
temp=0
emptotal=0.0
emptotal2=0.0
file = '/home/abed/Downloads/Mohammed_QA_Jan.xlsx'
englist=[]
#emptotal2=0.0
@register.filter
def lookup(d, key):
    return d[key]

def getExcelData(form):
    data=[]
    print(" 1. PRINGING getExcelData>..........................................................")
    workbook = xlrd.open_workbook(file)
    worksheet = workbook.sheet_by_name('Sheet2')

    keys = [v.value for v in worksheet.row(1)]

    for row_number in range(worksheet.nrows):
        if row_number == 0 or row_number == 1:
            continue

        key2 = [v.value for v in worksheet.row(row_number)]
        #row_data = {"incident":key2[0]}
        row_data = {'incident':key2[0],'engineerName':key2[1],'auditedBy':key2[2],'auditDate':datetime(*xlrd.xldate_as_tuple(key2[3], 0)),'GeneralKnoledgeEmpathy':{'comment':key2[4],'YesNoPartial':key2[5],'score':key2[6]},'incidentManager':{'comments':key2[7],'yesNoPartial':key2[8],'score':key2[9]},'holdTime':{'yesNo':key2[10],'score':key2[11]},'correctCIitem':{'yesNo':key2[12],'score':key2[13]},'resolutionNotes':{'comments':key2[14],'yesNoPartial':key2[15],'score':key2[16]},'OLAbreach':{'yesNo':key2[19],'score':key2[20]},'comments':key2[21],'totalScore':key2[22],'scopeOfSOPKBCreation':key2[21]}
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
#def update_variable(value):
    #data = data+value
    #return data
#register.filter('update_variable', update_variable)

def getExcelData1(form):
    data=[]

    workbook = xlrd.open_workbook(file)
    worksheet = workbook.sheet_by_name('Sheet2')

    keys = [v.value for v in worksheet.row(1)]

    team=getTeam1(form.cleaned_data['team'])

    for row_number in range(worksheet.nrows):
        if row_number == 0 or row_number == 1:
            continue

        key2 = [v.value for v in worksheet.row(row_number)]
        #row_data = {"incident":key2[0]}
        row_data = {'incident':key2[0],'engineerName':key2[1],'auditedBy':key2[2],'auditDate':datetime(*xlrd.xldate_as_tuple(key2[3], 0)),'GeneralKnoledgeEmpathy':{'comment':key2[4],'YesNoPartial':key2[5],'score':key2[6]},'incidentManager':{'comments':key2[7],'yesNoPartial':key2[8],'score':key2[9]},'holdTime':{'yesNo':key2[10],'score':key2[11]},'correctCIitem':{'yesNo':key2[12],'score':key2[13]},'resolutionNotes':{'comments':key2[14],'yesNoPartial':key2[15],'score':key2[16]},'OLAbreach':{'yesNo':key2[19],'score':key2[20]},'comments':key2[21],'totalScore':key2[22],'scopeOfSOPKBCreation':key2[21]}
        team=getTeam1(form.cleaned_data['team'])
        if row_data['engineerName'] in team:
           bo=dateReturn1(form.cleaned_data['weekStart'],form.cleaned_data['weekEnd'],row_data['auditDate'])
           if(bo):
              data.append(row_data)

    return data
'''def getExcelData2(form):
    data=[]
    emptotalscore=0.0
    totalincidentcounts=1
    sameNameengineerNameAvarage=0

    workbook = xlrd.open_workbook(file)
    worksheet = workbook.sheet_by_name('Sheet2')

    keys = [v.value for v in worksheet.row(1)]

    team=getTeam1(form.cleaned_data['team'])

    for row_number in range(worksheet.nrows):
        if row_number == 0 or row_number == 1:
            continue

        key2 = [v.value for v in worksheet.row(row_number)]
        #row_data = {"incident":key2[0]}
        row_data = {'incident':key2[0],'engineerName':key2[1],'auditedBy':key2[2],'auditDate':datetime(*xlrd.xldate_as_tuple(key2[3], 0)),'GeneralKnoledgeEmpathy':{'comment':key2[4],'YesNoPartial':key2[5],'score':key2[6]},'incidentManager':{'comments':key2[7],'yesNoPartial':key2[8],'score':key2[9]},'holdTime':{'yesNo':key2[10],'score':key2[11]},'correctCIitem':{'yesNo':key2[12],'score':key2[13]},'resolutionNotes':{'comments':key2[14],'yesNoPartial':key2[15],'score':key2[16]},'OLAbreach':{'yesNo':key2[19],'score':key2[20]},'comments':key2[21],'totalScore':key2[22],'scopeOfSOPKBCreation':key2[21]}
        team=getTeam1(form.cleaned_data['team'])
        if row_data['engineerName'] in team:
           bo=dateReturn1(form.cleaned_data['weekStart'],form.cleaned_data['weekEnd'],row_data['auditDate'])
           if(bo):
                try:
                  temp = emp_dict[row_data['engineerName']]
                  temp['score']+=row_data['totalScore']
                  emp_dict['engineerName']=temp
                  emptotalscore+=row_data['totalScore']
                  totalincidentcounts+=1
                  print emp_dict
                  print totalincidentcounts
                  print temp['score']
                except:
                    emp={"incident":row_data['incident'],"score":row_data['totalScore']}
                    emp_dict[row_data['engineerName']]=emp
                    emptotalscore+=emp['score']
                    print emp_dict
    sameNameengineerNameAvarage=temp['score']/totalincidentcounts

    print sameNameengineerNameAvarage
    print emp_dict
    emp_dictjson=json.dumps(emp_dict)
    print emp_dictjson
    print totalincidentcounts
    print temp['score']
    #data.append(sameNameengineerNameAvarage)
    data.append(emp_dict)
    #data.apeend(emp_dictjson)
    data.append(totalincidentcounts)
    data.append(temp['score'])

    return data    '''
def getExcelData2(form):
    data=[]
    total=0
    emptotalscore=0
    totalsingleincicount=0
    eng_dict={}
    count=1
    count2=0
    workbook = xlrd.open_workbook(file)
    worksheet = workbook.sheet_by_name('Sheet2')

    keys = [v.value for v in worksheet.row(1)]

    team=getTeam1(form.cleaned_data['team'])

    for row_number in range(worksheet.nrows):
        if row_number == 0 or row_number == 1:
            continue

        key2 = [v.value for v in worksheet.row(row_number)]
        #row_data = {"incident":key2[0]}
        row_data = {'incident':key2[0],'engineerName':key2[1],'auditedBy':key2[2],'auditDate':datetime(*xlrd.xldate_as_tuple(key2[3], 0)),'GeneralKnoledgeEmpathy':{'comment':key2[4],'YesNoPartial':key2[5],'score':key2[6]},'incidentManager':{'comments':key2[7],'yesNoPartial':key2[8],'score':key2[9]},'holdTime':{'yesNo':key2[10],'score':key2[11]},'correctCIitem':{'yesNo':key2[12],'score':key2[13]},'resolutionNotes':{'comments':key2[14],'yesNoPartial':key2[15],'score':key2[16]},'OLAbreach':{'yesNo':key2[19],'score':key2[20]},'comments':key2[21],'totalScore':key2[22],'scopeOfSOPKBCreation':key2[21]}
        team=getTeam1(form.cleaned_data['team'])
        if row_data['engineerName'] in team:
           bo=dateReturn1(form.cleaned_data['weekStart'],form.cleaned_data['weekEnd'],row_data['auditDate'])
           if(bo):
                try:
                   temp= eng_dict[row_data['engineerName']]
                   temp['score']+=row_data['totalScore']
                   count2=temp['incidentCount']+1
                   temp['incidentCount']=count2


                   eng_dict[row_data['engineerName']]=temp
                except:
                       eng={"engineerName":row_data['engineerName'],"incidentCount":count,"score":row_data['totalScore']}
                       eng_dict[row_data['engineerName']]=eng




    englist=list(eng_dict.values())
    return englist

def dateReturn1(obj1,obj2,obj3):
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
       if form.cleaned_data['member'] == '':
          dat=getExcelData2(form)
       else:
          print(" 0. PRINGING getExcelData>..........................................................")
          dat=getExcelData(form)
    dat1=form.cleaned_data
        #cat=json.dumps(dat)
    return render(request, "basic-forms.html", {'form':'active','tList':tList,'data':dat,'data1':dat1,'count':len(dat)})
def getTeam1(obj):
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
       if worksheet.row(row_number)[0].value == obj:
         team_dict[worksheet.row(row_number)[0].value]=k+'|'+worksheet.row(row_number)[1].value

   return team_dict[obj]
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
