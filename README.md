# webpacktest

First install python (assuming mac)

```
$ brew install python
```

Now clone the repository

```
git clone https://github.com/bsdis/webpacktest.git
cd webpacktest
```

Once done create and activate the new Python environment:

```
python3 -m venv venv
source venv/bin/activate
```

NOTE: from now on make sure to be always in the django-react folder and to have the Python environment active.

Now let's pull in the dependencies:

```
pip install django djangorestframework
```

Now backend has been setup. Frontend should be compiled now

```
cd frontend
```

```
npm install
```

```
npm run build
```

Now open new terminal and browse to the `webpacktest` directory again.
You can now run the server using

```
python manage.py runserver
```

When the server is running you can browse to http://127.0.0.1:8000 to load the site
