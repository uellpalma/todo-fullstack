import "./global.css";

import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import Routes from "./src/routes";
import { QueryProvider } from "./src/services";
import { Host } from "react-native-portalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GluestackUIProvider>
      <QueryProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Host>
            <StatusBar style="auto" />
            <Routes />
          </Host>
        </GestureHandlerRootView>
      </QueryProvider>
    </GluestackUIProvider>
  );
}
