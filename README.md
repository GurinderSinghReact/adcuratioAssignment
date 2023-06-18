# adcuratioAssignment
 This is a stack React Native application for fetching the hottest questions from React, React Native and Node.
 
# Note:
This project was built in React Native.
Before running this project make sure react native environemnt is setup on your machine.
If in case react-native environment is not setup please follow to given link to setup react-native environment before running this project: `https://reactnative.dev/docs/environment-setup?guide=native`



# Setup:
1. After cloning th project. Run commands given below -
   `yarn`
   or
   `npm install`
2. After the node modules are successfully installed. Run commands given below -
   `cd ios && pod install`



# Run the project:
In IOS:

Using XCode -
1. Open Folder >> Go to ios >> Open `reactAssignment.xcworkspace` in Xcode
2. Select an iPhone Simulator.
3. Click on `Play Icon` on Top in Xcode to run the project or Go to Product >> `Run`

Using Terminal -
1. Open Terminal 
2. Go to the root directory path of this project.
3. Run command `npm run ios`

In Android:

Using Android Studio -
1. Open Android Studio >> Open >> `reactAssignment` >> `android`
2. Select an Android Device.`
3. Click on `Play Icon` on Top in Android Studio to run the project or Go to Run >> `Run`

Using Terminal -
1. Open Terminal 
2. Go to the root directory path of this project.
3. Run command `npm run android`



# Opening the metro bundler:
To open the metro bundler run the following command in the project's root directory terminal- 
`npm start` 
or
`npx react-native start`



# TroubleShooting:
1. Cannot lock execution history cache.
Run command `find ~/.gradle -type f -name "*.lock" -delete` in terminal

2. Unable to load script. Make sure you're either running Metro.
Run command `npx react-native start` in the terminal and `Reload` the application.

3. Could not connect to development server.
Run command `adb reverse tcp:8081 tcp:8081` in another terminal and `Reload` the application.

4. Use of bitwise '|' with boolean operands
Change `|` to `||` in `react-native/ReactCommon/yoga/yoga/Yoga.cpp` file.
