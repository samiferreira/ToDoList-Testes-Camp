import {defaults} from 'jest-config'
/** @type (import("jest").Config) */
const config = {

moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs', 'cjs', 'Jsx'],
setupFilesAfterEnv: ['rootDir/.setup.mjs/setup-tests.js'],
testEnvironment: "jsdom"};


export default config