from tokenize import String
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, Length, EqualTo


class RegisterForm(FlaskForm):
    username = StringField('User Name: ',validators=[Length(min=2, max=25), DataRequired()])
    email = StringField(label="Email Address: ", validators=[DataRequired(), Email()])
    password1 = PasswordField(label="Password: ",validators=[DataRequired(), Length(min=8)])
    password2 = PasswordField(label="Confirm Password: ", validators=[DataRequired(), EqualTo('password1')])
    submit = SubmitField(label="Create Account")



class LoginForm(FlaskForm):
    username = StringField(label="User Name: ", validators=[DataRequired()])
    password = PasswordField(label="Password: ", validators=[DataRequired()])
    submit = SubmitField(label='Sign in')