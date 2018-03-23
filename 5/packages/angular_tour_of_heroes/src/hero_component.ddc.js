define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_component = Object.create(_root);
  src__hero_component.HeroComponent = class HeroComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
  };
  (src__hero_component.HeroComponent.new = function() {
    this[hero$] = null;
  }).prototype = src__hero_component.HeroComponent.prototype;
  dart.addTypeTests(src__hero_component.HeroComponent);
  const hero$ = Symbol("HeroComponent.hero");
  dart.setFieldSignature(src__hero_component.HeroComponent, () => ({
    __proto__: dart.getFields(src__hero_component.HeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_component.ddc", {
    "package:angular_tour_of_heroes/src/hero_component.dart": src__hero_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_component.dart"],"names":[],"mappings":";;;;;;;;;IAoBO;;;;;;;;eAAI;EACX","file":"hero_component.ddc.js"}');
  // Exports:
  return {
    src__hero_component: src__hero_component
  };
});

//# sourceMappingURL=hero_component.ddc.js.map
