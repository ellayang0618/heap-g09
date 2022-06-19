from flask import Flask, render_template, request
from sympy import reduce_inequalities
from firebase import *
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('home.html')

@app.route('/aboutus')
def aboutus_page():
    return render_template('aboutus.html')

@app.route('/contact')
def contact_page():
    return render_template('contact.html')

@app.route('/gallery')
def gallery_page():
    return render_template('gallery.html')

@app.route('/notification')
def notification_page():
    return render_template('notification.html')

@app.route('/profile', methods=['POST', 'GET'])
def profile_page():
    if request.method == "POST":
        data = request.form
        username = data['username']
        profile_info = {}
        profile_info = {
            'name' : data['name'],
            'email' : data['email'],
            'occupancy' : data['occupancy']
        }
        check = db.child('users').child(username).get()
        if check.val() != None:
            db.child('users').child(username).update(profile_info)
        else:
            print('No data updated')
        
    return render_template('profile.html')

if __name__ == '__main__':
    app.run(debug=True)