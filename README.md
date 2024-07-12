# Introdução

Projeto realizado para o processo seletivo da Guató Digital, baseado no design do [Figma](https://www.figma.com/design/4jHpyRDlemNcouoygYfxaN/Teste-PL-1?t=yI7hB43lo1vdhcBW-0) fornecido. O teste consiste na criação de 5 telas com a tecnologia React Native e Expo.

# Como rodar o projeto

Para rodar o projeto em sua máquina, utilize os seguintes comandos:

```bash
npx expo install
// ou
yarn install
```

e 

```bash
npx expo start
// ou
yarn start
```

# Bibliotecas utilizadas

Como instruído, foram utilizadas as bibliotecas:

- [styled-components](https://styled-components.com/): para estilização
- [react-navigation](https://reactnavigation.org/): para navegação

Além destas, foram utilizadas as seguintes, para facilitar no desenvolvimento e melhoria de experiência de usuário:

- [axios](https://axios-http.com/): para configuração e realização de requisições REST
- [@expo-google-fonts/inter](https://github.com/expo/google-fonts/tree/master/font-packages/inter#readme): para configuração global de fonte tipo Inter
- [@expo/vector-icons](https://icons.expo.fyi/Index): para utilização simplificada de ícones vetorizados
- [moti](https://moti.fyi/): para criação de animações, no caso para adição de skeleton de carregamento
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/): como dependência do moti
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/): como dependência do moti e react-navigation
- [react-native-safe-area-context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/): para criar área segura de uso para iPhones
- [@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/overview): para facilitar realização e cacheamento de requisições
