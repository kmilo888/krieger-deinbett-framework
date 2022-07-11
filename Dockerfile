#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:9.7.0

#Make work directory
RUN mkdir /krieger-deinbett-framework

#Define work directory
WORKDIR /krieger-deinbett-framework

#Copy files to run scripts.
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

#Install project dependencies to the work directory
RUN npm install

#Run cypress in the container
ENTRYPOINT ["npm","run","cypress:reports"]
#CMD ["npm","run","cypress:reports"]