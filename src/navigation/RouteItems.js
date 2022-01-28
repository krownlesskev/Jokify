
export const screens = {
    Tab1: 'Tab1',
    Tab1Stack: 'Tab1Stack',
    Tab2: 'Tab2',
    Tab2Stack: 'Tab2Stack',
    HomeTab: 'HomeTab',
    Home: 'Home',
    HomeStack: 'HomeStack',
    JokeStack: 'JokeStack',
}

export const routes = [
    {
        name: screens.Tab1Stack,
        focusedRoute: screens.Tab1Stack,
        title: 'Tab1',
        showInTab: true,
        showInDrawer: false,
    },
    {
        name: screens.Tab2Stack,
        focusedRoute: screens.Tab2Stack,
        title: 'Tab2',
        showInTab: true,
        showInDrawer: false,
    },
    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.Home,
        focusedRoute: screens.Home,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.JokeStack,
        focusedRoute: screens.JokeStack,
        title: 'JokeScreen',
        showInTab: false,
        showInDrawer: false,
    },
]
