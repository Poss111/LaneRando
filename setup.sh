curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash
yum -y install nodejs

apt-get update
apt-get install nginx
cp /home/ubuntu/LaneRando/serverConfig/server.conf /etc/nginx/conf.d/server1.conf
service nginx start
