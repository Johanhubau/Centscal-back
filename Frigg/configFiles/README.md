# Configure Frigg

To get Frigg up and running you need first and foremost:

Install apache2

In `/etc/apache2/ports.conf`:

Add the line
```Listen 8000``` wherever you want (Usually right after other Listen directives)

Then copy `frigg.conf` in the `sites-available` folder and enable it with ```a2ensite frigg```.

Finally, create a symbolic link from `/var/www/html/Centscal/Frigg` to the `Frigg` folder of this repo.

Restart apache2 with ```systemctl restart apache2.service```.

You're done!
