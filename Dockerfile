## BUILDING
##   (from project root directory)
##   $ docker build -t node-js-for-hidjikimi-lesson_11 .
##
## RUNNING
##   $ docker run -p 3000:3000 node-js-for-hidjikimi-lesson_11
##
## CONNECTING
##   Lookup the IP of your active docker host using:
##     $ docker-machine ip $(docker-machine active)
##   Connect to the container at DOCKER_IP:3000
##     replacing DOCKER_IP for the IP of your active docker host

FROM gcr.io/stacksmith-images/minideb-buildpack:jessie-r3

MAINTAINER Bitnami <containers@bitnami.com>

ENV STACKSMITH_STACK_ID="je3c23b" \
    STACKSMITH_STACK_NAME="Node.js for Hidjikimi/Lesson_11" \
    STACKSMITH_STACK_PRIVATE="1"

RUN bitnami-pkg install node-7.2.0-0 --checksum 0df544fd1fe8b05d17c729c7b73351bc22e25776af0317b85de999aa2f4e3423

ENV PATH=/opt/bitnami/node/bin:/opt/bitnami/python/bin:$PATH \
    NODE_PATH=/opt/bitnami/node/lib/node_modules

## STACKSMITH-END: Modifications below this line will be unchanged when regenerating

# Node base template
COPY . /app
WORKDIR /app

RUN npm install

CMD ["node"]
