The persist volume is in the Directory 
D:\docker-persist-volume 

eg.
volumes:
      - 'D:/docker-persist-volume/zookeeper/data:/var/lib/zookeeper/data'

to up the docker

```
docker-compose up -d
```

# file /etc/hosts
127.0.0.1 kafka  # need to map ip to domain 

#Kafka ui
http://localhost:7000/



# Common Docker Commands and Their Uses
Running Containers
docker run -d -p 80:80 nginx Runs an Nginx container in detached mode (-d), mapping port 80 on the host to port 80 in the container.
docker run -d -i -t -p 80:80 nginx /bin/bash Runs an Nginx container in detached mode (-d), mapping port 80 on the host to port 80 in the container, while also allocating a pseudo-terminal (-t) and keeping the standard input (-i) open.
docker run -d --name host_container --network host nginx Starts an Nginx container in detached mode (-d), naming it host_container and configuring it to use the host's network stack.
docker run -d --name isolated_container --network none BusyBox Runs a container in detached mode (-d), naming it isolated_container and using the BusyBox image with all network interfaces disabled (--network none).
docker run -d -p 8080:80 --network my_bridge_network my_web_app Runs a container from the my_web_app image, forwards port 8080 on the host to port 80 in the container, and connects the container to the bridge network my_bridge_network.
Creating Containers
docker create ubuntu Creates a new container from the Ubuntu image without starting it.
Managing Containers
docker start 12345abcde Starts a previously created container 12345abcde.
docker stop 12345abcde Stops a running container 12345abcde.
docker rm -f 12345abcde Removes a running container 12345abcde by force (-f).
Inspecting and Logging
docker inspect 12345abcde Returns detailed information on container 12345abcde.
docker logs 12345abcde Views the logs of container 12345abcde.
docker logs -f 12345abcde Views the logs of container 12345abcde while it is running (-f).
Networking
docker network create --driver bridge --subnet=192.168.10.0/24 --gateway=192.168.10.1 my_bridge_network Creates a new bridge network named my_bridge_network with the subnet 192.168.10 and the gateway 192.168.10.1.
docker run -d --name container1 --network my_bridge_network nginx Runs a container in detached mode (-d), naming it container1 and connecting it to my_bridge_network.
docker network connect my_bridge_network existing_container Adds the network my_bridge_network to an already running container existing_container.
Volume Management
docker volume create my_volume Creates a volume named my_volume.
docker run -d --name db_container -v my_volume:/var/lib/mysql mysql Runs a MySQL container using the volume my_volume.
docker run -d --name app_container -v /path/on/host:/path/in/container nginx Binds a volume located at /path/on/host:/path/in/container on the host to an Nginx container.
docker run -d --name tmp_container --tmpfs /path/in/container nginx Creates a temporary volume on the host's memory, which is never written to the host's filesystem.