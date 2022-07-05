import { Task } from "@serenity-js/core";
import { Ensure, includes } from "@serenity-js/assertions";
import { by, Click, Enter, isVisible, Navigate, Target, Text, Wait, } from "@serenity-js/webdriverio";
import { buttonLogin, labelLogin, inputform } from "../interactions/index";

export const openPage =  async () => Task.where(
  "#actor open saucedemo page",
    await Navigate.to('https://www.saucedemo.com/'),
    await Wait.until(labelLogin.headerLogin(), isVisible()),
    await Ensure.that(labelLogin.headerLogin(), isVisible())
);

export const doLogIn = async (username: string, password: string) => Task.where(
  "#actor attempts to log in",
    await Enter.theValue(username).into(inputform.username()),
    await Enter.theValue(password).into(inputform.password()),
    await Click.on(buttonLogin.loginButton())
);

export const successAssertHome = async () => Task.where(
  '#actor assert home success',
  await Wait.until(Text.of(labelLogin.assertHome()), includes("PRODUCTS")),
  await Ensure.that(Text.of(labelLogin.assertHome()), includes("PRODUCTS")),
)

export const failedAssertHome =async () => Task.where(
  '#actor failed login',
  await Wait.until(Text.of(labelLogin.assertFailedHome()), includes("Epic sadface: Username and password do not match any user in this service")),
  await Ensure.that(Text.of(labelLogin.assertFailedHome()), includes("Epic sadface: Username and password do not match any user in this service"))
)
export const failedLockedOut =async () => Task.where(
  '#actor failed login',
  await Wait.until(Text.of(labelLogin.assertFailedHome()), includes("Epic sadface: Sorry, this user has been locked out.")),
  await Ensure.that(Text.of(labelLogin.assertFailedHome()), includes("Epic sadface: Sorry, this user has been locked out."))
)