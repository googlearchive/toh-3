// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_component.dart';
export 'hero_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import11;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/ng_model.dart' as import13;
import 'package:angular/src/core/di/opaque_token.dart' as import14;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import15;
import 'package:angular_forms/src/directives/ng_control.dart' as import16;

const List<dynamic> styles$HeroComponent = const [];

class ViewHeroComponent0 extends AppView<import1.HeroComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static RenderComponentType _renderType;
  ViewHeroComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('my-hero');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_HeroComponent1);
    _NgIf_0_9 = new NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroComponent _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.hero != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import1.HeroComponent> viewFactory_HeroComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroComponent0(parentView, parentIndex);
}

class _ViewHeroComponent1 extends AppView<import1.HeroComponent> {
  import7.DivElement _el_0;
  import7.Element _el_1;
  import7.Text _text_2;
  import7.DivElement _el_4;
  import7.Element _el_5;
  import7.Text _text_7;
  import7.DivElement _el_8;
  import7.Element _el_9;
  import7.InputElement _el_11;
  import11.DefaultValueAccessor _DefaultValueAccessor_11_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_11_6;
  import13.NgModel _NgModel_11_7;
  var _expr_0;
  var _expr_1;
  _ViewHeroComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroComponent0._renderType;
  }
  @override
  ComponentRef<import1.HeroComponent> build() {
    var doc = import7.document;
    _el_0 = doc.createElement('div');
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    _text_2 = new import7.Text('');
    _el_1.append(_text_2);
    import7.Text _text_3 = new import7.Text(' details!');
    _el_1.append(_text_3);
    _el_4 = createDivAndAppend(doc, _el_0);
    _el_5 = createAndAppend(doc, 'label', _el_4);
    import7.Text _text_6 = new import7.Text('id:');
    _el_5.append(_text_6);
    _text_7 = new import7.Text('');
    _el_4.append(_text_7);
    _el_8 = createDivAndAppend(doc, _el_0);
    _el_9 = createAndAppend(doc, 'label', _el_8);
    import7.Text _text_10 = new import7.Text('name:');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'input', _el_8);
    createAttr(_el_11, 'placeholder', 'name');
    _DefaultValueAccessor_11_5 = new import11.DefaultValueAccessor(_el_11);
    _NgValueAccessor_11_6 = [_DefaultValueAccessor_11_5];
    _NgModel_11_7 = new import13.NgModel(null, _NgValueAccessor_11_6);
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_1));
    _el_11.addEventListener('blur', eventHandler0(_DefaultValueAccessor_11_5.touchHandler));
    final subscription_0 = _NgModel_11_7.update.listen(eventHandler1(_handle_ngModelChange_11_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import11.DefaultValueAccessor) && (11 == nodeIndex))) {
      return _DefaultValueAccessor_11_5;
    }
    if ((identical(token, const import14.MultiToken<import15.ControlValueAccessor>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import16.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_11_7.model = _ctx.hero.name;
    _NgModel_11_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_11_7.ngOnInit();
    }
    final currVal_0 = import8.interpolate0(_ctx.hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import8.interpolate0(_ctx.hero.id);
    if (!identical(_expr_1, currVal_1)) {
      _text_7.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_ngModelChange_11_0($event) {
    ctx.hero.name = $event;
  }

  void _handle_input_11_1($event) {
    _DefaultValueAccessor_11_5.onChange($event.target.value);
  }
}

AppView<import1.HeroComponent> viewFactory_HeroComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HeroComponentHost = const [];

class _ViewHeroComponentHost0 extends AppView<dynamic> {
  ViewHeroComponent0 _compView_0;
  import1.HeroComponent _HeroComponent_0_5;
  _ViewHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroComponent_0_5 = new import1.HeroComponent();
    _compView_0.create(_HeroComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroComponent>(0, this, rootEl, _HeroComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroComponent> HeroComponentNgFactory = const ComponentFactory<import1.HeroComponent>('my-hero', viewFactory_HeroComponentHost0, _HeroComponentMetadata);
const _HeroComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroComponent, HeroComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
