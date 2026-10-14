import test from "node:test";
import assert from "node:assert/strict";
import { damp, dampPose, horseLane, smoothstep } from "../src/lib/horse-motion.ts";

test("departure keeps moving between sparse wheel events", () => {
  let scroll = 0;
  const frames = [];
  for (let i = 0; i < 30; i++) {
    scroll = damp(scroll, 600, 1000 / 60, 65);
    frames.push(smoothstep(Math.min(1, scroll / 600)));
  }
  assert.ok(frames.every((value, i) => i === 0 || value > frames[i - 1]));
  assert.ok(frames[0] < .2, "a wheel event must not jump directly to its final pose");
  assert.ok(frames.at(-1) > .999);
});

test("60 Hz and 120 Hz converge to the same position over the same elapsed time", () => {
  const simulate = hz => {
    let position = 0;
    for (let i = 0; i < hz; i++) position = damp(position, 900, 1000 / hz, 90);
    return position;
  };
  assert.ok(Math.abs(simulate(60) - simulate(120)) < 1e-8);
});

test("a quick reverse stays within the path without overshooting", () => {
  let position = 0;
  for (let i = 0; i < 8; i++) position = damp(position, 700, 16, 65);
  for (let i = 0; i < 40; i++) {
    const previous = position;
    position = damp(position, 0, 16, 65);
    assert.ok(position >= 0 && position < previous);
  }
});

test("jumping directly to a distant section still interpolates the entire pose", () => {
  const initial = { x: 760, y: 180, size: 435, rotation: -5 };
  const target = { x: 1138, y: 400, size: 124, rotation: 0 };
  const firstFrame = dampPose(initial, target, 1000 / 60, 75);
  assert.ok(firstFrame.x > initial.x && firstFrame.x < target.x);
  assert.ok(firstFrame.size < initial.size && firstFrame.size > target.size);
  assert.ok(firstFrame.rotation > initial.rotation && firstFrame.rotation < target.rotation);
  let pose = firstFrame;
  for (let i = 0; i < 60; i++) pose = dampPose(pose, target, 1000 / 60, 75);
  assert.ok(Math.abs(pose.size - target.size) < .01);
});

test("the home journey stays on each side for groups of sections", () => {
  assert.deepEqual(["services", "apu-case", "projects"].map(horseLane), ["right", "right", "right"]);
  assert.deepEqual(["process", "testimonials", "instagram"].map(horseLane), ["left", "left", "left"]);
  assert.deepEqual(["contact", "footer"].map(horseLane), ["right", "right"]);
});
