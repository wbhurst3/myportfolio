from flask import Flask, render_template, request, flash
from forms import ContactForm
from flask_wtf.csrf import CsrfProtect
from flask_mail import Mail, Message

app = Flask(__name__)

# Set secret key and enable CSRF protection
app.secret_key = 'development key'
CsrfProtect(app)

# Configure mail server settings and initialize flask-mail
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'benhurstcodes@gmail.com'
app.config["MAIL_PASSWORD"] = 'monkeytail77'
mail = Mail(app)

#Routes defined below
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/calculator')
def calculator():
	return render_template('calculator.html')

@app.route('/hireme', methods=['GET', 'POST'])
def hire():
	# Initiaize contact form
	form = ContactForm()

	if request.method == 'POST':
		# If form validation fails, flash error messages and re-render page
		if form.validate() == False:
				flash('All fields are required.')
				return render_template('hire.html', form=form)
		else:
			# If validation passes, send message and render success page
			msg = Message(form.subject.data, sender='benhurstcodes@gmail.com', recipients=['wbhurst3@gmail.com'])
			msg.body = """
			From %s <%s>
			%s
			""" % (form.name.data, form.email.data, form.message.data)
			mail.send(msg)

			return render_template('hire.html', success=True)

	elif request.method == 'GET':
		return render_template('hire.html', form=form)

@app.route('/poetry')
def poetry():
	return render_template('poetry.html')

@app.route('/photog')
def photog():
	return render_template('photog.html')

@app.route('/stockcharts')
def stock():
	return render_template('stock.html')

if __name__ == '__main__':
    app.run(debug=True)