# Shell script to run JS script inside container
# Requires name of the script to run
# docker run --rm -it -v "$(pwd)":/usr/src/app -w /usr/src/app node npm install request
docker run --rm -it -v "$(pwd)":/usr/src/app -w /usr/src/app node first_request.js