import {by, Target} from '@serenity-js/webdriverio';

export const inputform={
  username: () => Target.the('Username TextInput').located(by.id('user-name')),
  password: () => Target.the('Password TextInput').located(by.id('password'))
}

export const labelLogin = {
  headerLogin: () => Target.the('Login Page').located(by.xpath('//body/div[@id="root"]/div[1]/div[1]')),
  assertHome: () => Target.the('Home Success Assert').located(by.xpath('//*[@id="header_container"]/div[2]/span')),
  assertFailedHome: () => Target.the('failed assertion').located(by.xpath('//body/div[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]'))
}
export const buttonLogin = {
  loginButton: () => Target.the('Login Button').located(by.id('login-button')),
}