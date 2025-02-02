import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      {/* Always show login & signup screens */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: 'Sign Up',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.badge.plus.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
// import { Tabs } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { supabase } from '../../lib/supabase'; 

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [authChecked, setAuthChecked] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data } = await supabase.auth.getUser();
//       console.log("Initial Auth Check:", !!data?.user);
//       setIsAuthenticated(!!data?.user);
//       setAuthChecked(true);
//     };

//     checkAuth();

//     // Listen for auth state changes
//     const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
//       console.log("Auth State Changed:", !!session?.user);
//       setIsAuthenticated(!!session?.user);
//       setAuthChecked(true);
//     });

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   console.log("Auth Checked:", authChecked, "Is Authenticated:", isAuthenticated);

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       {/* Always show login & signup screens */}
//       <Tabs.Screen
//         name="login"
//         options={{
//           title: 'Login',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="signup"
//         options={{
//           title: 'Sign Up',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.badge.plus.fill" color={color} />,
//         }}
//       />

//       {/* Show home & explore tabs ONLY if logged in */}
//       {isAuthenticated && (
//         <>
//           <Tabs.Screen
//             name="home"
//             options={{
//               title: 'Home',
//               tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//             }}
//           />
//           <Tabs.Screen
//             name="explore"
//             options={{
//               title: 'Explore',
//               tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//             }}
//           />
//         </>
//       )}
//     </Tabs>
//   );
// }

// import { Tabs } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { supabase } from '../../lib/supabase'; 

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [authChecked, setAuthChecked] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data } = await supabase.auth.getUser();
//       setIsAuthenticated(!!data?.user);
//       setAuthChecked(true);
//     };

//     checkAuth();

//     const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
//       setIsAuthenticated(!!session?.user);
//       setAuthChecked(true);
//     });

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   if (!authChecked) {
//     return null; // Prevent rendering until auth check is complete
//   }

//   // Conditionally render different tab layouts
//   return isAuthenticated ? (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: { position: 'absolute' },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   ) : (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: { position: 'absolute' },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="login"
//         options={{
//           title: 'Login',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="signup"
//         options={{
//           title: 'Sign Up',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.badge.plus.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
