# 🛒 App Lista de Compras
![React Native](https://img.shields.io/badge/React_Native-2025-blue?logo=react)
![Plataforma](https://img.shields.io/badge/Android-Suportado-brightgreen?logo=android)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue)

> Aplicativo desenvolvido em **React Native CLI** com o objetivo de demonstrar habilidades em desenvolvimento mobile, incluindo integração com recursos nativos como **voz**, **câmera**, **armazenamento local**, **tema escuro/claro**, **navegação personalizada** e **geração de APK**.

## 📱 Demonstrações (GIFs ou imagens)
> ⚠️ *(Adicione aqui futuramente prints ou GIFs mostrando as principais telas do app em funcionamento, como login, lista, botão de voz, etc.)*

## ✅ Funcionalidades do Projeto
| Funcionalidade              | Recurso Utilizado                                                     | Status             |
|----------------------------|------------------------------------------------------------------------|--------------------|
| Login/Cadastro             | `Firebase Auth` ou `AsyncStorage` com validação de e-mail             | ⏳ Em desenvolvimento |
| Lista de Compras (CRUD)    | `FlatList`, `TextInput`, `AsyncStorage`                               | ✅ Implementado     |
| Inserção por Voz           | `react-native-voice`                                                  | ⏳ Em desenvolvimento |
| Uso da Câmera              | `react-native-camera` ou `image-picker`                               | ⏳ Em desenvolvimento |
| Tema Claro/Escuro          | `react-native-paper` ou `styled-components`                           | ✅ Implementado     |
| Navegação + Menu Hamburguer| `react-navigation` com `Drawer Navigator`                             | ✅ Implementado     |
| Geração de APK             | `./gradlew assembleRelease` via Android CLI                           | ✅ Testado          |

## 🚀 Como rodar o projeto
1. Clone o repositório:
```bash
git clone https://github.com/GabrielG-tech/App-Lista-de-Compras.git
cd App-Lista-de-Compras
```
2. Instale as dependências:
```bash
npm install
# ou
yarn install
```
3. Execute no Android (emulador ou dispositivo físico com USB debugging):
```bash
npx react-native run-android
```

## 📦 Como gerar o APK (versão de produção)
```bash
cd android
./gradlew assembleRelease
```
📁 O APK será gerado em:
```
android/app/build/outputs/apk/release/app-release.apk
```

## 📂 Estrutura planejada do projeto
```css
ListaDeComprasApp/
├── android/
├── ios/
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   ├── context/
│   └── assets/
├── App.tsx
└── README.md
```

## 📚 Recursos utilizados
- [React Native CLI](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [React Native Voice](https://github.com/react-native-voice/voice)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)

## ✨ Autor
**Gabriel Gomes**  
👨‍💻  [GitHub](https://github.com/GabrielG-tech)

## 📄 Licença
Este projeto está sob a licença MIT — sinta-se à vontade para usar, modificar e contribuir!

-----
-----
-----
-----

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
