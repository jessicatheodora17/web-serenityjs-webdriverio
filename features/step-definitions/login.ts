import 'expect-webdriverio';
import { Given, When, Then, Before } from "@cucumber/cucumber";
import { Actor } from '@serenity-js/core';
import { doLogIn, openPage, failedAssertHome, successAssertHome, failedLockedOut } from '@tasks';

Given('{actor} on the login page', {timeout: 2 * 5000}, async (actor: Actor) =>
  actor.attemptsTo(
    await openPage()
  )
);

When('{actor} login with {string} and {string}', {timeout: 2 * 5000}, async (actor: Actor, username: string, password: string) => 
  actor.attemptsTo(
    await doLogIn(username, password),
  )
);

Then('{actor} successfully see home screen', {timeout: 2 * 5000}, async (actor: Actor) => 
  actor.attemptsTo(
    await successAssertHome()
  )
);

Then('{actor} failed to see home screen', {timeout: 2 * 5000}, async (actor: Actor) => 
  actor.attemptsTo(
    await failedAssertHome()
  )
);

Then('{actor} failed to see home screen locked out', {timeout: 2 * 5000}, async (actor: Actor) => 
  actor.attemptsTo(
    await failedLockedOut()
  )
);