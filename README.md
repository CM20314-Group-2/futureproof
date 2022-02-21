# FutureProof
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

---

## Prerequisites
- Ensure that you have lerna installed globally:
```
npm install -g lerna
```
- Ensure that you have [ngrok](https://ngrok.com/) installed.

## Installation
- Create a new directory and clone the repository into it using the following command:
```
git clone --recurse-submodules https://github.com/CM20314-Group-2/futureproof.git
```
- Setup the development environment:
```
npm run setup
```

## Developing Locally
- Run the development server:
```
lerna run --stream dev
```
- In the `packages/server` subdirectory, open the ngrok tunnel:
```
ngrok http 3000
```
- In `packages/client/app.config.ts`, point the `extra.ServerAddress` property to the ngrok URL:
```typescript
...
extra: {
      serverAddress: 'http://be0e-195-213-145-15.ngrok.io'
    }
...
```

## Running Locally
- Start the GraphQL server:
```
lerna run --stream dev
```
- In a new terminal window start the client with:
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
