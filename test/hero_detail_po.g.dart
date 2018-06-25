// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hero_detail_po.dart';

// **************************************************************************
// PageObjectGenerator
// **************************************************************************

// ignore_for_file: private_collision_in_mixin_application
class $HeroDetailPO extends HeroDetailPO with $$HeroDetailPO {
  PageLoaderElement $__root__;
  $HeroDetailPO.create(PageLoaderElement currentContext)
      : $__root__ = currentContext {
    $__root__.addCheckers([]);
  }
  Map get heroFromDetails {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroDetailPO', 'heroFromDetails');
    }
    final returnMe = super.heroFromDetails;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroDetailPO', 'heroFromDetails');
    }
    return returnMe;
  }

  Future<void> clear() {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroDetailPO', 'clear');
    }
    final returnMe = super.clear();
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroDetailPO', 'clear');
    }
    return returnMe;
  }

  Future<void> type(String s) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroDetailPO', 'type');
    }
    final returnMe = super.type(s);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroDetailPO', 'type');
    }
    return returnMe;
  }

  Map<String, dynamic> _heroData(String idAsString, String name) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroDetailPO', '_heroData');
    }
    final returnMe = super._heroData(idAsString, name);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroDetailPO', '_heroData');
    }
    return returnMe;
  }
}

class $$HeroDetailPO {
  PageLoaderElement $__root__;
  PageLoaderMouse __mouse__;
  PageLoaderElement get $root => $__root__;
  PageLoaderElement get _title {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroDetailPO', '_title');
    }
    final element =
        $__root__.createElement(const First(ByCss('div h2')), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroDetailPO', '_title');
    }
    return returnMe;
  }

  PageLoaderElement get _id {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroDetailPO', '_id');
    }
    final element =
        $__root__.createElement(const First(ByCss('div div')), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroDetailPO', '_id');
    }
    return returnMe;
  }

  PageLoaderElement get _input {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroDetailPO', '_input');
    }
    final element = $__root__.createElement(const ByTagName('input'), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroDetailPO', '_input');
    }
    return returnMe;
  }
}
