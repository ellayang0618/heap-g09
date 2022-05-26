from flask import Flask, render_template
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

if __name__ == '__main__':
    app.run(debug=True)