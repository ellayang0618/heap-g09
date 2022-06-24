from tokenize import String
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField

class RegisterForm(FlaskForm):
    username = StringField('User Name: ')
    email = StringField(label="Email Address: ")
    password1 = PasswordField(label="Passowrd: ")
    password2 = PasswordField(label="Confirm Password: ")
    submit = SubmitField(label="Create Account")


    