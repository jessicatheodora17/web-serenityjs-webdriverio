import { setWorldConstructor } from '@cucumber/cucumber';
import CustomWorld from "./customWorld"

setWorldConstructor(CustomWorld);