from flask_wtf import Form
from wtforms import TextField, TextAreaField, SubmitField, validators, ValidationError

class ContactForm(Form):
	name = TextField("Name", [validators.Required("Please enter your name.")])
	email = TextField("Email", [validators.Required("Please enter your email address."), validators.Email("Please enter your email address.")])
	subject = TextField("Subject", [validators.Required("Please enter a subject.")])
	message = TextAreaField("Message", [validators.Required("Please tell me the details of the opportunity.")])
	submit = SubmitField("Send")