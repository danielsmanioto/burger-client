# instaling nginx on Ubuntu

`sudo apt-get update`

`sudo apt-get install nginx`

`sudo ufw enable`

`nginx -v`

# see avaliable 

`sudo ufw app list`

`sudo ufw allow "Nginx Full"`
`sudo ufw allow "Nginx HTTP"`
`sudo ufw allow "Nginx HTTPS"`

`sudo ufw status`
`sudo systemctl status nginx`

# Deploy 

`cd ..`

`cd ..`

`sudo cp burger-client/ -r /var/www/`

# Configure/etc/hosts

`sudo vi /etc/hosts`

Content (add this):
<pre> 
# burger-client on nginx
  0.0.0.0      burger-client.com
</pre>

# Copyng and configuring

`cd /var/www/burger-client`

`sudo chmod -R  777 *`

`scp -r * 0.0.0.0:/var/www/burger-client`

# Finishing

`sudo gedit /etc/nginx/sites-available/burger-client`

content: 

server {
listen 80 default_server;
listen [::] default_server;
root /var/www/burger-client;	
index index.html;
server_name burger-client;
location / {try_files $uri $uri/ =404; }
}

`sudo ln -s /etc -s /etc/nginx/sites-available/burger-client /etc/nginx/sites-enabled/burger-client`

`sudo mv /etc/nginx/sites-enabled/default /home/daniel-note/projetos/burger-client/nginx`  and  copy to cd ~ 

`sudo systemctl restart nginx`

# Allow ports and solve problems 
sudo apt-get install ssh

sudo iptables -L

# Solving problem

sudo nginx -t

ps ax | grep nginx<br>
sudo kill -9 PIDs
sudo service nginx start

# Acessing in browser

http://0.0.0.0/
or
http://burger-client.com/

# Others

Here you will find a  fould /etc/nginx  inside de nginx folder this  repository


# References

https://www.nginx.com/resources/wiki/start/topics/tutorials/commandline/

