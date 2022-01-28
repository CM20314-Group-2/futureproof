# FutureProof

## Prerequisites
- Ensure that you have lerna installed globally:
```
npm install -g lerna
```

## Installation
- Create a new directory and clone the repository into it using the following command:
```
git clone --recurse-submodules https://github.com/CM20314-Group-2/futureproof.git
```
- Install the client dependencies:
```
npm install
```
- Then, install all of the dependencies of the child packages:
```
lerna bootstrap
```

## Running Locally
- Ensure that all build steps have been run:
```
lerna run build
```
- Start the GraphQL server:
```
lerna run --stream dev
```
- In a new terminal windo start the client with:
```
npm start
```
- Open the ExpoGo mobile app, and you should see the app running.
- You can also run the following command to open the app in an android emulator:
```
expo start --android
```
or the following command to open the app in an iOS simulator:
```
expo start --ios
```
