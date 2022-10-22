module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
        "fontsource/(barlow|material-icons)": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/assetMock.cjs",
    },
    snapshotResolver: "<rootDir>/config/snapshotResolver.cjs"
};