# БЕРЕГ — Android

Android project is generated in CI from the web app using Capacitor 8.
The app bundle is copied locally into `www/`; production does not load the website from a remote WebView URL.

## Test build
Run GitHub Actions → БЕРЕГ Android build → Run workflow.
Download the `bereg-android-debug` artifact to test on Android.

## Release signing
A debug APK is only for testing and must not be submitted to RuStore.
Before release, create and safely store a permanent Android upload keystore.
Never commit the keystore or its passwords to this repository.
The application ID is `ru.terekhov.bereg`; do not change it after the first store upload.
