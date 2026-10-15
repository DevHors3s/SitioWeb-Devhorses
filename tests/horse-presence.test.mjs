import test from "node:test";
import assert from "node:assert/strict";
import { HorsePresence } from "../src/lib/horse-presence.ts";

test("dismissal survives downward scrolling and small scroll jitter", () => {
  const presence = new HorsePresence();
  presence.dismiss(400);
  for (const y of [430, 600, 590, 610, 600]) assert.equal(presence.scroll(y), false);
});

test("a deliberate upward scroll restores once, even far below the dismissal point", () => {
  const presence = new HorsePresence();
  presence.dismiss(400);
  presence.scroll(1200);
  assert.equal(presence.scroll(1160), false);
  assert.equal(presence.scroll(1150), true);
  assert.equal(presence.scroll(1100), false);
});

test("dismissal can be repeated after restoration", () => {
  const presence = new HorsePresence();
  presence.dismiss(400);
  assert.equal(presence.scroll(340), true);
  presence.dismiss(340);
  assert.equal(presence.scroll(300), false);
  assert.equal(presence.scroll(280), true);
});

test("returning to the top restores even when less than 48 pixels were scrolled", () => {
  const presence = new HorsePresence();
  presence.dismiss(25);
  assert.equal(presence.scroll(0), true);
});

test("home navigation clears dismissal even if routing emitted no scroll event", () => {
  const presence = new HorsePresence();
  presence.dismiss(1500);
  presence.restore();
  // The next downward journey must not inherit the old dismissal position.
  assert.equal(presence.scroll(20), false);
  assert.equal(presence.scroll(300), false);
  presence.dismiss(300);
  assert.equal(presence.scroll(350), false);
  assert.equal(presence.scroll(290), true);
});

test("return greetings ignore brief focus changes and unpaired focus events", () => {
  const presence = new HorsePresence();
  assert.equal(presence.return(2000), false);
  presence.leave(3000);
  assert.equal(presence.return(3200), false);
  assert.equal(presence.return(6000), false);
});

test("blur and hidden signals produce a single greeting for a real absence", () => {
  const presence = new HorsePresence();
  presence.leave(1000);
  presence.leave(2000);
  assert.equal(presence.return(2600), true);
  assert.equal(presence.return(2700), false);
  presence.leave(3000);
  assert.equal(presence.return(6000), true);
});
