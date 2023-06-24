from flask import Flask, render_template

app = Flask(__name__)

data = [{
  'id': 3883849384989482,
  'name': 'Devesh Patil'
}, {
  'id': 3883849384989482,
  'name': 'Prasanjeet Kalpande'
}, {
  'id': 3883844384989482,
  'name': 'Shreyash'
}]

feedbacks = [{
  'id':
  14447144574444543542,
  'name':
  'Rohan Gosavi',
  'work':
  'Strategic Advisor at Company LLC',
  'message':
  'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus'
}, {
  'id':
  14447144574444543542,
  'name':
  'Samiksha Ghulany',
  'work':
  'Head of Marketing at Lorem Ltd.',
  'message':
  'Vestibulum nunc lectus auctor quis. Natoque lectustortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae,donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Veldignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.'
}, {
  'id':
  14447144574444543542,
  'name':
  'Gaurav Pawar',
  'work':
  'Project Manager at Ipsum Ltd',
  'message':
  'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare.'
}]


@app.route('/')
def index():
  return render_template('index.html', jobs=data, feed=feedbacks)


@app.route('/login')
def Clogin():
  return render_template('login/login.html')


@app.route('/Departmentlogin')
def Elogin():
  return render_template('login/loginEmp.html')


@app.route('/UserRegistration')
def userReg():
  return render_template('login/Registration.html')
