curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash
apt-get -y install nodejs

apt-get update
apt-get -y install nginx
cp /home/ubuntu/LaneRando/serverConfig/server.conf /etc/nginx/conf.d/server1.conf
service nginx start
