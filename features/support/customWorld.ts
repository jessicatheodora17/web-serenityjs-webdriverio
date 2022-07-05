import { World } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { doLogIn, openPage, selectRole } from '@tasks';

/*
 * The only method to be inherited from the default world is
 * the constructor, so if you want to handle the options in
 * an entirely customized manner you don't have to extend from
 * World as seen here.
 */
export default class extends World {
  driver = null;

  /*
   * A constructor is only needed if you have custom actions
   * to take after the Cucumber parses the options or you
   * want to override how the options are parsed.
   * 
   * The options are an object with three members
   * {
   *   log: Cucumber log function,
   *   attach: Cucumber attachment function,
   *   params: World Parameters object
   * }
   */
  constructor(options) {
    /*
     * If you don't call the super method you will need
     * to bind the options here as you see fit.
     */
    super(options);
    // Custom actions go here.
  }

  /*
   * Constructors cannot be asynchronous! To work around this we'll
   * use an init method with the Before hook
   */
  async loginAsAdministrator(actor:Actor) {
    actor.attemptsTo(
        await openPage(),
        await doLogIn('123456', 'administrator123!'),
        await selectRole()
    )
  }

  async loginAsAdmin(actor:Actor) {
    actor.attemptsTo(
        await openPage(),
        await doLogIn('11181212', 'password'),
        await selectRole()
    )
  }
}