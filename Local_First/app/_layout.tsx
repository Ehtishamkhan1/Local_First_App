// RootLayout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { tokenCache } from '@/cache';
import { View } from 'react-native';

import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from '@/hooks/notification'; 

const PublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification Received:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification Response:', response);
    });

    return () => {
      if (notificationListener.current)
        Notifications.removeNotificationSubscription(notificationListener.current);
      if (responseListener.current)
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={PublishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }}>
            <Slot />
            <StatusBar style="auto" />
          </View>
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
