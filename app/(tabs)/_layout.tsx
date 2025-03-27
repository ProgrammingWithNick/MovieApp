import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

function TabIcon({ focused, icon, title }: any) {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image source={icon} style={{ tintColor: "#151312" }} className="size-5" />
                <Text className="ml-2 text-base font-semibold text-secondary">
                    {title}
                </Text>
            </ImageBackground>
        );
    }

    return (
        <View className="items-center justify-center mt-4 rounded-full size-full">
            <Image source={icon} style={{ tintColor: "#A8B5DB" }} className="size-5" />
        </View>
    );
}

export default function TabsLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}> 
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    tabBarStyle: {
                        backgroundColor: "#0F0D23",
                        borderRadius: 50,
                        marginHorizontal: 20,
                        marginBottom: 30,
                        height: 52,
                        position: "absolute",
                        overflow: "hidden",
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "index",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={icons.home} title="Home" />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="search"
                    options={{
                        title: "Search",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={icons.search} title="Search" />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="saved"
                    options={{
                        title: "Save",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={icons.save} title="Save" />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={icons.person} title="Profile" />
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}
