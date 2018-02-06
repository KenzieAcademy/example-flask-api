# Description
A minimal Flask app that demonstrates returning JSON responses. There is a template also being returned which is meant to be used internally for testing, though users can technically visit it as well. Ideally, though, a separate frontend server would be written in something like React or Angular.

# Running
Assuming you have an environment with flask installed (I recommend using virtualenvwrapper), you should be able to serve the application publically as follows:

```python
FLASK_APP=example.py flask run --host=0.0.0.0
```

You can then visit `http://localhost:5000` from any web browser to see the result. if you open the "Network" tab in dev tools, you should notice two separate end points:
- `/api/hello/<name>/` - this end point responds to a request with JSON with a message key
- `/hello/` - this end point renders an HTML template that includes a script that calls the previous endpoint using the native `fetch` API of modern browsers. 

## Files
- static: This is where the javsacript used in the template is located. We'd put other static assets here (eg, CSS), when we need to.
- static/hello.js: This is our "client" script. It simply randomly picks a name, and uses that name to call the API end point, then writes the result to the current document (web page).
- templates: All Jinja2 templates (rendered by Flask) go here
- templates/hello.html: A template whose sole purpsoe is to run the client script mentioned above. It does also show examples of some of JinJa2's syntax (such as including static assets).
- example.py: The actual flask server code. It includes the two end points we mentioned before, as well as code to start an HTTP server from which those end points are made available.
- README.md: Uh...this file.