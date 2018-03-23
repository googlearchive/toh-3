define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_tour_of_heroes/src/hero_component', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/angular/src/di/reflector', 'packages/angular_tour_of_heroes/src/hero.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_if, hero_component, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, reflector, hero, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__hero_component = hero_component.src__hero_component;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__hero_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroComponent = () => (AppViewOfHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_component.HeroComponent)))();
  let AppViewAndintToAppViewOfHeroComponent = () => (AppViewAndintToAppViewOfHeroComponent = dart.constFn(dart.fnType(AppViewOfHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ComponentRefOfHeroComponent = () => (ComponentRefOfHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroComponent = () => (ComponentFactoryOfHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_component.HeroComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.styles$HeroComponent*/get styles$HeroComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  let const$;
  src__hero_component$46template.ViewHeroComponent0 = class ViewHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_component.HeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__hero_component$46template.viewFactory_HeroComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.hero != null;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__hero_component$46template.ViewHeroComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    src__hero_component$46template.ViewHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-hero'));
    let t = src__hero_component$46template.ViewHeroComponent0._renderType;
    t == null ? src__hero_component$46template.ViewHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_component$46template.styles$HeroComponent) : t;
    this.setupComponentType(src__hero_component$46template.ViewHeroComponent0._renderType);
  }).prototype = src__hero_component$46template.ViewHeroComponent0.prototype;
  dart.addTypeTests(src__hero_component$46template.ViewHeroComponent0);
  dart.setMethodSignature(src__hero_component$46template.ViewHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template.ViewHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template.ViewHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_component$46template.ViewHeroComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__hero_component$46template.ViewHeroComponent0, {
    /*src__hero_component$46template.ViewHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_component$46template.viewFactory_HeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_component$46template.ViewHeroComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_component$46template.viewFactory_HeroComponent0, AppViewAndintToAppViewOfHeroComponent());
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _text_7 = Symbol('_text_7');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _el_11 = Symbol('_el_11');
  const _DefaultValueAccessor_11_5 = Symbol('_DefaultValueAccessor_11_5');
  const _NgValueAccessor_11_6 = Symbol('_NgValueAccessor_11_6');
  const _NgModel_11_7 = Symbol('_NgModel_11_7');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _handle_input_11_1 = Symbol('_handle_input_11_1');
  const _handle_ngModelChange_11_0 = Symbol('_handle_ngModelChange_11_0');
  let const$0;
  src__hero_component$46template._ViewHeroComponent1 = class _ViewHeroComponent1 extends src__core__linker__app_view.AppView$(src__hero_component.HeroComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' details!');
      this[_el_1][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_4]);
      let _text_6 = html.Text.new('id:');
      this[_el_5][$append](_text_6);
      this[_text_7] = html.Text.new('');
      this[_el_4][$append](this[_text_7]);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_8]);
      let _text_10 = html.Text.new('name:');
      this[_el_9][$append](_text_10);
      this[_el_11] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_8]));
      this.createAttr(this[_el_11], 'placeholder', 'name');
      this[_DefaultValueAccessor_11_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_11]);
      this[_NgValueAccessor_11_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_11_5]]);
      this[_NgModel_11_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_11_6]);
      this[_el_11][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_11_1)));
      this[_el_11][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_11_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_11_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_11_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 11 === nodeIndex) {
        return this[_DefaultValueAccessor_11_5];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 11 === nodeIndex) {
        return this[_NgValueAccessor_11_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 11 === nodeIndex) {
        return this[_NgModel_11_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_11_7].model = _ctx.hero.name;
      this[_NgModel_11_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_11_7].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_7][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_ngModelChange_11_0]($event) {
      this.ctx.hero.name = core.String._check($event);
    }
    [_handle_input_11_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_11_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (src__hero_component$46template._ViewHeroComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_text_7] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_el_11] = null;
    this[_DefaultValueAccessor_11_5] = null;
    this[_NgValueAccessor_11_6] = null;
    this[_NgModel_11_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__hero_component$46template._ViewHeroComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_component$46template.ViewHeroComponent0._renderType;
  }).prototype = src__hero_component$46template._ViewHeroComponent1.prototype;
  dart.addTypeTests(src__hero_component$46template._ViewHeroComponent1);
  dart.setMethodSignature(src__hero_component$46template._ViewHeroComponent1, () => ({
    __proto__: dart.getMethods(src__hero_component$46template._ViewHeroComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_11_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_11_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_component$46template._ViewHeroComponent1, () => ({
    __proto__: dart.getFields(src__hero_component$46template._ViewHeroComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.Element),
    [_text_7]: dart.fieldType(html.Text),
    [_el_8]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_11_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_11_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_11_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__hero_component$46template.viewFactory_HeroComponent1 = function(parentView, parentIndex) {
    return new src__hero_component$46template._ViewHeroComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__hero_component$46template.viewFactory_HeroComponent1, AppViewAndintToAppViewOfHeroComponent());
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.styles$HeroComponentHost*/get styles$HeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroComponent_0_5 = Symbol('_HeroComponent_0_5');
  src__hero_component$46template._ViewHeroComponentHost0 = class _ViewHeroComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_component$46template.ViewHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroComponent_0_5] = new src__hero_component.HeroComponent.new();
      this[_compView_0].create(this[_HeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroComponent()).new(0, this, this.rootEl, this[_HeroComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_component$46template._ViewHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroComponent_0_5] = null;
    src__hero_component$46template._ViewHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_component$46template._ViewHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_component$46template._ViewHeroComponentHost0);
  dart.setMethodSignature(src__hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template._ViewHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_component$46template._ViewHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_component$46template.ViewHeroComponent0),
    [_HeroComponent_0_5]: dart.fieldType(src__hero_component.HeroComponent)
  }));
  src__hero_component$46template.viewFactory_HeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_component$46template._ViewHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_component$46template.viewFactory_HeroComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.HeroComponentNgFactory*/get HeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroComponent()).new('my-hero', src__hero_component$46template.viewFactory_HeroComponentHost0, src__hero_component$46template._HeroComponentMetadata));
    },
    /*src__hero_component$46template._HeroComponentMetadata*/get _HeroComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_component$46template.initReflector = function() {
    if (dart.test(src__hero_component$46template._visited)) {
      return;
    }
    src__hero_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_component.HeroComponent), src__hero_component$46template.HeroComponentNgFactory);
    src__hero$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__hero_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_component.template.ddc", {
    "package:angular_tour_of_heroes/src/hero_component.template.dart": src__hero_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_component.template.dart"],"names":[],"mappings":"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","file":"hero_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_component$46template: src__hero_component$46template
  };
});

//# sourceMappingURL=hero_component.template.ddc.js.map
