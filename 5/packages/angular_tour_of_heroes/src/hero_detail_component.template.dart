// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_detail_component.dart';
export 'hero_detail_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_detail_component.dart' as import1;
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
import 'package:angular_forms/src/directives/ng_model.dart' as import12;
import 'package:angular/src/core/di/opaque_token.dart' as import13;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import14;
import 'package:angular_forms/src/directives/ng_control.dart' as import15;

const List<dynamic> styles$HeroDetailComponent = const [];

class ViewHeroDetailComponent0 extends AppView<import1.HeroDetailComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_7;
  static RenderComponentType _renderType;
  ViewHeroDetailComponent0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('hero-detail');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroDetailComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroDetailComponent> build() {
    final import7.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_HeroDetailComponent1);
    _NgIf_0_7 = new NgIf(_appEl_0, _TemplateRef_0_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroDetailComponent _ctx = ctx;
    _NgIf_0_7.ngIf = (_ctx.hero != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import1.HeroDetailComponent> viewFactory_HeroDetailComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroDetailComponent0(parentView, parentIndex);
}

class _ViewHeroDetailComponent1 extends AppView<import1.HeroDetailComponent> {
  import7.DivElement _el_0;
  import7.Element _el_1;
  import7.Text _text_2;
  import7.DivElement _el_4;
  import7.Element _el_5;
  import7.Text _text_7;
  import7.DivElement _el_8;
  import7.Element _el_9;
  import7.InputElement _el_11;
  import11.DefaultValueAccessor _DefaultValueAccessor_11_4;
  List<dynamic> _NgValueAccessor_11_5;
  import12.NgModel _NgModel_11_6;
  var _expr_0;
  var _expr_1;
  _ViewHeroDetailComponent1(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroDetailComponent0._renderType;
  }
  @override
  ComponentRef<import1.HeroDetailComponent> build() {
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
    _DefaultValueAccessor_11_4 = new import11.DefaultValueAccessor(_el_11);
    _NgValueAccessor_11_5 = [_DefaultValueAccessor_11_4];
    _NgModel_11_6 = new import12.NgModel(null, _NgValueAccessor_11_5);
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_1));
    _el_11.addEventListener('blur', eventHandler0(_DefaultValueAccessor_11_4.touchHandler));
    final subscription_0 = _NgModel_11_6.update.listen(eventHandler1(_handle_ngModelChange_11_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import11.DefaultValueAccessor) && (11 == nodeIndex))) {
      return _DefaultValueAccessor_11_4;
    }
    if ((identical(token, const import13.OpaqueToken<import14.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_5;
    }
    if (((identical(token, import12.NgModel) || identical(token, import15.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroDetailComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_11_6.model = _ctx.hero.name;
    _NgModel_11_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_11_6.ngOnInit();
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
    _DefaultValueAccessor_11_4.onChange($event.target.value);
  }
}

AppView<import1.HeroDetailComponent> viewFactory_HeroDetailComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroDetailComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HeroDetailComponentHost = const [];

class _ViewHeroDetailComponentHost0 extends AppView<dynamic> {
  ViewHeroDetailComponent0 _compView_0;
  import1.HeroDetailComponent _HeroDetailComponent_0_4;
  _ViewHeroDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroDetailComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroDetailComponent_0_4 = new import1.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroDetailComponent>(0, this, rootEl, _HeroDetailComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.HeroDetailComponent) && (0 == nodeIndex))) {
      return _HeroDetailComponent_0_4;
    }
    return notFoundResult;
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

AppView viewFactory_HeroDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroDetailComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroDetailComponent> HeroDetailComponentNgFactory = const ComponentFactory<import1.HeroDetailComponent>('hero-detail', viewFactory_HeroDetailComponentHost0, _HeroDetailComponentMetadata);
const _HeroDetailComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroDetailComponent, HeroDetailComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
