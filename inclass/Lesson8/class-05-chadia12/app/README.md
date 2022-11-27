# Configure app.json
```
"ios": {
      "supportsTablet": true,
      "infoPlist": {
        "UIBackgroundModes": [
          "location"
        ],
        "NSLocationAlwaysAndWhenInUseUsageDescription":"App requires location even when the App is backgrounded."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "permissions":["ACCESS_COARSE_LOCATION","ACCESS_FINE_LOCATION","ACCESS_BACKGROUND_LOCATION"]
    },

```