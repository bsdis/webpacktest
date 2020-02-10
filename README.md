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
django-admin startproject django_react .
```

Now everything is installed, you can now run the server using

```
python manage.py runserver
```


