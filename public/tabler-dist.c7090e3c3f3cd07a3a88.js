/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/tabler-dist.scss":
/*!*********************************!*\
  !*** ./assets/tabler-dist.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@tabler/core/dist/js/tabler.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tabler/core/dist/js/tabler.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
 * Tabler v1.4.0 (https://tabler.io)
 * Copyright 2018-2025 The Tabler Authors
 * Copyright 2018-2025 codecalm.net Paweł Kuna
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */
(function (global, factory) {
	 true ? factory(exports) :
	0;
})(this, (function (exports) { 'use strict';

	// Autosize plugin
	const elements$1 = document.querySelectorAll('[data-bs-toggle="autosize"]');
	if (elements$1.length) {
	  elements$1.forEach(function (element) {
	    window.autosize && window.autosize(element);
	  });
	}

	const elements = document.querySelectorAll('[data-countup]');
	if (elements.length) {
	  elements.forEach(function (element) {
	    let options = {};
	    try {
	      const dataOptions = element.getAttribute('data-countup') ? JSON.parse(element.getAttribute('data-countup')) : {};
	      options = Object.assign({
	        'enableScrollSpy': true
	      }, dataOptions);
	    } catch (error) {}
	    const value = parseInt(element.innerHTML, 10);
	    if (window.countUp && window.countUp.CountUp) {
	      const countUp = new window.countUp.CountUp(element, value, options);
	      if (!countUp.error) {
	        countUp.start();
	      }
	    }
	  });
	}

	// Input mask plugin

	var maskElementList = [].slice.call(document.querySelectorAll('[data-mask]'));
	maskElementList.map(function (maskEl) {
	  window.IMask && new window.IMask(maskEl, {
	    mask: maskEl.dataset.mask,
	    lazy: maskEl.dataset['mask-visible'] === 'true'
	  });
	});

	var top = 'top';
	var bottom = 'bottom';
	var right = 'right';
	var left = 'left';
	var auto = 'auto';
	var basePlacements = [top, bottom, right, left];
	var start = 'start';
	var end = 'end';
	var clippingParents = 'clippingParents';
	var viewport = 'viewport';
	var popper = 'popper';
	var reference = 'reference';
	var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	  return acc.concat([placement + "-" + start, placement + "-" + end]);
	}, []);
	var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	}, []); // modifiers that need to read the DOM

	var beforeRead = 'beforeRead';
	var read = 'read';
	var afterRead = 'afterRead'; // pure-logic modifiers

	var beforeMain = 'beforeMain';
	var main = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	function getNodeName(element) {
	  return element ? (element.nodeName || '').toLowerCase() : null;
	}

	function getWindow(node) {
	  if (node == null) {
	    return window;
	  }
	  if (node.toString() !== '[object Window]') {
	    var ownerDocument = node.ownerDocument;
	    return ownerDocument ? ownerDocument.defaultView || window : window;
	  }
	  return node;
	}

	function isElement$1(node) {
	  var OwnElement = getWindow(node).Element;
	  return node instanceof OwnElement || node instanceof Element;
	}
	function isHTMLElement(node) {
	  var OwnElement = getWindow(node).HTMLElement;
	  return node instanceof OwnElement || node instanceof HTMLElement;
	}
	function isShadowRoot(node) {
	  // IE 11 has no ShadowRoot
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }
	  var OwnElement = getWindow(node).ShadowRoot;
	  return node instanceof OwnElement || node instanceof ShadowRoot;
	}

	// and applies them to the HTMLElements such as popper and arrow

	function applyStyles(_ref) {
	  var state = _ref.state;
	  Object.keys(state.elements).forEach(function (name) {
	    var style = state.styles[name] || {};
	    var attributes = state.attributes[name] || {};
	    var element = state.elements[name]; // arrow is optional + virtual elements

	    if (!isHTMLElement(element) || !getNodeName(element)) {
	      return;
	    } // Flow doesn't support to extend this property, but it's the most
	    // effective way to apply styles to an HTMLElement
	    // $FlowFixMe[cannot-write]

	    Object.assign(element.style, style);
	    Object.keys(attributes).forEach(function (name) {
	      var value = attributes[name];
	      if (value === false) {
	        element.removeAttribute(name);
	      } else {
	        element.setAttribute(name, value === true ? '' : value);
	      }
	    });
	  });
	}
	function effect$2(_ref2) {
	  var state = _ref2.state;
	  var initialStyles = {
	    popper: {
	      position: state.options.strategy,
	      left: '0',
	      top: '0',
	      margin: '0'
	    },
	    arrow: {
	      position: 'absolute'
	    },
	    reference: {}
	  };
	  Object.assign(state.elements.popper.style, initialStyles.popper);
	  state.styles = initialStyles;
	  if (state.elements.arrow) {
	    Object.assign(state.elements.arrow.style, initialStyles.arrow);
	  }
	  return function () {
	    Object.keys(state.elements).forEach(function (name) {
	      var element = state.elements[name];
	      var attributes = state.attributes[name] || {};
	      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	      var style = styleProperties.reduce(function (style, property) {
	        style[property] = '';
	        return style;
	      }, {}); // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      }
	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (attribute) {
	        element.removeAttribute(attribute);
	      });
	    });
	  };
	} // eslint-disable-next-line import/no-unused-modules

	const applyStyles$1 = {
	  name: 'applyStyles',
	  enabled: true,
	  phase: 'write',
	  fn: applyStyles,
	  effect: effect$2,
	  requires: ['computeStyles']
	};

	function getBasePlacement(placement) {
	  return placement.split('-')[0];
	}

	var max = Math.max;
	var min = Math.min;
	var round = Math.round;

	function getUAString() {
	  var uaData = navigator.userAgentData;
	  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
	    return uaData.brands.map(function (item) {
	      return item.brand + "/" + item.version;
	    }).join(' ');
	  }
	  return navigator.userAgent;
	}

	function isLayoutViewport() {
	  return !/^((?!chrome|android).)*safari/i.test(getUAString());
	}

	function getBoundingClientRect(element, includeScale, isFixedStrategy) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }
	  if (isFixedStrategy === void 0) {
	    isFixedStrategy = false;
	  }
	  var clientRect = element.getBoundingClientRect();
	  var scaleX = 1;
	  var scaleY = 1;
	  if (includeScale && isHTMLElement(element)) {
	    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
	    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
	  }
	  var _ref = isElement$1(element) ? getWindow(element) : window,
	    visualViewport = _ref.visualViewport;
	  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
	  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
	  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
	  var width = clientRect.width / scaleX;
	  var height = clientRect.height / scaleY;
	  return {
	    width: width,
	    height: height,
	    top: y,
	    right: x + width,
	    bottom: y + height,
	    left: x,
	    x: x,
	    y: y
	  };
	}

	// means it doesn't take into account transforms.

	function getLayoutRect(element) {
	  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
	  // Fixes https://github.com/popperjs/popper-core/issues/1223

	  var width = element.offsetWidth;
	  var height = element.offsetHeight;
	  if (Math.abs(clientRect.width - width) <= 1) {
	    width = clientRect.width;
	  }
	  if (Math.abs(clientRect.height - height) <= 1) {
	    height = clientRect.height;
	  }
	  return {
	    x: element.offsetLeft,
	    y: element.offsetTop,
	    width: width,
	    height: height
	  };
	}

	function contains(parent, child) {
	  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	  if (parent.contains(child)) {
	    return true;
	  } // then fallback to custom implementation with Shadow DOM support
	  else if (rootNode && isShadowRoot(rootNode)) {
	    var next = child;
	    do {
	      if (next && parent.isSameNode(next)) {
	        return true;
	      } // $FlowFixMe[prop-missing]: need a better way to handle this...

	      next = next.parentNode || next.host;
	    } while (next);
	  } // Give up, the result is false

	  return false;
	}

	function getComputedStyle$1(element) {
	  return getWindow(element).getComputedStyle(element);
	}

	function isTableElement(element) {
	  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getDocumentElement(element) {
	  // $FlowFixMe[incompatible-return]: assume body is always available
	  return ((isElement$1(element) ? element.ownerDocument :
	  // $FlowFixMe[prop-missing]
	  element.document) || window.document).documentElement;
	}

	function getParentNode(element) {
	  if (getNodeName(element) === 'html') {
	    return element;
	  }
	  return (
	    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
	    // $FlowFixMe[incompatible-return]
	    // $FlowFixMe[prop-missing]
	    element.assignedSlot ||
	    // step into the shadow DOM of the parent of a slotted node
	    element.parentNode || (
	    // DOM Element detected
	    isShadowRoot(element) ? element.host : null) ||
	    // ShadowRoot detected
	    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
	    getDocumentElement(element) // fallback
	  );
	}

	function getTrueOffsetParent(element) {
	  if (!isHTMLElement(element) ||
	  // https://github.com/popperjs/popper-core/issues/837
	  getComputedStyle$1(element).position === 'fixed') {
	    return null;
	  }
	  return element.offsetParent;
	} // `.offsetParent` reports `null` for fixed elements, while absolute elements
	// return the containing block

	function getContainingBlock(element) {
	  var isFirefox = /firefox/i.test(getUAString());
	  var isIE = /Trident/i.test(getUAString());
	  if (isIE && isHTMLElement(element)) {
	    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
	    var elementCss = getComputedStyle$1(element);
	    if (elementCss.position === 'fixed') {
	      return null;
	    }
	  }
	  var currentNode = getParentNode(element);
	  if (isShadowRoot(currentNode)) {
	    currentNode = currentNode.host;
	  }
	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	    // create a containing block.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

	    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
	      return currentNode;
	    } else {
	      currentNode = currentNode.parentNode;
	    }
	  }
	  return null;
	} // Gets the closest ancestor positioned element. Handles some edge cases,
	// such as table ancestors and cross browser bugs.

	function getOffsetParent(element) {
	  var window = getWindow(element);
	  var offsetParent = getTrueOffsetParent(element);
	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }
	  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
	    return window;
	  }
	  return offsetParent || getContainingBlock(element) || window;
	}

	function getMainAxisFromPlacement(placement) {
	  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function within(min$1, value, max$1) {
	  return max(min$1, min(value, max$1));
	}
	function withinMaxClamp(min, value, max) {
	  var v = within(min, value, max);
	  return v > max ? max : v;
	}

	function getFreshSideObject() {
	  return {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  };
	}

	function mergePaddingObject(paddingObject) {
	  return Object.assign({}, getFreshSideObject(), paddingObject);
	}

	function expandToHashMap(value, keys) {
	  return keys.reduce(function (hashMap, key) {
	    hashMap[key] = value;
	    return hashMap;
	  }, {});
	}

	var toPaddingObject = function toPaddingObject(padding, state) {
	  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : padding;
	  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	};
	function arrow(_ref) {
	  var _state$modifiersData$;
	  var state = _ref.state,
	    name = _ref.name,
	    options = _ref.options;
	  var arrowElement = state.elements.arrow;
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var basePlacement = getBasePlacement(state.placement);
	  var axis = getMainAxisFromPlacement(basePlacement);
	  var isVertical = [left, right].indexOf(basePlacement) >= 0;
	  var len = isVertical ? 'height' : 'width';
	  if (!arrowElement || !popperOffsets) {
	    return;
	  }
	  var paddingObject = toPaddingObject(options.padding, state);
	  var arrowRect = getLayoutRect(arrowElement);
	  var minProp = axis === 'y' ? top : left;
	  var maxProp = axis === 'y' ? bottom : right;
	  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	  var arrowOffsetParent = getOffsetParent(arrowElement);
	  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	  // outside of the popper bounds

	  var min = paddingObject[minProp];
	  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	  var axisProp = axis;
	  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	}
	function effect$1(_ref2) {
	  var state = _ref2.state,
	    options = _ref2.options;
	  var _options$element = options.element,
	    arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
	  if (arrowElement == null) {
	    return;
	  } // CSS selector

	  if (typeof arrowElement === 'string') {
	    arrowElement = state.elements.popper.querySelector(arrowElement);
	    if (!arrowElement) {
	      return;
	    }
	  }
	  if (!contains(state.elements.popper, arrowElement)) {
	    return;
	  }
	  state.elements.arrow = arrowElement;
	} // eslint-disable-next-line import/no-unused-modules

	const arrow$1 = {
	  name: 'arrow',
	  enabled: true,
	  phase: 'main',
	  fn: arrow,
	  effect: effect$1,
	  requires: ['popperOffsets'],
	  requiresIfExists: ['preventOverflow']
	};

	function getVariation(placement) {
	  return placement.split('-')[1];
	}

	var unsetSides = {
	  top: 'auto',
	  right: 'auto',
	  bottom: 'auto',
	  left: 'auto'
	}; // Round the offsets to the nearest suitable subpixel based on the DPR.
	// Zooming can change the DPR, but it seems to report a value that will
	// cleanly divide the values into the appropriate subpixels.

	function roundOffsetsByDPR(_ref, win) {
	  var x = _ref.x,
	    y = _ref.y;
	  var dpr = win.devicePixelRatio || 1;
	  return {
	    x: round(x * dpr) / dpr || 0,
	    y: round(y * dpr) / dpr || 0
	  };
	}
	function mapToStyles(_ref2) {
	  var _Object$assign2;
	  var popper = _ref2.popper,
	    popperRect = _ref2.popperRect,
	    placement = _ref2.placement,
	    variation = _ref2.variation,
	    offsets = _ref2.offsets,
	    position = _ref2.position,
	    gpuAcceleration = _ref2.gpuAcceleration,
	    adaptive = _ref2.adaptive,
	    roundOffsets = _ref2.roundOffsets,
	    isFixed = _ref2.isFixed;
	  var _offsets$x = offsets.x,
	    x = _offsets$x === void 0 ? 0 : _offsets$x,
	    _offsets$y = offsets.y,
	    y = _offsets$y === void 0 ? 0 : _offsets$y;
	  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };
	  x = _ref3.x;
	  y = _ref3.y;
	  var hasX = offsets.hasOwnProperty('x');
	  var hasY = offsets.hasOwnProperty('y');
	  var sideX = left;
	  var sideY = top;
	  var win = window;
	  if (adaptive) {
	    var offsetParent = getOffsetParent(popper);
	    var heightProp = 'clientHeight';
	    var widthProp = 'clientWidth';
	    if (offsetParent === getWindow(popper)) {
	      offsetParent = getDocumentElement(popper);
	      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
	        heightProp = 'scrollHeight';
	        widthProp = 'scrollWidth';
	      }
	    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

	    offsetParent = offsetParent;
	    if (placement === top || (placement === left || placement === right) && variation === end) {
	      sideY = bottom;
	      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
	      // $FlowFixMe[prop-missing]
	      offsetParent[heightProp];
	      y -= offsetY - popperRect.height;
	      y *= gpuAcceleration ? 1 : -1;
	    }
	    if (placement === left || (placement === top || placement === bottom) && variation === end) {
	      sideX = right;
	      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
	      // $FlowFixMe[prop-missing]
	      offsetParent[widthProp];
	      x -= offsetX - popperRect.width;
	      x *= gpuAcceleration ? 1 : -1;
	    }
	  }
	  var commonStyles = Object.assign({
	    position: position
	  }, adaptive && unsetSides);
	  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
	    x: x,
	    y: y
	  }, getWindow(popper)) : {
	    x: x,
	    y: y
	  };
	  x = _ref4.x;
	  y = _ref4.y;
	  if (gpuAcceleration) {
	    var _Object$assign;
	    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	  }
	  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	}
	function computeStyles(_ref5) {
	  var state = _ref5.state,
	    options = _ref5.options;
	  var _options$gpuAccelerat = options.gpuAcceleration,
	    gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	    _options$adaptive = options.adaptive,
	    adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
	    _options$roundOffsets = options.roundOffsets,
	    roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
	  var commonStyles = {
	    placement: getBasePlacement(state.placement),
	    variation: getVariation(state.placement),
	    popper: state.elements.popper,
	    popperRect: state.rects.popper,
	    gpuAcceleration: gpuAcceleration,
	    isFixed: state.options.strategy === 'fixed'
	  };
	  if (state.modifiersData.popperOffsets != null) {
	    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.popperOffsets,
	      position: state.options.strategy,
	      adaptive: adaptive,
	      roundOffsets: roundOffsets
	    })));
	  }
	  if (state.modifiersData.arrow != null) {
	    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.arrow,
	      position: 'absolute',
	      adaptive: false,
	      roundOffsets: roundOffsets
	    })));
	  }
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-placement': state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules

	const computeStyles$1 = {
	  name: 'computeStyles',
	  enabled: true,
	  phase: 'beforeWrite',
	  fn: computeStyles,
	  data: {}
	};

	var passive = {
	  passive: true
	};
	function effect(_ref) {
	  var state = _ref.state,
	    instance = _ref.instance,
	    options = _ref.options;
	  var _options$scroll = options.scroll,
	    scroll = _options$scroll === void 0 ? true : _options$scroll,
	    _options$resize = options.resize,
	    resize = _options$resize === void 0 ? true : _options$resize;
	  var window = getWindow(state.elements.popper);
	  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
	  if (scroll) {
	    scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', instance.update, passive);
	    });
	  }
	  if (resize) {
	    window.addEventListener('resize', instance.update, passive);
	  }
	  return function () {
	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.removeEventListener('scroll', instance.update, passive);
	      });
	    }
	    if (resize) {
	      window.removeEventListener('resize', instance.update, passive);
	    }
	  };
	} // eslint-disable-next-line import/no-unused-modules

	const eventListeners = {
	  name: 'eventListeners',
	  enabled: true,
	  phase: 'write',
	  fn: function fn() {},
	  effect: effect,
	  data: {}
	};

	var hash$1 = {
	  left: 'right',
	  right: 'left',
	  bottom: 'top',
	  top: 'bottom'
	};
	function getOppositePlacement(placement) {
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash$1[matched];
	  });
	}

	var hash = {
	  start: 'end',
	  end: 'start'
	};
	function getOppositeVariationPlacement(placement) {
	  return placement.replace(/start|end/g, function (matched) {
	    return hash[matched];
	  });
	}

	function getWindowScroll(node) {
	  var win = getWindow(node);
	  var scrollLeft = win.pageXOffset;
	  var scrollTop = win.pageYOffset;
	  return {
	    scrollLeft: scrollLeft,
	    scrollTop: scrollTop
	  };
	}

	function getWindowScrollBarX(element) {
	  // If <html> has a CSS width greater than the viewport, then this will be
	  // incorrect for RTL.
	  // Popper 1 is broken in this case and never had a bug report so let's assume
	  // it's not an issue. I don't think anyone ever specifies width on <html>
	  // anyway.
	  // Browsers where the left scrollbar doesn't cause an issue report `0` for
	  // this (e.g. Edge 2019, IE11, Safari)
	  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getViewportRect(element, strategy) {
	  var win = getWindow(element);
	  var html = getDocumentElement(element);
	  var visualViewport = win.visualViewport;
	  var width = html.clientWidth;
	  var height = html.clientHeight;
	  var x = 0;
	  var y = 0;
	  if (visualViewport) {
	    width = visualViewport.width;
	    height = visualViewport.height;
	    var layoutViewport = isLayoutViewport();
	    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
	      x = visualViewport.offsetLeft;
	      y = visualViewport.offsetTop;
	    }
	  }
	  return {
	    width: width,
	    height: height,
	    x: x + getWindowScrollBarX(element),
	    y: y
	  };
	}

	// of the `<html>` and `<body>` rect bounds if horizontally scrollable

	function getDocumentRect(element) {
	  var _element$ownerDocumen;
	  var html = getDocumentElement(element);
	  var winScroll = getWindowScroll(element);
	  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	  var y = -winScroll.scrollTop;
	  if (getComputedStyle$1(body || html).direction === 'rtl') {
	    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	  }
	  return {
	    width: width,
	    height: height,
	    x: x,
	    y: y
	  };
	}

	function isScrollParent(element) {
	  // Firefox wants us to check `-x` and `-y` variations as well
	  var _getComputedStyle = getComputedStyle$1(element),
	    overflow = _getComputedStyle.overflow,
	    overflowX = _getComputedStyle.overflowX,
	    overflowY = _getComputedStyle.overflowY;
	  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getScrollParent(node) {
	  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	    // $FlowFixMe[incompatible-return]: assume body is always available
	    return node.ownerDocument.body;
	  }
	  if (isHTMLElement(node) && isScrollParent(node)) {
	    return node;
	  }
	  return getScrollParent(getParentNode(node));
	}

	/*
	given a DOM element, return the list of all scroll parents, up the list of ancesors
	until we get to the top window object. This list is what we attach scroll listeners
	to, because if any of these parent elements scroll, we'll need to re-calculate the
	reference element's position.
	*/

	function listScrollParents(element, list) {
	  var _element$ownerDocumen;
	  if (list === void 0) {
	    list = [];
	  }
	  var scrollParent = getScrollParent(element);
	  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	  var win = getWindow(scrollParent);
	  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	  var updatedList = list.concat(target);
	  return isBody ? updatedList :
	  // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
	  updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function rectToClientRect(rect) {
	  return Object.assign({}, rect, {
	    left: rect.x,
	    top: rect.y,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  });
	}

	function getInnerBoundingClientRect(element, strategy) {
	  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
	  rect.top = rect.top + element.clientTop;
	  rect.left = rect.left + element.clientLeft;
	  rect.bottom = rect.top + element.clientHeight;
	  rect.right = rect.left + element.clientWidth;
	  rect.width = element.clientWidth;
	  rect.height = element.clientHeight;
	  rect.x = rect.left;
	  rect.y = rect.top;
	  return rect;
	}
	function getClientRectFromMixedType(element, clippingParent, strategy) {
	  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	} // A "clipping parent" is an overflowable container with the characteristic of
	// clipping (or hiding) overflowing elements with a position different from
	// `initial`

	function getClippingParents(element) {
	  var clippingParents = listScrollParents(getParentNode(element));
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
	  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
	  if (!isElement$1(clipperElement)) {
	    return [];
	  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

	  return clippingParents.filter(function (clippingParent) {
	    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	  });
	} // Gets the maximum area that the element is visible in due to any number of
	// clipping parents

	function getClippingRect(element, boundary, rootBoundary, strategy) {
	  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	  var firstClippingParent = clippingParents[0];
	  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
	    accRect.top = max(rect.top, accRect.top);
	    accRect.right = min(rect.right, accRect.right);
	    accRect.bottom = min(rect.bottom, accRect.bottom);
	    accRect.left = max(rect.left, accRect.left);
	    return accRect;
	  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
	  clippingRect.width = clippingRect.right - clippingRect.left;
	  clippingRect.height = clippingRect.bottom - clippingRect.top;
	  clippingRect.x = clippingRect.left;
	  clippingRect.y = clippingRect.top;
	  return clippingRect;
	}

	function computeOffsets(_ref) {
	  var reference = _ref.reference,
	    element = _ref.element,
	    placement = _ref.placement;
	  var basePlacement = placement ? getBasePlacement(placement) : null;
	  var variation = placement ? getVariation(placement) : null;
	  var commonX = reference.x + reference.width / 2 - element.width / 2;
	  var commonY = reference.y + reference.height / 2 - element.height / 2;
	  var offsets;
	  switch (basePlacement) {
	    case top:
	      offsets = {
	        x: commonX,
	        y: reference.y - element.height
	      };
	      break;
	    case bottom:
	      offsets = {
	        x: commonX,
	        y: reference.y + reference.height
	      };
	      break;
	    case right:
	      offsets = {
	        x: reference.x + reference.width,
	        y: commonY
	      };
	      break;
	    case left:
	      offsets = {
	        x: reference.x - element.width,
	        y: commonY
	      };
	      break;
	    default:
	      offsets = {
	        x: reference.x,
	        y: reference.y
	      };
	  }
	  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
	  if (mainAxis != null) {
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    switch (variation) {
	      case start:
	        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
	        break;
	      case end:
	        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
	        break;
	    }
	  }
	  return offsets;
	}

	function detectOverflow(state, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  var _options = options,
	    _options$placement = _options.placement,
	    placement = _options$placement === void 0 ? state.placement : _options$placement,
	    _options$strategy = _options.strategy,
	    strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
	    _options$boundary = _options.boundary,
	    boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	    _options$rootBoundary = _options.rootBoundary,
	    rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	    _options$elementConte = _options.elementContext,
	    elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	    _options$altBoundary = _options.altBoundary,
	    altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	    _options$padding = _options.padding,
	    padding = _options$padding === void 0 ? 0 : _options$padding;
	  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  var altContext = elementContext === popper ? reference : popper;
	  var popperRect = state.rects.popper;
	  var element = state.elements[altBoundary ? altContext : elementContext];
	  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
	  var referenceClientRect = getBoundingClientRect(state.elements.reference);
	  var popperOffsets = computeOffsets({
	    reference: referenceClientRect,
	    element: popperRect,
	    placement: placement
	  });
	  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
	  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	  // 0 or negative = within the clipping rect

	  var overflowOffsets = {
	    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	  };
	  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	  if (elementContext === popper && offsetData) {
	    var offset = offsetData[placement];
	    Object.keys(overflowOffsets).forEach(function (key) {
	      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	      overflowOffsets[key] += offset[axis] * multiply;
	    });
	  }
	  return overflowOffsets;
	}

	function computeAutoPlacement(state, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  var _options = options,
	    placement = _options.placement,
	    boundary = _options.boundary,
	    rootBoundary = _options.rootBoundary,
	    padding = _options.padding,
	    flipVariations = _options.flipVariations,
	    _options$allowedAutoP = _options.allowedAutoPlacements,
	    allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	  var variation = getVariation(placement);
	  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	    return getVariation(placement) === variation;
	  }) : basePlacements;
	  var allowedPlacements = placements$1.filter(function (placement) {
	    return allowedAutoPlacements.indexOf(placement) >= 0;
	  });
	  if (allowedPlacements.length === 0) {
	    allowedPlacements = placements$1;
	  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

	  var overflows = allowedPlacements.reduce(function (acc, placement) {
	    acc[placement] = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding
	    })[getBasePlacement(placement)];
	    return acc;
	  }, {});
	  return Object.keys(overflows).sort(function (a, b) {
	    return overflows[a] - overflows[b];
	  });
	}

	function getExpandedFallbackPlacements(placement) {
	  if (getBasePlacement(placement) === auto) {
	    return [];
	  }
	  var oppositePlacement = getOppositePlacement(placement);
	  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	}
	function flip(_ref) {
	  var state = _ref.state,
	    options = _ref.options,
	    name = _ref.name;
	  if (state.modifiersData[name]._skip) {
	    return;
	  }
	  var _options$mainAxis = options.mainAxis,
	    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	    _options$altAxis = options.altAxis,
	    checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	    specifiedFallbackPlacements = options.fallbackPlacements,
	    padding = options.padding,
	    boundary = options.boundary,
	    rootBoundary = options.rootBoundary,
	    altBoundary = options.altBoundary,
	    _options$flipVariatio = options.flipVariations,
	    flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	    allowedAutoPlacements = options.allowedAutoPlacements;
	  var preferredPlacement = state.options.placement;
	  var basePlacement = getBasePlacement(preferredPlacement);
	  var isBasePlacement = basePlacement === preferredPlacement;
	  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      flipVariations: flipVariations,
	      allowedAutoPlacements: allowedAutoPlacements
	    }) : placement);
	  }, []);
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var checksMap = new Map();
	  var makeFallbackChecks = true;
	  var firstFittingPlacement = placements[0];
	  for (var i = 0; i < placements.length; i++) {
	    var placement = placements[i];
	    var _basePlacement = getBasePlacement(placement);
	    var isStartVariation = getVariation(placement) === start;
	    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	    var len = isVertical ? 'width' : 'height';
	    var overflow = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      altBoundary: altBoundary,
	      padding: padding
	    });
	    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
	    if (referenceRect[len] > popperRect[len]) {
	      mainVariationSide = getOppositePlacement(mainVariationSide);
	    }
	    var altVariationSide = getOppositePlacement(mainVariationSide);
	    var checks = [];
	    if (checkMainAxis) {
	      checks.push(overflow[_basePlacement] <= 0);
	    }
	    if (checkAltAxis) {
	      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	    }
	    if (checks.every(function (check) {
	      return check;
	    })) {
	      firstFittingPlacement = placement;
	      makeFallbackChecks = false;
	      break;
	    }
	    checksMap.set(placement, checks);
	  }
	  if (makeFallbackChecks) {
	    // `2` may be desired in some cases – research later
	    var numberOfChecks = flipVariations ? 3 : 1;
	    var _loop = function _loop(_i) {
	      var fittingPlacement = placements.find(function (placement) {
	        var checks = checksMap.get(placement);
	        if (checks) {
	          return checks.slice(0, _i).every(function (check) {
	            return check;
	          });
	        }
	      });
	      if (fittingPlacement) {
	        firstFittingPlacement = fittingPlacement;
	        return "break";
	      }
	    };
	    for (var _i = numberOfChecks; _i > 0; _i--) {
	      var _ret = _loop(_i);
	      if (_ret === "break") break;
	    }
	  }
	  if (state.placement !== firstFittingPlacement) {
	    state.modifiersData[name]._skip = true;
	    state.placement = firstFittingPlacement;
	    state.reset = true;
	  }
	} // eslint-disable-next-line import/no-unused-modules

	const flip$1 = {
	  name: 'flip',
	  enabled: true,
	  phase: 'main',
	  fn: flip,
	  requiresIfExists: ['offset'],
	  data: {
	    _skip: false
	  }
	};

	function getSideOffsets(overflow, rect, preventedOffsets) {
	  if (preventedOffsets === void 0) {
	    preventedOffsets = {
	      x: 0,
	      y: 0
	    };
	  }
	  return {
	    top: overflow.top - rect.height - preventedOffsets.y,
	    right: overflow.right - rect.width + preventedOffsets.x,
	    bottom: overflow.bottom - rect.height + preventedOffsets.y,
	    left: overflow.left - rect.width - preventedOffsets.x
	  };
	}
	function isAnySideFullyClipped(overflow) {
	  return [top, right, bottom, left].some(function (side) {
	    return overflow[side] >= 0;
	  });
	}
	function hide(_ref) {
	  var state = _ref.state,
	    name = _ref.name;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var preventedOffsets = state.modifiersData.preventOverflow;
	  var referenceOverflow = detectOverflow(state, {
	    elementContext: 'reference'
	  });
	  var popperAltOverflow = detectOverflow(state, {
	    altBoundary: true
	  });
	  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	  state.modifiersData[name] = {
	    referenceClippingOffsets: referenceClippingOffsets,
	    popperEscapeOffsets: popperEscapeOffsets,
	    isReferenceHidden: isReferenceHidden,
	    hasPopperEscaped: hasPopperEscaped
	  };
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-reference-hidden': isReferenceHidden,
	    'data-popper-escaped': hasPopperEscaped
	  });
	} // eslint-disable-next-line import/no-unused-modules

	const hide$1 = {
	  name: 'hide',
	  enabled: true,
	  phase: 'main',
	  requiresIfExists: ['preventOverflow'],
	  fn: hide
	};

	function distanceAndSkiddingToXY(placement, rects, offset) {
	  var basePlacement = getBasePlacement(placement);
	  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
	  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
	      placement: placement
	    })) : offset,
	    skidding = _ref[0],
	    distance = _ref[1];
	  skidding = skidding || 0;
	  distance = (distance || 0) * invertDistance;
	  return [left, right].indexOf(basePlacement) >= 0 ? {
	    x: distance,
	    y: skidding
	  } : {
	    x: skidding,
	    y: distance
	  };
	}
	function offset(_ref2) {
	  var state = _ref2.state,
	    options = _ref2.options,
	    name = _ref2.name;
	  var _options$offset = options.offset,
	    offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	  var data = placements.reduce(function (acc, placement) {
	    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	    return acc;
	  }, {});
	  var _data$state$placement = data[state.placement],
	    x = _data$state$placement.x,
	    y = _data$state$placement.y;
	  if (state.modifiersData.popperOffsets != null) {
	    state.modifiersData.popperOffsets.x += x;
	    state.modifiersData.popperOffsets.y += y;
	  }
	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules

	const offset$1 = {
	  name: 'offset',
	  enabled: true,
	  phase: 'main',
	  requires: ['popperOffsets'],
	  fn: offset
	};

	function popperOffsets(_ref) {
	  var state = _ref.state,
	    name = _ref.name;
	  // Offsets are the actual position the popper needs to have to be
	  // properly positioned near its reference element
	  // This is the most basic placement, and will be adjusted by
	  // the modifiers in the next step
	  state.modifiersData[name] = computeOffsets({
	    reference: state.rects.reference,
	    element: state.rects.popper,
	    placement: state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules

	const popperOffsets$1 = {
	  name: 'popperOffsets',
	  enabled: true,
	  phase: 'read',
	  fn: popperOffsets,
	  data: {}
	};

	function getAltAxis(axis) {
	  return axis === 'x' ? 'y' : 'x';
	}

	function preventOverflow(_ref) {
	  var state = _ref.state,
	    options = _ref.options,
	    name = _ref.name;
	  var _options$mainAxis = options.mainAxis,
	    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	    _options$altAxis = options.altAxis,
	    checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	    boundary = options.boundary,
	    rootBoundary = options.rootBoundary,
	    altBoundary = options.altBoundary,
	    padding = options.padding,
	    _options$tether = options.tether,
	    tether = _options$tether === void 0 ? true : _options$tether,
	    _options$tetherOffset = options.tetherOffset,
	    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	  var overflow = detectOverflow(state, {
	    boundary: boundary,
	    rootBoundary: rootBoundary,
	    padding: padding,
	    altBoundary: altBoundary
	  });
	  var basePlacement = getBasePlacement(state.placement);
	  var variation = getVariation(state.placement);
	  var isBasePlacement = !variation;
	  var mainAxis = getMainAxisFromPlacement(basePlacement);
	  var altAxis = getAltAxis(mainAxis);
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : tetherOffset;
	  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
	    mainAxis: tetherOffsetValue,
	    altAxis: tetherOffsetValue
	  } : Object.assign({
	    mainAxis: 0,
	    altAxis: 0
	  }, tetherOffsetValue);
	  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	  var data = {
	    x: 0,
	    y: 0
	  };
	  if (!popperOffsets) {
	    return;
	  }
	  if (checkMainAxis) {
	    var _offsetModifierState$;
	    var mainSide = mainAxis === 'y' ? top : left;
	    var altSide = mainAxis === 'y' ? bottom : right;
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    var offset = popperOffsets[mainAxis];
	    var min$1 = offset + overflow[mainSide];
	    var max$1 = offset - overflow[altSide];
	    var additive = tether ? -popperRect[len] / 2 : 0;
	    var minLen = variation === start ? referenceRect[len] : popperRect[len];
	    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	    // outside the reference bounds

	    var arrowElement = state.elements.arrow;
	    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	      width: 0,
	      height: 0
	    };
	    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	    var arrowPaddingMin = arrowPaddingObject[mainSide];
	    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	    // to include its full size in the calculation. If the reference is small
	    // and near the edge of a boundary, the popper can overflow even if the
	    // reference is not overflowing as well (e.g. virtual elements with no
	    // width or height)

	    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
	    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
	    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
	    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
	    var tetherMax = offset + maxOffset - offsetModifierValue;
	    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
	    popperOffsets[mainAxis] = preventedOffset;
	    data[mainAxis] = preventedOffset - offset;
	  }
	  if (checkAltAxis) {
	    var _offsetModifierState$2;
	    var _mainSide = mainAxis === 'x' ? top : left;
	    var _altSide = mainAxis === 'x' ? bottom : right;
	    var _offset = popperOffsets[altAxis];
	    var _len = altAxis === 'y' ? 'height' : 'width';
	    var _min = _offset + overflow[_mainSide];
	    var _max = _offset - overflow[_altSide];
	    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
	    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
	    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
	    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
	    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
	    popperOffsets[altAxis] = _preventedOffset;
	    data[altAxis] = _preventedOffset - _offset;
	  }
	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules

	const preventOverflow$1 = {
	  name: 'preventOverflow',
	  enabled: true,
	  phase: 'main',
	  fn: preventOverflow,
	  requiresIfExists: ['offset']
	};

	function getHTMLElementScroll(element) {
	  return {
	    scrollLeft: element.scrollLeft,
	    scrollTop: element.scrollTop
	  };
	}

	function getNodeScroll(node) {
	  if (node === getWindow(node) || !isHTMLElement(node)) {
	    return getWindowScroll(node);
	  } else {
	    return getHTMLElementScroll(node);
	  }
	}

	function isElementScaled(element) {
	  var rect = element.getBoundingClientRect();
	  var scaleX = round(rect.width) / element.offsetWidth || 1;
	  var scaleY = round(rect.height) / element.offsetHeight || 1;
	  return scaleX !== 1 || scaleY !== 1;
	} // Returns the composite rect of an element relative to its offsetParent.
	// Composite means it takes into account transforms as well as layout.

	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }
	  var isOffsetParentAnElement = isHTMLElement(offsetParent);
	  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	  var documentElement = getDocumentElement(offsetParent);
	  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
	  var scroll = {
	    scrollLeft: 0,
	    scrollTop: 0
	  };
	  var offsets = {
	    x: 0,
	    y: 0
	  };
	  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	    if (getNodeName(offsetParent) !== 'body' ||
	    // https://github.com/popperjs/popper-core/issues/1078
	    isScrollParent(documentElement)) {
	      scroll = getNodeScroll(offsetParent);
	    }
	    if (isHTMLElement(offsetParent)) {
	      offsets = getBoundingClientRect(offsetParent, true);
	      offsets.x += offsetParent.clientLeft;
	      offsets.y += offsetParent.clientTop;
	    } else if (documentElement) {
	      offsets.x = getWindowScrollBarX(documentElement);
	    }
	  }
	  return {
	    x: rect.left + scroll.scrollLeft - offsets.x,
	    y: rect.top + scroll.scrollTop - offsets.y,
	    width: rect.width,
	    height: rect.height
	  };
	}

	function order(modifiers) {
	  var map = new Map();
	  var visited = new Set();
	  var result = [];
	  modifiers.forEach(function (modifier) {
	    map.set(modifier.name, modifier);
	  }); // On visiting object, check for its dependencies and visit them recursively

	  function sort(modifier) {
	    visited.add(modifier.name);
	    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	    requires.forEach(function (dep) {
	      if (!visited.has(dep)) {
	        var depModifier = map.get(dep);
	        if (depModifier) {
	          sort(depModifier);
	        }
	      }
	    });
	    result.push(modifier);
	  }
	  modifiers.forEach(function (modifier) {
	    if (!visited.has(modifier.name)) {
	      // check for visited object
	      sort(modifier);
	    }
	  });
	  return result;
	}
	function orderModifiers(modifiers) {
	  // order based on dependencies
	  var orderedModifiers = order(modifiers); // order based on phase

	  return modifierPhases.reduce(function (acc, phase) {
	    return acc.concat(orderedModifiers.filter(function (modifier) {
	      return modifier.phase === phase;
	    }));
	  }, []);
	}

	function debounce(fn) {
	  var pending;
	  return function () {
	    if (!pending) {
	      pending = new Promise(function (resolve) {
	        Promise.resolve().then(function () {
	          pending = undefined;
	          resolve(fn());
	        });
	      });
	    }
	    return pending;
	  };
	}

	function mergeByName(modifiers) {
	  var merged = modifiers.reduce(function (merged, current) {
	    var existing = merged[current.name];
	    merged[current.name] = existing ? Object.assign({}, existing, current, {
	      options: Object.assign({}, existing.options, current.options),
	      data: Object.assign({}, existing.data, current.data)
	    }) : current;
	    return merged;
	  }, {}); // IE11 does not support Object.values

	  return Object.keys(merged).map(function (key) {
	    return merged[key];
	  });
	}

	var DEFAULT_OPTIONS = {
	  placement: 'bottom',
	  modifiers: [],
	  strategy: 'absolute'
	};
	function areValidElements() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  return !args.some(function (element) {
	    return !(element && typeof element.getBoundingClientRect === 'function');
	  });
	}
	function popperGenerator(generatorOptions) {
	  if (generatorOptions === void 0) {
	    generatorOptions = {};
	  }
	  var _generatorOptions = generatorOptions,
	    _generatorOptions$def = _generatorOptions.defaultModifiers,
	    defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	    _generatorOptions$def2 = _generatorOptions.defaultOptions,
	    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	  return function createPopper(reference, popper, options) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }
	    var state = {
	      placement: 'bottom',
	      orderedModifiers: [],
	      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
	      modifiersData: {},
	      elements: {
	        reference: reference,
	        popper: popper
	      },
	      attributes: {},
	      styles: {}
	    };
	    var effectCleanupFns = [];
	    var isDestroyed = false;
	    var instance = {
	      state: state,
	      setOptions: function setOptions(setOptionsAction) {
	        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
	        cleanupModifierEffects();
	        state.options = Object.assign({}, defaultOptions, state.options, options);
	        state.scrollParents = {
	          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	          popper: listScrollParents(popper)
	        }; // Orders the modifiers based on their dependencies and `phase`
	        // properties

	        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	        state.orderedModifiers = orderedModifiers.filter(function (m) {
	          return m.enabled;
	        });
	        runModifierEffects();
	        return instance.update();
	      },
	      // Sync update – it will always be executed, even if not necessary. This
	      // is useful for low frequency updates where sync behavior simplifies the
	      // logic.
	      // For high frequency updates (e.g. `resize` and `scroll` events), always
	      // prefer the async Popper#update method
	      forceUpdate: function forceUpdate() {
	        if (isDestroyed) {
	          return;
	        }
	        var _state$elements = state.elements,
	          reference = _state$elements.reference,
	          popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	        // anymore

	        if (!areValidElements(reference, popper)) {
	          return;
	        } // Store the reference and popper rects to be read by modifiers

	        state.rects = {
	          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	          popper: getLayoutRect(popper)
	        }; // Modifiers have the ability to reset the current update cycle. The
	        // most common use case for this is the `flip` modifier changing the
	        // placement, which then needs to re-run all the modifiers, because the
	        // logic was previously ran for the previous placement and is therefore
	        // stale/incorrect

	        state.reset = false;
	        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	        // is filled with the initial data specified by the modifier. This means
	        // it doesn't persist and is fresh on each update.
	        // To ensure persistent data, use `${name}#persistent`

	        state.orderedModifiers.forEach(function (modifier) {
	          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	        });
	        for (var index = 0; index < state.orderedModifiers.length; index++) {
	          if (state.reset === true) {
	            state.reset = false;
	            index = -1;
	            continue;
	          }
	          var _state$orderedModifie = state.orderedModifiers[index],
	            fn = _state$orderedModifie.fn,
	            _state$orderedModifie2 = _state$orderedModifie.options,
	            _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	            name = _state$orderedModifie.name;
	          if (typeof fn === 'function') {
	            state = fn({
	              state: state,
	              options: _options,
	              name: name,
	              instance: instance
	            }) || state;
	          }
	        }
	      },
	      // Async and optimistically optimized update – it will not be executed if
	      // not necessary (debounced to run at most once-per-tick)
	      update: debounce(function () {
	        return new Promise(function (resolve) {
	          instance.forceUpdate();
	          resolve(state);
	        });
	      }),
	      destroy: function destroy() {
	        cleanupModifierEffects();
	        isDestroyed = true;
	      }
	    };
	    if (!areValidElements(reference, popper)) {
	      return instance;
	    }
	    instance.setOptions(options).then(function (state) {
	      if (!isDestroyed && options.onFirstUpdate) {
	        options.onFirstUpdate(state);
	      }
	    }); // Modifiers have the ability to execute arbitrary code before the first
	    // update cycle runs. They will be executed in the same order as the update
	    // cycle. This is useful when a modifier adds some persistent data that
	    // other modifiers need to use, but the modifier is run after the dependent
	    // one.

	    function runModifierEffects() {
	      state.orderedModifiers.forEach(function (_ref) {
	        var name = _ref.name,
	          _ref$options = _ref.options,
	          options = _ref$options === void 0 ? {} : _ref$options,
	          effect = _ref.effect;
	        if (typeof effect === 'function') {
	          var cleanupFn = effect({
	            state: state,
	            name: name,
	            instance: instance,
	            options: options
	          });
	          var noopFn = function noopFn() {};
	          effectCleanupFns.push(cleanupFn || noopFn);
	        }
	      });
	    }
	    function cleanupModifierEffects() {
	      effectCleanupFns.forEach(function (fn) {
	        return fn();
	      });
	      effectCleanupFns = [];
	    }
	    return instance;
	  };
	}
	var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

	var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
	var createPopper$1 = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers$1
	}); // eslint-disable-next-line import/no-unused-modules

	var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	var createPopper = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers
	}); // eslint-disable-next-line import/no-unused-modules

	const Popper = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		afterMain,
		afterRead,
		afterWrite,
		applyStyles: applyStyles$1,
		arrow: arrow$1,
		auto,
		basePlacements,
		beforeMain,
		beforeRead,
		beforeWrite,
		bottom,
		clippingParents,
		computeStyles: computeStyles$1,
		createPopper,
		createPopperBase: createPopper$2,
		createPopperLite: createPopper$1,
		detectOverflow,
		end,
		eventListeners,
		flip: flip$1,
		hide: hide$1,
		left,
		main,
		modifierPhases,
		offset: offset$1,
		placements,
		popper,
		popperGenerator,
		popperOffsets: popperOffsets$1,
		preventOverflow: preventOverflow$1,
		read,
		reference,
		right,
		start,
		top,
		variationPlacements,
		viewport,
		write
	}, Symbol.toStringTag, { value: 'Module' }));

	/*!
	  * Bootstrap v5.3.7 (https://getbootstrap.com/)
	  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	  */

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/data.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const elementMap = new Map();
	const Data = {
	  set(element, key, instance) {
	    if (!elementMap.has(element)) {
	      elementMap.set(element, new Map());
	    }
	    const instanceMap = elementMap.get(element);

	    // make it clear we only want one instance per element
	    // can be removed later when multiple key/instances are fine to be used
	    if (!instanceMap.has(key) && instanceMap.size !== 0) {
	      // eslint-disable-next-line no-console
	      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
	      return;
	    }
	    instanceMap.set(key, instance);
	  },
	  get(element, key) {
	    if (elementMap.has(element)) {
	      return elementMap.get(element).get(key) || null;
	    }
	    return null;
	  },
	  remove(element, key) {
	    if (!elementMap.has(element)) {
	      return;
	    }
	    const instanceMap = elementMap.get(element);
	    instanceMap.delete(key);

	    // free up element references if there are no instances left for an element
	    if (instanceMap.size === 0) {
	      elementMap.delete(element);
	    }
	  }
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/index.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const MAX_UID = 1000000;
	const MILLISECONDS_MULTIPLIER = 1000;
	const TRANSITION_END = 'transitionend';

	/**
	 * Properly escape IDs selectors to handle weird IDs
	 * @param {string} selector
	 * @returns {string}
	 */
	const parseSelector = selector => {
	  if (selector && window.CSS && window.CSS.escape) {
	    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
	    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
	  }
	  return selector;
	};

	// Shout-out Angus Croll (https://goo.gl/pxwQGp)
	const toType = object => {
	  if (object === null || object === undefined) {
	    return `${object}`;
	  }
	  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
	};

	/**
	 * Public Util API
	 */

	const getUID = prefix => {
	  do {
	    prefix += Math.floor(Math.random() * MAX_UID);
	  } while (document.getElementById(prefix));
	  return prefix;
	};
	const getTransitionDurationFromElement = element => {
	  if (!element) {
	    return 0;
	  }

	  // Get transition-duration of the element
	  let {
	    transitionDuration,
	    transitionDelay
	  } = window.getComputedStyle(element);
	  const floatTransitionDuration = Number.parseFloat(transitionDuration);
	  const floatTransitionDelay = Number.parseFloat(transitionDelay);

	  // Return 0 if element or transition duration is not found
	  if (!floatTransitionDuration && !floatTransitionDelay) {
	    return 0;
	  }

	  // If multiple durations are defined, take the first
	  transitionDuration = transitionDuration.split(',')[0];
	  transitionDelay = transitionDelay.split(',')[0];
	  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
	};
	const triggerTransitionEnd = element => {
	  element.dispatchEvent(new Event(TRANSITION_END));
	};
	const isElement = object => {
	  if (!object || typeof object !== 'object') {
	    return false;
	  }
	  if (typeof object.jquery !== 'undefined') {
	    object = object[0];
	  }
	  return typeof object.nodeType !== 'undefined';
	};
	const getElement = object => {
	  // it's a jQuery object or a node element
	  if (isElement(object)) {
	    return object.jquery ? object[0] : object;
	  }
	  if (typeof object === 'string' && object.length > 0) {
	    return document.querySelector(parseSelector(object));
	  }
	  return null;
	};
	const isVisible = element => {
	  if (!isElement(element) || element.getClientRects().length === 0) {
	    return false;
	  }
	  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
	  // Handle `details` element as its content may falsie appear visible when it is closed
	  const closedDetails = element.closest('details:not([open])');
	  if (!closedDetails) {
	    return elementIsVisible;
	  }
	  if (closedDetails !== element) {
	    const summary = element.closest('summary');
	    if (summary && summary.parentNode !== closedDetails) {
	      return false;
	    }
	    if (summary === null) {
	      return false;
	    }
	  }
	  return elementIsVisible;
	};
	const isDisabled = element => {
	  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
	    return true;
	  }
	  if (element.classList.contains('disabled')) {
	    return true;
	  }
	  if (typeof element.disabled !== 'undefined') {
	    return element.disabled;
	  }
	  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
	};
	const findShadowRoot = element => {
	  if (!document.documentElement.attachShadow) {
	    return null;
	  }

	  // Can find the shadow root otherwise it'll return the document
	  if (typeof element.getRootNode === 'function') {
	    const root = element.getRootNode();
	    return root instanceof ShadowRoot ? root : null;
	  }
	  if (element instanceof ShadowRoot) {
	    return element;
	  }

	  // when we don't find a shadow root
	  if (!element.parentNode) {
	    return null;
	  }
	  return findShadowRoot(element.parentNode);
	};
	const noop = () => {};

	/**
	 * Trick to restart an element's animation
	 *
	 * @param {HTMLElement} element
	 * @return void
	 *
	 * @see https://www.harrytheo.com/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
	 */
	const reflow = element => {
	  element.offsetHeight; // eslint-disable-line no-unused-expressions
	};
	const getjQuery = () => {
	  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
	    return window.jQuery;
	  }
	  return null;
	};
	const DOMContentLoadedCallbacks = [];
	const onDOMContentLoaded = callback => {
	  if (document.readyState === 'loading') {
	    // add listener on the first call when the document is in loading state
	    if (!DOMContentLoadedCallbacks.length) {
	      document.addEventListener('DOMContentLoaded', () => {
	        for (const callback of DOMContentLoadedCallbacks) {
	          callback();
	        }
	      });
	    }
	    DOMContentLoadedCallbacks.push(callback);
	  } else {
	    callback();
	  }
	};
	const isRTL = () => document.documentElement.dir === 'rtl';
	const defineJQueryPlugin = plugin => {
	  onDOMContentLoaded(() => {
	    const $ = getjQuery();
	    /* istanbul ignore if */
	    if ($) {
	      const name = plugin.NAME;
	      const JQUERY_NO_CONFLICT = $.fn[name];
	      $.fn[name] = plugin.jQueryInterface;
	      $.fn[name].Constructor = plugin;
	      $.fn[name].noConflict = () => {
	        $.fn[name] = JQUERY_NO_CONFLICT;
	        return plugin.jQueryInterface;
	      };
	    }
	  });
	};
	const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
	  return typeof possibleCallback === 'function' ? possibleCallback.call(...args) : defaultValue;
	};
	const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
	  if (!waitForTransition) {
	    execute(callback);
	    return;
	  }
	  const durationPadding = 5;
	  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
	  let called = false;
	  const handler = ({
	    target
	  }) => {
	    if (target !== transitionElement) {
	      return;
	    }
	    called = true;
	    transitionElement.removeEventListener(TRANSITION_END, handler);
	    execute(callback);
	  };
	  transitionElement.addEventListener(TRANSITION_END, handler);
	  setTimeout(() => {
	    if (!called) {
	      triggerTransitionEnd(transitionElement);
	    }
	  }, emulatedDuration);
	};

	/**
	 * Return the previous/next element of a list.
	 *
	 * @param {array} list    The list of elements
	 * @param activeElement   The active element
	 * @param shouldGetNext   Choose to get next or previous element
	 * @param isCycleAllowed
	 * @return {Element|elem} The proper element
	 */
	const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
	  const listLength = list.length;
	  let index = list.indexOf(activeElement);

	  // if the element does not exist in the list return an element
	  // depending on the direction and if cycle is allowed
	  if (index === -1) {
	    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
	  }
	  index += shouldGetNext ? 1 : -1;
	  if (isCycleAllowed) {
	    index = (index + listLength) % listLength;
	  }
	  return list[Math.max(0, Math.min(index, listLength - 1))];
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/event-handler.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
	const stripNameRegex = /\..*/;
	const stripUidRegex = /::\d+$/;
	const eventRegistry = {}; // Events storage
	let uidEvent = 1;
	const customEvents = {
	  mouseenter: 'mouseover',
	  mouseleave: 'mouseout'
	};
	const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

	/**
	 * Private methods
	 */

	function makeEventUid(element, uid) {
	  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
	}
	function getElementEvents(element) {
	  const uid = makeEventUid(element);
	  element.uidEvent = uid;
	  eventRegistry[uid] = eventRegistry[uid] || {};
	  return eventRegistry[uid];
	}
	function bootstrapHandler(element, fn) {
	  return function handler(event) {
	    hydrateObj(event, {
	      delegateTarget: element
	    });
	    if (handler.oneOff) {
	      EventHandler.off(element, event.type, fn);
	    }
	    return fn.apply(element, [event]);
	  };
	}
	function bootstrapDelegationHandler(element, selector, fn) {
	  return function handler(event) {
	    const domElements = element.querySelectorAll(selector);
	    for (let {
	      target
	    } = event; target && target !== this; target = target.parentNode) {
	      for (const domElement of domElements) {
	        if (domElement !== target) {
	          continue;
	        }
	        hydrateObj(event, {
	          delegateTarget: target
	        });
	        if (handler.oneOff) {
	          EventHandler.off(element, event.type, selector, fn);
	        }
	        return fn.apply(target, [event]);
	      }
	    }
	  };
	}
	function findHandler(events, callable, delegationSelector = null) {
	  return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
	}
	function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
	  const isDelegated = typeof handler === 'string';
	  // TODO: tooltip passes `false` instead of selector, so we need to check
	  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
	  let typeEvent = getTypeEvent(originalTypeEvent);
	  if (!nativeEvents.has(typeEvent)) {
	    typeEvent = originalTypeEvent;
	  }
	  return [isDelegated, callable, typeEvent];
	}
	function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
	  if (typeof originalTypeEvent !== 'string' || !element) {
	    return;
	  }
	  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

	  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
	  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
	  if (originalTypeEvent in customEvents) {
	    const wrapFunction = fn => {
	      return function (event) {
	        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
	          return fn.call(this, event);
	        }
	      };
	    };
	    callable = wrapFunction(callable);
	  }
	  const events = getElementEvents(element);
	  const handlers = events[typeEvent] || (events[typeEvent] = {});
	  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
	  if (previousFunction) {
	    previousFunction.oneOff = previousFunction.oneOff && oneOff;
	    return;
	  }
	  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
	  const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
	  fn.delegationSelector = isDelegated ? handler : null;
	  fn.callable = callable;
	  fn.oneOff = oneOff;
	  fn.uidEvent = uid;
	  handlers[uid] = fn;
	  element.addEventListener(typeEvent, fn, isDelegated);
	}
	function removeHandler(element, events, typeEvent, handler, delegationSelector) {
	  const fn = findHandler(events[typeEvent], handler, delegationSelector);
	  if (!fn) {
	    return;
	  }
	  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
	  delete events[typeEvent][fn.uidEvent];
	}
	function removeNamespacedHandlers(element, events, typeEvent, namespace) {
	  const storeElementEvent = events[typeEvent] || {};
	  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
	    if (handlerKey.includes(namespace)) {
	      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
	    }
	  }
	}
	function getTypeEvent(event) {
	  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
	  event = event.replace(stripNameRegex, '');
	  return customEvents[event] || event;
	}
	const EventHandler = {
	  on(element, event, handler, delegationFunction) {
	    addHandler(element, event, handler, delegationFunction, false);
	  },
	  one(element, event, handler, delegationFunction) {
	    addHandler(element, event, handler, delegationFunction, true);
	  },
	  off(element, originalTypeEvent, handler, delegationFunction) {
	    if (typeof originalTypeEvent !== 'string' || !element) {
	      return;
	    }
	    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
	    const inNamespace = typeEvent !== originalTypeEvent;
	    const events = getElementEvents(element);
	    const storeElementEvent = events[typeEvent] || {};
	    const isNamespace = originalTypeEvent.startsWith('.');
	    if (typeof callable !== 'undefined') {
	      // Simplest case: handler is passed, remove that listener ONLY.
	      if (!Object.keys(storeElementEvent).length) {
	        return;
	      }
	      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
	      return;
	    }
	    if (isNamespace) {
	      for (const elementEvent of Object.keys(events)) {
	        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
	      }
	    }
	    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
	      const handlerKey = keyHandlers.replace(stripUidRegex, '');
	      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
	        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
	      }
	    }
	  },
	  trigger(element, event, args) {
	    if (typeof event !== 'string' || !element) {
	      return null;
	    }
	    const $ = getjQuery();
	    const typeEvent = getTypeEvent(event);
	    const inNamespace = event !== typeEvent;
	    let jQueryEvent = null;
	    let bubbles = true;
	    let nativeDispatch = true;
	    let defaultPrevented = false;
	    if (inNamespace && $) {
	      jQueryEvent = $.Event(event, args);
	      $(element).trigger(jQueryEvent);
	      bubbles = !jQueryEvent.isPropagationStopped();
	      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
	      defaultPrevented = jQueryEvent.isDefaultPrevented();
	    }
	    const evt = hydrateObj(new Event(event, {
	      bubbles,
	      cancelable: true
	    }), args);
	    if (defaultPrevented) {
	      evt.preventDefault();
	    }
	    if (nativeDispatch) {
	      element.dispatchEvent(evt);
	    }
	    if (evt.defaultPrevented && jQueryEvent) {
	      jQueryEvent.preventDefault();
	    }
	    return evt;
	  }
	};
	function hydrateObj(obj, meta = {}) {
	  for (const [key, value] of Object.entries(meta)) {
	    try {
	      obj[key] = value;
	    } catch (_unused) {
	      Object.defineProperty(obj, key, {
	        configurable: true,
	        get() {
	          return value;
	        }
	      });
	    }
	  }
	  return obj;
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/manipulator.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	function normalizeData(value) {
	  if (value === 'true') {
	    return true;
	  }
	  if (value === 'false') {
	    return false;
	  }
	  if (value === Number(value).toString()) {
	    return Number(value);
	  }
	  if (value === '' || value === 'null') {
	    return null;
	  }
	  if (typeof value !== 'string') {
	    return value;
	  }
	  try {
	    return JSON.parse(decodeURIComponent(value));
	  } catch (_unused) {
	    return value;
	  }
	}
	function normalizeDataKey(key) {
	  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
	}
	const Manipulator = {
	  setDataAttribute(element, key, value) {
	    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
	  },
	  removeDataAttribute(element, key) {
	    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
	  },
	  getDataAttributes(element) {
	    if (!element) {
	      return {};
	    }
	    const attributes = {};
	    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
	    for (const key of bsKeys) {
	      let pureKey = key.replace(/^bs/, '');
	      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
	      attributes[pureKey] = normalizeData(element.dataset[key]);
	    }
	    return attributes;
	  },
	  getDataAttribute(element, key) {
	    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
	  }
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/config.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Class definition
	 */

	class Config {
	  // Getters
	  static get Default() {
	    return {};
	  }
	  static get DefaultType() {
	    return {};
	  }
	  static get NAME() {
	    throw new Error('You have to implement the static method "NAME", for each component!');
	  }
	  _getConfig(config) {
	    config = this._mergeConfigObj(config);
	    config = this._configAfterMerge(config);
	    this._typeCheckConfig(config);
	    return config;
	  }
	  _configAfterMerge(config) {
	    return config;
	  }
	  _mergeConfigObj(config, element) {
	    const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

	    return {
	      ...this.constructor.Default,
	      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
	      ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
	      ...(typeof config === 'object' ? config : {})
	    };
	  }
	  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
	    for (const [property, expectedTypes] of Object.entries(configTypes)) {
	      const value = config[property];
	      const valueType = isElement(value) ? 'element' : toType(value);
	      if (!new RegExp(expectedTypes).test(valueType)) {
	        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
	      }
	    }
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap base-component.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const VERSION = '5.3.7';

	/**
	 * Class definition
	 */

	class BaseComponent extends Config {
	  constructor(element, config) {
	    super();
	    element = getElement(element);
	    if (!element) {
	      return;
	    }
	    this._element = element;
	    this._config = this._getConfig(config);
	    Data.set(this._element, this.constructor.DATA_KEY, this);
	  }

	  // Public
	  dispose() {
	    Data.remove(this._element, this.constructor.DATA_KEY);
	    EventHandler.off(this._element, this.constructor.EVENT_KEY);
	    for (const propertyName of Object.getOwnPropertyNames(this)) {
	      this[propertyName] = null;
	    }
	  }

	  // Private
	  _queueCallback(callback, element, isAnimated = true) {
	    executeAfterTransition(callback, element, isAnimated);
	  }
	  _getConfig(config) {
	    config = this._mergeConfigObj(config, this._element);
	    config = this._configAfterMerge(config);
	    this._typeCheckConfig(config);
	    return config;
	  }

	  // Static
	  static getInstance(element) {
	    return Data.get(getElement(element), this.DATA_KEY);
	  }
	  static getOrCreateInstance(element, config = {}) {
	    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
	  }
	  static get VERSION() {
	    return VERSION;
	  }
	  static get DATA_KEY() {
	    return `bs.${this.NAME}`;
	  }
	  static get EVENT_KEY() {
	    return `.${this.DATA_KEY}`;
	  }
	  static eventName(name) {
	    return `${name}${this.EVENT_KEY}`;
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/selector-engine.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const getSelector = element => {
	  let selector = element.getAttribute('data-bs-target');
	  if (!selector || selector === '#') {
	    let hrefAttribute = element.getAttribute('href');

	    // The only valid content that could double as a selector are IDs or classes,
	    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
	    // `document.querySelector` will rightfully complain it is invalid.
	    // See https://github.com/twbs/bootstrap/issues/32273
	    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
	      return null;
	    }

	    // Just in case some CMS puts out a full URL with the anchor appended
	    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
	      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
	    }
	    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
	  }
	  return selector ? selector.split(',').map(sel => parseSelector(sel)).join(',') : null;
	};
	const SelectorEngine = {
	  find(selector, element = document.documentElement) {
	    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
	  },
	  findOne(selector, element = document.documentElement) {
	    return Element.prototype.querySelector.call(element, selector);
	  },
	  children(element, selector) {
	    return [].concat(...element.children).filter(child => child.matches(selector));
	  },
	  parents(element, selector) {
	    const parents = [];
	    let ancestor = element.parentNode.closest(selector);
	    while (ancestor) {
	      parents.push(ancestor);
	      ancestor = ancestor.parentNode.closest(selector);
	    }
	    return parents;
	  },
	  prev(element, selector) {
	    let previous = element.previousElementSibling;
	    while (previous) {
	      if (previous.matches(selector)) {
	        return [previous];
	      }
	      previous = previous.previousElementSibling;
	    }
	    return [];
	  },
	  // TODO: this is now unused; remove later along with prev()
	  next(element, selector) {
	    let next = element.nextElementSibling;
	    while (next) {
	      if (next.matches(selector)) {
	        return [next];
	      }
	      next = next.nextElementSibling;
	    }
	    return [];
	  },
	  focusableChildren(element) {
	    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
	    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
	  },
	  getSelectorFromElement(element) {
	    const selector = getSelector(element);
	    if (selector) {
	      return SelectorEngine.findOne(selector) ? selector : null;
	    }
	    return null;
	  },
	  getElementFromSelector(element) {
	    const selector = getSelector(element);
	    return selector ? SelectorEngine.findOne(selector) : null;
	  },
	  getMultipleElementsFromSelector(element) {
	    const selector = getSelector(element);
	    return selector ? SelectorEngine.find(selector) : [];
	  }
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/component-functions.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const enableDismissTrigger = (component, method = 'hide') => {
	  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
	  const name = component.NAME;
	  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
	    if (['A', 'AREA'].includes(this.tagName)) {
	      event.preventDefault();
	    }
	    if (isDisabled(this)) {
	      return;
	    }
	    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
	    const instance = component.getOrCreateInstance(target);

	    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
	    instance[method]();
	  });
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap alert.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$f = 'alert';
	const DATA_KEY$a = 'bs.alert';
	const EVENT_KEY$b = `.${DATA_KEY$a}`;
	const EVENT_CLOSE = `close${EVENT_KEY$b}`;
	const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
	const CLASS_NAME_FADE$5 = 'fade';
	const CLASS_NAME_SHOW$8 = 'show';

	/**
	 * Class definition
	 */

	class Alert extends BaseComponent {
	  // Getters
	  static get NAME() {
	    return NAME$f;
	  }

	  // Public
	  close() {
	    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
	    if (closeEvent.defaultPrevented) {
	      return;
	    }
	    this._element.classList.remove(CLASS_NAME_SHOW$8);
	    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
	    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
	  }

	  // Private
	  _destroyElement() {
	    this._element.remove();
	    EventHandler.trigger(this._element, EVENT_CLOSED);
	    this.dispose();
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Alert.getOrCreateInstance(this);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config](this);
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	enableDismissTrigger(Alert, 'close');

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Alert);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap button.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$e = 'button';
	const DATA_KEY$9 = 'bs.button';
	const EVENT_KEY$a = `.${DATA_KEY$9}`;
	const DATA_API_KEY$6 = '.data-api';
	const CLASS_NAME_ACTIVE$3 = 'active';
	const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
	const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;

	/**
	 * Class definition
	 */

	class Button extends BaseComponent {
	  // Getters
	  static get NAME() {
	    return NAME$e;
	  }

	  // Public
	  toggle() {
	    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
	    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Button.getOrCreateInstance(this);
	      if (config === 'toggle') {
	        data[config]();
	      }
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
	  event.preventDefault();
	  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
	  const data = Button.getOrCreateInstance(button);
	  data.toggle();
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Button);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/swipe.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$d = 'swipe';
	const EVENT_KEY$9 = '.bs.swipe';
	const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
	const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
	const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
	const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
	const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
	const POINTER_TYPE_TOUCH = 'touch';
	const POINTER_TYPE_PEN = 'pen';
	const CLASS_NAME_POINTER_EVENT = 'pointer-event';
	const SWIPE_THRESHOLD = 40;
	const Default$c = {
	  endCallback: null,
	  leftCallback: null,
	  rightCallback: null
	};
	const DefaultType$c = {
	  endCallback: '(function|null)',
	  leftCallback: '(function|null)',
	  rightCallback: '(function|null)'
	};

	/**
	 * Class definition
	 */

	class Swipe extends Config {
	  constructor(element, config) {
	    super();
	    this._element = element;
	    if (!element || !Swipe.isSupported()) {
	      return;
	    }
	    this._config = this._getConfig(config);
	    this._deltaX = 0;
	    this._supportPointerEvents = Boolean(window.PointerEvent);
	    this._initEvents();
	  }

	  // Getters
	  static get Default() {
	    return Default$c;
	  }
	  static get DefaultType() {
	    return DefaultType$c;
	  }
	  static get NAME() {
	    return NAME$d;
	  }

	  // Public
	  dispose() {
	    EventHandler.off(this._element, EVENT_KEY$9);
	  }

	  // Private
	  _start(event) {
	    if (!this._supportPointerEvents) {
	      this._deltaX = event.touches[0].clientX;
	      return;
	    }
	    if (this._eventIsPointerPenTouch(event)) {
	      this._deltaX = event.clientX;
	    }
	  }
	  _end(event) {
	    if (this._eventIsPointerPenTouch(event)) {
	      this._deltaX = event.clientX - this._deltaX;
	    }
	    this._handleSwipe();
	    execute(this._config.endCallback);
	  }
	  _move(event) {
	    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
	  }
	  _handleSwipe() {
	    const absDeltaX = Math.abs(this._deltaX);
	    if (absDeltaX <= SWIPE_THRESHOLD) {
	      return;
	    }
	    const direction = absDeltaX / this._deltaX;
	    this._deltaX = 0;
	    if (!direction) {
	      return;
	    }
	    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
	  }
	  _initEvents() {
	    if (this._supportPointerEvents) {
	      EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
	      EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
	      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
	    } else {
	      EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
	      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
	      EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
	    }
	  }
	  _eventIsPointerPenTouch(event) {
	    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
	  }

	  // Static
	  static isSupported() {
	    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap carousel.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$c = 'carousel';
	const DATA_KEY$8 = 'bs.carousel';
	const EVENT_KEY$8 = `.${DATA_KEY$8}`;
	const DATA_API_KEY$5 = '.data-api';
	const ARROW_LEFT_KEY$1 = 'ArrowLeft';
	const ARROW_RIGHT_KEY$1 = 'ArrowRight';
	const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

	const ORDER_NEXT = 'next';
	const ORDER_PREV = 'prev';
	const DIRECTION_LEFT = 'left';
	const DIRECTION_RIGHT = 'right';
	const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
	const EVENT_SLID = `slid${EVENT_KEY$8}`;
	const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
	const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
	const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
	const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
	const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
	const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
	const CLASS_NAME_CAROUSEL = 'carousel';
	const CLASS_NAME_ACTIVE$2 = 'active';
	const CLASS_NAME_SLIDE = 'slide';
	const CLASS_NAME_END = 'carousel-item-end';
	const CLASS_NAME_START = 'carousel-item-start';
	const CLASS_NAME_NEXT = 'carousel-item-next';
	const CLASS_NAME_PREV = 'carousel-item-prev';
	const SELECTOR_ACTIVE = '.active';
	const SELECTOR_ITEM = '.carousel-item';
	const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
	const SELECTOR_ITEM_IMG = '.carousel-item img';
	const SELECTOR_INDICATORS = '.carousel-indicators';
	const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
	const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
	const KEY_TO_DIRECTION = {
	  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
	  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
	};
	const Default$b = {
	  interval: 5000,
	  keyboard: true,
	  pause: 'hover',
	  ride: false,
	  touch: true,
	  wrap: true
	};
	const DefaultType$b = {
	  interval: '(number|boolean)',
	  // TODO:v6 remove boolean support
	  keyboard: 'boolean',
	  pause: '(string|boolean)',
	  ride: '(boolean|string)',
	  touch: 'boolean',
	  wrap: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Carousel extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);
	    this._interval = null;
	    this._activeElement = null;
	    this._isSliding = false;
	    this.touchTimeout = null;
	    this._swipeHelper = null;
	    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
	    this._addEventListeners();
	    if (this._config.ride === CLASS_NAME_CAROUSEL) {
	      this.cycle();
	    }
	  }

	  // Getters
	  static get Default() {
	    return Default$b;
	  }
	  static get DefaultType() {
	    return DefaultType$b;
	  }
	  static get NAME() {
	    return NAME$c;
	  }

	  // Public
	  next() {
	    this._slide(ORDER_NEXT);
	  }
	  nextWhenVisible() {
	    // FIXME TODO use `document.visibilityState`
	    // Don't call next when the page isn't visible
	    // or the carousel or its parent isn't visible
	    if (!document.hidden && isVisible(this._element)) {
	      this.next();
	    }
	  }
	  prev() {
	    this._slide(ORDER_PREV);
	  }
	  pause() {
	    if (this._isSliding) {
	      triggerTransitionEnd(this._element);
	    }
	    this._clearInterval();
	  }
	  cycle() {
	    this._clearInterval();
	    this._updateInterval();
	    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
	  }
	  _maybeEnableCycle() {
	    if (!this._config.ride) {
	      return;
	    }
	    if (this._isSliding) {
	      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
	      return;
	    }
	    this.cycle();
	  }
	  to(index) {
	    const items = this._getItems();
	    if (index > items.length - 1 || index < 0) {
	      return;
	    }
	    if (this._isSliding) {
	      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
	      return;
	    }
	    const activeIndex = this._getItemIndex(this._getActive());
	    if (activeIndex === index) {
	      return;
	    }
	    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
	    this._slide(order, items[index]);
	  }
	  dispose() {
	    if (this._swipeHelper) {
	      this._swipeHelper.dispose();
	    }
	    super.dispose();
	  }

	  // Private
	  _configAfterMerge(config) {
	    config.defaultInterval = config.interval;
	    return config;
	  }
	  _addEventListeners() {
	    if (this._config.keyboard) {
	      EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
	    }
	    if (this._config.pause === 'hover') {
	      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
	      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
	    }
	    if (this._config.touch && Swipe.isSupported()) {
	      this._addTouchEventListeners();
	    }
	  }
	  _addTouchEventListeners() {
	    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
	      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
	    }
	    const endCallBack = () => {
	      if (this._config.pause !== 'hover') {
	        return;
	      }

	      // If it's a touch-enabled device, mouseenter/leave are fired as
	      // part of the mouse compatibility events on first tap - the carousel
	      // would stop cycling until user tapped out of it;
	      // here, we listen for touchend, explicitly pause the carousel
	      // (as if it's the second time we tap on it, mouseenter compat event
	      // is NOT fired) and after a timeout (to allow for mouse compatibility
	      // events to fire) we explicitly restart cycling

	      this.pause();
	      if (this.touchTimeout) {
	        clearTimeout(this.touchTimeout);
	      }
	      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
	    };
	    const swipeConfig = {
	      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
	      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
	      endCallback: endCallBack
	    };
	    this._swipeHelper = new Swipe(this._element, swipeConfig);
	  }
	  _keydown(event) {
	    if (/input|textarea/i.test(event.target.tagName)) {
	      return;
	    }
	    const direction = KEY_TO_DIRECTION[event.key];
	    if (direction) {
	      event.preventDefault();
	      this._slide(this._directionToOrder(direction));
	    }
	  }
	  _getItemIndex(element) {
	    return this._getItems().indexOf(element);
	  }
	  _setActiveIndicatorElement(index) {
	    if (!this._indicatorsElement) {
	      return;
	    }
	    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
	    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
	    activeIndicator.removeAttribute('aria-current');
	    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
	    if (newActiveIndicator) {
	      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
	      newActiveIndicator.setAttribute('aria-current', 'true');
	    }
	  }
	  _updateInterval() {
	    const element = this._activeElement || this._getActive();
	    if (!element) {
	      return;
	    }
	    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
	    this._config.interval = elementInterval || this._config.defaultInterval;
	  }
	  _slide(order, element = null) {
	    if (this._isSliding) {
	      return;
	    }
	    const activeElement = this._getActive();
	    const isNext = order === ORDER_NEXT;
	    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
	    if (nextElement === activeElement) {
	      return;
	    }
	    const nextElementIndex = this._getItemIndex(nextElement);
	    const triggerEvent = eventName => {
	      return EventHandler.trigger(this._element, eventName, {
	        relatedTarget: nextElement,
	        direction: this._orderToDirection(order),
	        from: this._getItemIndex(activeElement),
	        to: nextElementIndex
	      });
	    };
	    const slideEvent = triggerEvent(EVENT_SLIDE);
	    if (slideEvent.defaultPrevented) {
	      return;
	    }
	    if (!activeElement || !nextElement) {
	      // Some weirdness is happening, so we bail
	      // TODO: change tests that use empty divs to avoid this check
	      return;
	    }
	    const isCycling = Boolean(this._interval);
	    this.pause();
	    this._isSliding = true;
	    this._setActiveIndicatorElement(nextElementIndex);
	    this._activeElement = nextElement;
	    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
	    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
	    nextElement.classList.add(orderClassName);
	    reflow(nextElement);
	    activeElement.classList.add(directionalClassName);
	    nextElement.classList.add(directionalClassName);
	    const completeCallBack = () => {
	      nextElement.classList.remove(directionalClassName, orderClassName);
	      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
	      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
	      this._isSliding = false;
	      triggerEvent(EVENT_SLID);
	    };
	    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
	    if (isCycling) {
	      this.cycle();
	    }
	  }
	  _isAnimated() {
	    return this._element.classList.contains(CLASS_NAME_SLIDE);
	  }
	  _getActive() {
	    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
	  }
	  _getItems() {
	    return SelectorEngine.find(SELECTOR_ITEM, this._element);
	  }
	  _clearInterval() {
	    if (this._interval) {
	      clearInterval(this._interval);
	      this._interval = null;
	    }
	  }
	  _directionToOrder(direction) {
	    if (isRTL()) {
	      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
	    }
	    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
	  }
	  _orderToDirection(order) {
	    if (isRTL()) {
	      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Carousel.getOrCreateInstance(this, config);
	      if (typeof config === 'number') {
	        data.to(config);
	        return;
	      }
	      if (typeof config === 'string') {
	        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	          throw new TypeError(`No method named "${config}"`);
	        }
	        data[config]();
	      }
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
	  const target = SelectorEngine.getElementFromSelector(this);
	  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
	    return;
	  }
	  event.preventDefault();
	  const carousel = Carousel.getOrCreateInstance(target);
	  const slideIndex = this.getAttribute('data-bs-slide-to');
	  if (slideIndex) {
	    carousel.to(slideIndex);
	    carousel._maybeEnableCycle();
	    return;
	  }
	  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
	    carousel.next();
	    carousel._maybeEnableCycle();
	    return;
	  }
	  carousel.prev();
	  carousel._maybeEnableCycle();
	});
	EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
	  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
	  for (const carousel of carousels) {
	    Carousel.getOrCreateInstance(carousel);
	  }
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Carousel);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap collapse.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$b = 'collapse';
	const DATA_KEY$7 = 'bs.collapse';
	const EVENT_KEY$7 = `.${DATA_KEY$7}`;
	const DATA_API_KEY$4 = '.data-api';
	const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
	const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
	const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
	const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
	const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
	const CLASS_NAME_SHOW$7 = 'show';
	const CLASS_NAME_COLLAPSE = 'collapse';
	const CLASS_NAME_COLLAPSING = 'collapsing';
	const CLASS_NAME_COLLAPSED = 'collapsed';
	const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
	const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
	const WIDTH = 'width';
	const HEIGHT = 'height';
	const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
	const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
	const Default$a = {
	  parent: null,
	  toggle: true
	};
	const DefaultType$a = {
	  parent: '(null|element)',
	  toggle: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Collapse extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);
	    this._isTransitioning = false;
	    this._triggerArray = [];
	    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
	    for (const elem of toggleList) {
	      const selector = SelectorEngine.getSelectorFromElement(elem);
	      const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
	      if (selector !== null && filterElement.length) {
	        this._triggerArray.push(elem);
	      }
	    }
	    this._initializeChildren();
	    if (!this._config.parent) {
	      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
	    }
	    if (this._config.toggle) {
	      this.toggle();
	    }
	  }

	  // Getters
	  static get Default() {
	    return Default$a;
	  }
	  static get DefaultType() {
	    return DefaultType$a;
	  }
	  static get NAME() {
	    return NAME$b;
	  }

	  // Public
	  toggle() {
	    if (this._isShown()) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  }
	  show() {
	    if (this._isTransitioning || this._isShown()) {
	      return;
	    }
	    let activeChildren = [];

	    // find active children
	    if (this._config.parent) {
	      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
	        toggle: false
	      }));
	    }
	    if (activeChildren.length && activeChildren[0]._isTransitioning) {
	      return;
	    }
	    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
	    if (startEvent.defaultPrevented) {
	      return;
	    }
	    for (const activeInstance of activeChildren) {
	      activeInstance.hide();
	    }
	    const dimension = this._getDimension();
	    this._element.classList.remove(CLASS_NAME_COLLAPSE);
	    this._element.classList.add(CLASS_NAME_COLLAPSING);
	    this._element.style[dimension] = 0;
	    this._addAriaAndCollapsedClass(this._triggerArray, true);
	    this._isTransitioning = true;
	    const complete = () => {
	      this._isTransitioning = false;
	      this._element.classList.remove(CLASS_NAME_COLLAPSING);
	      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
	      this._element.style[dimension] = '';
	      EventHandler.trigger(this._element, EVENT_SHOWN$6);
	    };
	    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
	    const scrollSize = `scroll${capitalizedDimension}`;
	    this._queueCallback(complete, this._element, true);
	    this._element.style[dimension] = `${this._element[scrollSize]}px`;
	  }
	  hide() {
	    if (this._isTransitioning || !this._isShown()) {
	      return;
	    }
	    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
	    if (startEvent.defaultPrevented) {
	      return;
	    }
	    const dimension = this._getDimension();
	    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
	    reflow(this._element);
	    this._element.classList.add(CLASS_NAME_COLLAPSING);
	    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
	    for (const trigger of this._triggerArray) {
	      const element = SelectorEngine.getElementFromSelector(trigger);
	      if (element && !this._isShown(element)) {
	        this._addAriaAndCollapsedClass([trigger], false);
	      }
	    }
	    this._isTransitioning = true;
	    const complete = () => {
	      this._isTransitioning = false;
	      this._element.classList.remove(CLASS_NAME_COLLAPSING);
	      this._element.classList.add(CLASS_NAME_COLLAPSE);
	      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
	    };
	    this._element.style[dimension] = '';
	    this._queueCallback(complete, this._element, true);
	  }

	  // Private
	  _isShown(element = this._element) {
	    return element.classList.contains(CLASS_NAME_SHOW$7);
	  }
	  _configAfterMerge(config) {
	    config.toggle = Boolean(config.toggle); // Coerce string values
	    config.parent = getElement(config.parent);
	    return config;
	  }
	  _getDimension() {
	    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
	  }
	  _initializeChildren() {
	    if (!this._config.parent) {
	      return;
	    }
	    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
	    for (const element of children) {
	      const selected = SelectorEngine.getElementFromSelector(element);
	      if (selected) {
	        this._addAriaAndCollapsedClass([element], this._isShown(selected));
	      }
	    }
	  }
	  _getFirstLevelChildren(selector) {
	    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
	    // remove children if greater depth
	    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
	  }
	  _addAriaAndCollapsedClass(triggerArray, isOpen) {
	    if (!triggerArray.length) {
	      return;
	    }
	    for (const element of triggerArray) {
	      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
	      element.setAttribute('aria-expanded', isOpen);
	    }
	  }

	  // Static
	  static jQueryInterface(config) {
	    const _config = {};
	    if (typeof config === 'string' && /show|hide/.test(config)) {
	      _config.toggle = false;
	    }
	    return this.each(function () {
	      const data = Collapse.getOrCreateInstance(this, _config);
	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`);
	        }
	        data[config]();
	      }
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
	  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
	  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
	    event.preventDefault();
	  }
	  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
	    Collapse.getOrCreateInstance(element, {
	      toggle: false
	    }).toggle();
	  }
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Collapse);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dropdown.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$a = 'dropdown';
	const DATA_KEY$6 = 'bs.dropdown';
	const EVENT_KEY$6 = `.${DATA_KEY$6}`;
	const DATA_API_KEY$3 = '.data-api';
	const ESCAPE_KEY$2 = 'Escape';
	const TAB_KEY$1 = 'Tab';
	const ARROW_UP_KEY$1 = 'ArrowUp';
	const ARROW_DOWN_KEY$1 = 'ArrowDown';
	const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

	const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
	const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
	const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
	const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
	const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
	const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
	const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
	const CLASS_NAME_SHOW$6 = 'show';
	const CLASS_NAME_DROPUP = 'dropup';
	const CLASS_NAME_DROPEND = 'dropend';
	const CLASS_NAME_DROPSTART = 'dropstart';
	const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
	const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
	const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
	const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
	const SELECTOR_MENU = '.dropdown-menu';
	const SELECTOR_NAVBAR = '.navbar';
	const SELECTOR_NAVBAR_NAV = '.navbar-nav';
	const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
	const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
	const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
	const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
	const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
	const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
	const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
	const PLACEMENT_TOPCENTER = 'top';
	const PLACEMENT_BOTTOMCENTER = 'bottom';
	const Default$9 = {
	  autoClose: true,
	  boundary: 'clippingParents',
	  display: 'dynamic',
	  offset: [0, 2],
	  popperConfig: null,
	  reference: 'toggle'
	};
	const DefaultType$9 = {
	  autoClose: '(boolean|string)',
	  boundary: '(string|element)',
	  display: 'string',
	  offset: '(array|string|function)',
	  popperConfig: '(null|object|function)',
	  reference: '(string|element|object)'
	};

	/**
	 * Class definition
	 */

	class Dropdown extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);
	    this._popper = null;
	    this._parent = this._element.parentNode; // dropdown wrapper
	    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
	    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
	    this._inNavbar = this._detectNavbar();
	  }

	  // Getters
	  static get Default() {
	    return Default$9;
	  }
	  static get DefaultType() {
	    return DefaultType$9;
	  }
	  static get NAME() {
	    return NAME$a;
	  }

	  // Public
	  toggle() {
	    return this._isShown() ? this.hide() : this.show();
	  }
	  show() {
	    if (isDisabled(this._element) || this._isShown()) {
	      return;
	    }
	    const relatedTarget = {
	      relatedTarget: this._element
	    };
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
	    if (showEvent.defaultPrevented) {
	      return;
	    }
	    this._createPopper();

	    // If this is a touch-enabled device we add extra
	    // empty mouseover listeners to the body's immediate children;
	    // only needed because of broken event delegation on iOS
	    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
	    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.on(element, 'mouseover', noop);
	      }
	    }
	    this._element.focus();
	    this._element.setAttribute('aria-expanded', true);
	    this._menu.classList.add(CLASS_NAME_SHOW$6);
	    this._element.classList.add(CLASS_NAME_SHOW$6);
	    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
	  }
	  hide() {
	    if (isDisabled(this._element) || !this._isShown()) {
	      return;
	    }
	    const relatedTarget = {
	      relatedTarget: this._element
	    };
	    this._completeHide(relatedTarget);
	  }
	  dispose() {
	    if (this._popper) {
	      this._popper.destroy();
	    }
	    super.dispose();
	  }
	  update() {
	    this._inNavbar = this._detectNavbar();
	    if (this._popper) {
	      this._popper.update();
	    }
	  }

	  // Private
	  _completeHide(relatedTarget) {
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
	    if (hideEvent.defaultPrevented) {
	      return;
	    }

	    // If this is a touch-enabled device we remove the extra
	    // empty mouseover listeners we added for iOS support
	    if ('ontouchstart' in document.documentElement) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.off(element, 'mouseover', noop);
	      }
	    }
	    if (this._popper) {
	      this._popper.destroy();
	    }
	    this._menu.classList.remove(CLASS_NAME_SHOW$6);
	    this._element.classList.remove(CLASS_NAME_SHOW$6);
	    this._element.setAttribute('aria-expanded', 'false');
	    Manipulator.removeDataAttribute(this._menu, 'popper');
	    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);

	    // Explicitly return focus to the trigger element
	    this._element.focus();
	  }
	  _getConfig(config) {
	    config = super._getConfig(config);
	    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
	      // Popper virtual elements require a getBoundingClientRect method
	      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
	    }
	    return config;
	  }
	  _createPopper() {
	    if (typeof Popper === 'undefined') {
	      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org/docs/v2/)');
	    }
	    let referenceElement = this._element;
	    if (this._config.reference === 'parent') {
	      referenceElement = this._parent;
	    } else if (isElement(this._config.reference)) {
	      referenceElement = getElement(this._config.reference);
	    } else if (typeof this._config.reference === 'object') {
	      referenceElement = this._config.reference;
	    }
	    const popperConfig = this._getPopperConfig();
	    this._popper = createPopper(referenceElement, this._menu, popperConfig);
	  }
	  _isShown() {
	    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
	  }
	  _getPlacement() {
	    const parentDropdown = this._parent;
	    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
	      return PLACEMENT_RIGHT;
	    }
	    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
	      return PLACEMENT_LEFT;
	    }
	    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
	      return PLACEMENT_TOPCENTER;
	    }
	    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
	      return PLACEMENT_BOTTOMCENTER;
	    }

	    // We need to trim the value because custom properties can also include spaces
	    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
	    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
	      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
	    }
	    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
	  }
	  _detectNavbar() {
	    return this._element.closest(SELECTOR_NAVBAR) !== null;
	  }
	  _getOffset() {
	    const {
	      offset
	    } = this._config;
	    if (typeof offset === 'string') {
	      return offset.split(',').map(value => Number.parseInt(value, 10));
	    }
	    if (typeof offset === 'function') {
	      return popperData => offset(popperData, this._element);
	    }
	    return offset;
	  }
	  _getPopperConfig() {
	    const defaultBsPopperConfig = {
	      placement: this._getPlacement(),
	      modifiers: [{
	        name: 'preventOverflow',
	        options: {
	          boundary: this._config.boundary
	        }
	      }, {
	        name: 'offset',
	        options: {
	          offset: this._getOffset()
	        }
	      }]
	    };

	    // Disable Popper if we have a static display or Dropdown is in Navbar
	    if (this._inNavbar || this._config.display === 'static') {
	      Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
	      defaultBsPopperConfig.modifiers = [{
	        name: 'applyStyles',
	        enabled: false
	      }];
	    }
	    return {
	      ...defaultBsPopperConfig,
	      ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])
	    };
	  }
	  _selectMenuItem({
	    key,
	    target
	  }) {
	    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
	    if (!items.length) {
	      return;
	    }

	    // if target isn't included in items (e.g. when expanding the dropdown)
	    // allow cycling to get the last item in case key equals ARROW_UP_KEY
	    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Dropdown.getOrCreateInstance(this, config);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config]();
	    });
	  }
	  static clearMenus(event) {
	    if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
	      return;
	    }
	    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
	    for (const toggle of openToggles) {
	      const context = Dropdown.getInstance(toggle);
	      if (!context || context._config.autoClose === false) {
	        continue;
	      }
	      const composedPath = event.composedPath();
	      const isMenuTarget = composedPath.includes(context._menu);
	      if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
	        continue;
	      }

	      // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
	      if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
	        continue;
	      }
	      const relatedTarget = {
	        relatedTarget: context._element
	      };
	      if (event.type === 'click') {
	        relatedTarget.clickEvent = event;
	      }
	      context._completeHide(relatedTarget);
	    }
	  }
	  static dataApiKeydownHandler(event) {
	    // If not an UP | DOWN | ESCAPE key => not a dropdown command
	    // If input/textarea && if key is other than ESCAPE => not a dropdown command

	    const isInput = /input|textarea/i.test(event.target.tagName);
	    const isEscapeEvent = event.key === ESCAPE_KEY$2;
	    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
	    if (!isUpOrDownEvent && !isEscapeEvent) {
	      return;
	    }
	    if (isInput && !isEscapeEvent) {
	      return;
	    }
	    event.preventDefault();

	    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
	    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
	    const instance = Dropdown.getOrCreateInstance(getToggleButton);
	    if (isUpOrDownEvent) {
	      event.stopPropagation();
	      instance.show();
	      instance._selectMenuItem(event);
	      return;
	    }
	    if (instance._isShown()) {
	      // else is escape and we check if it is shown
	      event.stopPropagation();
	      instance.hide();
	      getToggleButton.focus();
	    }
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
	EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
	EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
	EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
	EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
	  event.preventDefault();
	  Dropdown.getOrCreateInstance(this).toggle();
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Dropdown);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/backdrop.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$9 = 'backdrop';
	const CLASS_NAME_FADE$4 = 'fade';
	const CLASS_NAME_SHOW$5 = 'show';
	const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
	const Default$8 = {
	  className: 'modal-backdrop',
	  clickCallback: null,
	  isAnimated: false,
	  isVisible: true,
	  // if false, we use the backdrop helper without adding any element to the dom
	  rootElement: 'body' // give the choice to place backdrop under different elements
	};
	const DefaultType$8 = {
	  className: 'string',
	  clickCallback: '(function|null)',
	  isAnimated: 'boolean',
	  isVisible: 'boolean',
	  rootElement: '(element|string)'
	};

	/**
	 * Class definition
	 */

	class Backdrop extends Config {
	  constructor(config) {
	    super();
	    this._config = this._getConfig(config);
	    this._isAppended = false;
	    this._element = null;
	  }

	  // Getters
	  static get Default() {
	    return Default$8;
	  }
	  static get DefaultType() {
	    return DefaultType$8;
	  }
	  static get NAME() {
	    return NAME$9;
	  }

	  // Public
	  show(callback) {
	    if (!this._config.isVisible) {
	      execute(callback);
	      return;
	    }
	    this._append();
	    const element = this._getElement();
	    if (this._config.isAnimated) {
	      reflow(element);
	    }
	    element.classList.add(CLASS_NAME_SHOW$5);
	    this._emulateAnimation(() => {
	      execute(callback);
	    });
	  }
	  hide(callback) {
	    if (!this._config.isVisible) {
	      execute(callback);
	      return;
	    }
	    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
	    this._emulateAnimation(() => {
	      this.dispose();
	      execute(callback);
	    });
	  }
	  dispose() {
	    if (!this._isAppended) {
	      return;
	    }
	    EventHandler.off(this._element, EVENT_MOUSEDOWN);
	    this._element.remove();
	    this._isAppended = false;
	  }

	  // Private
	  _getElement() {
	    if (!this._element) {
	      const backdrop = document.createElement('div');
	      backdrop.className = this._config.className;
	      if (this._config.isAnimated) {
	        backdrop.classList.add(CLASS_NAME_FADE$4);
	      }
	      this._element = backdrop;
	    }
	    return this._element;
	  }
	  _configAfterMerge(config) {
	    // use getElement() with the default "body" to get a fresh Element on each instantiation
	    config.rootElement = getElement(config.rootElement);
	    return config;
	  }
	  _append() {
	    if (this._isAppended) {
	      return;
	    }
	    const element = this._getElement();
	    this._config.rootElement.append(element);
	    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
	      execute(this._config.clickCallback);
	    });
	    this._isAppended = true;
	  }
	  _emulateAnimation(callback) {
	    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/focustrap.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$8 = 'focustrap';
	const DATA_KEY$5 = 'bs.focustrap';
	const EVENT_KEY$5 = `.${DATA_KEY$5}`;
	const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
	const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
	const TAB_KEY = 'Tab';
	const TAB_NAV_FORWARD = 'forward';
	const TAB_NAV_BACKWARD = 'backward';
	const Default$7 = {
	  autofocus: true,
	  trapElement: null // The element to trap focus inside of
	};
	const DefaultType$7 = {
	  autofocus: 'boolean',
	  trapElement: 'element'
	};

	/**
	 * Class definition
	 */

	class FocusTrap extends Config {
	  constructor(config) {
	    super();
	    this._config = this._getConfig(config);
	    this._isActive = false;
	    this._lastTabNavDirection = null;
	  }

	  // Getters
	  static get Default() {
	    return Default$7;
	  }
	  static get DefaultType() {
	    return DefaultType$7;
	  }
	  static get NAME() {
	    return NAME$8;
	  }

	  // Public
	  activate() {
	    if (this._isActive) {
	      return;
	    }
	    if (this._config.autofocus) {
	      this._config.trapElement.focus();
	    }
	    EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
	    EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
	    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
	    this._isActive = true;
	  }
	  deactivate() {
	    if (!this._isActive) {
	      return;
	    }
	    this._isActive = false;
	    EventHandler.off(document, EVENT_KEY$5);
	  }

	  // Private
	  _handleFocusin(event) {
	    const {
	      trapElement
	    } = this._config;
	    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
	      return;
	    }
	    const elements = SelectorEngine.focusableChildren(trapElement);
	    if (elements.length === 0) {
	      trapElement.focus();
	    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
	      elements[elements.length - 1].focus();
	    } else {
	      elements[0].focus();
	    }
	  }
	  _handleKeydown(event) {
	    if (event.key !== TAB_KEY) {
	      return;
	    }
	    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/scrollBar.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
	const SELECTOR_STICKY_CONTENT = '.sticky-top';
	const PROPERTY_PADDING = 'padding-right';
	const PROPERTY_MARGIN = 'margin-right';

	/**
	 * Class definition
	 */

	class ScrollBarHelper {
	  constructor() {
	    this._element = document.body;
	  }

	  // Public
	  getWidth() {
	    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
	    const documentWidth = document.documentElement.clientWidth;
	    return Math.abs(window.innerWidth - documentWidth);
	  }
	  hide() {
	    const width = this.getWidth();
	    this._disableOverFlow();
	    // give padding to element to balance the hidden scrollbar width
	    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
	    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
	    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
	    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
	  }
	  reset() {
	    this._resetElementAttributes(this._element, 'overflow');
	    this._resetElementAttributes(this._element, PROPERTY_PADDING);
	    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
	    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
	  }
	  isOverflowing() {
	    return this.getWidth() > 0;
	  }

	  // Private
	  _disableOverFlow() {
	    this._saveInitialAttribute(this._element, 'overflow');
	    this._element.style.overflow = 'hidden';
	  }
	  _setElementAttributes(selector, styleProperty, callback) {
	    const scrollbarWidth = this.getWidth();
	    const manipulationCallBack = element => {
	      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
	        return;
	      }
	      this._saveInitialAttribute(element, styleProperty);
	      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
	      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
	    };
	    this._applyManipulationCallback(selector, manipulationCallBack);
	  }
	  _saveInitialAttribute(element, styleProperty) {
	    const actualValue = element.style.getPropertyValue(styleProperty);
	    if (actualValue) {
	      Manipulator.setDataAttribute(element, styleProperty, actualValue);
	    }
	  }
	  _resetElementAttributes(selector, styleProperty) {
	    const manipulationCallBack = element => {
	      const value = Manipulator.getDataAttribute(element, styleProperty);
	      // We only want to remove the property if the value is `null`; the value can also be zero
	      if (value === null) {
	        element.style.removeProperty(styleProperty);
	        return;
	      }
	      Manipulator.removeDataAttribute(element, styleProperty);
	      element.style.setProperty(styleProperty, value);
	    };
	    this._applyManipulationCallback(selector, manipulationCallBack);
	  }
	  _applyManipulationCallback(selector, callBack) {
	    if (isElement(selector)) {
	      callBack(selector);
	      return;
	    }
	    for (const sel of SelectorEngine.find(selector, this._element)) {
	      callBack(sel);
	    }
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$7 = 'modal';
	const DATA_KEY$4 = 'bs.modal';
	const EVENT_KEY$4 = `.${DATA_KEY$4}`;
	const DATA_API_KEY$2 = '.data-api';
	const ESCAPE_KEY$1 = 'Escape';
	const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
	const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
	const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
	const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
	const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
	const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
	const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
	const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
	const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
	const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
	const CLASS_NAME_OPEN = 'modal-open';
	const CLASS_NAME_FADE$3 = 'fade';
	const CLASS_NAME_SHOW$4 = 'show';
	const CLASS_NAME_STATIC = 'modal-static';
	const OPEN_SELECTOR$1 = '.modal.show';
	const SELECTOR_DIALOG = '.modal-dialog';
	const SELECTOR_MODAL_BODY = '.modal-body';
	const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
	const Default$6 = {
	  backdrop: true,
	  focus: true,
	  keyboard: true
	};
	const DefaultType$6 = {
	  backdrop: '(boolean|string)',
	  focus: 'boolean',
	  keyboard: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Modal extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);
	    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
	    this._backdrop = this._initializeBackDrop();
	    this._focustrap = this._initializeFocusTrap();
	    this._isShown = false;
	    this._isTransitioning = false;
	    this._scrollBar = new ScrollBarHelper();
	    this._addEventListeners();
	  }

	  // Getters
	  static get Default() {
	    return Default$6;
	  }
	  static get DefaultType() {
	    return DefaultType$6;
	  }
	  static get NAME() {
	    return NAME$7;
	  }

	  // Public
	  toggle(relatedTarget) {
	    return this._isShown ? this.hide() : this.show(relatedTarget);
	  }
	  show(relatedTarget) {
	    if (this._isShown || this._isTransitioning) {
	      return;
	    }
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
	      relatedTarget
	    });
	    if (showEvent.defaultPrevented) {
	      return;
	    }
	    this._isShown = true;
	    this._isTransitioning = true;
	    this._scrollBar.hide();
	    document.body.classList.add(CLASS_NAME_OPEN);
	    this._adjustDialog();
	    this._backdrop.show(() => this._showElement(relatedTarget));
	  }
	  hide() {
	    if (!this._isShown || this._isTransitioning) {
	      return;
	    }
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
	    if (hideEvent.defaultPrevented) {
	      return;
	    }
	    this._isShown = false;
	    this._isTransitioning = true;
	    this._focustrap.deactivate();
	    this._element.classList.remove(CLASS_NAME_SHOW$4);
	    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
	  }
	  dispose() {
	    EventHandler.off(window, EVENT_KEY$4);
	    EventHandler.off(this._dialog, EVENT_KEY$4);
	    this._backdrop.dispose();
	    this._focustrap.deactivate();
	    super.dispose();
	  }
	  handleUpdate() {
	    this._adjustDialog();
	  }

	  // Private
	  _initializeBackDrop() {
	    return new Backdrop({
	      isVisible: Boolean(this._config.backdrop),
	      // 'static' option will be translated to true, and booleans will keep their value,
	      isAnimated: this._isAnimated()
	    });
	  }
	  _initializeFocusTrap() {
	    return new FocusTrap({
	      trapElement: this._element
	    });
	  }
	  _showElement(relatedTarget) {
	    // try to append dynamic modal
	    if (!document.body.contains(this._element)) {
	      document.body.append(this._element);
	    }
	    this._element.style.display = 'block';
	    this._element.removeAttribute('aria-hidden');
	    this._element.setAttribute('aria-modal', true);
	    this._element.setAttribute('role', 'dialog');
	    this._element.scrollTop = 0;
	    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
	    if (modalBody) {
	      modalBody.scrollTop = 0;
	    }
	    reflow(this._element);
	    this._element.classList.add(CLASS_NAME_SHOW$4);
	    const transitionComplete = () => {
	      if (this._config.focus) {
	        this._focustrap.activate();
	      }
	      this._isTransitioning = false;
	      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
	        relatedTarget
	      });
	    };
	    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
	  }
	  _addEventListeners() {
	    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
	      if (event.key !== ESCAPE_KEY$1) {
	        return;
	      }
	      if (this._config.keyboard) {
	        this.hide();
	        return;
	      }
	      this._triggerBackdropTransition();
	    });
	    EventHandler.on(window, EVENT_RESIZE$1, () => {
	      if (this._isShown && !this._isTransitioning) {
	        this._adjustDialog();
	      }
	    });
	    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
	      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
	      EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
	        if (this._element !== event.target || this._element !== event2.target) {
	          return;
	        }
	        if (this._config.backdrop === 'static') {
	          this._triggerBackdropTransition();
	          return;
	        }
	        if (this._config.backdrop) {
	          this.hide();
	        }
	      });
	    });
	  }
	  _hideModal() {
	    this._element.style.display = 'none';
	    this._element.setAttribute('aria-hidden', true);
	    this._element.removeAttribute('aria-modal');
	    this._element.removeAttribute('role');
	    this._isTransitioning = false;
	    this._backdrop.hide(() => {
	      document.body.classList.remove(CLASS_NAME_OPEN);
	      this._resetAdjustments();
	      this._scrollBar.reset();
	      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
	    });
	  }
	  _isAnimated() {
	    return this._element.classList.contains(CLASS_NAME_FADE$3);
	  }
	  _triggerBackdropTransition() {
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
	    if (hideEvent.defaultPrevented) {
	      return;
	    }
	    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
	    const initialOverflowY = this._element.style.overflowY;
	    // return if the following background transition hasn't yet completed
	    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
	      return;
	    }
	    if (!isModalOverflowing) {
	      this._element.style.overflowY = 'hidden';
	    }
	    this._element.classList.add(CLASS_NAME_STATIC);
	    this._queueCallback(() => {
	      this._element.classList.remove(CLASS_NAME_STATIC);
	      this._queueCallback(() => {
	        this._element.style.overflowY = initialOverflowY;
	      }, this._dialog);
	    }, this._dialog);
	    this._element.focus();
	  }

	  /**
	   * The following methods are used to handle overflowing modals
	   */

	  _adjustDialog() {
	    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
	    const scrollbarWidth = this._scrollBar.getWidth();
	    const isBodyOverflowing = scrollbarWidth > 0;
	    if (isBodyOverflowing && !isModalOverflowing) {
	      const property = isRTL() ? 'paddingLeft' : 'paddingRight';
	      this._element.style[property] = `${scrollbarWidth}px`;
	    }
	    if (!isBodyOverflowing && isModalOverflowing) {
	      const property = isRTL() ? 'paddingRight' : 'paddingLeft';
	      this._element.style[property] = `${scrollbarWidth}px`;
	    }
	  }
	  _resetAdjustments() {
	    this._element.style.paddingLeft = '';
	    this._element.style.paddingRight = '';
	  }

	  // Static
	  static jQueryInterface(config, relatedTarget) {
	    return this.each(function () {
	      const data = Modal.getOrCreateInstance(this, config);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config](relatedTarget);
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
	  const target = SelectorEngine.getElementFromSelector(this);
	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }
	  EventHandler.one(target, EVENT_SHOW$4, showEvent => {
	    if (showEvent.defaultPrevented) {
	      // only register focus restorer if modal will actually get shown
	      return;
	    }
	    EventHandler.one(target, EVENT_HIDDEN$4, () => {
	      if (isVisible(this)) {
	        this.focus();
	      }
	    });
	  });

	  // avoid conflict when clicking modal toggler while another one is open
	  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
	  if (alreadyOpen) {
	    Modal.getInstance(alreadyOpen).hide();
	  }
	  const data = Modal.getOrCreateInstance(target);
	  data.toggle(this);
	});
	enableDismissTrigger(Modal);

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Modal);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap offcanvas.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$6 = 'offcanvas';
	const DATA_KEY$3 = 'bs.offcanvas';
	const EVENT_KEY$3 = `.${DATA_KEY$3}`;
	const DATA_API_KEY$1 = '.data-api';
	const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
	const ESCAPE_KEY = 'Escape';
	const CLASS_NAME_SHOW$3 = 'show';
	const CLASS_NAME_SHOWING$1 = 'showing';
	const CLASS_NAME_HIDING = 'hiding';
	const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
	const OPEN_SELECTOR = '.offcanvas.show';
	const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
	const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
	const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
	const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
	const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
	const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
	const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
	const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
	const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
	const Default$5 = {
	  backdrop: true,
	  keyboard: true,
	  scroll: false
	};
	const DefaultType$5 = {
	  backdrop: '(boolean|string)',
	  keyboard: 'boolean',
	  scroll: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Offcanvas extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);
	    this._isShown = false;
	    this._backdrop = this._initializeBackDrop();
	    this._focustrap = this._initializeFocusTrap();
	    this._addEventListeners();
	  }

	  // Getters
	  static get Default() {
	    return Default$5;
	  }
	  static get DefaultType() {
	    return DefaultType$5;
	  }
	  static get NAME() {
	    return NAME$6;
	  }

	  // Public
	  toggle(relatedTarget) {
	    return this._isShown ? this.hide() : this.show(relatedTarget);
	  }
	  show(relatedTarget) {
	    if (this._isShown) {
	      return;
	    }
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
	      relatedTarget
	    });
	    if (showEvent.defaultPrevented) {
	      return;
	    }
	    this._isShown = true;
	    this._backdrop.show();
	    if (!this._config.scroll) {
	      new ScrollBarHelper().hide();
	    }
	    this._element.setAttribute('aria-modal', true);
	    this._element.setAttribute('role', 'dialog');
	    this._element.classList.add(CLASS_NAME_SHOWING$1);
	    const completeCallBack = () => {
	      if (!this._config.scroll || this._config.backdrop) {
	        this._focustrap.activate();
	      }
	      this._element.classList.add(CLASS_NAME_SHOW$3);
	      this._element.classList.remove(CLASS_NAME_SHOWING$1);
	      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
	        relatedTarget
	      });
	    };
	    this._queueCallback(completeCallBack, this._element, true);
	  }
	  hide() {
	    if (!this._isShown) {
	      return;
	    }
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
	    if (hideEvent.defaultPrevented) {
	      return;
	    }
	    this._focustrap.deactivate();
	    this._element.blur();
	    this._isShown = false;
	    this._element.classList.add(CLASS_NAME_HIDING);
	    this._backdrop.hide();
	    const completeCallback = () => {
	      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
	      this._element.removeAttribute('aria-modal');
	      this._element.removeAttribute('role');
	      if (!this._config.scroll) {
	        new ScrollBarHelper().reset();
	      }
	      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
	    };
	    this._queueCallback(completeCallback, this._element, true);
	  }
	  dispose() {
	    this._backdrop.dispose();
	    this._focustrap.deactivate();
	    super.dispose();
	  }

	  // Private
	  _initializeBackDrop() {
	    const clickCallback = () => {
	      if (this._config.backdrop === 'static') {
	        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
	        return;
	      }
	      this.hide();
	    };

	    // 'static' option will be translated to true, and booleans will keep their value
	    const isVisible = Boolean(this._config.backdrop);
	    return new Backdrop({
	      className: CLASS_NAME_BACKDROP,
	      isVisible,
	      isAnimated: true,
	      rootElement: this._element.parentNode,
	      clickCallback: isVisible ? clickCallback : null
	    });
	  }
	  _initializeFocusTrap() {
	    return new FocusTrap({
	      trapElement: this._element
	    });
	  }
	  _addEventListeners() {
	    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
	      if (event.key !== ESCAPE_KEY) {
	        return;
	      }
	      if (this._config.keyboard) {
	        this.hide();
	        return;
	      }
	      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
	    });
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Offcanvas.getOrCreateInstance(this, config);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config](this);
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
	  const target = SelectorEngine.getElementFromSelector(this);
	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }
	  if (isDisabled(this)) {
	    return;
	  }
	  EventHandler.one(target, EVENT_HIDDEN$3, () => {
	    // focus on trigger when it is closed
	    if (isVisible(this)) {
	      this.focus();
	    }
	  });

	  // avoid conflict when clicking a toggler of an offcanvas, while another is open
	  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
	  if (alreadyOpen && alreadyOpen !== target) {
	    Offcanvas.getInstance(alreadyOpen).hide();
	  }
	  const data = Offcanvas.getOrCreateInstance(target);
	  data.toggle(this);
	});
	EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
	  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
	    Offcanvas.getOrCreateInstance(selector).show();
	  }
	});
	EventHandler.on(window, EVENT_RESIZE, () => {
	  for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
	    if (getComputedStyle(element).position !== 'fixed') {
	      Offcanvas.getOrCreateInstance(element).hide();
	    }
	  }
	});
	enableDismissTrigger(Offcanvas);

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Offcanvas);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/sanitizer.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	// js-docs-start allow-list
	const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
	const DefaultAllowlist = {
	  // Global attributes allowed on any supplied element below.
	  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
	  a: ['target', 'href', 'title', 'rel'],
	  area: [],
	  b: [],
	  br: [],
	  col: [],
	  code: [],
	  dd: [],
	  div: [],
	  dl: [],
	  dt: [],
	  em: [],
	  hr: [],
	  h1: [],
	  h2: [],
	  h3: [],
	  h4: [],
	  h5: [],
	  h6: [],
	  i: [],
	  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
	  li: [],
	  ol: [],
	  p: [],
	  pre: [],
	  s: [],
	  small: [],
	  span: [],
	  sub: [],
	  sup: [],
	  strong: [],
	  u: [],
	  ul: []
	};
	// js-docs-end allow-list

	const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

	/**
	 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
	 * contexts.
	 *
	 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
	 */
	const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
	const allowedAttribute = (attribute, allowedAttributeList) => {
	  const attributeName = attribute.nodeName.toLowerCase();
	  if (allowedAttributeList.includes(attributeName)) {
	    if (uriAttributes.has(attributeName)) {
	      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
	    }
	    return true;
	  }

	  // Check if a regular expression validates the attribute.
	  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
	};
	function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
	  if (!unsafeHtml.length) {
	    return unsafeHtml;
	  }
	  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
	    return sanitizeFunction(unsafeHtml);
	  }
	  const domParser = new window.DOMParser();
	  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
	  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
	  for (const element of elements) {
	    const elementName = element.nodeName.toLowerCase();
	    if (!Object.keys(allowList).includes(elementName)) {
	      element.remove();
	      continue;
	    }
	    const attributeList = [].concat(...element.attributes);
	    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
	    for (const attribute of attributeList) {
	      if (!allowedAttribute(attribute, allowedAttributes)) {
	        element.removeAttribute(attribute.nodeName);
	      }
	    }
	  }
	  return createdDocument.body.innerHTML;
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/template-factory.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$5 = 'TemplateFactory';
	const Default$4 = {
	  allowList: DefaultAllowlist,
	  content: {},
	  // { selector : text ,  selector2 : text2 , }
	  extraClass: '',
	  html: false,
	  sanitize: true,
	  sanitizeFn: null,
	  template: '<div></div>'
	};
	const DefaultType$4 = {
	  allowList: 'object',
	  content: 'object',
	  extraClass: '(string|function)',
	  html: 'boolean',
	  sanitize: 'boolean',
	  sanitizeFn: '(null|function)',
	  template: 'string'
	};
	const DefaultContentType = {
	  entry: '(string|element|function|null)',
	  selector: '(string|element)'
	};

	/**
	 * Class definition
	 */

	class TemplateFactory extends Config {
	  constructor(config) {
	    super();
	    this._config = this._getConfig(config);
	  }

	  // Getters
	  static get Default() {
	    return Default$4;
	  }
	  static get DefaultType() {
	    return DefaultType$4;
	  }
	  static get NAME() {
	    return NAME$5;
	  }

	  // Public
	  getContent() {
	    return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
	  }
	  hasContent() {
	    return this.getContent().length > 0;
	  }
	  changeContent(content) {
	    this._checkContent(content);
	    this._config.content = {
	      ...this._config.content,
	      ...content
	    };
	    return this;
	  }
	  toHtml() {
	    const templateWrapper = document.createElement('div');
	    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
	    for (const [selector, text] of Object.entries(this._config.content)) {
	      this._setContent(templateWrapper, text, selector);
	    }
	    const template = templateWrapper.children[0];
	    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
	    if (extraClass) {
	      template.classList.add(...extraClass.split(' '));
	    }
	    return template;
	  }

	  // Private
	  _typeCheckConfig(config) {
	    super._typeCheckConfig(config);
	    this._checkContent(config.content);
	  }
	  _checkContent(arg) {
	    for (const [selector, content] of Object.entries(arg)) {
	      super._typeCheckConfig({
	        selector,
	        entry: content
	      }, DefaultContentType);
	    }
	  }
	  _setContent(template, content, selector) {
	    const templateElement = SelectorEngine.findOne(selector, template);
	    if (!templateElement) {
	      return;
	    }
	    content = this._resolvePossibleFunction(content);
	    if (!content) {
	      templateElement.remove();
	      return;
	    }
	    if (isElement(content)) {
	      this._putElementInTemplate(getElement(content), templateElement);
	      return;
	    }
	    if (this._config.html) {
	      templateElement.innerHTML = this._maybeSanitize(content);
	      return;
	    }
	    templateElement.textContent = content;
	  }
	  _maybeSanitize(arg) {
	    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
	  }
	  _resolvePossibleFunction(arg) {
	    return execute(arg, [undefined, this]);
	  }
	  _putElementInTemplate(element, templateElement) {
	    if (this._config.html) {
	      templateElement.innerHTML = '';
	      templateElement.append(element);
	      return;
	    }
	    templateElement.textContent = element.textContent;
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap tooltip.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$4 = 'tooltip';
	const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
	const CLASS_NAME_FADE$2 = 'fade';
	const CLASS_NAME_MODAL = 'modal';
	const CLASS_NAME_SHOW$2 = 'show';
	const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
	const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
	const EVENT_MODAL_HIDE = 'hide.bs.modal';
	const TRIGGER_HOVER = 'hover';
	const TRIGGER_FOCUS = 'focus';
	const TRIGGER_CLICK = 'click';
	const TRIGGER_MANUAL = 'manual';
	const EVENT_HIDE$2 = 'hide';
	const EVENT_HIDDEN$2 = 'hidden';
	const EVENT_SHOW$2 = 'show';
	const EVENT_SHOWN$2 = 'shown';
	const EVENT_INSERTED = 'inserted';
	const EVENT_CLICK$1 = 'click';
	const EVENT_FOCUSIN$1 = 'focusin';
	const EVENT_FOCUSOUT$1 = 'focusout';
	const EVENT_MOUSEENTER = 'mouseenter';
	const EVENT_MOUSELEAVE = 'mouseleave';
	const AttachmentMap = {
	  AUTO: 'auto',
	  TOP: 'top',
	  RIGHT: isRTL() ? 'left' : 'right',
	  BOTTOM: 'bottom',
	  LEFT: isRTL() ? 'right' : 'left'
	};
	const Default$3 = {
	  allowList: DefaultAllowlist,
	  animation: true,
	  boundary: 'clippingParents',
	  container: false,
	  customClass: '',
	  delay: 0,
	  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
	  html: false,
	  offset: [0, 6],
	  placement: 'top',
	  popperConfig: null,
	  sanitize: true,
	  sanitizeFn: null,
	  selector: false,
	  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
	  title: '',
	  trigger: 'hover focus'
	};
	const DefaultType$3 = {
	  allowList: 'object',
	  animation: 'boolean',
	  boundary: '(string|element)',
	  container: '(string|element|boolean)',
	  customClass: '(string|function)',
	  delay: '(number|object)',
	  fallbackPlacements: 'array',
	  html: 'boolean',
	  offset: '(array|string|function)',
	  placement: '(string|function)',
	  popperConfig: '(null|object|function)',
	  sanitize: 'boolean',
	  sanitizeFn: '(null|function)',
	  selector: '(string|boolean)',
	  template: 'string',
	  title: '(string|element|function)',
	  trigger: 'string'
	};

	/**
	 * Class definition
	 */

	class Tooltip extends BaseComponent {
	  constructor(element, config) {
	    if (typeof Popper === 'undefined') {
	      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org/docs/v2/)');
	    }
	    super(element, config);

	    // Private
	    this._isEnabled = true;
	    this._timeout = 0;
	    this._isHovered = null;
	    this._activeTrigger = {};
	    this._popper = null;
	    this._templateFactory = null;
	    this._newContent = null;

	    // Protected
	    this.tip = null;
	    this._setListeners();
	    if (!this._config.selector) {
	      this._fixTitle();
	    }
	  }

	  // Getters
	  static get Default() {
	    return Default$3;
	  }
	  static get DefaultType() {
	    return DefaultType$3;
	  }
	  static get NAME() {
	    return NAME$4;
	  }

	  // Public
	  enable() {
	    this._isEnabled = true;
	  }
	  disable() {
	    this._isEnabled = false;
	  }
	  toggleEnabled() {
	    this._isEnabled = !this._isEnabled;
	  }
	  toggle() {
	    if (!this._isEnabled) {
	      return;
	    }
	    if (this._isShown()) {
	      this._leave();
	      return;
	    }
	    this._enter();
	  }
	  dispose() {
	    clearTimeout(this._timeout);
	    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
	    if (this._element.getAttribute('data-bs-original-title')) {
	      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
	    }
	    this._disposePopper();
	    super.dispose();
	  }
	  show() {
	    if (this._element.style.display === 'none') {
	      throw new Error('Please use show on visible elements');
	    }
	    if (!(this._isWithContent() && this._isEnabled)) {
	      return;
	    }
	    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
	    const shadowRoot = findShadowRoot(this._element);
	    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
	    if (showEvent.defaultPrevented || !isInTheDom) {
	      return;
	    }

	    // TODO: v6 remove this or make it optional
	    this._disposePopper();
	    const tip = this._getTipElement();
	    this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
	    const {
	      container
	    } = this._config;
	    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
	      container.append(tip);
	      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
	    }
	    this._popper = this._createPopper(tip);
	    tip.classList.add(CLASS_NAME_SHOW$2);

	    // If this is a touch-enabled device we add extra
	    // empty mouseover listeners to the body's immediate children;
	    // only needed because of broken event delegation on iOS
	    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
	    if ('ontouchstart' in document.documentElement) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.on(element, 'mouseover', noop);
	      }
	    }
	    const complete = () => {
	      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
	      if (this._isHovered === false) {
	        this._leave();
	      }
	      this._isHovered = false;
	    };
	    this._queueCallback(complete, this.tip, this._isAnimated());
	  }
	  hide() {
	    if (!this._isShown()) {
	      return;
	    }
	    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
	    if (hideEvent.defaultPrevented) {
	      return;
	    }
	    const tip = this._getTipElement();
	    tip.classList.remove(CLASS_NAME_SHOW$2);

	    // If this is a touch-enabled device we remove the extra
	    // empty mouseover listeners we added for iOS support
	    if ('ontouchstart' in document.documentElement) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.off(element, 'mouseover', noop);
	      }
	    }
	    this._activeTrigger[TRIGGER_CLICK] = false;
	    this._activeTrigger[TRIGGER_FOCUS] = false;
	    this._activeTrigger[TRIGGER_HOVER] = false;
	    this._isHovered = null; // it is a trick to support manual triggering

	    const complete = () => {
	      if (this._isWithActiveTrigger()) {
	        return;
	      }
	      if (!this._isHovered) {
	        this._disposePopper();
	      }
	      this._element.removeAttribute('aria-describedby');
	      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
	    };
	    this._queueCallback(complete, this.tip, this._isAnimated());
	  }
	  update() {
	    if (this._popper) {
	      this._popper.update();
	    }
	  }

	  // Protected
	  _isWithContent() {
	    return Boolean(this._getTitle());
	  }
	  _getTipElement() {
	    if (!this.tip) {
	      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
	    }
	    return this.tip;
	  }
	  _createTipElement(content) {
	    const tip = this._getTemplateFactory(content).toHtml();

	    // TODO: remove this check in v6
	    if (!tip) {
	      return null;
	    }
	    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
	    // TODO: v6 the following can be achieved with CSS only
	    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
	    const tipId = getUID(this.constructor.NAME).toString();
	    tip.setAttribute('id', tipId);
	    if (this._isAnimated()) {
	      tip.classList.add(CLASS_NAME_FADE$2);
	    }
	    return tip;
	  }
	  setContent(content) {
	    this._newContent = content;
	    if (this._isShown()) {
	      this._disposePopper();
	      this.show();
	    }
	  }
	  _getTemplateFactory(content) {
	    if (this._templateFactory) {
	      this._templateFactory.changeContent(content);
	    } else {
	      this._templateFactory = new TemplateFactory({
	        ...this._config,
	        // the `content` var has to be after `this._config`
	        // to override config.content in case of popover
	        content,
	        extraClass: this._resolvePossibleFunction(this._config.customClass)
	      });
	    }
	    return this._templateFactory;
	  }
	  _getContentForTemplate() {
	    return {
	      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
	    };
	  }
	  _getTitle() {
	    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
	  }

	  // Private
	  _initializeOnDelegatedTarget(event) {
	    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
	  }
	  _isAnimated() {
	    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
	  }
	  _isShown() {
	    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
	  }
	  _createPopper(tip) {
	    const placement = execute(this._config.placement, [this, tip, this._element]);
	    const attachment = AttachmentMap[placement.toUpperCase()];
	    return createPopper(this._element, tip, this._getPopperConfig(attachment));
	  }
	  _getOffset() {
	    const {
	      offset
	    } = this._config;
	    if (typeof offset === 'string') {
	      return offset.split(',').map(value => Number.parseInt(value, 10));
	    }
	    if (typeof offset === 'function') {
	      return popperData => offset(popperData, this._element);
	    }
	    return offset;
	  }
	  _resolvePossibleFunction(arg) {
	    return execute(arg, [this._element, this._element]);
	  }
	  _getPopperConfig(attachment) {
	    const defaultBsPopperConfig = {
	      placement: attachment,
	      modifiers: [{
	        name: 'flip',
	        options: {
	          fallbackPlacements: this._config.fallbackPlacements
	        }
	      }, {
	        name: 'offset',
	        options: {
	          offset: this._getOffset()
	        }
	      }, {
	        name: 'preventOverflow',
	        options: {
	          boundary: this._config.boundary
	        }
	      }, {
	        name: 'arrow',
	        options: {
	          element: `.${this.constructor.NAME}-arrow`
	        }
	      }, {
	        name: 'preSetPlacement',
	        enabled: true,
	        phase: 'beforeMain',
	        fn: data => {
	          // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
	          // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
	          this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
	        }
	      }]
	    };
	    return {
	      ...defaultBsPopperConfig,
	      ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])
	    };
	  }
	  _setListeners() {
	    const triggers = this._config.trigger.split(' ');
	    for (const trigger of triggers) {
	      if (trigger === 'click') {
	        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
	          const context = this._initializeOnDelegatedTarget(event);
	          context._activeTrigger[TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[TRIGGER_CLICK]);
	          context.toggle();
	        });
	      } else if (trigger !== TRIGGER_MANUAL) {
	        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
	        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
	        EventHandler.on(this._element, eventIn, this._config.selector, event => {
	          const context = this._initializeOnDelegatedTarget(event);
	          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
	          context._enter();
	        });
	        EventHandler.on(this._element, eventOut, this._config.selector, event => {
	          const context = this._initializeOnDelegatedTarget(event);
	          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
	          context._leave();
	        });
	      }
	    }
	    this._hideModalHandler = () => {
	      if (this._element) {
	        this.hide();
	      }
	    };
	    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
	  }
	  _fixTitle() {
	    const title = this._element.getAttribute('title');
	    if (!title) {
	      return;
	    }
	    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
	      this._element.setAttribute('aria-label', title);
	    }
	    this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
	    this._element.removeAttribute('title');
	  }
	  _enter() {
	    if (this._isShown() || this._isHovered) {
	      this._isHovered = true;
	      return;
	    }
	    this._isHovered = true;
	    this._setTimeout(() => {
	      if (this._isHovered) {
	        this.show();
	      }
	    }, this._config.delay.show);
	  }
	  _leave() {
	    if (this._isWithActiveTrigger()) {
	      return;
	    }
	    this._isHovered = false;
	    this._setTimeout(() => {
	      if (!this._isHovered) {
	        this.hide();
	      }
	    }, this._config.delay.hide);
	  }
	  _setTimeout(handler, timeout) {
	    clearTimeout(this._timeout);
	    this._timeout = setTimeout(handler, timeout);
	  }
	  _isWithActiveTrigger() {
	    return Object.values(this._activeTrigger).includes(true);
	  }
	  _getConfig(config) {
	    const dataAttributes = Manipulator.getDataAttributes(this._element);
	    for (const dataAttribute of Object.keys(dataAttributes)) {
	      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
	        delete dataAttributes[dataAttribute];
	      }
	    }
	    config = {
	      ...dataAttributes,
	      ...(typeof config === 'object' && config ? config : {})
	    };
	    config = this._mergeConfigObj(config);
	    config = this._configAfterMerge(config);
	    this._typeCheckConfig(config);
	    return config;
	  }
	  _configAfterMerge(config) {
	    config.container = config.container === false ? document.body : getElement(config.container);
	    if (typeof config.delay === 'number') {
	      config.delay = {
	        show: config.delay,
	        hide: config.delay
	      };
	    }
	    if (typeof config.title === 'number') {
	      config.title = config.title.toString();
	    }
	    if (typeof config.content === 'number') {
	      config.content = config.content.toString();
	    }
	    return config;
	  }
	  _getDelegateConfig() {
	    const config = {};
	    for (const [key, value] of Object.entries(this._config)) {
	      if (this.constructor.Default[key] !== value) {
	        config[key] = value;
	      }
	    }
	    config.selector = false;
	    config.trigger = 'manual';

	    // In the future can be replaced with:
	    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
	    // `Object.fromEntries(keysWithDifferentValues)`
	    return config;
	  }
	  _disposePopper() {
	    if (this._popper) {
	      this._popper.destroy();
	      this._popper = null;
	    }
	    if (this.tip) {
	      this.tip.remove();
	      this.tip = null;
	    }
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Tooltip.getOrCreateInstance(this, config);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config]();
	    });
	  }
	}

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Tooltip);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap popover.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$3 = 'popover';
	const SELECTOR_TITLE = '.popover-header';
	const SELECTOR_CONTENT = '.popover-body';
	const Default$2 = {
	  ...Tooltip.Default,
	  content: '',
	  offset: [0, 8],
	  placement: 'right',
	  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
	  trigger: 'click'
	};
	const DefaultType$2 = {
	  ...Tooltip.DefaultType,
	  content: '(null|string|element|function)'
	};

	/**
	 * Class definition
	 */

	class Popover extends Tooltip {
	  // Getters
	  static get Default() {
	    return Default$2;
	  }
	  static get DefaultType() {
	    return DefaultType$2;
	  }
	  static get NAME() {
	    return NAME$3;
	  }

	  // Overrides
	  _isWithContent() {
	    return this._getTitle() || this._getContent();
	  }

	  // Private
	  _getContentForTemplate() {
	    return {
	      [SELECTOR_TITLE]: this._getTitle(),
	      [SELECTOR_CONTENT]: this._getContent()
	    };
	  }
	  _getContent() {
	    return this._resolvePossibleFunction(this._config.content);
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Popover.getOrCreateInstance(this, config);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config]();
	    });
	  }
	}

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Popover);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap scrollspy.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$2 = 'scrollspy';
	const DATA_KEY$2 = 'bs.scrollspy';
	const EVENT_KEY$2 = `.${DATA_KEY$2}`;
	const DATA_API_KEY = '.data-api';
	const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
	const EVENT_CLICK = `click${EVENT_KEY$2}`;
	const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
	const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
	const CLASS_NAME_ACTIVE$1 = 'active';
	const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
	const SELECTOR_TARGET_LINKS = '[href]';
	const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
	const SELECTOR_NAV_LINKS = '.nav-link';
	const SELECTOR_NAV_ITEMS = '.nav-item';
	const SELECTOR_LIST_ITEMS = '.list-group-item';
	const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
	const SELECTOR_DROPDOWN = '.dropdown';
	const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
	const Default$1 = {
	  offset: null,
	  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
	  rootMargin: '0px 0px -25%',
	  smoothScroll: false,
	  target: null,
	  threshold: [0.1, 0.5, 1]
	};
	const DefaultType$1 = {
	  offset: '(number|null)',
	  // TODO v6 @deprecated, keep it for backwards compatibility reasons
	  rootMargin: 'string',
	  smoothScroll: 'boolean',
	  target: 'element',
	  threshold: 'array'
	};

	/**
	 * Class definition
	 */

	class ScrollSpy extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    // this._element is the observablesContainer and config.target the menu links wrapper
	    this._targetLinks = new Map();
	    this._observableSections = new Map();
	    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
	    this._activeTarget = null;
	    this._observer = null;
	    this._previousScrollData = {
	      visibleEntryTop: 0,
	      parentScrollTop: 0
	    };
	    this.refresh(); // initialize
	  }

	  // Getters
	  static get Default() {
	    return Default$1;
	  }
	  static get DefaultType() {
	    return DefaultType$1;
	  }
	  static get NAME() {
	    return NAME$2;
	  }

	  // Public
	  refresh() {
	    this._initializeTargetsAndObservables();
	    this._maybeEnableSmoothScroll();
	    if (this._observer) {
	      this._observer.disconnect();
	    } else {
	      this._observer = this._getNewObserver();
	    }
	    for (const section of this._observableSections.values()) {
	      this._observer.observe(section);
	    }
	  }
	  dispose() {
	    this._observer.disconnect();
	    super.dispose();
	  }

	  // Private
	  _configAfterMerge(config) {
	    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
	    config.target = getElement(config.target) || document.body;

	    // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
	    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
	    if (typeof config.threshold === 'string') {
	      config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
	    }
	    return config;
	  }
	  _maybeEnableSmoothScroll() {
	    if (!this._config.smoothScroll) {
	      return;
	    }

	    // unregister any previous listeners
	    EventHandler.off(this._config.target, EVENT_CLICK);
	    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
	      const observableSection = this._observableSections.get(event.target.hash);
	      if (observableSection) {
	        event.preventDefault();
	        const root = this._rootElement || window;
	        const height = observableSection.offsetTop - this._element.offsetTop;
	        if (root.scrollTo) {
	          root.scrollTo({
	            top: height,
	            behavior: 'smooth'
	          });
	          return;
	        }

	        // Chrome 60 doesn't support `scrollTo`
	        root.scrollTop = height;
	      }
	    });
	  }
	  _getNewObserver() {
	    const options = {
	      root: this._rootElement,
	      threshold: this._config.threshold,
	      rootMargin: this._config.rootMargin
	    };
	    return new IntersectionObserver(entries => this._observerCallback(entries), options);
	  }

	  // The logic of selection
	  _observerCallback(entries) {
	    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
	    const activate = entry => {
	      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
	      this._process(targetElement(entry));
	    };
	    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
	    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
	    this._previousScrollData.parentScrollTop = parentScrollTop;
	    for (const entry of entries) {
	      if (!entry.isIntersecting) {
	        this._activeTarget = null;
	        this._clearActiveClass(targetElement(entry));
	        continue;
	      }
	      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
	      // if we are scrolling down, pick the bigger offsetTop
	      if (userScrollsDown && entryIsLowerThanPrevious) {
	        activate(entry);
	        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
	        if (!parentScrollTop) {
	          return;
	        }
	        continue;
	      }

	      // if we are scrolling up, pick the smallest offsetTop
	      if (!userScrollsDown && !entryIsLowerThanPrevious) {
	        activate(entry);
	      }
	    }
	  }
	  _initializeTargetsAndObservables() {
	    this._targetLinks = new Map();
	    this._observableSections = new Map();
	    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
	    for (const anchor of targetLinks) {
	      // ensure that the anchor has an id and is not disabled
	      if (!anchor.hash || isDisabled(anchor)) {
	        continue;
	      }
	      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

	      // ensure that the observableSection exists & is visible
	      if (isVisible(observableSection)) {
	        this._targetLinks.set(decodeURI(anchor.hash), anchor);
	        this._observableSections.set(anchor.hash, observableSection);
	      }
	    }
	  }
	  _process(target) {
	    if (this._activeTarget === target) {
	      return;
	    }
	    this._clearActiveClass(this._config.target);
	    this._activeTarget = target;
	    target.classList.add(CLASS_NAME_ACTIVE$1);
	    this._activateParents(target);
	    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
	      relatedTarget: target
	    });
	  }
	  _activateParents(target) {
	    // Activate dropdown parents
	    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
	      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
	      return;
	    }
	    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
	      // Set triggered links parents as active
	      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
	      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
	        item.classList.add(CLASS_NAME_ACTIVE$1);
	      }
	    }
	  }
	  _clearActiveClass(parent) {
	    parent.classList.remove(CLASS_NAME_ACTIVE$1);
	    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
	    for (const node of activeNodes) {
	      node.classList.remove(CLASS_NAME_ACTIVE$1);
	    }
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = ScrollSpy.getOrCreateInstance(this, config);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config]();
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
	  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
	    ScrollSpy.getOrCreateInstance(spy);
	  }
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(ScrollSpy);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME$1 = 'tab';
	const DATA_KEY$1 = 'bs.tab';
	const EVENT_KEY$1 = `.${DATA_KEY$1}`;
	const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
	const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
	const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
	const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
	const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
	const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
	const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
	const ARROW_LEFT_KEY = 'ArrowLeft';
	const ARROW_RIGHT_KEY = 'ArrowRight';
	const ARROW_UP_KEY = 'ArrowUp';
	const ARROW_DOWN_KEY = 'ArrowDown';
	const HOME_KEY = 'Home';
	const END_KEY = 'End';
	const CLASS_NAME_ACTIVE = 'active';
	const CLASS_NAME_FADE$1 = 'fade';
	const CLASS_NAME_SHOW$1 = 'show';
	const CLASS_DROPDOWN = 'dropdown';
	const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
	const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
	const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
	const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
	const SELECTOR_OUTER = '.nav-item, .list-group-item';
	const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
	const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
	const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
	const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

	/**
	 * Class definition
	 */

	class Tab extends BaseComponent {
	  constructor(element) {
	    super(element);
	    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
	    if (!this._parent) {
	      return;
	      // TODO: should throw exception in v6
	      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
	    }

	    // Set up initial aria attributes
	    this._setInitialAttributes(this._parent, this._getChildren());
	    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
	  }

	  // Getters
	  static get NAME() {
	    return NAME$1;
	  }

	  // Public
	  show() {
	    // Shows this elem and deactivate the active sibling if exists
	    const innerElem = this._element;
	    if (this._elemIsActive(innerElem)) {
	      return;
	    }

	    // Search for active tab on same parent to deactivate it
	    const active = this._getActiveElem();
	    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
	      relatedTarget: innerElem
	    }) : null;
	    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
	      relatedTarget: active
	    });
	    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
	      return;
	    }
	    this._deactivate(active, innerElem);
	    this._activate(innerElem, active);
	  }

	  // Private
	  _activate(element, relatedElem) {
	    if (!element) {
	      return;
	    }
	    element.classList.add(CLASS_NAME_ACTIVE);
	    this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

	    const complete = () => {
	      if (element.getAttribute('role') !== 'tab') {
	        element.classList.add(CLASS_NAME_SHOW$1);
	        return;
	      }
	      element.removeAttribute('tabindex');
	      element.setAttribute('aria-selected', true);
	      this._toggleDropDown(element, true);
	      EventHandler.trigger(element, EVENT_SHOWN$1, {
	        relatedTarget: relatedElem
	      });
	    };
	    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
	  }
	  _deactivate(element, relatedElem) {
	    if (!element) {
	      return;
	    }
	    element.classList.remove(CLASS_NAME_ACTIVE);
	    element.blur();
	    this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

	    const complete = () => {
	      if (element.getAttribute('role') !== 'tab') {
	        element.classList.remove(CLASS_NAME_SHOW$1);
	        return;
	      }
	      element.setAttribute('aria-selected', false);
	      element.setAttribute('tabindex', '-1');
	      this._toggleDropDown(element, false);
	      EventHandler.trigger(element, EVENT_HIDDEN$1, {
	        relatedTarget: relatedElem
	      });
	    };
	    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
	  }
	  _keydown(event) {
	    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
	      return;
	    }
	    event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
	    event.preventDefault();
	    const children = this._getChildren().filter(element => !isDisabled(element));
	    let nextActiveElement;
	    if ([HOME_KEY, END_KEY].includes(event.key)) {
	      nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
	    } else {
	      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
	      nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
	    }
	    if (nextActiveElement) {
	      nextActiveElement.focus({
	        preventScroll: true
	      });
	      Tab.getOrCreateInstance(nextActiveElement).show();
	    }
	  }
	  _getChildren() {
	    // collection of inner elements
	    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
	  }
	  _getActiveElem() {
	    return this._getChildren().find(child => this._elemIsActive(child)) || null;
	  }
	  _setInitialAttributes(parent, children) {
	    this._setAttributeIfNotExists(parent, 'role', 'tablist');
	    for (const child of children) {
	      this._setInitialAttributesOnChild(child);
	    }
	  }
	  _setInitialAttributesOnChild(child) {
	    child = this._getInnerElement(child);
	    const isActive = this._elemIsActive(child);
	    const outerElem = this._getOuterElement(child);
	    child.setAttribute('aria-selected', isActive);
	    if (outerElem !== child) {
	      this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
	    }
	    if (!isActive) {
	      child.setAttribute('tabindex', '-1');
	    }
	    this._setAttributeIfNotExists(child, 'role', 'tab');

	    // set attributes to the related panel too
	    this._setInitialAttributesOnTargetPanel(child);
	  }
	  _setInitialAttributesOnTargetPanel(child) {
	    const target = SelectorEngine.getElementFromSelector(child);
	    if (!target) {
	      return;
	    }
	    this._setAttributeIfNotExists(target, 'role', 'tabpanel');
	    if (child.id) {
	      this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
	    }
	  }
	  _toggleDropDown(element, open) {
	    const outerElem = this._getOuterElement(element);
	    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
	      return;
	    }
	    const toggle = (selector, className) => {
	      const element = SelectorEngine.findOne(selector, outerElem);
	      if (element) {
	        element.classList.toggle(className, open);
	      }
	    };
	    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
	    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
	    outerElem.setAttribute('aria-expanded', open);
	  }
	  _setAttributeIfNotExists(element, attribute, value) {
	    if (!element.hasAttribute(attribute)) {
	      element.setAttribute(attribute, value);
	    }
	  }
	  _elemIsActive(elem) {
	    return elem.classList.contains(CLASS_NAME_ACTIVE);
	  }

	  // Try to get the inner element (usually the .nav-link)
	  _getInnerElement(elem) {
	    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
	  }

	  // Try to get the outer element (usually the .nav-item)
	  _getOuterElement(elem) {
	    return elem.closest(SELECTOR_OUTER) || elem;
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Tab.getOrCreateInstance(this);
	      if (typeof config !== 'string') {
	        return;
	      }
	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`);
	      }
	      data[config]();
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }
	  if (isDisabled(this)) {
	    return;
	  }
	  Tab.getOrCreateInstance(this).show();
	});

	/**
	 * Initialize on focus
	 */
	EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
	  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
	    Tab.getOrCreateInstance(element);
	  }
	});
	/**
	 * jQuery
	 */

	defineJQueryPlugin(Tab);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap toast.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const NAME = 'toast';
	const DATA_KEY = 'bs.toast';
	const EVENT_KEY = `.${DATA_KEY}`;
	const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
	const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
	const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
	const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
	const EVENT_HIDE = `hide${EVENT_KEY}`;
	const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
	const EVENT_SHOW = `show${EVENT_KEY}`;
	const EVENT_SHOWN = `shown${EVENT_KEY}`;
	const CLASS_NAME_FADE = 'fade';
	const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
	const CLASS_NAME_SHOW = 'show';
	const CLASS_NAME_SHOWING = 'showing';
	const DefaultType = {
	  animation: 'boolean',
	  autohide: 'boolean',
	  delay: 'number'
	};
	const Default = {
	  animation: true,
	  autohide: true,
	  delay: 5000
	};

	/**
	 * Class definition
	 */

	class Toast extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);
	    this._timeout = null;
	    this._hasMouseInteraction = false;
	    this._hasKeyboardInteraction = false;
	    this._setListeners();
	  }

	  // Getters
	  static get Default() {
	    return Default;
	  }
	  static get DefaultType() {
	    return DefaultType;
	  }
	  static get NAME() {
	    return NAME;
	  }

	  // Public
	  show() {
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
	    if (showEvent.defaultPrevented) {
	      return;
	    }
	    this._clearTimeout();
	    if (this._config.animation) {
	      this._element.classList.add(CLASS_NAME_FADE);
	    }
	    const complete = () => {
	      this._element.classList.remove(CLASS_NAME_SHOWING);
	      EventHandler.trigger(this._element, EVENT_SHOWN);
	      this._maybeScheduleHide();
	    };
	    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
	    reflow(this._element);
	    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
	    this._queueCallback(complete, this._element, this._config.animation);
	  }
	  hide() {
	    if (!this.isShown()) {
	      return;
	    }
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
	    if (hideEvent.defaultPrevented) {
	      return;
	    }
	    const complete = () => {
	      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
	      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
	      EventHandler.trigger(this._element, EVENT_HIDDEN);
	    };
	    this._element.classList.add(CLASS_NAME_SHOWING);
	    this._queueCallback(complete, this._element, this._config.animation);
	  }
	  dispose() {
	    this._clearTimeout();
	    if (this.isShown()) {
	      this._element.classList.remove(CLASS_NAME_SHOW);
	    }
	    super.dispose();
	  }
	  isShown() {
	    return this._element.classList.contains(CLASS_NAME_SHOW);
	  }

	  // Private
	  _maybeScheduleHide() {
	    if (!this._config.autohide) {
	      return;
	    }
	    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
	      return;
	    }
	    this._timeout = setTimeout(() => {
	      this.hide();
	    }, this._config.delay);
	  }
	  _onInteraction(event, isInteracting) {
	    switch (event.type) {
	      case 'mouseover':
	      case 'mouseout':
	        {
	          this._hasMouseInteraction = isInteracting;
	          break;
	        }
	      case 'focusin':
	      case 'focusout':
	        {
	          this._hasKeyboardInteraction = isInteracting;
	          break;
	        }
	    }
	    if (isInteracting) {
	      this._clearTimeout();
	      return;
	    }
	    const nextElement = event.relatedTarget;
	    if (this._element === nextElement || this._element.contains(nextElement)) {
	      return;
	    }
	    this._maybeScheduleHide();
	  }
	  _setListeners() {
	    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
	    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
	    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
	    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
	  }
	  _clearTimeout() {
	    clearTimeout(this._timeout);
	    this._timeout = null;
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Toast.getOrCreateInstance(this, config);
	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`);
	        }
	        data[config](this);
	      }
	    });
	  }
	}

	/**
	 * Data API implementation
	 */

	enableDismissTrigger(Toast);

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Toast);

	const bootstrap_esm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		Alert,
		Button,
		Carousel,
		Collapse,
		Dropdown,
		Modal,
		Offcanvas,
		Popover,
		ScrollSpy,
		Tab,
		Toast,
		Tooltip
	}, Symbol.toStringTag, { value: 'Module' }));

	/*
	Core dropdowns
	 */
	let dropdownTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
	dropdownTriggerList.map(function (dropdownTriggerEl) {
	  let options = {
	    boundary: dropdownTriggerEl.getAttribute('data-bs-boundary') === 'viewport' ? document.querySelector('.btn') : 'clippingParents'
	  };
	  return new Dropdown(dropdownTriggerEl, options);
	});

	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
	  let options = {
	    delay: {
	      show: 50,
	      hide: 50
	    },
	    html: tooltipTriggerEl.getAttribute("data-bs-html") === "true" ?? false,
	    placement: tooltipTriggerEl.getAttribute('data-bs-placement') ?? 'auto'
	  };
	  return new Tooltip(tooltipTriggerEl, options);
	});

	/*
	Core popovers
	 */
	let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	popoverTriggerList.map(function (popoverTriggerEl) {
	  let options = {
	    delay: {
	      show: 50,
	      hide: 50
	    },
	    html: popoverTriggerEl.getAttribute('data-bs-html') === "true" ?? false,
	    placement: popoverTriggerEl.getAttribute('data-bs-placement') ?? 'auto'
	  };
	  return new Popover(popoverTriggerEl, options);
	});

	/*
	Switch icons
	 */
	let switchesTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="switch-icon"]'));
	switchesTriggerList.map(function (switchTriggerEl) {
	  switchTriggerEl.addEventListener('click', e => {
	    e.stopPropagation();
	    switchTriggerEl.classList.toggle('active');
	  });
	});

	const EnableActivationTabsFromLocationHash = () => {
	  const locationHash = window.location.hash;
	  if (locationHash) {
	    const tabsList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]'));
	    const matchedTabs = tabsList.filter(tab => tab.hash === locationHash);
	    matchedTabs.map(tab => {
	      new Tab(tab).show();
	    });
	  }
	};
	EnableActivationTabsFromLocationHash();

	/*
	Toasts
	 */
	let toastsTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]'));
	toastsTriggerList.map(function (toastTriggerEl) {
	  if (!toastTriggerEl.hasAttribute('data-bs-target')) {
	    return;
	  }
	  const toastEl = new Toast(toastTriggerEl.getAttribute('data-bs-target'));
	  toastTriggerEl.addEventListener('click', () => {
	    toastEl.show();
	  });
	});

	const prefix = 'tblr-';
	const hexToRgba = (hex, opacity) => {
	  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})` : null;
	};
	const getColor = (color, opacity = 1) => {
	  const c = getComputedStyle(document.body).getPropertyValue(`--${prefix}${color}`).trim();
	  if (opacity !== 1) {
	    return hexToRgba(c, opacity);
	  }
	  return c;
	};

	const tabler = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		getColor,
		hexToRgba,
		prefix
	}, Symbol.toStringTag, { value: 'Module' }));

	exports.Alert = Alert;
	exports.Button = Button;
	exports.Carousel = Carousel;
	exports.Collapse = Collapse;
	exports.Dropdown = Dropdown;
	exports.Modal = Modal;
	exports.Offcanvas = Offcanvas;
	exports.Popover = Popover;
	exports.ScrollSpy = ScrollSpy;
	exports.Tab = Tab;
	exports.Toast = Toast;
	exports.Tooltip = Tooltip;
	exports.bootstrap = bootstrap_esm;
	exports.tabler = tabler;

	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=tabler.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./assets/tabler-dist.js ***!
  \*******************************/
__webpack_require__(/*! ./tabler-dist.scss */ "./assets/tabler-dist.scss");
__webpack_require__(/*! @tabler/core/dist/js/tabler */ "./node_modules/@tabler/core/dist/js/tabler.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVyLWRpc3QuYzcwOTBlM2MzZjNjZDA3YTNhODguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBNEQ7QUFDN0QsQ0FBQyxDQUN1RztBQUN4RyxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRSxPQUFPOztBQUVUO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0hBQXdIOztBQUV4SDtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksR0FBRzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJO0FBQ1I7O0FBRUE7QUFDQSxxRUFBcUU7QUFDckU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9DQUFvQztBQUNoRTtBQUNBLDBCQUEwQixxQ0FBcUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbURBQW1EO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSwwQ0FBMEMsa0RBQWtEO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwyREFBMkQ7QUFDM0QsK0ZBQStGO0FBQy9GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJLElBQUk7QUFDUjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RjtBQUM3RjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksR0FBRzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QixNQUFNO0FBQ047QUFDQSxJQUFJLElBQUksR0FBRzs7QUFFWDtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSxtSEFBbUg7O0FBRW5IO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsOENBQThDLEtBQUs7O0FBRW5EO0FBQ0EsdUVBQXVFO0FBQ3ZFLFVBQVU7QUFDViw2QkFBNkIsdUNBQXVDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sR0FBRztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxFQUFFLEdBQUc7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRUFBRSxHQUFHOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3QkFBd0IsaUJBQWlCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvR0FBb0csa0NBQWtDO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxlQUFlO0FBQ3BGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixJQUFJLElBQUksV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFNBQVMsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0JBQWtCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQkFBc0I7QUFDM0QsSUFBSTtBQUNKO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsMERBQTBELHNCQUFzQjtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HOztBQUVuRztBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELDJFQUEyRTtBQUMzRSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0NBQW9DLFlBQVksU0FBUyxtQkFBbUIsVUFBVSx1QkFBdUIsY0FBYztBQUMzSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQSxlQUFlLEtBQUssRUFBRSxlQUFlO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSwrSUFBK0ksU0FBUztBQUN4SjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLG9CQUFvQjtBQUMxRDtBQUNBLDhEQUE4RCxLQUFLO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixLQUFLO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEMsNkJBQTZCLFlBQVk7QUFDekMsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZLEVBQUUsZUFBZTs7QUFFckU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQscUNBQXFDLFlBQVk7QUFDakQsbUNBQW1DLFlBQVk7QUFDL0MseUNBQXlDLFlBQVk7QUFDckQscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekMsMkJBQTJCLFlBQVk7QUFDdkMsbUNBQW1DLFlBQVk7QUFDL0MseUNBQXlDLFlBQVk7QUFDckQseUNBQXlDLFlBQVk7QUFDckQsc0NBQXNDLFlBQVk7QUFDbEQsc0NBQXNDLFlBQVksRUFBRSxlQUFlO0FBQ25FLHdDQUF3QyxZQUFZLEVBQUUsZUFBZTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxNQUFNO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsT0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QywrQkFBK0IsWUFBWTtBQUMzQyw2QkFBNkIsWUFBWTtBQUN6QyxpQ0FBaUMsWUFBWTtBQUM3Qyx3Q0FBd0MsWUFBWSxFQUFFLGVBQWU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQXFCLEdBQUcsb0JBQW9CO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlEQUFpRDtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsT0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CLDZCQUE2QixZQUFZO0FBQ3pDLGlDQUFpQyxZQUFZO0FBQzdDLDZCQUE2QixZQUFZO0FBQ3pDLCtCQUErQixZQUFZO0FBQzNDLHdDQUF3QyxZQUFZLEVBQUUsZUFBZTtBQUNyRSwwQ0FBMEMsWUFBWSxFQUFFLGVBQWU7QUFDdkUsc0NBQXNDLFlBQVksRUFBRSxlQUFlO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QixHQUFHLGtCQUFrQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEMsbUNBQW1DLFlBQVk7QUFDL0MseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsNkNBQTZDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekMsZ0RBQWdELFlBQVk7QUFDNUQsaUNBQWlDLFlBQVk7QUFDN0MsNkJBQTZCLFlBQVk7QUFDekMsK0JBQStCLFlBQVk7QUFDM0MsaUNBQWlDLFlBQVk7QUFDN0MsNkNBQTZDLFlBQVk7QUFDekQscURBQXFELFlBQVk7QUFDakUsbURBQW1ELFlBQVk7QUFDL0Qsd0NBQXdDLFlBQVksRUFBRSxlQUFlO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQSxzQ0FBc0MsWUFBWSxFQUFFLGVBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekMsK0JBQStCLFlBQVk7QUFDM0MsNkJBQTZCLFlBQVk7QUFDekMsOENBQThDLFlBQVk7QUFDMUQsaUNBQWlDLFlBQVk7QUFDN0MsK0JBQStCLFlBQVk7QUFDM0Msd0NBQXdDLFlBQVksRUFBRSxlQUFlO0FBQ3JFLGlEQUFpRCxZQUFZO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0MsNkJBQTZCLFlBQVk7QUFDekMsc0NBQXNDLFlBQVksRUFBRSxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUJBQW1CLElBQUksb0JBQW9CLElBQUksbUJBQW1CLElBQUksb0JBQW9CO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FLHFCQUFxQjtBQUN6Rjs7QUFFQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixHQUFHLG9CQUFvQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDLDZCQUE2QixZQUFZO0FBQ3pDLGlDQUFpQyxZQUFZO0FBQzdDLDZCQUE2QixZQUFZO0FBQ3pDLCtCQUErQixZQUFZO0FBQzNDLHNDQUFzQyxZQUFZO0FBQ2xELGlDQUFpQyxZQUFZO0FBQzdDLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx5QkFBeUI7QUFDdkU7QUFDQTtBQUNBLG9DQUFvQyw2QkFBNkIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsNkJBQTZCO0FBQy9KLDBHQUEwRztBQUMxRyxnQ0FBZ0MsZUFBZSxJQUFJLHFCQUFxQjtBQUN4RSx5Q0FBeUMsa0JBQWtCLDJCQUEyQixrQkFBa0IsNEJBQTRCLGtCQUFrQjs7QUFFdEo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFtQix5QkFBeUIsb0JBQW9CO0FBQ2pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQyxxQ0FBcUMsVUFBVTtBQUMvQyxtQ0FBbUMsVUFBVTtBQUM3QyxpQ0FBaUMsVUFBVTtBQUMzQyxtQ0FBbUMsVUFBVTtBQUM3QywyQkFBMkIsVUFBVTtBQUNyQywrQkFBK0IsVUFBVTtBQUN6QywyQkFBMkIsVUFBVTtBQUNyQyw2QkFBNkIsVUFBVTtBQUN2QztBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsT0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdCQUF3QixpQkFBaUI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFOztBQUVGO0FBQ0E7QUFDQSwrQkFBK0IsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3pELDJCQUEyQix3QkFBd0IsSUFBSSx3QkFBd0IsSUFBSSx3QkFBd0IsSUFBSSxRQUFRO0FBQ3ZIO0FBQ0E7QUFDQSxtRUFBbUUsT0FBTyxFQUFFLE1BQU07QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3QkFBd0IsaUJBQWlCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCxpQkFBaUI7O0FBRXZFLENBQUM7QUFDRDs7Ozs7OztVQy9uTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7QUNOQUEsbUJBQU8sQ0FBQyxxREFBb0IsQ0FBQztBQUU3QkEsbUJBQU8sQ0FBQyxrRkFBNkIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RhYmxlci1kaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0YWJsZXIvY29yZS9kaXN0L2pzL3RhYmxlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RhYmxlci1kaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIVxuICogVGFibGVyIHYxLjQuMCAoaHR0cHM6Ly90YWJsZXIuaW8pXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDI1IFRoZSBUYWJsZXIgQXV0aG9yc1xuICogQ29weXJpZ2h0IDIwMTgtMjAyNSBjb2RlY2FsbS5uZXQgUGF3ZcWCIEt1bmFcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3RhYmxlci90YWJsZXIvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC50YWJsZXIgPSB7fSkpO1xufSkodGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuXHQvLyBBdXRvc2l6ZSBwbHVnaW5cblx0Y29uc3QgZWxlbWVudHMkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cImF1dG9zaXplXCJdJyk7XG5cdGlmIChlbGVtZW50cyQxLmxlbmd0aCkge1xuXHQgIGVsZW1lbnRzJDEuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHQgICAgd2luZG93LmF1dG9zaXplICYmIHdpbmRvdy5hdXRvc2l6ZShlbGVtZW50KTtcblx0ICB9KTtcblx0fVxuXG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY291bnR1cF0nKTtcblx0aWYgKGVsZW1lbnRzLmxlbmd0aCkge1xuXHQgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0ICAgIGxldCBvcHRpb25zID0ge307XG5cdCAgICB0cnkge1xuXHQgICAgICBjb25zdCBkYXRhT3B0aW9ucyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50dXAnKSA/IEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnR1cCcpKSA6IHt9O1xuXHQgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdCAgICAgICAgJ2VuYWJsZVNjcm9sbFNweSc6IHRydWVcblx0ICAgICAgfSwgZGF0YU9wdGlvbnMpO1xuXHQgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cdCAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGVsZW1lbnQuaW5uZXJIVE1MLCAxMCk7XG5cdCAgICBpZiAod2luZG93LmNvdW50VXAgJiYgd2luZG93LmNvdW50VXAuQ291bnRVcCkge1xuXHQgICAgICBjb25zdCBjb3VudFVwID0gbmV3IHdpbmRvdy5jb3VudFVwLkNvdW50VXAoZWxlbWVudCwgdmFsdWUsIG9wdGlvbnMpO1xuXHQgICAgICBpZiAoIWNvdW50VXAuZXJyb3IpIHtcblx0ICAgICAgICBjb3VudFVwLnN0YXJ0KCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9KTtcblx0fVxuXG5cdC8vIElucHV0IG1hc2sgcGx1Z2luXG5cblx0dmFyIG1hc2tFbGVtZW50TGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWFza10nKSk7XG5cdG1hc2tFbGVtZW50TGlzdC5tYXAoZnVuY3Rpb24gKG1hc2tFbCkge1xuXHQgIHdpbmRvdy5JTWFzayAmJiBuZXcgd2luZG93LklNYXNrKG1hc2tFbCwge1xuXHQgICAgbWFzazogbWFza0VsLmRhdGFzZXQubWFzayxcblx0ICAgIGxhenk6IG1hc2tFbC5kYXRhc2V0WydtYXNrLXZpc2libGUnXSA9PT0gJ3RydWUnXG5cdCAgfSk7XG5cdH0pO1xuXG5cdHZhciB0b3AgPSAndG9wJztcblx0dmFyIGJvdHRvbSA9ICdib3R0b20nO1xuXHR2YXIgcmlnaHQgPSAncmlnaHQnO1xuXHR2YXIgbGVmdCA9ICdsZWZ0Jztcblx0dmFyIGF1dG8gPSAnYXV0byc7XG5cdHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuXHR2YXIgc3RhcnQgPSAnc3RhcnQnO1xuXHR2YXIgZW5kID0gJ2VuZCc7XG5cdHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcblx0dmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0Jztcblx0dmFyIHBvcHBlciA9ICdwb3BwZXInO1xuXHR2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5cdHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcblx0ICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcblx0fSwgW10pO1xuXHR2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuXHQgIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG5cdH0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuXHR2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcblx0dmFyIHJlYWQgPSAncmVhZCc7XG5cdHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuXHR2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcblx0dmFyIG1haW4gPSAnbWFpbic7XG5cdHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5cdHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5cdHZhciB3cml0ZSA9ICd3cml0ZSc7XG5cdHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuXHR2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07XG5cblx0ZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuXHQgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcblx0ICBpZiAobm9kZSA9PSBudWxsKSB7XG5cdCAgICByZXR1cm4gd2luZG93O1xuXHQgIH1cblx0ICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuXHQgICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG5cdCAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuXHQgIH1cblx0ICByZXR1cm4gbm9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzRWxlbWVudCQxKG5vZGUpIHtcblx0ICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuXHQgIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcblx0fVxuXHRmdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcblx0ICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcblx0ICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuXHR9XG5cdGZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG5cdCAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3Rcblx0ICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHQgIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG5cdCAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuXHR9XG5cblx0Ly8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5cdGZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcblx0ICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXHQgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG5cdCAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG5cdCAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuXHQgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuXHQgICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcblx0ICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cdCAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcblx0ICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblx0ICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuXHQgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYyKSB7XG5cdCAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG5cdCAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG5cdCAgICBwb3BwZXI6IHtcblx0ICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG5cdCAgICAgIGxlZnQ6ICcwJyxcblx0ICAgICAgdG9wOiAnMCcsXG5cdCAgICAgIG1hcmdpbjogJzAnXG5cdCAgICB9LFxuXHQgICAgYXJyb3c6IHtcblx0ICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcblx0ICAgIH0sXG5cdCAgICByZWZlcmVuY2U6IHt9XG5cdCAgfTtcblx0ICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuXHQgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cdCAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG5cdCAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcblx0ICB9XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG5cdCAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcblx0ICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG5cdCAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuXHQgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuXHQgICAgICAgIHJldHVybiBzdHlsZTtcblx0ICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuXHQgICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuXHQgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcblx0ICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHQgICAgICB9KTtcblx0ICAgIH0pO1xuXHQgIH07XG5cdH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cdGNvbnN0IGFwcGx5U3R5bGVzJDEgPSB7XG5cdCAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcblx0ICBlbmFibGVkOiB0cnVlLFxuXHQgIHBoYXNlOiAnd3JpdGUnLFxuXHQgIGZuOiBhcHBseVN0eWxlcyxcblx0ICBlZmZlY3Q6IGVmZmVjdCQyLFxuXHQgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG5cdCAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXHR9XG5cblx0dmFyIG1heCA9IE1hdGgubWF4O1xuXHR2YXIgbWluID0gTWF0aC5taW47XG5cdHZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cblx0ZnVuY3Rpb24gZ2V0VUFTdHJpbmcoKSB7XG5cdCAgdmFyIHVhRGF0YSA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xuXHQgIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzICYmIEFycmF5LmlzQXJyYXkodWFEYXRhLmJyYW5kcykpIHtcblx0ICAgIHJldHVybiB1YURhdGEuYnJhbmRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgICByZXR1cm4gaXRlbS5icmFuZCArIFwiL1wiICsgaXRlbS52ZXJzaW9uO1xuXHQgICAgfSkuam9pbignICcpO1xuXHQgIH1cblx0ICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzTGF5b3V0Vmlld3BvcnQoKSB7XG5cdCAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG5cdCAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG5cdCAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcblx0ICB9XG5cdCAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG5cdCAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcblx0ICB9XG5cdCAgdmFyIGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHQgIHZhciBzY2FsZVggPSAxO1xuXHQgIHZhciBzY2FsZVkgPSAxO1xuXHQgIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuXHQgICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG5cdCAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcblx0ICB9XG5cdCAgdmFyIF9yZWYgPSBpc0VsZW1lbnQkMShlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcblx0ICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblx0ICB2YXIgYWRkVmlzdWFsT2Zmc2V0cyA9ICFpc0xheW91dFZpZXdwb3J0KCkgJiYgaXNGaXhlZFN0cmF0ZWd5O1xuXHQgIHZhciB4ID0gKGNsaWVudFJlY3QubGVmdCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCA6IDApKSAvIHNjYWxlWDtcblx0ICB2YXIgeSA9IChjbGllbnRSZWN0LnRvcCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wIDogMCkpIC8gc2NhbGVZO1xuXHQgIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZVg7XG5cdCAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGVZO1xuXHQgIHJldHVybiB7XG5cdCAgICB3aWR0aDogd2lkdGgsXG5cdCAgICBoZWlnaHQ6IGhlaWdodCxcblx0ICAgIHRvcDogeSxcblx0ICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG5cdCAgICBib3R0b206IHkgKyBoZWlnaHQsXG5cdCAgICBsZWZ0OiB4LFxuXHQgICAgeDogeCxcblx0ICAgIHk6IHlcblx0ICB9O1xuXHR9XG5cblx0Ly8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5cdGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuXHQgIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cblx0ICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuXHQgIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdCAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHQgIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcblx0ICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcblx0ICB9XG5cdCAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG5cdCAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcblx0ICB9XG5cdCAgcmV0dXJuIHtcblx0ICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcblx0ICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuXHQgICAgd2lkdGg6IHdpZHRoLFxuXHQgICAgaGVpZ2h0OiBoZWlnaHRcblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuXHQgIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuXHQgIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG5cdCAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuXHQgICAgdmFyIG5leHQgPSBjaGlsZDtcblx0ICAgIGRvIHtcblx0ICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblx0ICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG5cdCAgICB9IHdoaWxlIChuZXh0KTtcblx0ICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXHQgIHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSB7XG5cdCAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuXHQgIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG5cdCAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuXHQgIHJldHVybiAoKGlzRWxlbWVudCQxKGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDpcblx0ICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblx0ICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuXHQgIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG5cdCAgICByZXR1cm4gZWxlbWVudDtcblx0ICB9XG5cdCAgcmV0dXJuIChcblx0ICAgIC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG5cdCAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG5cdCAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblx0ICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8XG5cdCAgICAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuXHQgICAgZWxlbWVudC5wYXJlbnROb2RlIHx8IChcblx0ICAgIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG5cdCAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fFxuXHQgICAgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuXHQgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuXHQgICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cdCAgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuXHQgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fFxuXHQgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG5cdCAgZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG5cdCAgICByZXR1cm4gbnVsbDtcblx0ICB9XG5cdCAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuXHR9IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG5cdC8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cdGZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG5cdCAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcblx0ICB2YXIgaXNJRSA9IC9UcmlkZW50L2kudGVzdChnZXRVQVN0cmluZygpKTtcblx0ICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG5cdCAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG5cdCAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KTtcblx0ICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgIH1cblx0ICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXHQgIGlmIChpc1NoYWRvd1Jvb3QoY3VycmVudE5vZGUpKSB7XG5cdCAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmhvc3Q7XG5cdCAgfVxuXHQgIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcblx0ICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcblx0ICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG5cdCAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG5cdCAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG5cdCAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIG51bGw7XG5cdH0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuXHQvLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cdGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG5cdCAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcblx0ICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblx0ICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdCAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG5cdCAgfVxuXHQgIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuXHQgICAgcmV0dXJuIHdpbmRvdztcblx0ICB9XG5cdCAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuXHQgIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcblx0fVxuXG5cdGZ1bmN0aW9uIHdpdGhpbihtaW4kMSwgdmFsdWUsIG1heCQxKSB7XG5cdCAgcmV0dXJuIG1heChtaW4kMSwgbWluKHZhbHVlLCBtYXgkMSkpO1xuXHR9XG5cdGZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuXHQgIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG5cdCAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuXHQgIHJldHVybiB7XG5cdCAgICB0b3A6IDAsXG5cdCAgICByaWdodDogMCxcblx0ICAgIGJvdHRvbTogMCxcblx0ICAgIGxlZnQ6IDBcblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcblx0ICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG5cdCAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcblx0ICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuXHQgICAgcmV0dXJuIGhhc2hNYXA7XG5cdCAgfSwge30pO1xuXHR9XG5cblx0dmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuXHQgIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcblx0ICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG5cdCAgfSkpIDogcGFkZGluZztcblx0ICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcblx0fTtcblx0ZnVuY3Rpb24gYXJyb3coX3JlZikge1xuXHQgIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cdCAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcblx0ICAgIG5hbWUgPSBfcmVmLm5hbWUsXG5cdCAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuXHQgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcblx0ICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcblx0ICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcblx0ICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcblx0ICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuXHQgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXHQgIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHQgIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuXHQgIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG5cdCAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuXHQgIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG5cdCAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcblx0ICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcblx0ICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcblx0ICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcblx0ICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcblx0ICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cblx0ICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcblx0ICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcblx0ICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcblx0ICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cblx0ICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuXHQgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG5cdH1cblx0ZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcblx0ICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcblx0ICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuXHQgIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuXHQgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblx0ICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcblx0ICAgIHJldHVybjtcblx0ICB9IC8vIENTUyBzZWxlY3RvclxuXG5cdCAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXHQgICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgIH1cblx0ICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcblx0fSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblx0Y29uc3QgYXJyb3ckMSA9IHtcblx0ICBuYW1lOiAnYXJyb3cnLFxuXHQgIGVuYWJsZWQ6IHRydWUsXG5cdCAgcGhhc2U6ICdtYWluJyxcblx0ICBmbjogYXJyb3csXG5cdCAgZWZmZWN0OiBlZmZlY3QkMSxcblx0ICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG5cdCAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcblx0ICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cdH1cblxuXHR2YXIgdW5zZXRTaWRlcyA9IHtcblx0ICB0b3A6ICdhdXRvJyxcblx0ICByaWdodDogJ2F1dG8nLFxuXHQgIGJvdHRvbTogJ2F1dG8nLFxuXHQgIGxlZnQ6ICdhdXRvJ1xuXHR9OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuXHQvLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuXHQvLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuXHRmdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmLCB3aW4pIHtcblx0ICB2YXIgeCA9IF9yZWYueCxcblx0ICAgIHkgPSBfcmVmLnk7XG5cdCAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cdCAgcmV0dXJuIHtcblx0ICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG5cdCAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG5cdCAgfTtcblx0fVxuXHRmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuXHQgIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cdCAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcblx0ICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuXHQgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuXHQgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuXHQgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG5cdCAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuXHQgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuXHQgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcblx0ICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcblx0ICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuXHQgIHZhciBfb2Zmc2V0cyR4ID0gb2Zmc2V0cy54LFxuXHQgICAgeCA9IF9vZmZzZXRzJHggPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR4LFxuXHQgICAgX29mZnNldHMkeSA9IG9mZnNldHMueSxcblx0ICAgIHkgPSBfb2Zmc2V0cyR5ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeTtcblx0ICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcblx0ICAgIHg6IHgsXG5cdCAgICB5OiB5XG5cdCAgfSkgOiB7XG5cdCAgICB4OiB4LFxuXHQgICAgeTogeVxuXHQgIH07XG5cdCAgeCA9IF9yZWYzLng7XG5cdCAgeSA9IF9yZWYzLnk7XG5cdCAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG5cdCAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG5cdCAgdmFyIHNpZGVYID0gbGVmdDtcblx0ICB2YXIgc2lkZVkgPSB0b3A7XG5cdCAgdmFyIHdpbiA9IHdpbmRvdztcblx0ICBpZiAoYWRhcHRpdmUpIHtcblx0ICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcblx0ICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG5cdCAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblx0ICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG5cdCAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXHQgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG5cdCAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuXHQgICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG5cdCAgICAgIH1cblx0ICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblx0ICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblx0ICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG5cdCAgICAgIHNpZGVZID0gYm90dG9tO1xuXHQgICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6XG5cdCAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXHQgICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG5cdCAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuXHQgICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcblx0ICAgIH1cblx0ICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQgfHwgKHBsYWNlbWVudCA9PT0gdG9wIHx8IHBsYWNlbWVudCA9PT0gYm90dG9tKSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuXHQgICAgICBzaWRlWCA9IHJpZ2h0O1xuXHQgICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDpcblx0ICAgICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cdCAgICAgIG9mZnNldFBhcmVudFt3aWR0aFByb3BdO1xuXHQgICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuXHQgICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcblx0ICAgIH1cblx0ICB9XG5cdCAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuXHQgICAgcG9zaXRpb246IHBvc2l0aW9uXG5cdCAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cdCAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xuXHQgICAgeDogeCxcblx0ICAgIHk6IHlcblx0ICB9LCBnZXRXaW5kb3cocG9wcGVyKSkgOiB7XG5cdCAgICB4OiB4LFxuXHQgICAgeTogeVxuXHQgIH07XG5cdCAgeCA9IF9yZWY0Lng7XG5cdCAgeSA9IF9yZWY0Lnk7XG5cdCAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuXHQgICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXHQgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG5cdCAgfVxuXHQgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xuXHR9XG5cdGZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcblx0ICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcblx0ICAgIG9wdGlvbnMgPSBfcmVmNS5vcHRpb25zO1xuXHQgIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcblx0ICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcblx0ICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcblx0ICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcblx0ICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuXHQgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXHQgIHZhciBjb21tb25TdHlsZXMgPSB7XG5cdCAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcblx0ICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG5cdCAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcblx0ICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcblx0ICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuXHQgICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuXHQgIH07XG5cdCAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG5cdCAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG5cdCAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcblx0ICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG5cdCAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcblx0ICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcblx0ICAgIH0pKSk7XG5cdCAgfVxuXHQgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcblx0ICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG5cdCAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG5cdCAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHQgICAgICBhZGFwdGl2ZTogZmFsc2UsXG5cdCAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG5cdCAgICB9KSkpO1xuXHQgIH1cblx0ICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG5cdCAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG5cdCAgfSk7XG5cdH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cdGNvbnN0IGNvbXB1dGVTdHlsZXMkMSA9IHtcblx0ICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG5cdCAgZW5hYmxlZDogdHJ1ZSxcblx0ICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcblx0ICBmbjogY29tcHV0ZVN0eWxlcyxcblx0ICBkYXRhOiB7fVxuXHR9O1xuXG5cdHZhciBwYXNzaXZlID0ge1xuXHQgIHBhc3NpdmU6IHRydWVcblx0fTtcblx0ZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcblx0ICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuXHQgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuXHQgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcblx0ICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG5cdCAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG5cdCAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcblx0ICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcblx0ICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG5cdCAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblx0ICBpZiAoc2Nyb2xsKSB7XG5cdCAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuXHQgICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0ICBpZiAocmVzaXplKSB7XG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcblx0ICB9XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIGlmIChzY3JvbGwpIHtcblx0ICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcblx0ICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICBpZiAocmVzaXplKSB7XG5cdCAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuXHQgICAgfVxuXHQgIH07XG5cdH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cdGNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xuXHQgIG5hbWU6ICdldmVudExpc3RlbmVycycsXG5cdCAgZW5hYmxlZDogdHJ1ZSxcblx0ICBwaGFzZTogJ3dyaXRlJyxcblx0ICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcblx0ICBlZmZlY3Q6IGVmZmVjdCxcblx0ICBkYXRhOiB7fVxuXHR9O1xuXG5cdHZhciBoYXNoJDEgPSB7XG5cdCAgbGVmdDogJ3JpZ2h0Jyxcblx0ICByaWdodDogJ2xlZnQnLFxuXHQgIGJvdHRvbTogJ3RvcCcsXG5cdCAgdG9wOiAnYm90dG9tJ1xuXHR9O1xuXHRmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcblx0ICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuXHQgICAgcmV0dXJuIGhhc2gkMVttYXRjaGVkXTtcblx0ICB9KTtcblx0fVxuXG5cdHZhciBoYXNoID0ge1xuXHQgIHN0YXJ0OiAnZW5kJyxcblx0ICBlbmQ6ICdzdGFydCdcblx0fTtcblx0ZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG5cdCAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcblx0ICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuXHQgIH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcblx0ICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuXHQgIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuXHQgIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG5cdCAgcmV0dXJuIHtcblx0ICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG5cdCAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcblx0ICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG5cdCAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG5cdCAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcblx0ICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG5cdCAgLy8gYW55d2F5LlxuXHQgIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG5cdCAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcblx0ICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG5cdCAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcblx0ICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcblx0ICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG5cdCAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcblx0ICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG5cdCAgdmFyIHggPSAwO1xuXHQgIHZhciB5ID0gMDtcblx0ICBpZiAodmlzdWFsVmlld3BvcnQpIHtcblx0ICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG5cdCAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG5cdCAgICB2YXIgbGF5b3V0Vmlld3BvcnQgPSBpc0xheW91dFZpZXdwb3J0KCk7XG5cdCAgICBpZiAobGF5b3V0Vmlld3BvcnQgfHwgIWxheW91dFZpZXdwb3J0ICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG5cdCAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuXHQgICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4ge1xuXHQgICAgd2lkdGg6IHdpZHRoLFxuXHQgICAgaGVpZ2h0OiBoZWlnaHQsXG5cdCAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcblx0ICAgIHk6IHlcblx0ICB9O1xuXHR9XG5cblx0Ly8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5cdGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG5cdCAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblx0ICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcblx0ICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuXHQgIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuXHQgIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG5cdCAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuXHQgIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcblx0ICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXHQgIGlmIChnZXRDb21wdXRlZFN0eWxlJDEoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG5cdCAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG5cdCAgfVxuXHQgIHJldHVybiB7XG5cdCAgICB3aWR0aDogd2lkdGgsXG5cdCAgICBoZWlnaHQ6IGhlaWdodCxcblx0ICAgIHg6IHgsXG5cdCAgICB5OiB5XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcblx0ICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG5cdCAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLFxuXHQgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcblx0ICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcblx0ICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblx0ICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG5cdCAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcblx0ICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcblx0ICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcblx0ICB9XG5cdCAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcblx0ICAgIHJldHVybiBub2RlO1xuXHQgIH1cblx0ICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xuXHR9XG5cblx0Lypcblx0Z2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcblx0dW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcblx0dG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxuXHRyZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuXHQqL1xuXG5cdGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcblx0ICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXHQgIGlmIChsaXN0ID09PSB2b2lkIDApIHtcblx0ICAgIGxpc3QgPSBbXTtcblx0ICB9XG5cdCAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcblx0ICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcblx0ICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG5cdCAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG5cdCAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcblx0ICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOlxuXHQgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuXHQgIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuXHQgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG5cdCAgICBsZWZ0OiByZWN0LngsXG5cdCAgICB0b3A6IHJlY3QueSxcblx0ICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuXHQgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuXHQgIH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcblx0ICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuXHQgIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcblx0ICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG5cdCAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHQgIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuXHQgIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuXHQgIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdCAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuXHQgIHJlY3QueSA9IHJlY3QudG9wO1xuXHQgIHJldHVybiByZWN0O1xuXHR9XG5cdGZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xuXHQgIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50JDEoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xuXHR9IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG5cdC8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuXHQvLyBgaW5pdGlhbGBcblxuXHRmdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuXHQgIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcblx0ICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG5cdCAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cdCAgaWYgKCFpc0VsZW1lbnQkMShjbGlwcGVyRWxlbWVudCkpIHtcblx0ICAgIHJldHVybiBbXTtcblx0ICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblx0ICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcblx0ICAgIHJldHVybiBpc0VsZW1lbnQkMShjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5Jztcblx0ICB9KTtcblx0fSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG5cdC8vIGNsaXBwaW5nIHBhcmVudHNcblxuXHRmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpIHtcblx0ICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG5cdCAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG5cdCAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG5cdCAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG5cdCAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSk7XG5cdCAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuXHQgICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcblx0ICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG5cdCAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuXHQgICAgcmV0dXJuIGFjY1JlY3Q7XG5cdCAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpKTtcblx0ICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcblx0ICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG5cdCAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcblx0ICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG5cdCAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcblx0ICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG5cdCAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuXHQgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG5cdCAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuXHQgIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG5cdCAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcblx0ICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG5cdCAgdmFyIG9mZnNldHM7XG5cdCAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG5cdCAgICBjYXNlIHRvcDpcblx0ICAgICAgb2Zmc2V0cyA9IHtcblx0ICAgICAgICB4OiBjb21tb25YLFxuXHQgICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcblx0ICAgICAgfTtcblx0ICAgICAgYnJlYWs7XG5cdCAgICBjYXNlIGJvdHRvbTpcblx0ICAgICAgb2Zmc2V0cyA9IHtcblx0ICAgICAgICB4OiBjb21tb25YLFxuXHQgICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuXHQgICAgICB9O1xuXHQgICAgICBicmVhaztcblx0ICAgIGNhc2UgcmlnaHQ6XG5cdCAgICAgIG9mZnNldHMgPSB7XG5cdCAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG5cdCAgICAgICAgeTogY29tbW9uWVxuXHQgICAgICB9O1xuXHQgICAgICBicmVhaztcblx0ICAgIGNhc2UgbGVmdDpcblx0ICAgICAgb2Zmc2V0cyA9IHtcblx0ICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG5cdCAgICAgICAgeTogY29tbW9uWVxuXHQgICAgICB9O1xuXHQgICAgICBicmVhaztcblx0ICAgIGRlZmF1bHQ6XG5cdCAgICAgIG9mZnNldHMgPSB7XG5cdCAgICAgICAgeDogcmVmZXJlbmNlLngsXG5cdCAgICAgICAgeTogcmVmZXJlbmNlLnlcblx0ICAgICAgfTtcblx0ICB9XG5cdCAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cdCAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcblx0ICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXHQgICAgc3dpdGNoICh2YXJpYXRpb24pIHtcblx0ICAgICAgY2FzZSBzdGFydDpcblx0ICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuXHQgICAgICAgIGJyZWFrO1xuXHQgICAgICBjYXNlIGVuZDpcblx0ICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuXHQgICAgICAgIGJyZWFrO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gb2Zmc2V0cztcblx0fVxuXG5cdGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG5cdCAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuXHQgICAgb3B0aW9ucyA9IHt9O1xuXHQgIH1cblx0ICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuXHQgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuXHQgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG5cdCAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuXHQgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcblx0ICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG5cdCAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcblx0ICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcblx0ICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG5cdCAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcblx0ICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG5cdCAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuXHQgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcblx0ICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuXHQgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuXHQgIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcblx0ICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG5cdCAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG5cdCAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG5cdCAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQkMShlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG5cdCAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcblx0ICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcblx0ICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcblx0ICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG5cdCAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuXHQgIH0pO1xuXHQgIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG5cdCAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG5cdCAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG5cdCAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcblx0ICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuXHQgICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG5cdCAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG5cdCAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG5cdCAgfTtcblx0ICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cblx0ICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG5cdCAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuXHQgICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuXHQgICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG5cdCAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuXHQgICAgfSk7XG5cdCAgfVxuXHQgIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG5cdH1cblxuXHRmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuXHQgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcblx0ICAgIG9wdGlvbnMgPSB7fTtcblx0ICB9XG5cdCAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcblx0ICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcblx0ICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG5cdCAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG5cdCAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcblx0ICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG5cdCAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG5cdCAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IHBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG5cdCAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuXHQgIHZhciBwbGFjZW1lbnRzJDEgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG5cdCAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcblx0ICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuXHQgIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMS5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuXHQgICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcblx0ICB9KTtcblx0ICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdCAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcblx0ICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblx0ICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuXHQgICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuXHQgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcblx0ICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuXHQgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcblx0ICAgICAgcGFkZGluZzogcGFkZGluZ1xuXHQgICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcblx0ICAgIHJldHVybiBhY2M7XG5cdCAgfSwge30pO1xuXHQgIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG5cdCAgfSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcblx0ICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG5cdCAgICByZXR1cm4gW107XG5cdCAgfVxuXHQgIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cdCAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcblx0fVxuXHRmdW5jdGlvbiBmbGlwKF9yZWYpIHtcblx0ICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuXHQgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcblx0ICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cdCAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcblx0ICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuXHQgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcblx0ICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuXHQgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG5cdCAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuXHQgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuXHQgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG5cdCAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG5cdCAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuXHQgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG5cdCAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcblx0ICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG5cdCAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG5cdCAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcblx0ICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG5cdCAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG5cdCAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuXHQgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcblx0ICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuXHQgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcblx0ICAgICAgcGFkZGluZzogcGFkZGluZyxcblx0ICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuXHQgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuXHQgICAgfSkgOiBwbGFjZW1lbnQpO1xuXHQgIH0sIFtdKTtcblx0ICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcblx0ICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcblx0ICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuXHQgIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuXHQgIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cdCAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cdCAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcblx0ICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuXHQgICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cdCAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuXHQgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcblx0ICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuXHQgICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcblx0ICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuXHQgICAgICBwYWRkaW5nOiBwYWRkaW5nXG5cdCAgICB9KTtcblx0ICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblx0ICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcblx0ICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG5cdCAgICB9XG5cdCAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcblx0ICAgIHZhciBjaGVja3MgPSBbXTtcblx0ICAgIGlmIChjaGVja01haW5BeGlzKSB7XG5cdCAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcblx0ICAgIH1cblx0ICAgIGlmIChjaGVja0FsdEF4aXMpIHtcblx0ICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuXHQgICAgfVxuXHQgICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcblx0ICAgICAgcmV0dXJuIGNoZWNrO1xuXHQgICAgfSkpIHtcblx0ICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuXHQgICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcblx0ICAgICAgYnJlYWs7XG5cdCAgICB9XG5cdCAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcblx0ICB9XG5cdCAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuXHQgICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG5cdCAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXHQgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcblx0ICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuXHQgICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cdCAgICAgICAgaWYgKGNoZWNrcykge1xuXHQgICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjaGVjaztcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG5cdCAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcblx0ICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG5cdCAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXHQgICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcblx0ICAgIH1cblx0ICB9XG5cdCAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG5cdCAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcblx0ICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcblx0ICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcblx0ICB9XG5cdH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cdGNvbnN0IGZsaXAkMSA9IHtcblx0ICBuYW1lOiAnZmxpcCcsXG5cdCAgZW5hYmxlZDogdHJ1ZSxcblx0ICBwaGFzZTogJ21haW4nLFxuXHQgIGZuOiBmbGlwLFxuXHQgIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG5cdCAgZGF0YToge1xuXHQgICAgX3NraXA6IGZhbHNlXG5cdCAgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG5cdCAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuXHQgICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcblx0ICAgICAgeDogMCxcblx0ICAgICAgeTogMFxuXHQgICAgfTtcblx0ICB9XG5cdCAgcmV0dXJuIHtcblx0ICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG5cdCAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuXHQgICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcblx0ICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG5cdCAgfTtcblx0fVxuXHRmdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcblx0ICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuXHQgICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG5cdCAgfSk7XG5cdH1cblx0ZnVuY3Rpb24gaGlkZShfcmVmKSB7XG5cdCAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcblx0ICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cdCAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG5cdCAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG5cdCAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcblx0ICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuXHQgICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG5cdCAgfSk7XG5cdCAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcblx0ICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG5cdCAgfSk7XG5cdCAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcblx0ICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcblx0ICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcblx0ICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcblx0ICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuXHQgICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG5cdCAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuXHQgICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuXHQgICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuXHQgIH07XG5cdCAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuXHQgICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcblx0ICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuXHQgIH0pO1xuXHR9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXHRjb25zdCBoaWRlJDEgPSB7XG5cdCAgbmFtZTogJ2hpZGUnLFxuXHQgIGVuYWJsZWQ6IHRydWUsXG5cdCAgcGhhc2U6ICdtYWluJyxcblx0ICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuXHQgIGZuOiBoaWRlXG5cdH07XG5cblx0ZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG5cdCAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cdCAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXHQgIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuXHQgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuXHQgICAgfSkpIDogb2Zmc2V0LFxuXHQgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuXHQgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXHQgIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcblx0ICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuXHQgIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcblx0ICAgIHg6IGRpc3RhbmNlLFxuXHQgICAgeTogc2tpZGRpbmdcblx0ICB9IDoge1xuXHQgICAgeDogc2tpZGRpbmcsXG5cdCAgICB5OiBkaXN0YW5jZVxuXHQgIH07XG5cdH1cblx0ZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG5cdCAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG5cdCAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcblx0ICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuXHQgIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcblx0ICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuXHQgIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG5cdCAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG5cdCAgICByZXR1cm4gYWNjO1xuXHQgIH0sIHt9KTtcblx0ICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuXHQgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuXHQgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXHQgIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuXHQgICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcblx0ICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG5cdCAgfVxuXHQgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xuXHR9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXHRjb25zdCBvZmZzZXQkMSA9IHtcblx0ICBuYW1lOiAnb2Zmc2V0Jyxcblx0ICBlbmFibGVkOiB0cnVlLFxuXHQgIHBoYXNlOiAnbWFpbicsXG5cdCAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuXHQgIGZuOiBvZmZzZXRcblx0fTtcblxuXHRmdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcblx0ICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuXHQgICAgbmFtZSA9IF9yZWYubmFtZTtcblx0ICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuXHQgIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcblx0ICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcblx0ICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcblx0ICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuXHQgICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG5cdCAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG5cdCAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuXHQgIH0pO1xuXHR9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXHRjb25zdCBwb3BwZXJPZmZzZXRzJDEgPSB7XG5cdCAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuXHQgIGVuYWJsZWQ6IHRydWUsXG5cdCAgcGhhc2U6ICdyZWFkJyxcblx0ICBmbjogcG9wcGVyT2Zmc2V0cyxcblx0ICBkYXRhOiB7fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuXHQgIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG5cdH1cblxuXHRmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuXHQgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG5cdCAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuXHQgICAgbmFtZSA9IF9yZWYubmFtZTtcblx0ICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuXHQgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG5cdCAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuXHQgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuXHQgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuXHQgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG5cdCAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG5cdCAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuXHQgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG5cdCAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG5cdCAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcblx0ICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcblx0ICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuXHQgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuXHQgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG5cdCAgICBwYWRkaW5nOiBwYWRkaW5nLFxuXHQgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG5cdCAgfSk7XG5cdCAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG5cdCAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuXHQgIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuXHQgIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcblx0ICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuXHQgIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuXHQgIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuXHQgIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuXHQgIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcblx0ICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG5cdCAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuXHQgIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuXHQgICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuXHQgICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcblx0ICB9IDogT2JqZWN0LmFzc2lnbih7XG5cdCAgICBtYWluQXhpczogMCxcblx0ICAgIGFsdEF4aXM6IDBcblx0ICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG5cdCAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuXHQgIHZhciBkYXRhID0ge1xuXHQgICAgeDogMCxcblx0ICAgIHk6IDBcblx0ICB9O1xuXHQgIGlmICghcG9wcGVyT2Zmc2V0cykge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBpZiAoY2hlY2tNYWluQXhpcykge1xuXHQgICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblx0ICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuXHQgICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG5cdCAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblx0ICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcblx0ICAgIHZhciBtaW4kMSA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcblx0ICAgIHZhciBtYXgkMSA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuXHQgICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuXHQgICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG5cdCAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuXHQgICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG5cdCAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG5cdCAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcblx0ICAgICAgd2lkdGg6IDAsXG5cdCAgICAgIGhlaWdodDogMFxuXHQgICAgfTtcblx0ICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuXHQgICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG5cdCAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuXHQgICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuXHQgICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcblx0ICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cblx0ICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuXHQgICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuXHQgICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG5cdCAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG5cdCAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuXHQgICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcblx0ICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcblx0ICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuXHQgICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cdCAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcblx0ICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuXHQgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG5cdCAgfVxuXHQgIGlmIChjaGVja0FsdEF4aXMpIHtcblx0ICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXHQgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXHQgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXHQgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXHQgICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cdCAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXHQgICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXHQgICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXHQgICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cdCAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXHQgICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblx0ICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cdCAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcblx0ICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcblx0ICB9XG5cdCAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG5cdH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cdGNvbnN0IHByZXZlbnRPdmVyZmxvdyQxID0ge1xuXHQgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuXHQgIGVuYWJsZWQ6IHRydWUsXG5cdCAgcGhhc2U6ICdtYWluJyxcblx0ICBmbjogcHJldmVudE92ZXJmbG93LFxuXHQgIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cblx0fTtcblxuXHRmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG5cdCAgcmV0dXJuIHtcblx0ICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcblx0ICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3Bcblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG5cdCAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuXHQgICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG5cdCAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHQgIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcblx0ICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcblx0ICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcblx0fSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG5cdC8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXHRmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcblx0ICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG5cdCAgICBpc0ZpeGVkID0gZmFsc2U7XG5cdCAgfVxuXHQgIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcblx0ICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG5cdCAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuXHQgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XG5cdCAgdmFyIHNjcm9sbCA9IHtcblx0ICAgIHNjcm9sbExlZnQ6IDAsXG5cdCAgICBzY3JvbGxUb3A6IDBcblx0ICB9O1xuXHQgIHZhciBvZmZzZXRzID0ge1xuXHQgICAgeDogMCxcblx0ICAgIHk6IDBcblx0ICB9O1xuXHQgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcblx0ICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHxcblx0ICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuXHQgICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuXHQgICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG5cdCAgICB9XG5cdCAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG5cdCAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcblx0ICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuXHQgICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcblx0ICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG5cdCAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHtcblx0ICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuXHQgICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuXHQgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG5cdCAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuXHQgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG5cdCAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG5cdCAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuXHQgICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG5cdCAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuXHQgIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcblx0ICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuXHQgICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcblx0ICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuXHQgICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcblx0ICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cdCAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG5cdCAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuXHQgIH1cblx0ICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcblx0ICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcblx0ICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG5cdCAgICAgIHNvcnQobW9kaWZpZXIpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG5cdCAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG5cdCAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG5cdCAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuXHQgICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG5cdCAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG5cdCAgICB9KSk7XG5cdCAgfSwgW10pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcblx0ICB2YXIgcGVuZGluZztcblx0ICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKCFwZW5kaW5nKSB7XG5cdCAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHQgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHBlbmRpbmc7XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuXHQgIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcblx0ICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuXHQgICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG5cdCAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG5cdCAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcblx0ICAgIH0pIDogY3VycmVudDtcblx0ICAgIHJldHVybiBtZXJnZWQ7XG5cdCAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG5cdCAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHJldHVybiBtZXJnZWRba2V5XTtcblx0ICB9KTtcblx0fVxuXG5cdHZhciBERUZBVUxUX09QVElPTlMgPSB7XG5cdCAgcGxhY2VtZW50OiAnYm90dG9tJyxcblx0ICBtb2RpZmllcnM6IFtdLFxuXHQgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG5cdH07XG5cdGZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG5cdCAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHQgIH1cblx0ICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuXHQgICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuXHQgIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG5cdCAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuXHQgICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuXHQgIH1cblx0ICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuXHQgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcblx0ICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuXHQgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuXHQgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuXHQgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcblx0ICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcblx0ICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuXHQgICAgfVxuXHQgICAgdmFyIHN0YXRlID0ge1xuXHQgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHQgICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcblx0ICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG5cdCAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuXHQgICAgICBlbGVtZW50czoge1xuXHQgICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuXHQgICAgICAgIHBvcHBlcjogcG9wcGVyXG5cdCAgICAgIH0sXG5cdCAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuXHQgICAgICBzdHlsZXM6IHt9XG5cdCAgICB9O1xuXHQgICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcblx0ICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuXHQgICAgdmFyIGluc3RhbmNlID0ge1xuXHQgICAgICBzdGF0ZTogc3RhdGUsXG5cdCAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuXHQgICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcblx0ICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG5cdCAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcblx0ICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuXHQgICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQkMShyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcblx0ICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuXHQgICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuXHQgICAgICAgIC8vIHByb3BlcnRpZXNcblxuXHQgICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cblx0ICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcblx0ICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG5cdCAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuXHQgICAgICB9LFxuXHQgICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuXHQgICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG5cdCAgICAgIC8vIGxvZ2ljLlxuXHQgICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG5cdCAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2Rcblx0ICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuXHQgICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG5cdCAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuXHQgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG5cdCAgICAgICAgLy8gYW55bW9yZVxuXG5cdCAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblx0ICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcblx0ICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcblx0ICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG5cdCAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcblx0ICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuXHQgICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG5cdCAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcblx0ICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuXHQgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG5cdCAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG5cdCAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG5cdCAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cblx0ICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuXHQgICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcblx0ICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdCAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcblx0ICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcblx0ICAgICAgICAgICAgaW5kZXggPSAtMTtcblx0ICAgICAgICAgICAgY29udGludWU7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG5cdCAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuXHQgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG5cdCAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuXHQgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cdCAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuXHQgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcblx0ICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcblx0ICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuXHQgICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuXHQgICAgICAgICAgICB9KSB8fCBzdGF0ZTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuXHQgICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcblx0ICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdCAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuXHQgICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0pLFxuXHQgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHQgICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcblx0ICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdCAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cdCAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgIH1cblx0ICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcblx0ICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcblx0ICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuXHQgICAgICB9XG5cdCAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG5cdCAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcblx0ICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG5cdCAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcblx0ICAgIC8vIG9uZS5cblxuXHQgICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuXHQgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcblx0ICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcblx0ICAgICAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcblx0ICAgICAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zLFxuXHQgICAgICAgICAgZWZmZWN0ID0gX3JlZi5lZmZlY3Q7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuXHQgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG5cdCAgICAgICAgICAgIG5hbWU6IG5hbWUsXG5cdCAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcblx0ICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cdCAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG5cdCAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcblx0ICAgICAgICByZXR1cm4gZm4oKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICB9O1xuXHR9XG5cdHZhciBjcmVhdGVQb3BwZXIkMiA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cdHZhciBkZWZhdWx0TW9kaWZpZXJzJDEgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxXTtcblx0dmFyIGNyZWF0ZVBvcHBlciQxID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG5cdCAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVycyQxXG5cdH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblx0dmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcblx0dmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuXHQgIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcblx0fSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXHRjb25zdCBQb3BwZXIgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSgvKiNfX1BVUkVfXyovT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcblx0XHRfX3Byb3RvX186IG51bGwsXG5cdFx0YWZ0ZXJNYWluLFxuXHRcdGFmdGVyUmVhZCxcblx0XHRhZnRlcldyaXRlLFxuXHRcdGFwcGx5U3R5bGVzOiBhcHBseVN0eWxlcyQxLFxuXHRcdGFycm93OiBhcnJvdyQxLFxuXHRcdGF1dG8sXG5cdFx0YmFzZVBsYWNlbWVudHMsXG5cdFx0YmVmb3JlTWFpbixcblx0XHRiZWZvcmVSZWFkLFxuXHRcdGJlZm9yZVdyaXRlLFxuXHRcdGJvdHRvbSxcblx0XHRjbGlwcGluZ1BhcmVudHMsXG5cdFx0Y29tcHV0ZVN0eWxlczogY29tcHV0ZVN0eWxlcyQxLFxuXHRcdGNyZWF0ZVBvcHBlcixcblx0XHRjcmVhdGVQb3BwZXJCYXNlOiBjcmVhdGVQb3BwZXIkMixcblx0XHRjcmVhdGVQb3BwZXJMaXRlOiBjcmVhdGVQb3BwZXIkMSxcblx0XHRkZXRlY3RPdmVyZmxvdyxcblx0XHRlbmQsXG5cdFx0ZXZlbnRMaXN0ZW5lcnMsXG5cdFx0ZmxpcDogZmxpcCQxLFxuXHRcdGhpZGU6IGhpZGUkMSxcblx0XHRsZWZ0LFxuXHRcdG1haW4sXG5cdFx0bW9kaWZpZXJQaGFzZXMsXG5cdFx0b2Zmc2V0OiBvZmZzZXQkMSxcblx0XHRwbGFjZW1lbnRzLFxuXHRcdHBvcHBlcixcblx0XHRwb3BwZXJHZW5lcmF0b3IsXG5cdFx0cG9wcGVyT2Zmc2V0czogcG9wcGVyT2Zmc2V0cyQxLFxuXHRcdHByZXZlbnRPdmVyZmxvdzogcHJldmVudE92ZXJmbG93JDEsXG5cdFx0cmVhZCxcblx0XHRyZWZlcmVuY2UsXG5cdFx0cmlnaHQsXG5cdFx0c3RhcnQsXG5cdFx0dG9wLFxuXHRcdHZhcmlhdGlvblBsYWNlbWVudHMsXG5cdFx0dmlld3BvcnQsXG5cdFx0d3JpdGVcblx0fSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KSk7XG5cblx0LyohXG5cdCAgKiBCb290c3RyYXAgdjUuMy43IChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuXHQgICogQ29weXJpZ2h0IDIwMTEtMjAyNSBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuXHQgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAgKi9cblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IERhdGEgPSB7XG5cdCAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcblx0ICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcblx0ICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKTtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudCk7XG5cblx0ICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuXHQgICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcblx0ICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHQgICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSk7XG5cdCAgfSxcblx0ICBnZXQoZWxlbWVudCwga2V5KSB7XG5cdCAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcblx0ICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gbnVsbDtcblx0ICB9LFxuXHQgIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcblx0ICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KTtcblx0ICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpO1xuXG5cdCAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcblx0ICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG5cdCAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIHV0aWwvaW5kZXguanNcblx0ICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwO1xuXHRjb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDA7XG5cdGNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xuXG5cdC8qKlxuXHQgKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Y29uc3QgcGFyc2VTZWxlY3RvciA9IHNlbGVjdG9yID0+IHtcblx0ICBpZiAoc2VsZWN0b3IgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuXHQgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cblx0ICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvIyhbXlxcc1wiIyddKykvZywgKG1hdGNoLCBpZCkgPT4gYCMke0NTUy5lc2NhcGUoaWQpfWApO1xuXHQgIH1cblx0ICByZXR1cm4gc2VsZWN0b3I7XG5cdH07XG5cblx0Ly8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5cdGNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG5cdCAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgcmV0dXJuIGAke29iamVjdH1gO1xuXHQgIH1cblx0ICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFB1YmxpYyBVdGlsIEFQSVxuXHQgKi9cblxuXHRjb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuXHQgIGRvIHtcblx0ICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTtcblx0ICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcblx0ICByZXR1cm4gcHJlZml4O1xuXHR9O1xuXHRjb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuXHQgIGlmICghZWxlbWVudCkge1xuXHQgICAgcmV0dXJuIDA7XG5cdCAgfVxuXG5cdCAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcblx0ICBsZXQge1xuXHQgICAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuXHQgICAgdHJhbnNpdGlvbkRlbGF5XG5cdCAgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXHQgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKTtcblx0ICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7XG5cblx0ICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG5cdCAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcblx0ICAgIHJldHVybiAwO1xuXHQgIH1cblxuXHQgIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3Rcblx0ICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXTtcblx0ICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcblx0ICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xuXHR9O1xuXHRjb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuXHQgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKTtcblx0fTtcblx0Y29uc3QgaXNFbGVtZW50ID0gb2JqZWN0ID0+IHtcblx0ICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICBpZiAodHlwZW9mIG9iamVjdC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICBvYmplY3QgPSBvYmplY3RbMF07XG5cdCAgfVxuXHQgIHJldHVybiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJztcblx0fTtcblx0Y29uc3QgZ2V0RWxlbWVudCA9IG9iamVjdCA9PiB7XG5cdCAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcblx0ICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcblx0ICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0O1xuXHQgIH1cblx0ICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0ICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSk7XG5cdCAgfVxuXHQgIHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcblx0ICBpZiAoIWlzRWxlbWVudChlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHQgIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnO1xuXHQgIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG5cdCAgY29uc3QgY2xvc2VkRGV0YWlscyA9IGVsZW1lbnQuY2xvc2VzdCgnZGV0YWlsczpub3QoW29wZW5dKScpO1xuXHQgIGlmICghY2xvc2VkRGV0YWlscykge1xuXHQgICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGU7XG5cdCAgfVxuXHQgIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG5cdCAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5Jyk7XG5cdCAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gZWxlbWVudElzVmlzaWJsZTtcblx0fTtcblx0Y29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuXHQgIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHQgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHQgIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkO1xuXHQgIH1cblx0ICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSc7XG5cdH07XG5cdGNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG5cdCAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG5cdCAgICByZXR1cm4gbnVsbDtcblx0ICB9XG5cblx0ICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcblx0ICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG5cdCAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbDtcblx0ICB9XG5cdCAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG5cdCAgICByZXR1cm4gZWxlbWVudDtcblx0ICB9XG5cblx0ICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuXHQgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG5cdCAgICByZXR1cm4gbnVsbDtcblx0ICB9XG5cdCAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSk7XG5cdH07XG5cdGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuXHQvKipcblx0ICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybiB2b2lkXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaGFycnl0aGVvLmNvbS9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuXHQgKi9cblx0Y29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG5cdCAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdH07XG5cdGNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcblx0ICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcblx0ICAgIHJldHVybiB3aW5kb3cualF1ZXJ5O1xuXHQgIH1cblx0ICByZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdO1xuXHRjb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG5cdCAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuXHQgICAgLy8gYWRkIGxpc3RlbmVyIG9uIHRoZSBmaXJzdCBjYWxsIHdoZW4gdGhlIGRvY3VtZW50IGlzIGluIGxvYWRpbmcgc3RhdGVcblx0ICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcblx0ICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0ICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MpIHtcblx0ICAgICAgICAgIGNhbGxiYWNrKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGNhbGxiYWNrKCk7XG5cdCAgfVxuXHR9O1xuXHRjb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnO1xuXHRjb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuXHQgIG9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG5cdCAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KCk7XG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblx0ICAgIGlmICgkKSB7XG5cdCAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRTtcblx0ICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXTtcblx0ICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2U7XG5cdCAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW47XG5cdCAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcblx0ICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuXHQgICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlO1xuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXHRjb25zdCBleGVjdXRlID0gKHBvc3NpYmxlQ2FsbGJhY2ssIGFyZ3MgPSBbXSwgZGVmYXVsdFZhbHVlID0gcG9zc2libGVDYWxsYmFjaykgPT4ge1xuXHQgIHJldHVybiB0eXBlb2YgcG9zc2libGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHBvc3NpYmxlQ2FsbGJhY2suY2FsbCguLi5hcmdzKSA6IGRlZmF1bHRWYWx1ZTtcblx0fTtcblx0Y29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuXHQgIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcblx0ICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1O1xuXHQgIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmc7XG5cdCAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuXHQgIGNvbnN0IGhhbmRsZXIgPSAoe1xuXHQgICAgdGFyZ2V0XG5cdCAgfSkgPT4ge1xuXHQgICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY2FsbGVkID0gdHJ1ZTtcblx0ICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpO1xuXHQgICAgZXhlY3V0ZShjYWxsYmFjayk7XG5cdCAgfTtcblx0ICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKTtcblx0ICBzZXRUaW1lb3V0KCgpID0+IHtcblx0ICAgIGlmICghY2FsbGVkKSB7XG5cdCAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KTtcblx0ICAgIH1cblx0ICB9LCBlbXVsYXRlZER1cmF0aW9uKTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG5cdCAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcblx0ICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG5cdCAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG5cdCAqL1xuXHRjb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuXHQgIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aDtcblx0ICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG5cblx0ICAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuXHQgIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG5cdCAgaWYgKGluZGV4ID09PSAtMSkge1xuXHQgICAgcmV0dXJuICFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdFtsaXN0TGVuZ3RoIC0gMV0gOiBsaXN0WzBdO1xuXHQgIH1cblx0ICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xO1xuXHQgIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuXHQgICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGg7XG5cdCAgfVxuXHQgIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXTtcblx0fTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIGRvbS9ldmVudC1oYW5kbGVyLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qLztcblx0Y29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovO1xuXHRjb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvO1xuXHRjb25zdCBldmVudFJlZ2lzdHJ5ID0ge307IC8vIEV2ZW50cyBzdG9yYWdlXG5cdGxldCB1aWRFdmVudCA9IDE7XG5cdGNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcblx0ICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcblx0ICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG5cdH07XG5cdGNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZXVwJywgJ21vdXNlZG93bicsICdjb250ZXh0bWVudScsICdtb3VzZXdoZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdtb3VzZW1vdmUnLCAnc2VsZWN0c3RhcnQnLCAnc2VsZWN0ZW5kJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLCAna2V5dXAnLCAnb3JpZW50YXRpb25jaGFuZ2UnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLCAncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJywgJ3BvaW50ZXJsZWF2ZScsICdwb2ludGVyY2FuY2VsJywgJ2dlc3R1cmVzdGFydCcsICdnZXN0dXJlY2hhbmdlJywgJ2dlc3R1cmVlbmQnLCAnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCAncmVzZXQnLCAnc2VsZWN0JywgJ3N1Ym1pdCcsICdmb2N1c2luJywgJ2ZvY3Vzb3V0JywgJ2xvYWQnLCAndW5sb2FkJywgJ2JlZm9yZXVubG9hZCcsICdyZXNpemUnLCAnbW92ZScsICdET01Db250ZW50TG9hZGVkJywgJ3JlYWR5c3RhdGVjaGFuZ2UnLCAnZXJyb3InLCAnYWJvcnQnLCAnc2Nyb2xsJ10pO1xuXG5cdC8qKlxuXHQgKiBQcml2YXRlIG1ldGhvZHNcblx0ICovXG5cblx0ZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuXHQgIHJldHVybiB1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWAgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrO1xuXHR9XG5cdGZ1bmN0aW9uIGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuXHQgIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KTtcblx0ICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkO1xuXHQgIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fTtcblx0ICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdO1xuXHR9XG5cdGZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuXHQgICAgaHlkcmF0ZU9iaihldmVudCwge1xuXHQgICAgICBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudFxuXHQgICAgfSk7XG5cdCAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcblx0ICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbik7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSk7XG5cdCAgfTtcblx0fVxuXHRmdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuXHQgICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHQgICAgZm9yIChsZXQge1xuXHQgICAgICB0YXJnZXRcblx0ICAgIH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcblx0ICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG5cdCAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuXHQgICAgICAgICAgY29udGludWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHtcblx0ICAgICAgICAgIGRlbGVnYXRlVGFyZ2V0OiB0YXJnZXRcblx0ICAgICAgICB9KTtcblx0ICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcblx0ICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cdGZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgY2FsbGFibGUsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcblx0ICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudHMpLmZpbmQoZXZlbnQgPT4gZXZlbnQuY2FsbGFibGUgPT09IGNhbGxhYmxlICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKTtcblx0fVxuXHRmdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcblx0ICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJztcblx0ICAvLyBUT0RPOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcblx0ICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb247XG5cdCAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudCk7XG5cdCAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcblx0ICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50O1xuXHQgIH1cblx0ICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XTtcblx0fVxuXHRmdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuXHQgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHQgIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKTtcblxuXHQgIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cblx0ICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcblx0ICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG5cdCAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG5cdCAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG5cdCAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKTtcblx0ICB9XG5cdCAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KTtcblx0ICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KTtcblx0ICBjb25zdCBwcmV2aW91c0Z1bmN0aW9uID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKTtcblx0ICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuXHQgICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmY7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHQgIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKTtcblx0ICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID8gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDogYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSk7XG5cdCAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbDtcblx0ICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlO1xuXHQgIGZuLm9uZU9mZiA9IG9uZU9mZjtcblx0ICBmbi51aWRFdmVudCA9IHVpZDtcblx0ICBoYW5kbGVyc1t1aWRdID0gZm47XG5cdCAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKTtcblx0fVxuXHRmdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcblx0ICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xuXHQgIGlmICghZm4pIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSk7XG5cdCAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XTtcblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuXHQgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XG5cdCAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuXHQgICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuXHQgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcblx0ICAgIH1cblx0ICB9XG5cdH1cblx0ZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG5cdCAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuXHQgIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpO1xuXHQgIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50O1xuXHR9XG5cdGNvbnN0IEV2ZW50SGFuZGxlciA9IHtcblx0ICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG5cdCAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIGZhbHNlKTtcblx0ICB9LFxuXHQgIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG5cdCAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpO1xuXHQgIH0sXG5cdCAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcblx0ICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pO1xuXHQgICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50O1xuXHQgICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KTtcblx0ICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XG5cdCAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKTtcblx0ICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuXHQgICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpZiAoaXNOYW1lc3BhY2UpIHtcblx0ICAgICAgZm9yIChjb25zdCBlbGVtZW50RXZlbnQgb2YgT2JqZWN0LmtleXMoZXZlbnRzKSkge1xuXHQgICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBmb3IgKGNvbnN0IFtrZXlIYW5kbGVycywgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuXHQgICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJyk7XG5cdCAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcblx0ICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuXHQgICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KCk7XG5cdCAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpO1xuXHQgICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50O1xuXHQgICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbDtcblx0ICAgIGxldCBidWJibGVzID0gdHJ1ZTtcblx0ICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWU7XG5cdCAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuXHQgICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcblx0ICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKTtcblx0ICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KTtcblx0ICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuXHQgICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpO1xuXHQgICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG5cdCAgICB9XG5cdCAgICBjb25zdCBldnQgPSBoeWRyYXRlT2JqKG5ldyBFdmVudChldmVudCwge1xuXHQgICAgICBidWJibGVzLFxuXHQgICAgICBjYW5jZWxhYmxlOiB0cnVlXG5cdCAgICB9KSwgYXJncyk7XG5cdCAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuXHQgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgIH1cblx0ICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuXHQgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcblx0ICAgIH1cblx0ICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuXHQgICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGV2dDtcblx0ICB9XG5cdH07XG5cdGZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhID0ge30pIHtcblx0ICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcblx0ICAgIH0gY2F0Y2ggKF91bnVzZWQpIHtcblx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG5cdCAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgICAgIGdldCgpIHtcblx0ICAgICAgICAgIHJldHVybiB2YWx1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gb2JqO1xuXHR9XG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcblx0ICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcblx0ICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHQgIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuXHQgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdCAgfVxuXHQgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuXHQgICAgcmV0dXJuIG51bGw7XG5cdCAgfVxuXHQgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdCAgICByZXR1cm4gdmFsdWU7XG5cdCAgfVxuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblx0ICB9IGNhdGNoIChfdW51c2VkKSB7XG5cdCAgICByZXR1cm4gdmFsdWU7XG5cdCAgfVxuXHR9XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG5cdCAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApO1xuXHR9XG5cdGNvbnN0IE1hbmlwdWxhdG9yID0ge1xuXHQgIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuXHQgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpO1xuXHQgIH0sXG5cdCAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcblx0ICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApO1xuXHQgIH0sXG5cdCAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuXHQgICAgaWYgKCFlbGVtZW50KSB7XG5cdCAgICAgIHJldHVybiB7fTtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcblx0ICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpO1xuXHQgICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG5cdCAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKTtcblx0ICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEpO1xuXHQgICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gYXR0cmlidXRlcztcblx0ICB9LFxuXHQgIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG5cdCAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSk7XG5cdCAgfVxuXHR9O1xuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgdXRpbC9jb25maWcuanNcblx0ICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIENvbmZpZyB7XG5cdCAgLy8gR2V0dGVyc1xuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcblx0ICAgIHJldHVybiB7fTtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcblx0ICAgIHJldHVybiB7fTtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBOQU1FKCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKTtcblx0ICB9XG5cdCAgX2dldENvbmZpZyhjb25maWcpIHtcblx0ICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZyk7XG5cdCAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZyk7XG5cdCAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcblx0ICAgIHJldHVybiBjb25maWc7XG5cdCAgfVxuXHQgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuXHQgICAgcmV0dXJuIGNvbmZpZztcblx0ICB9XG5cdCAgX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgZWxlbWVudCkge1xuXHQgICAgY29uc3QganNvbkNvbmZpZyA9IGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge307IC8vIHRyeSB0byBwYXJzZVxuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG5cdCAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuXHQgICAgICAuLi4oaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG5cdCAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXHQgICAgfTtcblx0ICB9XG5cdCAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuXHQgICAgZm9yIChjb25zdCBbcHJvcGVydHksIGV4cGVjdGVkVHlwZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZ1R5cGVzKSkge1xuXHQgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV07XG5cdCAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpO1xuXHQgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIEJvb3RzdHJhcCBiYXNlLWNvbXBvbmVudC5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnN0YW50c1xuXHQgKi9cblxuXHRjb25zdCBWRVJTSU9OID0gJzUuMy43JztcblxuXHQvKipcblx0ICogQ2xhc3MgZGVmaW5pdGlvblxuXHQgKi9cblxuXHRjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcblx0ICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcblx0ICAgIHN1cGVyKCk7XG5cdCAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KTtcblx0ICAgIGlmICghZWxlbWVudCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblx0ICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuXHQgICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcyk7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgZGlzcG9zZSgpIHtcblx0ICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuXHQgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG5cdCAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHQgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcblx0ICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpO1xuXHQgIH1cblx0ICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuXHQgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnLCB0aGlzLl9lbGVtZW50KTtcblx0ICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcblx0ICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuXHQgICAgcmV0dXJuIGNvbmZpZztcblx0ICB9XG5cblx0ICAvLyBTdGF0aWNcblx0ICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuXHQgICAgcmV0dXJuIERhdGEuZ2V0KGdldEVsZW1lbnQoZWxlbWVudCksIHRoaXMuREFUQV9LRVkpO1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCBjb25maWcgPSB7fSkge1xuXHQgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKTtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuXHQgICAgcmV0dXJuIFZFUlNJT047XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG5cdCAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWA7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuXHQgICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWA7XG5cdCAgfVxuXHQgIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuXHQgICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0Y29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcblx0ICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKTtcblx0ICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcblx0ICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuXHQgICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3Nlcyxcblx0ICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3Rvcixcblx0ICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cblx0ICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG5cdCAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpIHtcblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cblx0ICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuXHQgICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcblx0ICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YDtcblx0ICAgIH1cblx0ICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGw7XG5cdCAgfVxuXHQgIHJldHVybiBzZWxlY3RvciA/IHNlbGVjdG9yLnNwbGl0KCcsJykubWFwKHNlbCA9PiBwYXJzZVNlbGVjdG9yKHNlbCkpLmpvaW4oJywnKSA6IG51bGw7XG5cdH07XG5cdGNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuXHQgIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0ICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7XG5cdCAgfSxcblx0ICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG5cdCAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcblx0ICB9LFxuXHQgIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG5cdCAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSk7XG5cdCAgfSxcblx0ICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG5cdCAgICBjb25zdCBwYXJlbnRzID0gW107XG5cdCAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XG5cdCAgICB3aGlsZSAoYW5jZXN0b3IpIHtcblx0ICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKTtcblx0ICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHBhcmVudHM7XG5cdCAgfSxcblx0ICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG5cdCAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdCAgICB3aGlsZSAocHJldmlvdXMpIHtcblx0ICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG5cdCAgICAgICAgcmV0dXJuIFtwcmV2aW91c107XG5cdCAgICAgIH1cblx0ICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFtdO1xuXHQgIH0sXG5cdCAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcblx0ICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG5cdCAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQgICAgd2hpbGUgKG5leHQpIHtcblx0ICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcblx0ICAgICAgICByZXR1cm4gW25leHRdO1xuXHQgICAgICB9XG5cdCAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcblx0ICAgIH1cblx0ICAgIHJldHVybiBbXTtcblx0ICB9LFxuXHQgIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcblx0ICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbJ2EnLCAnYnV0dG9uJywgJ2lucHV0JywgJ3RleHRhcmVhJywgJ3NlbGVjdCcsICdkZXRhaWxzJywgJ1t0YWJpbmRleF0nLCAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsJyk7XG5cdCAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSk7XG5cdCAgfSxcblx0ICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcblx0ICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG5cdCAgICBpZiAoc2VsZWN0b3IpIHtcblx0ICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIG51bGw7XG5cdCAgfSxcblx0ICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcblx0ICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG5cdCAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA6IG51bGw7XG5cdCAgfSxcblx0ICBnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcblx0ICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG5cdCAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKSA6IFtdO1xuXHQgIH1cblx0fTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0Y29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcblx0ICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YDtcblx0ICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUU7XG5cdCAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcblx0ICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgIH1cblx0ICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApO1xuXHQgICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuXG5cdCAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuXHQgICAgaW5zdGFuY2VbbWV0aG9kXSgpO1xuXHQgIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgYWxlcnQuanNcblx0ICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdGFudHNcblx0ICovXG5cblx0Y29uc3QgTkFNRSRmID0gJ2FsZXJ0Jztcblx0Y29uc3QgREFUQV9LRVkkYSA9ICdicy5hbGVydCc7XG5cdGNvbnN0IEVWRU5UX0tFWSRiID0gYC4ke0RBVEFfS0VZJGF9YDtcblx0Y29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWSRifWA7XG5cdGNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWSRifWA7XG5cdGNvbnN0IENMQVNTX05BTUVfRkFERSQ1ID0gJ2ZhZGUnO1xuXHRjb25zdCBDTEFTU19OQU1FX1NIT1ckOCA9ICdzaG93JztcblxuXHQvKipcblx0ICogQ2xhc3MgZGVmaW5pdGlvblxuXHQgKi9cblxuXHRjbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG5cdCAgICByZXR1cm4gTkFNRSRmO1xuXHQgIH1cblxuXHQgIC8vIFB1YmxpY1xuXHQgIGNsb3NlKCkge1xuXHQgICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKTtcblx0ICAgIGlmIChjbG9zZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ4KTtcblx0ICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkNSk7XG5cdCAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpO1xuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfZGVzdHJveUVsZW1lbnQoKSB7XG5cdCAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuXHQgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKTtcblx0ICAgIHRoaXMuZGlzcG9zZSgpO1xuXHQgIH1cblxuXHQgIC8vIFN0YXRpY1xuXHQgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG5cdCAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgY29uc3QgZGF0YSA9IEFsZXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG5cdCAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuXHQgICAgICB9XG5cdCAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuXHQgKi9cblxuXHRlbmFibGVEaXNtaXNzVHJpZ2dlcihBbGVydCwgJ2Nsb3NlJyk7XG5cblx0LyoqXG5cdCAqIGpRdWVyeVxuXHQgKi9cblxuXHRkZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpO1xuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgYnV0dG9uLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IE5BTUUkZSA9ICdidXR0b24nO1xuXHRjb25zdCBEQVRBX0tFWSQ5ID0gJ2JzLmJ1dHRvbic7XG5cdGNvbnN0IEVWRU5UX0tFWSRhID0gYC4ke0RBVEFfS0VZJDl9YDtcblx0Y29uc3QgREFUQV9BUElfS0VZJDYgPSAnLmRhdGEtYXBpJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMyA9ICdhY3RpdmUnO1xuXHRjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ1ID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSc7XG5cdGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYgPSBgY2xpY2ske0VWRU5UX0tFWSRhfSR7REFUQV9BUElfS0VZJDZ9YDtcblxuXHQvKipcblx0ICogQ2xhc3MgZGVmaW5pdGlvblxuXHQgKi9cblxuXHRjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0ICAvLyBHZXR0ZXJzXG5cdCAgc3RhdGljIGdldCBOQU1FKCkge1xuXHQgICAgcmV0dXJuIE5BTUUkZTtcblx0ICB9XG5cblx0ICAvLyBQdWJsaWNcblx0ICB0b2dnbGUoKSB7XG5cdCAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuXHQgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSQzKSk7XG5cdCAgfVxuXG5cdCAgLy8gU3RhdGljXG5cdCAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHQgICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7XG5cdCAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG5cdCAgICAgICAgZGF0YVtjb25maWddKCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuXHQgKi9cblxuXHRFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUsIGV2ZW50ID0+IHtcblx0ICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFJDUpO1xuXHQgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZShidXR0b24pO1xuXHQgIGRhdGEudG9nZ2xlKCk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBqUXVlcnlcblx0ICovXG5cblx0ZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbik7XG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IE5BTUUkZCA9ICdzd2lwZSc7XG5cdGNvbnN0IEVWRU5UX0tFWSQ5ID0gJy5icy5zd2lwZSc7XG5cdGNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZJDl9YDtcblx0Y29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZJDl9YDtcblx0Y29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWSQ5fWA7XG5cdGNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVkkOX1gO1xuXHRjb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVkkOX1gO1xuXHRjb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnO1xuXHRjb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3Blbic7XG5cdGNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50Jztcblx0Y29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG5cdGNvbnN0IERlZmF1bHQkYyA9IHtcblx0ICBlbmRDYWxsYmFjazogbnVsbCxcblx0ICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG5cdCAgcmlnaHRDYWxsYmFjazogbnVsbFxuXHR9O1xuXHRjb25zdCBEZWZhdWx0VHlwZSRjID0ge1xuXHQgIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcblx0ICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuXHQgIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG5cdH07XG5cblx0LyoqXG5cdCAqIENsYXNzIGRlZmluaXRpb25cblx0ICovXG5cblx0Y2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuXHQgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuXHQgICAgc3VwZXIoKTtcblx0ICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXHQgICAgaWYgKCFlbGVtZW50IHx8ICFTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuXHQgICAgdGhpcy5fZGVsdGFYID0gMDtcblx0ICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KTtcblx0ICAgIHRoaXMuX2luaXRFdmVudHMoKTtcblx0ICB9XG5cblx0ICAvLyBHZXR0ZXJzXG5cdCAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHQkYztcblx0ICB9XG5cdCAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0VHlwZSRjO1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG5cdCAgICByZXR1cm4gTkFNRSRkO1xuXHQgIH1cblxuXHQgIC8vIFB1YmxpY1xuXHQgIGRpc3Bvc2UoKSB7XG5cdCAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSQ5KTtcblx0ICB9XG5cblx0ICAvLyBQcml2YXRlXG5cdCAgX3N0YXJ0KGV2ZW50KSB7XG5cdCAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG5cdCAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG5cdCAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFg7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9lbmQoZXZlbnQpIHtcblx0ICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuXHQgICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYO1xuXHQgICAgfVxuXHQgICAgdGhpcy5faGFuZGxlU3dpcGUoKTtcblx0ICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKTtcblx0ICB9XG5cdCAgX21vdmUoZXZlbnQpIHtcblx0ICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID8gMCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWDtcblx0ICB9XG5cdCAgX2hhbmRsZVN3aXBlKCkge1xuXHQgICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKTtcblx0ICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRhWCAvIHRoaXMuX2RlbHRhWDtcblx0ICAgIHRoaXMuX2RlbHRhWCA9IDA7XG5cdCAgICBpZiAoIWRpcmVjdGlvbikge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spO1xuXHQgIH1cblx0ICBfaW5pdEV2ZW50cygpIHtcblx0ICAgIGlmICh0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuXHQgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSk7XG5cdCAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpO1xuXHQgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpO1xuXHQgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSk7XG5cdCAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG5cdCAgICByZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpO1xuXHQgIH1cblxuXHQgIC8vIFN0YXRpY1xuXHQgIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcblx0ICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMDtcblx0ICB9XG5cdH1cblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIGNhcm91c2VsLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IE5BTUUkYyA9ICdjYXJvdXNlbCc7XG5cdGNvbnN0IERBVEFfS0VZJDggPSAnYnMuY2Fyb3VzZWwnO1xuXHRjb25zdCBFVkVOVF9LRVkkOCA9IGAuJHtEQVRBX0tFWSQ4fWA7XG5cdGNvbnN0IERBVEFfQVBJX0tFWSQ1ID0gJy5kYXRhLWFwaSc7XG5cdGNvbnN0IEFSUk9XX0xFRlRfS0VZJDEgPSAnQXJyb3dMZWZ0Jztcblx0Y29uc3QgQVJST1dfUklHSFRfS0VZJDEgPSAnQXJyb3dSaWdodCc7XG5cdGNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG5cdGNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCc7XG5cdGNvbnN0IE9SREVSX1BSRVYgPSAncHJldic7XG5cdGNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnO1xuXHRjb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnO1xuXHRjb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZJDh9YDtcblx0Y29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVkkOH1gO1xuXHRjb25zdCBFVkVOVF9LRVlET1dOJDEgPSBga2V5ZG93biR7RVZFTlRfS0VZJDh9YDtcblx0Y29uc3QgRVZFTlRfTU9VU0VFTlRFUiQxID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWSQ4fWA7XG5cdGNvbnN0IEVWRU5UX01PVVNFTEVBVkUkMSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVkkOH1gO1xuXHRjb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZJDh9YDtcblx0Y29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSQzID0gYGxvYWQke0VWRU5UX0tFWSQ4fSR7REFUQV9BUElfS0VZJDV9YDtcblx0Y29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSA9IGBjbGljayR7RVZFTlRfS0VZJDh9JHtEQVRBX0FQSV9LRVkkNX1gO1xuXHRjb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUkMiA9ICdhY3RpdmUnO1xuXHRjb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnO1xuXHRjb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnO1xuXHRjb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0Jztcblx0Y29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldic7XG5cdGNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJztcblx0Y29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSc7XG5cdGNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTTtcblx0Y29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJztcblx0Y29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycyc7XG5cdGNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nO1xuXHRjb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJztcblx0Y29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcblx0ICBbQVJST1dfTEVGVF9LRVkkMV06IERJUkVDVElPTl9SSUdIVCxcblx0ICBbQVJST1dfUklHSFRfS0VZJDFdOiBESVJFQ1RJT05fTEVGVFxuXHR9O1xuXHRjb25zdCBEZWZhdWx0JGIgPSB7XG5cdCAgaW50ZXJ2YWw6IDUwMDAsXG5cdCAga2V5Ym9hcmQ6IHRydWUsXG5cdCAgcGF1c2U6ICdob3ZlcicsXG5cdCAgcmlkZTogZmFsc2UsXG5cdCAgdG91Y2g6IHRydWUsXG5cdCAgd3JhcDogdHJ1ZVxuXHR9O1xuXHRjb25zdCBEZWZhdWx0VHlwZSRiID0ge1xuXHQgIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG5cdCAgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG5cdCAga2V5Ym9hcmQ6ICdib29sZWFuJyxcblx0ICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuXHQgIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcblx0ICB0b3VjaDogJ2Jvb2xlYW4nLFxuXHQgIHdyYXA6ICdib29sZWFuJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdCAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG5cdCAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuXHQgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuXHQgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGw7XG5cdCAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcblx0ICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcblx0ICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbDtcblx0ICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KTtcblx0ICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cdCAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcblx0ICAgICAgdGhpcy5jeWNsZSgpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdCRiO1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHRUeXBlJGI7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgTkFNRSgpIHtcblx0ICAgIHJldHVybiBOQU1FJGM7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgbmV4dCgpIHtcblx0ICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpO1xuXHQgIH1cblx0ICBuZXh0V2hlblZpc2libGUoKSB7XG5cdCAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuXHQgICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuXHQgICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuXHQgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG5cdCAgICAgIHRoaXMubmV4dCgpO1xuXHQgICAgfVxuXHQgIH1cblx0ICBwcmV2KCkge1xuXHQgICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVik7XG5cdCAgfVxuXHQgIHBhdXNlKCkge1xuXHQgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuXHQgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KTtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcblx0ICB9XG5cdCAgY3ljbGUoKSB7XG5cdCAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG5cdCAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpO1xuXHQgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuXHQgIH1cblx0ICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcblx0ICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuXHQgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuY3ljbGUoKTtcblx0ICB9XG5cdCAgdG8oaW5kZXgpIHtcblx0ICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKTtcblx0ICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcblx0ICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKTtcblx0ICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVY7XG5cdCAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKTtcblx0ICB9XG5cdCAgZGlzcG9zZSgpIHtcblx0ICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuXHQgICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKCk7XG5cdCAgICB9XG5cdCAgICBzdXBlci5kaXNwb3NlKCk7XG5cdCAgfVxuXG5cdCAgLy8gUHJpdmF0ZVxuXHQgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuXHQgICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbDtcblx0ICAgIHJldHVybiBjb25maWc7XG5cdCAgfVxuXHQgIF9hZGRFdmVudExpc3RlbmVycygpIHtcblx0ICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcblx0ICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04kMSwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuXHQgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiQxLCAoKSA9PiB0aGlzLnBhdXNlKCkpO1xuXHQgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSQxLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG5cdCAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdCAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuXHQgICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuXHQgICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuXHQgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcblx0ICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcblx0ICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcblx0ICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcblx0ICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuXHQgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuXHQgICAgICB0aGlzLnBhdXNlKCk7XG5cdCAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuXHQgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG5cdCAgICB9O1xuXHQgICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG5cdCAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuXHQgICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuXHQgICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcblx0ICAgIH07XG5cdCAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZyk7XG5cdCAgfVxuXHQgIF9rZXlkb3duKGV2ZW50KSB7XG5cdCAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldO1xuXHQgICAgaWYgKGRpcmVjdGlvbikge1xuXHQgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpO1xuXHQgICAgfVxuXHQgIH1cblx0ICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcblx0ICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudCk7XG5cdCAgfVxuXHQgIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG5cdCAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7XG5cdCAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQyKTtcblx0ICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuXHQgICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtcblx0ICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcblx0ICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG5cdCAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJyk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF91cGRhdGVJbnRlcnZhbCgpIHtcblx0ICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpO1xuXHQgICAgaWYgKCFlbGVtZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMCk7XG5cdCAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbDtcblx0ICB9XG5cdCAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuXHQgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKCk7XG5cdCAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVDtcblx0ICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKTtcblx0ICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KTtcblx0ICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG5cdCAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcblx0ICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcblx0ICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuXHQgICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcblx0ICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuXHQgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKTtcblx0ICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuXHQgICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcblx0ICAgICAgLy8gVE9ETzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcblx0ICAgIHRoaXMucGF1c2UoKTtcblx0ICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG5cdCAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpO1xuXHQgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50O1xuXHQgICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkQ7XG5cdCAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVjtcblx0ICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpO1xuXHQgICAgcmVmbG93KG5leHRFbGVtZW50KTtcblx0ICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG5cdCAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcblx0ICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG5cdCAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKTtcblx0ICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcblx0ICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG5cdCAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuXHQgICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRCk7XG5cdCAgICB9O1xuXHQgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuXHQgICAgaWYgKGlzQ3ljbGluZykge1xuXHQgICAgICB0aGlzLmN5Y2xlKCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9pc0FuaW1hdGVkKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpO1xuXHQgIH1cblx0ICBfZ2V0QWN0aXZlKCkge1xuXHQgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpO1xuXHQgIH1cblx0ICBfZ2V0SXRlbXMoKSB7XG5cdCAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KTtcblx0ICB9XG5cdCAgX2NsZWFySW50ZXJ2YWwoKSB7XG5cdCAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcblx0ICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cdCAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcblx0ICAgIH1cblx0ICB9XG5cdCAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG5cdCAgICBpZiAoaXNSVEwoKSkge1xuXHQgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVjtcblx0ICB9XG5cdCAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcblx0ICAgIGlmIChpc1JUTCgpKSB7XG5cdCAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlQ7XG5cdCAgfVxuXG5cdCAgLy8gU3RhdGljXG5cdCAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHQgICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuXHQgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcblx0ICAgICAgICBkYXRhLnRvKGNvbmZpZyk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuXHQgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZGF0YVtjb25maWddKCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuXHQgKi9cblxuXHRFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDUsIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuXHQgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG5cdCAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KTtcblx0ICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKTtcblx0ICBpZiAoc2xpZGVJbmRleCkge1xuXHQgICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleCk7XG5cdCAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG5cdCAgICBjYXJvdXNlbC5uZXh0KCk7XG5cdCAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpO1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBjYXJvdXNlbC5wcmV2KCk7XG5cdCAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKTtcblx0fSk7XG5cdEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMywgKCkgPT4ge1xuXHQgIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKTtcblx0ICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuXHQgICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbCk7XG5cdCAgfVxuXHR9KTtcblxuXHQvKipcblx0ICogalF1ZXJ5XG5cdCAqL1xuXG5cdGRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbCk7XG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIEJvb3RzdHJhcCBjb2xsYXBzZS5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnN0YW50c1xuXHQgKi9cblxuXHRjb25zdCBOQU1FJGIgPSAnY29sbGFwc2UnO1xuXHRjb25zdCBEQVRBX0tFWSQ3ID0gJ2JzLmNvbGxhcHNlJztcblx0Y29uc3QgRVZFTlRfS0VZJDcgPSBgLiR7REFUQV9LRVkkN31gO1xuXHRjb25zdCBEQVRBX0FQSV9LRVkkNCA9ICcuZGF0YS1hcGknO1xuXHRjb25zdCBFVkVOVF9TSE9XJDYgPSBgc2hvdyR7RVZFTlRfS0VZJDd9YDtcblx0Y29uc3QgRVZFTlRfU0hPV04kNiA9IGBzaG93biR7RVZFTlRfS0VZJDd9YDtcblx0Y29uc3QgRVZFTlRfSElERSQ2ID0gYGhpZGUke0VWRU5UX0tFWSQ3fWA7XG5cdGNvbnN0IEVWRU5UX0hJRERFTiQ2ID0gYGhpZGRlbiR7RVZFTlRfS0VZJDd9YDtcblx0Y29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNCA9IGBjbGljayR7RVZFTlRfS0VZJDd9JHtEQVRBX0FQSV9LRVkkNH1gO1xuXHRjb25zdCBDTEFTU19OQU1FX1NIT1ckNyA9ICdzaG93Jztcblx0Y29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSc7XG5cdGNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4gPSBgOnNjb3BlIC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YDtcblx0Y29uc3QgQ0xBU1NfTkFNRV9IT1JJWk9OVEFMID0gJ2NvbGxhcHNlLWhvcml6b250YWwnO1xuXHRjb25zdCBXSURUSCA9ICd3aWR0aCc7XG5cdGNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnO1xuXHRjb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5jb2xsYXBzZS5zaG93LCAuY29sbGFwc2UuY29sbGFwc2luZyc7XG5cdGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nO1xuXHRjb25zdCBEZWZhdWx0JGEgPSB7XG5cdCAgcGFyZW50OiBudWxsLFxuXHQgIHRvZ2dsZTogdHJ1ZVxuXHR9O1xuXHRjb25zdCBEZWZhdWx0VHlwZSRhID0ge1xuXHQgIHBhcmVudDogJyhudWxsfGVsZW1lbnQpJyxcblx0ICB0b2dnbGU6ICdib29sZWFuJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdCAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG5cdCAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuXHQgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cdCAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXTtcblx0ICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuXHQgICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcblx0ICAgICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3RvckVuZ2luZS5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pO1xuXHQgICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZmlsdGVyKGZvdW5kRWxlbWVudCA9PiBmb3VuZEVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnQpO1xuXHQgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcblx0ICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKCk7XG5cdCAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcblx0ICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG5cdCAgICAgIHRoaXMudG9nZ2xlKCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gR2V0dGVyc1xuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0JGE7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdFR5cGUkYTtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBOQU1FKCkge1xuXHQgICAgcmV0dXJuIE5BTUUkYjtcblx0ICB9XG5cblx0ICAvLyBQdWJsaWNcblx0ICB0b2dnbGUoKSB7XG5cdCAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG5cdCAgICAgIHRoaXMuaGlkZSgpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5zaG93KCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHNob3coKSB7XG5cdCAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXTtcblxuXHQgICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cblx0ICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG5cdCAgICAgIGFjdGl2ZUNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0FDVElWRVMpLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwge1xuXHQgICAgICAgIHRvZ2dsZTogZmFsc2Vcblx0ICAgICAgfSkpO1xuXHQgICAgfVxuXHQgICAgaWYgKGFjdGl2ZUNoaWxkcmVuLmxlbmd0aCAmJiBhY3RpdmVDaGlsZHJlblswXS5faXNUcmFuc2l0aW9uaW5nKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XJDYpO1xuXHQgICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBmb3IgKGNvbnN0IGFjdGl2ZUluc3RhbmNlIG9mIGFjdGl2ZUNoaWxkcmVuKSB7XG5cdCAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKTtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG5cdCAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuXHQgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSk7XG5cdCAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuXHQgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG5cdCAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXHQgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcblx0ICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcblx0ICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDYpO1xuXHQgICAgfTtcblx0ICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSk7XG5cdCAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YDtcblx0ICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGA7XG5cdCAgfVxuXHQgIGhpZGUoKSB7XG5cdCAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUkNik7XG5cdCAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YDtcblx0ICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcblx0ICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQ3KTtcblx0ICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpIHtcblx0ICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcik7XG5cdCAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG5cdCAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuXHQgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG5cdCAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXHQgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcblx0ICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuXHQgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNik7XG5cdCAgICB9O1xuXHQgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cdCAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKTtcblx0ICB9XG5cblx0ICAvLyBQcml2YXRlXG5cdCAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcblx0ICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNyk7XG5cdCAgfVxuXHQgIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuXHQgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG5cdCAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KTtcblx0ICAgIHJldHVybiBjb25maWc7XG5cdCAgfVxuXHQgIF9nZXREaW1lbnNpb24oKSB7XG5cdCAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUO1xuXHQgIH1cblx0ICBfaW5pdGlhbGl6ZUNoaWxkcmVuKCkge1xuXHQgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQpO1xuXHQgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkcmVuKSB7XG5cdCAgICAgIGNvbnN0IHNlbGVjdGVkID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KTtcblx0ICAgICAgaWYgKHNlbGVjdGVkKSB7XG5cdCAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcblx0ICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudCk7XG5cdCAgICAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuXHQgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSk7XG5cdCAgfVxuXHQgIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcblx0ICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdHJpZ2dlckFycmF5KSB7XG5cdCAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3Blbik7XG5cdCAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvLyBTdGF0aWNcblx0ICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuXHQgICAgY29uc3QgX2NvbmZpZyA9IHt9O1xuXHQgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuXHQgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpO1xuXHQgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9XG5cdH1cblxuXHQvKipcblx0ICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cblx0ICovXG5cblx0RXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG5cdCAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG5cdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgIH1cblx0ICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSkge1xuXHQgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7XG5cdCAgICAgIHRvZ2dsZTogZmFsc2Vcblx0ICAgIH0pLnRvZ2dsZSgpO1xuXHQgIH1cblx0fSk7XG5cblx0LyoqXG5cdCAqIGpRdWVyeVxuXHQgKi9cblxuXHRkZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpO1xuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgZHJvcGRvd24uanNcblx0ICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdGFudHNcblx0ICovXG5cblx0Y29uc3QgTkFNRSRhID0gJ2Ryb3Bkb3duJztcblx0Y29uc3QgREFUQV9LRVkkNiA9ICdicy5kcm9wZG93bic7XG5cdGNvbnN0IEVWRU5UX0tFWSQ2ID0gYC4ke0RBVEFfS0VZJDZ9YDtcblx0Y29uc3QgREFUQV9BUElfS0VZJDMgPSAnLmRhdGEtYXBpJztcblx0Y29uc3QgRVNDQVBFX0tFWSQyID0gJ0VzY2FwZSc7XG5cdGNvbnN0IFRBQl9LRVkkMSA9ICdUYWInO1xuXHRjb25zdCBBUlJPV19VUF9LRVkkMSA9ICdBcnJvd1VwJztcblx0Y29uc3QgQVJST1dfRE9XTl9LRVkkMSA9ICdBcnJvd0Rvd24nO1xuXHRjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyOyAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5cdGNvbnN0IEVWRU5UX0hJREUkNSA9IGBoaWRlJHtFVkVOVF9LRVkkNn1gO1xuXHRjb25zdCBFVkVOVF9ISURERU4kNSA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ2fWA7XG5cdGNvbnN0IEVWRU5UX1NIT1ckNSA9IGBzaG93JHtFVkVOVF9LRVkkNn1gO1xuXHRjb25zdCBFVkVOVF9TSE9XTiQ1ID0gYHNob3duJHtFVkVOVF9LRVkkNn1gO1xuXHRjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSQzID0gYGNsaWNrJHtFVkVOVF9LRVkkNn0ke0RBVEFfQVBJX0tFWSQzfWA7XG5cdGNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuXHRjb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZJDZ9JHtEQVRBX0FQSV9LRVkkM31gO1xuXHRjb25zdCBDTEFTU19OQU1FX1NIT1ckNiA9ICdzaG93Jztcblx0Y29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnO1xuXHRjb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnO1xuXHRjb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcic7XG5cdGNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcic7XG5cdGNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknO1xuXHRjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFJDN9LiR7Q0xBU1NfTkFNRV9TSE9XJDZ9YDtcblx0Y29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSc7XG5cdGNvbnN0IFNFTEVDVE9SX05BVkJBUiA9ICcubmF2YmFyJztcblx0Y29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdic7XG5cdGNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknO1xuXHRjb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnO1xuXHRjb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnO1xuXHRjb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnO1xuXHRjb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnO1xuXHRjb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0Jztcblx0Y29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0Jztcblx0Y29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnO1xuXHRjb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSc7XG5cdGNvbnN0IERlZmF1bHQkOSA9IHtcblx0ICBhdXRvQ2xvc2U6IHRydWUsXG5cdCAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuXHQgIGRpc3BsYXk6ICdkeW5hbWljJyxcblx0ICBvZmZzZXQ6IFswLCAyXSxcblx0ICBwb3BwZXJDb25maWc6IG51bGwsXG5cdCAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xuXHR9O1xuXHRjb25zdCBEZWZhdWx0VHlwZSQ5ID0ge1xuXHQgIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuXHQgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG5cdCAgZGlzcGxheTogJ3N0cmluZycsXG5cdCAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuXHQgIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuXHQgIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdCAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG5cdCAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuXHQgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcblx0ICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZTsgLy8gZHJvcGRvd24gd3JhcHBlclxuXHQgICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuXHQgICAgdGhpcy5fbWVudSA9IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHwgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudCk7XG5cdCAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXHQgIH1cblxuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdCQ5O1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHRUeXBlJDk7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgTkFNRSgpIHtcblx0ICAgIHJldHVybiBOQU1FJGE7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgdG9nZ2xlKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG5cdCAgfVxuXHQgIHNob3coKSB7XG5cdCAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcblx0ICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuXHQgICAgfTtcblx0ICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNSwgcmVsYXRlZFRhcmdldCk7XG5cdCAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fY3JlYXRlUG9wcGVyKCk7XG5cblx0ICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcblx0ICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG5cdCAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuXHQgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG5cdCAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICF0aGlzLl9wYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuXHQgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG5cdCAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblx0ICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNik7XG5cdCAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuXHQgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNSwgcmVsYXRlZFRhcmdldCk7XG5cdCAgfVxuXHQgIGhpZGUoKSB7XG5cdCAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCAhdGhpcy5faXNTaG93bigpKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG5cdCAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcblx0ICAgIH07XG5cdCAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG5cdCAgfVxuXHQgIGRpc3Bvc2UoKSB7XG5cdCAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG5cdCAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG5cdCAgICB9XG5cdCAgICBzdXBlci5kaXNwb3NlKCk7XG5cdCAgfVxuXHQgIHVwZGF0ZSgpIHtcblx0ICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG5cdCAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG5cdCAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvLyBQcml2YXRlXG5cdCAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG5cdCAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDUsIHJlbGF0ZWRUYXJnZXQpO1xuXHQgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcblx0ICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cdCAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG5cdCAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcblx0ICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuXHQgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ2KTtcblx0ICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckNik7XG5cdCAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHQgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJyk7XG5cdCAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNSwgcmVsYXRlZFRhcmdldCk7XG5cblx0ICAgIC8vIEV4cGxpY2l0bHkgcmV0dXJuIGZvY3VzIHRvIHRoZSB0cmlnZ2VyIGVsZW1lbnRcblx0ICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcblx0ICB9XG5cdCAgX2dldENvbmZpZyhjb25maWcpIHtcblx0ICAgIGNvbmZpZyA9IHN1cGVyLl9nZXRDb25maWcoY29uZmlnKTtcblx0ICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJiB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2Rcblx0ICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FJGEudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY29uZmlnO1xuXHQgIH1cblx0ICBfY3JlYXRlUG9wcGVyKCkge1xuXHQgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi8pJyk7XG5cdCAgICB9XG5cdCAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cdCAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcblx0ICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudDtcblx0ICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG5cdCAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2U7XG5cdCAgICB9XG5cdCAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKTtcblx0ICAgIHRoaXMuX3BvcHBlciA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpO1xuXHQgIH1cblx0ICBfaXNTaG93bigpIHtcblx0ICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNik7XG5cdCAgfVxuXHQgIF9nZXRQbGFjZW1lbnQoKSB7XG5cdCAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudDtcblx0ICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuXHQgICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUO1xuXHQgICAgfVxuXHQgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcblx0ICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUO1xuXHQgICAgfVxuXHQgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG5cdCAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSO1xuXHQgICAgfVxuXHQgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcblx0ICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVI7XG5cdCAgICB9XG5cblx0ICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuXHQgICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnO1xuXHQgICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcblx0ICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1A7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTTtcblx0ICB9XG5cdCAgX2RldGVjdE5hdmJhcigpIHtcblx0ICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbDtcblx0ICB9XG5cdCAgX2dldE9mZnNldCgpIHtcblx0ICAgIGNvbnN0IHtcblx0ICAgICAgb2Zmc2V0XG5cdCAgICB9ID0gdGhpcy5fY29uZmlnO1xuXHQgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpO1xuXHQgICAgfVxuXHQgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIG9mZnNldDtcblx0ICB9XG5cdCAgX2dldFBvcHBlckNvbmZpZygpIHtcblx0ICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcblx0ICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcblx0ICAgICAgbW9kaWZpZXJzOiBbe1xuXHQgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuXHQgICAgICAgIG9wdGlvbnM6IHtcblx0ICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHtcblx0ICAgICAgICBuYW1lOiAnb2Zmc2V0Jyxcblx0ICAgICAgICBvcHRpb25zOiB7XG5cdCAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG5cdCAgICAgICAgfVxuXHQgICAgICB9XVxuXHQgICAgfTtcblxuXHQgICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5IG9yIERyb3Bkb3duIGlzIGluIE5hdmJhclxuXHQgICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuXHQgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJyk7IC8vIFRPRE86IHY2IHJlbW92ZVxuXHQgICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcblx0ICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuXHQgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG5cdCAgICAgIH1dO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuXHQgICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFt1bmRlZmluZWQsIGRlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG5cdCAgICB9O1xuXHQgIH1cblx0ICBfc2VsZWN0TWVudUl0ZW0oe1xuXHQgICAga2V5LFxuXHQgICAgdGFyZ2V0XG5cdCAgfSkge1xuXHQgICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihlbGVtZW50ID0+IGlzVmlzaWJsZShlbGVtZW50KSk7XG5cdCAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG5cdCAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcblx0ICAgIGdldE5leHRBY3RpdmVFbGVtZW50KGl0ZW1zLCB0YXJnZXQsIGtleSA9PT0gQVJST1dfRE9XTl9LRVkkMSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKCk7XG5cdCAgfVxuXG5cdCAgLy8gU3RhdGljXG5cdCAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHQgICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpO1xuXHQgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcblx0ICAgICAgfVxuXHQgICAgICBkYXRhW2NvbmZpZ10oKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0ICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuXHQgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZJDEpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKTtcblx0ICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG5cdCAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpO1xuXHQgICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcblx0ICAgICAgICBjb250aW51ZTtcblx0ICAgICAgfVxuXHQgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcblx0ICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpO1xuXHQgICAgICBpZiAoY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldCkge1xuXHQgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuXHQgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmIChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSQxIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcblx0ICAgICAgICBjb250aW51ZTtcblx0ICAgICAgfVxuXHQgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuXHQgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnRcblx0ICAgICAgfTtcblx0ICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcblx0ICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudDtcblx0ICAgICAgfVxuXHQgICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcblx0ICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblx0ICAgIC8vIElmIGlucHV0L3RleHRhcmVhICYmIGlmIGtleSBpcyBvdGhlciB0aGFuIEVTQ0FQRSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG5cblx0ICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKTtcblx0ICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkkMjtcblx0ICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVkkMSwgQVJST1dfRE9XTl9LRVkkMV0uaW5jbHVkZXMoZXZlbnQua2V5KTtcblx0ICAgIGlmICghaXNVcE9yRG93bkV2ZW50ICYmICFpc0VzY2FwZUV2ZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0ICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cblx0ICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMpWzBdIHx8IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMylbMF0gfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKTtcblx0ICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pO1xuXHQgICAgaWYgKGlzVXBPckRvd25FdmVudCkge1xuXHQgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0ICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuXHQgICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkge1xuXHQgICAgICAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cblx0ICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdCAgICAgIGluc3RhbmNlLmhpZGUoKTtcblx0ICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKCk7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0LyoqXG5cdCAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG5cdCAqL1xuXG5cdEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKTtcblx0RXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuXHRFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIERyb3Bkb3duLmNsZWFyTWVudXMpO1xuXHRFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKTtcblx0RXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKCk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBqUXVlcnlcblx0ICovXG5cblx0ZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcblx0ICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdGFudHNcblx0ICovXG5cblx0Y29uc3QgTkFNRSQ5ID0gJ2JhY2tkcm9wJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9GQURFJDQgPSAnZmFkZSc7XG5cdGNvbnN0IENMQVNTX05BTUVfU0hPVyQ1ID0gJ3Nob3cnO1xuXHRjb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRSQ5fWA7XG5cdGNvbnN0IERlZmF1bHQkOCA9IHtcblx0ICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG5cdCAgY2xpY2tDYWxsYmFjazogbnVsbCxcblx0ICBpc0FuaW1hdGVkOiBmYWxzZSxcblx0ICBpc1Zpc2libGU6IHRydWUsXG5cdCAgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cblx0ICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcblx0fTtcblx0Y29uc3QgRGVmYXVsdFR5cGUkOCA9IHtcblx0ICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuXHQgIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuXHQgIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcblx0ICBpc1Zpc2libGU6ICdib29sZWFuJyxcblx0ICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG5cdH07XG5cblx0LyoqXG5cdCAqIENsYXNzIGRlZmluaXRpb25cblx0ICovXG5cblx0Y2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuXHQgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHQgICAgc3VwZXIoKTtcblx0ICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuXHQgICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlO1xuXHQgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cdCAgfVxuXG5cdCAgLy8gR2V0dGVyc1xuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0JDg7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdFR5cGUkODtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBOQU1FKCkge1xuXHQgICAgcmV0dXJuIE5BTUUkOTtcblx0ICB9XG5cblx0ICAvLyBQdWJsaWNcblx0ICBzaG93KGNhbGxiYWNrKSB7XG5cdCAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcblx0ICAgICAgZXhlY3V0ZShjYWxsYmFjayk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2FwcGVuZCgpO1xuXHQgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcblx0ICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuXHQgICAgICByZWZsb3coZWxlbWVudCk7XG5cdCAgICB9XG5cdCAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDUpO1xuXHQgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG5cdCAgICAgIGV4ZWN1dGUoY2FsbGJhY2spO1xuXHQgICAgfSk7XG5cdCAgfVxuXHQgIGhpZGUoY2FsbGJhY2spIHtcblx0ICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuXHQgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDUpO1xuXHQgICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG5cdCAgICAgIHRoaXMuZGlzcG9zZSgpO1xuXHQgICAgICBleGVjdXRlKGNhbGxiYWNrKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0ICBkaXNwb3NlKCkge1xuXHQgICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKTtcblx0ICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG5cdCAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2U7XG5cdCAgfVxuXG5cdCAgLy8gUHJpdmF0ZVxuXHQgIF9nZXRFbGVtZW50KCkge1xuXHQgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG5cdCAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWU7XG5cdCAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuXHQgICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDQpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcDtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuXHQgIH1cblx0ICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcblx0ICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuXHQgICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpO1xuXHQgICAgcmV0dXJuIGNvbmZpZztcblx0ICB9XG5cdCAgX2FwcGVuZCgpIHtcblx0ICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG5cdCAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuXHQgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuXHQgICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKTtcblx0ICAgIH0pO1xuXHQgICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWU7XG5cdCAgfVxuXHQgIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG5cdCAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKTtcblx0ICB9XG5cdH1cblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIHV0aWwvZm9jdXN0cmFwLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IE5BTUUkOCA9ICdmb2N1c3RyYXAnO1xuXHRjb25zdCBEQVRBX0tFWSQ1ID0gJ2JzLmZvY3VzdHJhcCc7XG5cdGNvbnN0IEVWRU5UX0tFWSQ1ID0gYC4ke0RBVEFfS0VZJDV9YDtcblx0Y29uc3QgRVZFTlRfRk9DVVNJTiQyID0gYGZvY3VzaW4ke0VWRU5UX0tFWSQ1fWA7XG5cdGNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVkkNX1gO1xuXHRjb25zdCBUQUJfS0VZID0gJ1RhYic7XG5cdGNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJztcblx0Y29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCc7XG5cdGNvbnN0IERlZmF1bHQkNyA9IHtcblx0ICBhdXRvZm9jdXM6IHRydWUsXG5cdCAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2Zcblx0fTtcblx0Y29uc3QgRGVmYXVsdFR5cGUkNyA9IHtcblx0ICBhdXRvZm9jdXM6ICdib29sZWFuJyxcblx0ICB0cmFwRWxlbWVudDogJ2VsZW1lbnQnXG5cdH07XG5cblx0LyoqXG5cdCAqIENsYXNzIGRlZmluaXRpb25cblx0ICovXG5cblx0Y2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcblx0ICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0ICAgIHN1cGVyKCk7XG5cdCAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcblx0ICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG5cdCAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbDtcblx0ICB9XG5cblx0ICAvLyBHZXR0ZXJzXG5cdCAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHQkNztcblx0ICB9XG5cdCAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0VHlwZSQ3O1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG5cdCAgICByZXR1cm4gTkFNRSQ4O1xuXHQgIH1cblxuXHQgIC8vIFB1YmxpY1xuXHQgIGFjdGl2YXRlKCkge1xuXHQgICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG5cdCAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpO1xuXHQgICAgfVxuXHQgICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZJDUpOyAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3Bcblx0ICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiQyLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSk7XG5cdCAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSk7XG5cdCAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG5cdCAgfVxuXHQgIGRlYWN0aXZhdGUoKSB7XG5cdCAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG5cdCAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkkNSk7XG5cdCAgfVxuXG5cdCAgLy8gUHJpdmF0ZVxuXHQgIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG5cdCAgICBjb25zdCB7XG5cdCAgICAgIHRyYXBFbGVtZW50XG5cdCAgICB9ID0gdGhpcy5fY29uZmlnO1xuXHQgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fCB0cmFwRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpO1xuXHQgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICB0cmFwRWxlbWVudC5mb2N1cygpO1xuXHQgICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG5cdCAgICAgIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBlbGVtZW50c1swXS5mb2N1cygpO1xuXHQgICAgfVxuXHQgIH1cblx0ICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuXHQgICAgaWYgKGV2ZW50LmtleSAhPT0gVEFCX0tFWSkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcblx0ICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdGFudHNcblx0ICovXG5cblx0Y29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJztcblx0Y29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnO1xuXHRjb25zdCBQUk9QRVJUWV9QQURESU5HID0gJ3BhZGRpbmctcmlnaHQnO1xuXHRjb25zdCBQUk9QRVJUWV9NQVJHSU4gPSAnbWFyZ2luLXJpZ2h0JztcblxuXHQvKipcblx0ICogQ2xhc3MgZGVmaW5pdGlvblxuXHQgKi9cblxuXHRjbGFzcyBTY3JvbGxCYXJIZWxwZXIge1xuXHQgIGNvbnN0cnVjdG9yKCkge1xuXHQgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgZ2V0V2lkdGgoKSB7XG5cdCAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcblx0ICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdCAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKTtcblx0ICB9XG5cdCAgaGlkZSgpIHtcblx0ICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuXHQgICAgdGhpcy5fZGlzYWJsZU92ZXJGbG93KCk7XG5cdCAgICAvLyBnaXZlIHBhZGRpbmcgdG8gZWxlbWVudCB0byBiYWxhbmNlIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG5cdCAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpO1xuXHQgICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuXHQgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKTtcblx0ICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4sIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aCk7XG5cdCAgfVxuXHQgIHJlc2V0KCkge1xuXHQgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKTtcblx0ICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORyk7XG5cdCAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcpO1xuXHQgICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOKTtcblx0ICB9XG5cdCAgaXNPdmVyZmxvd2luZygpIHtcblx0ICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwO1xuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfZGlzYWJsZU92ZXJGbG93KCkge1xuXHQgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93Jyk7XG5cdCAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdCAgfVxuXHQgIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcblx0ICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuXHQgICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcblx0ICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSk7XG5cdCAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSk7XG5cdCAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKTtcblx0ICAgIH07XG5cdCAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjayk7XG5cdCAgfVxuXHQgIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KSB7XG5cdCAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KTtcblx0ICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuXHQgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHksIGFjdHVhbFZhbHVlKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHkpIHtcblx0ICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG5cdCAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTtcblx0ICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cblx0ICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG5cdCAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KTtcblx0ICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSk7XG5cdCAgICB9O1xuXHQgICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spO1xuXHQgIH1cblx0ICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcblx0ICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG5cdCAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcblx0ICAgICAgY2FsbEJhY2soc2VsKTtcblx0ICAgIH1cblx0ICB9XG5cdH1cblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIG1vZGFsLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IE5BTUUkNyA9ICdtb2RhbCc7XG5cdGNvbnN0IERBVEFfS0VZJDQgPSAnYnMubW9kYWwnO1xuXHRjb25zdCBFVkVOVF9LRVkkNCA9IGAuJHtEQVRBX0tFWSQ0fWA7XG5cdGNvbnN0IERBVEFfQVBJX0tFWSQyID0gJy5kYXRhLWFwaSc7XG5cdGNvbnN0IEVTQ0FQRV9LRVkkMSA9ICdFc2NhcGUnO1xuXHRjb25zdCBFVkVOVF9ISURFJDQgPSBgaGlkZSR7RVZFTlRfS0VZJDR9YDtcblx0Y29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQkMSA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkNH1gO1xuXHRjb25zdCBFVkVOVF9ISURERU4kNCA9IGBoaWRkZW4ke0VWRU5UX0tFWSQ0fWA7XG5cdGNvbnN0IEVWRU5UX1NIT1ckNCA9IGBzaG93JHtFVkVOVF9LRVkkNH1gO1xuXHRjb25zdCBFVkVOVF9TSE9XTiQ0ID0gYHNob3duJHtFVkVOVF9LRVkkNH1gO1xuXHRjb25zdCBFVkVOVF9SRVNJWkUkMSA9IGByZXNpemUke0VWRU5UX0tFWSQ0fWA7XG5cdGNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcblx0Y29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWSQ0fWA7XG5cdGNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyQxID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDR9YDtcblx0Y29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiA9IGBjbGljayR7RVZFTlRfS0VZJDR9JHtEQVRBX0FQSV9LRVkkMn1gO1xuXHRjb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3Blbic7XG5cdGNvbnN0IENMQVNTX05BTUVfRkFERSQzID0gJ2ZhZGUnO1xuXHRjb25zdCBDTEFTU19OQU1FX1NIT1ckNCA9ICdzaG93Jztcblx0Y29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJztcblx0Y29uc3QgT1BFTl9TRUxFQ1RPUiQxID0gJy5tb2RhbC5zaG93Jztcblx0Y29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnO1xuXHRjb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5Jztcblx0Y29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSc7XG5cdGNvbnN0IERlZmF1bHQkNiA9IHtcblx0ICBiYWNrZHJvcDogdHJ1ZSxcblx0ICBmb2N1czogdHJ1ZSxcblx0ICBrZXlib2FyZDogdHJ1ZVxuXHR9O1xuXHRjb25zdCBEZWZhdWx0VHlwZSQ2ID0ge1xuXHQgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG5cdCAgZm9jdXM6ICdib29sZWFuJyxcblx0ICBrZXlib2FyZDogJ2Jvb2xlYW4nXG5cdH07XG5cblx0LyoqXG5cdCAqIENsYXNzIGRlZmluaXRpb25cblx0ICovXG5cblx0Y2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0ICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcblx0ICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG5cdCAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudCk7XG5cdCAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpO1xuXHQgICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpO1xuXHQgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuXHQgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cdCAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKCk7XG5cdCAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXHQgIH1cblxuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdCQ2O1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHRUeXBlJDY7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgTkFNRSgpIHtcblx0ICAgIHJldHVybiBOQU1FJDc7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcblx0ICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG5cdCAgfVxuXHQgIHNob3cocmVsYXRlZFRhcmdldCkge1xuXHQgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckNCwge1xuXHQgICAgICByZWxhdGVkVGFyZ2V0XG5cdCAgICB9KTtcblx0ICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcblx0ICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cdCAgICB0aGlzLl9zY3JvbGxCYXIuaGlkZSgpO1xuXHQgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTik7XG5cdCAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcblx0ICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpO1xuXHQgIH1cblx0ICBoaWRlKCkge1xuXHQgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDQpO1xuXHQgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcblx0ICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cdCAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ0KTtcblx0ICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG5cdCAgfVxuXHQgIGRpc3Bvc2UoKSB7XG5cdCAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfS0VZJDQpO1xuXHQgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX0tFWSQ0KTtcblx0ICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcblx0ICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCk7XG5cdCAgICBzdXBlci5kaXNwb3NlKCk7XG5cdCAgfVxuXHQgIGhhbmRsZVVwZGF0ZSgpIHtcblx0ICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuXHQgICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG5cdCAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLFxuXHQgICAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWUsXG5cdCAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuX2lzQW5pbWF0ZWQoKVxuXHQgICAgfSk7XG5cdCAgfVxuXHQgIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuXHQgICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuXHQgICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuXHQgICAgfSk7XG5cdCAgfVxuXHQgIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG5cdCAgICAvLyB0cnkgdG8gYXBwZW5kIGR5bmFtaWMgbW9kYWxcblx0ICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLl9lbGVtZW50KSkge1xuXHQgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KTtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdCAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblx0ICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG5cdCAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcblx0ICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMDtcblx0ICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKTtcblx0ICAgIGlmIChtb2RhbEJvZHkpIHtcblx0ICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDA7XG5cdCAgICB9XG5cdCAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG5cdCAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDQpO1xuXHQgICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuXHQgICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG5cdCAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDQsIHtcblx0ICAgICAgICByZWxhdGVkVGFyZ2V0XG5cdCAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSk7XG5cdCAgfVxuXHQgIF9hZGRFdmVudExpc3RlbmVycygpIHtcblx0ICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MkMSwgZXZlbnQgPT4ge1xuXHQgICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZJDEpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuXHQgICAgICAgIHRoaXMuaGlkZSgpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCk7XG5cdCAgICB9KTtcblx0ICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSQxLCAoKSA9PiB7XG5cdCAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmICF0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcblx0ICAgICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcblx0ICAgICAgLy8gYSBiYWQgdHJpY2sgdG8gc2VncmVnYXRlIGNsaWNrcyB0aGF0IG1heSBzdGFydCBpbnNpZGUgZGlhbG9nIGJ1dCBlbmQgb3V0c2lkZSwgYW5kIGF2b2lkIGxpc3RlbiB0byBzY3JvbGxiYXIgY2xpY2tzXG5cdCAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQyID0+IHtcblx0ICAgICAgICBpZiAodGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50Mi50YXJnZXQpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcblx0ICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuXHQgICAgICAgICAgdGhpcy5oaWRlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH0pO1xuXHQgIH1cblx0ICBfaGlkZU1vZGFsKCkge1xuXHQgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cdCAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcblx0ICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXHQgICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG5cdCAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pO1xuXHQgICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKCk7XG5cdCAgICAgIHRoaXMuX3Njcm9sbEJhci5yZXNldCgpO1xuXHQgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4kNCk7XG5cdCAgICB9KTtcblx0ICB9XG5cdCAgX2lzQW5pbWF0ZWQoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDMpO1xuXHQgIH1cblx0ICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcblx0ICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEJDEpO1xuXHQgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblx0ICAgIGNvbnN0IGluaXRpYWxPdmVyZmxvd1kgPSB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WTtcblx0ICAgIC8vIHJldHVybiBpZiB0aGUgZm9sbG93aW5nIGJhY2tncm91bmQgdHJhbnNpdGlvbiBoYXNuJ3QgeWV0IGNvbXBsZXRlZFxuXHQgICAgaWYgKGluaXRpYWxPdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU1RBVElDKSkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuXHQgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKTtcblx0ICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuXHQgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuXHQgICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcblx0ICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxPdmVyZmxvd1k7XG5cdCAgICAgIH0sIHRoaXMuX2RpYWxvZyk7XG5cdCAgICB9LCB0aGlzLl9kaWFsb2cpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuXHQgIH1cblxuXHQgIC8qKlxuXHQgICAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG5cdCAgICovXG5cblx0ICBfYWRqdXN0RGlhbG9nKCkge1xuXHQgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHQgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKTtcblx0ICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwO1xuXHQgICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcblx0ICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuXHQgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcblx0ICAgIH1cblx0ICAgIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG5cdCAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nUmlnaHQnIDogJ3BhZGRpbmdMZWZ0Jztcblx0ICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9yZXNldEFkanVzdG1lbnRzKCkge1xuXHQgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnO1xuXHQgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcblx0ICB9XG5cblx0ICAvLyBTdGF0aWNcblx0ICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuXHQgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cdCAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuXHQgICAgICB9XG5cdCAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuXHQgKi9cblxuXHRFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDIsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIsIGZ1bmN0aW9uIChldmVudCkge1xuXHQgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG5cdCAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuXHQgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICB9XG5cdCAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1ckNCwgc2hvd0V2ZW50ID0+IHtcblx0ICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuXHQgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4kNCwgKCkgPT4ge1xuXHQgICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG5cdCAgICAgICAgdGhpcy5mb2N1cygpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9KTtcblxuXHQgIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgbW9kYWwgdG9nZ2xlciB3aGlsZSBhbm90aGVyIG9uZSBpcyBvcGVuXG5cdCAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IkMSk7XG5cdCAgaWYgKGFscmVhZHlPcGVuKSB7XG5cdCAgICBNb2RhbC5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpO1xuXHQgIH1cblx0ICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpO1xuXHQgIGRhdGEudG9nZ2xlKHRoaXMpO1xuXHR9KTtcblx0ZW5hYmxlRGlzbWlzc1RyaWdnZXIoTW9kYWwpO1xuXG5cdC8qKlxuXHQgKiBqUXVlcnlcblx0ICovXG5cblx0ZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIG9mZmNhbnZhcy5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnN0YW50c1xuXHQgKi9cblxuXHRjb25zdCBOQU1FJDYgPSAnb2ZmY2FudmFzJztcblx0Y29uc3QgREFUQV9LRVkkMyA9ICdicy5vZmZjYW52YXMnO1xuXHRjb25zdCBFVkVOVF9LRVkkMyA9IGAuJHtEQVRBX0tFWSQzfWA7XG5cdGNvbnN0IERBVEFfQVBJX0tFWSQxID0gJy5kYXRhLWFwaSc7XG5cdGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkkMiA9IGBsb2FkJHtFVkVOVF9LRVkkM30ke0RBVEFfQVBJX0tFWSQxfWA7XG5cdGNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9TSE9XJDMgPSAnc2hvdyc7XG5cdGNvbnN0IENMQVNTX05BTUVfU0hPV0lORyQxID0gJ3Nob3dpbmcnO1xuXHRjb25zdCBDTEFTU19OQU1FX0hJRElORyA9ICdoaWRpbmcnO1xuXHRjb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCc7XG5cdGNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93Jztcblx0Y29uc3QgRVZFTlRfU0hPVyQzID0gYHNob3cke0VWRU5UX0tFWSQzfWA7XG5cdGNvbnN0IEVWRU5UX1NIT1dOJDMgPSBgc2hvd24ke0VWRU5UX0tFWSQzfWA7XG5cdGNvbnN0IEVWRU5UX0hJREUkMyA9IGBoaWRlJHtFVkVOVF9LRVkkM31gO1xuXHRjb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVkkM31gO1xuXHRjb25zdCBFVkVOVF9ISURERU4kMyA9IGBoaWRkZW4ke0VWRU5UX0tFWSQzfWA7XG5cdGNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWSQzfWA7XG5cdGNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJJDEgPSBgY2xpY2ske0VWRU5UX0tFWSQzfSR7REFUQV9BUElfS0VZJDF9YDtcblx0Y29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZJDN9YDtcblx0Y29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nO1xuXHRjb25zdCBEZWZhdWx0JDUgPSB7XG5cdCAgYmFja2Ryb3A6IHRydWUsXG5cdCAga2V5Ym9hcmQ6IHRydWUsXG5cdCAgc2Nyb2xsOiBmYWxzZVxuXHR9O1xuXHRjb25zdCBEZWZhdWx0VHlwZSQ1ID0ge1xuXHQgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG5cdCAga2V5Ym9hcmQ6ICdib29sZWFuJyxcblx0ICBzY3JvbGw6ICdib29sZWFuJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHQgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuXHQgICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKTtcblx0ICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcblx0ICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCk7XG5cdCAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCk7XG5cdCAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXHQgIH1cblxuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdCQ1O1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHRUeXBlJDU7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgTkFNRSgpIHtcblx0ICAgIHJldHVybiBOQU1FJDY7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcblx0ICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG5cdCAgfVxuXHQgIHNob3cocmVsYXRlZFRhcmdldCkge1xuXHQgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQzLCB7XG5cdCAgICAgIHJlbGF0ZWRUYXJnZXRcblx0ICAgIH0pO1xuXHQgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuXHQgICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpO1xuXHQgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG5cdCAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG5cdCAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HJDEpO1xuXHQgICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcblx0ICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsIHx8IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuXHQgICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMyk7XG5cdCAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkckMSk7XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOJDMsIHtcblx0ICAgICAgICByZWxhdGVkVGFyZ2V0XG5cdCAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSk7XG5cdCAgfVxuXHQgIGhpZGUoKSB7XG5cdCAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSQzKTtcblx0ICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpO1xuXHQgICAgdGhpcy5fZWxlbWVudC5ibHVyKCk7XG5cdCAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG5cdCAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpO1xuXHQgICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpO1xuXHQgICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcblx0ICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQzLCBDTEFTU19OQU1FX0hJRElORyk7XG5cdCAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG5cdCAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG5cdCAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuXHQgICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpO1xuXHQgICAgICB9XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQzKTtcblx0ICAgIH07XG5cdCAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpO1xuXHQgIH1cblx0ICBkaXNwb3NlKCkge1xuXHQgICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpO1xuXHQgICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKTtcblx0ICAgIHN1cGVyLmRpc3Bvc2UoKTtcblx0ICB9XG5cblx0ICAvLyBQcml2YXRlXG5cdCAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcblx0ICAgIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG5cdCAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG5cdCAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLmhpZGUoKTtcblx0ICAgIH07XG5cblx0ICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuXHQgICAgY29uc3QgaXNWaXNpYmxlID0gQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApO1xuXHQgICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG5cdCAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcblx0ICAgICAgaXNWaXNpYmxlLFxuXHQgICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuXHQgICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuXHQgICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuXHQgICAgfSk7XG5cdCAgfVxuXHQgIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuXHQgICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuXHQgICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuXHQgICAgfSk7XG5cdCAgfVxuXHQgIF9hZGRFdmVudExpc3RlbmVycygpIHtcblx0ICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcblx0ICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG5cdCAgICAgICAgdGhpcy5oaWRlKCk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKTtcblx0ICAgIH0pO1xuXHQgIH1cblxuXHQgIC8vIFN0YXRpY1xuXHQgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG5cdCAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cdCAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuXHQgICAgICB9XG5cdCAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuXHQgKi9cblxuXHRFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDEsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEsIGZ1bmN0aW9uIChldmVudCkge1xuXHQgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7XG5cdCAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuXHQgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICB9XG5cdCAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiQzLCAoKSA9PiB7XG5cdCAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG5cdCAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG5cdCAgICAgIHRoaXMuZm9jdXMoKTtcblx0ICAgIH1cblx0ICB9KTtcblxuXHQgIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG5cdCAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpO1xuXHQgIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG5cdCAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKTtcblx0ICB9XG5cdCAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldCk7XG5cdCAgZGF0YS50b2dnbGUodGhpcyk7XG5cdH0pO1xuXHRFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJJDIsICgpID0+IHtcblx0ICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcblx0ICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KCk7XG5cdCAgfVxuXHR9KTtcblx0RXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG5cdCAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcblx0ICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG5cdCAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKTtcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXHRlbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpO1xuXG5cdC8qKlxuXHQgKiBqUXVlcnlcblx0ICovXG5cblx0ZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcyk7XG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIEJvb3RzdHJhcCB1dGlsL3Nhbml0aXplci5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0Ly8ganMtZG9jcy1zdGFydCBhbGxvdy1saXN0XG5cdGNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaTtcblx0Y29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcblx0ICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuXHQgICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG5cdCAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcblx0ICBhcmVhOiBbXSxcblx0ICBiOiBbXSxcblx0ICBicjogW10sXG5cdCAgY29sOiBbXSxcblx0ICBjb2RlOiBbXSxcblx0ICBkZDogW10sXG5cdCAgZGl2OiBbXSxcblx0ICBkbDogW10sXG5cdCAgZHQ6IFtdLFxuXHQgIGVtOiBbXSxcblx0ICBocjogW10sXG5cdCAgaDE6IFtdLFxuXHQgIGgyOiBbXSxcblx0ICBoMzogW10sXG5cdCAgaDQ6IFtdLFxuXHQgIGg1OiBbXSxcblx0ICBoNjogW10sXG5cdCAgaTogW10sXG5cdCAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuXHQgIGxpOiBbXSxcblx0ICBvbDogW10sXG5cdCAgcDogW10sXG5cdCAgcHJlOiBbXSxcblx0ICBzOiBbXSxcblx0ICBzbWFsbDogW10sXG5cdCAgc3BhbjogW10sXG5cdCAgc3ViOiBbXSxcblx0ICBzdXA6IFtdLFxuXHQgIHN0cm9uZzogW10sXG5cdCAgdTogW10sXG5cdCAgdWw6IFtdXG5cdH07XG5cdC8vIGpzLWRvY3MtZW5kIGFsbG93LWxpc3RcblxuXHRjb25zdCB1cmlBdHRyaWJ1dGVzID0gbmV3IFNldChbJ2JhY2tncm91bmQnLCAnY2l0ZScsICdocmVmJywgJ2l0ZW10eXBlJywgJ2xvbmdkZXNjJywgJ3Bvc3RlcicsICdzcmMnLCAneGxpbms6aHJlZiddKTtcblxuXHQvKipcblx0ICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBVUkxzIHRoYXQgYXJlIHNhZmUgd3J0LiBYU1MgaW4gVVJMIG5hdmlnYXRpb25cblx0ICogY29udGV4dHMuXG5cdCAqXG5cdCAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xNS4yLjgvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHMjTDM4XG5cdCAqL1xuXHRjb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPyFqYXZhc2NyaXB0OikoPzpbYS16MC05Ky4tXSs6fFteJjovPyNdKig/OlsvPyNdfCQpKS9pO1xuXHRjb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcblx0ICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdCAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG5cdCAgICBpZiAodXJpQXR0cmlidXRlcy5oYXMoYXR0cmlidXRlTmFtZSkpIHtcblx0ICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblxuXHQgIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuXHQgIHJldHVybiBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0cmlidXRlUmVnZXggPT4gYXR0cmlidXRlUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdChhdHRyaWJ1dGVOYW1lKSk7XG5cdH07XG5cdGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCBhbGxvd0xpc3QsIHNhbml0aXplRnVuY3Rpb24pIHtcblx0ICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG5cdCAgICByZXR1cm4gdW5zYWZlSHRtbDtcblx0ICB9XG5cdCAgaWYgKHNhbml0aXplRnVuY3Rpb24gJiYgdHlwZW9mIHNhbml0aXplRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0ICAgIHJldHVybiBzYW5pdGl6ZUZ1bmN0aW9uKHVuc2FmZUh0bWwpO1xuXHQgIH1cblx0ICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuXHQgIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpO1xuXHQgIGNvbnN0IGVsZW1lbnRzID0gW10uY29uY2F0KC4uLmNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSk7XG5cdCAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdCAgICBjb25zdCBlbGVtZW50TmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0ICAgIGlmICghT2JqZWN0LmtleXMoYWxsb3dMaXN0KS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHtcblx0ICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblx0ICAgICAgY29udGludWU7XG5cdCAgICB9XG5cdCAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsZW1lbnQuYXR0cmlidXRlcyk7XG5cdCAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsZW1lbnROYW1lXSB8fCBbXSk7XG5cdCAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVMaXN0KSB7XG5cdCAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuXHQgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5ub2RlTmFtZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTDtcblx0fVxuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IE5BTUUkNSA9ICdUZW1wbGF0ZUZhY3RvcnknO1xuXHRjb25zdCBEZWZhdWx0JDQgPSB7XG5cdCAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuXHQgIGNvbnRlbnQ6IHt9LFxuXHQgIC8vIHsgc2VsZWN0b3IgOiB0ZXh0ICwgIHNlbGVjdG9yMiA6IHRleHQyICwgfVxuXHQgIGV4dHJhQ2xhc3M6ICcnLFxuXHQgIGh0bWw6IGZhbHNlLFxuXHQgIHNhbml0aXplOiB0cnVlLFxuXHQgIHNhbml0aXplRm46IG51bGwsXG5cdCAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2Pidcblx0fTtcblx0Y29uc3QgRGVmYXVsdFR5cGUkNCA9IHtcblx0ICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuXHQgIGNvbnRlbnQ6ICdvYmplY3QnLFxuXHQgIGV4dHJhQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG5cdCAgaHRtbDogJ2Jvb2xlYW4nLFxuXHQgIHNhbml0aXplOiAnYm9vbGVhbicsXG5cdCAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG5cdCAgdGVtcGxhdGU6ICdzdHJpbmcnXG5cdH07XG5cdGNvbnN0IERlZmF1bHRDb250ZW50VHlwZSA9IHtcblx0ICBlbnRyeTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbnxudWxsKScsXG5cdCAgc2VsZWN0b3I6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIENvbmZpZyB7XG5cdCAgY29uc3RydWN0b3IoY29uZmlnKSB7XG5cdCAgICBzdXBlcigpO1xuXHQgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG5cdCAgfVxuXG5cdCAgLy8gR2V0dGVyc1xuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0JDQ7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdFR5cGUkNDtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBOQU1FKCkge1xuXHQgICAgcmV0dXJuIE5BTUUkNTtcblx0ICB9XG5cblx0ICAvLyBQdWJsaWNcblx0ICBnZXRDb250ZW50KCkge1xuXHQgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpLm1hcChjb25maWcgPT4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29uZmlnKSkuZmlsdGVyKEJvb2xlYW4pO1xuXHQgIH1cblx0ICBoYXNDb250ZW50KCkge1xuXHQgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpLmxlbmd0aCA+IDA7XG5cdCAgfVxuXHQgIGNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuXHQgICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbnRlbnQpO1xuXHQgICAgdGhpcy5fY29uZmlnLmNvbnRlbnQgPSB7XG5cdCAgICAgIC4uLnRoaXMuX2NvbmZpZy5jb250ZW50LFxuXHQgICAgICAuLi5jb250ZW50XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfVxuXHQgIHRvSHRtbCgpIHtcblx0ICAgIGNvbnN0IHRlbXBsYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQgICAgdGVtcGxhdGVXcmFwcGVyLmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKTtcblx0ICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCB0ZXh0XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcuY29udGVudCkpIHtcblx0ICAgICAgdGhpcy5fc2V0Q29udGVudCh0ZW1wbGF0ZVdyYXBwZXIsIHRleHQsIHNlbGVjdG9yKTtcblx0ICAgIH1cblx0ICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVXcmFwcGVyLmNoaWxkcmVuWzBdO1xuXHQgICAgY29uc3QgZXh0cmFDbGFzcyA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5leHRyYUNsYXNzKTtcblx0ICAgIGlmIChleHRyYUNsYXNzKSB7XG5cdCAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoLi4uZXh0cmFDbGFzcy5zcGxpdCgnICcpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0ZW1wbGF0ZTtcblx0ICB9XG5cblx0ICAvLyBQcml2YXRlXG5cdCAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcpIHtcblx0ICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKTtcblx0ICAgIHRoaXMuX2NoZWNrQ29udGVudChjb25maWcuY29udGVudCk7XG5cdCAgfVxuXHQgIF9jaGVja0NvbnRlbnQoYXJnKSB7XG5cdCAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgY29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoYXJnKSkge1xuXHQgICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHtcblx0ICAgICAgICBzZWxlY3Rvcixcblx0ICAgICAgICBlbnRyeTogY29udGVudFxuXHQgICAgICB9LCBEZWZhdWx0Q29udGVudFR5cGUpO1xuXHQgICAgfVxuXHQgIH1cblx0ICBfc2V0Q29udGVudCh0ZW1wbGF0ZSwgY29udGVudCwgc2VsZWN0b3IpIHtcblx0ICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIHRlbXBsYXRlKTtcblx0ICAgIGlmICghdGVtcGxhdGVFbGVtZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnRlbnQgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb250ZW50KTtcblx0ICAgIGlmICghY29udGVudCkge1xuXHQgICAgICB0ZW1wbGF0ZUVsZW1lbnQucmVtb3ZlKCk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGlmIChpc0VsZW1lbnQoY29udGVudCkpIHtcblx0ICAgICAgdGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUoZ2V0RWxlbWVudChjb250ZW50KSwgdGVtcGxhdGVFbGVtZW50KTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG5cdCAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXHQgIH1cblx0ICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcblx0ICAgIHJldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemUgPyBzYW5pdGl6ZUh0bWwoYXJnLCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbikgOiBhcmc7XG5cdCAgfVxuXHQgIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcblx0ICAgIHJldHVybiBleGVjdXRlKGFyZywgW3VuZGVmaW5lZCwgdGhpc10pO1xuXHQgIH1cblx0ICBfcHV0RWxlbWVudEluVGVtcGxhdGUoZWxlbWVudCwgdGVtcGxhdGVFbGVtZW50KSB7XG5cdCAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcblx0ICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHQgICAgICB0ZW1wbGF0ZUVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBCb290c3RyYXAgdG9vbHRpcC5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnN0YW50c1xuXHQgKi9cblxuXHRjb25zdCBOQU1FJDQgPSAndG9vbHRpcCc7XG5cdGNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKTtcblx0Y29uc3QgQ0xBU1NfTkFNRV9GQURFJDIgPSAnZmFkZSc7XG5cdGNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnO1xuXHRjb25zdCBDTEFTU19OQU1FX1NIT1ckMiA9ICdzaG93Jztcblx0Y29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcic7XG5cdGNvbnN0IFNFTEVDVE9SX01PREFMID0gYC4ke0NMQVNTX05BTUVfTU9EQUx9YDtcblx0Y29uc3QgRVZFTlRfTU9EQUxfSElERSA9ICdoaWRlLmJzLm1vZGFsJztcblx0Y29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3Zlcic7XG5cdGNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnO1xuXHRjb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJztcblx0Y29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJztcblx0Y29uc3QgRVZFTlRfSElERSQyID0gJ2hpZGUnO1xuXHRjb25zdCBFVkVOVF9ISURERU4kMiA9ICdoaWRkZW4nO1xuXHRjb25zdCBFVkVOVF9TSE9XJDIgPSAnc2hvdyc7XG5cdGNvbnN0IEVWRU5UX1NIT1dOJDIgPSAnc2hvd24nO1xuXHRjb25zdCBFVkVOVF9JTlNFUlRFRCA9ICdpbnNlcnRlZCc7XG5cdGNvbnN0IEVWRU5UX0NMSUNLJDEgPSAnY2xpY2snO1xuXHRjb25zdCBFVkVOVF9GT0NVU0lOJDEgPSAnZm9jdXNpbic7XG5cdGNvbnN0IEVWRU5UX0ZPQ1VTT1VUJDEgPSAnZm9jdXNvdXQnO1xuXHRjb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInO1xuXHRjb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gJ21vdXNlbGVhdmUnO1xuXHRjb25zdCBBdHRhY2htZW50TWFwID0ge1xuXHQgIEFVVE86ICdhdXRvJyxcblx0ICBUT1A6ICd0b3AnLFxuXHQgIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0Jyxcblx0ICBCT1RUT006ICdib3R0b20nLFxuXHQgIExFRlQ6IGlzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnXG5cdH07XG5cdGNvbnN0IERlZmF1bHQkMyA9IHtcblx0ICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG5cdCAgYW5pbWF0aW9uOiB0cnVlLFxuXHQgIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcblx0ICBjb250YWluZXI6IGZhbHNlLFxuXHQgIGN1c3RvbUNsYXNzOiAnJyxcblx0ICBkZWxheTogMCxcblx0ICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG5cdCAgaHRtbDogZmFsc2UsXG5cdCAgb2Zmc2V0OiBbMCwgNl0sXG5cdCAgcGxhY2VtZW50OiAndG9wJyxcblx0ICBwb3BwZXJDb25maWc6IG51bGwsXG5cdCAgc2FuaXRpemU6IHRydWUsXG5cdCAgc2FuaXRpemVGbjogbnVsbCxcblx0ICBzZWxlY3RvcjogZmFsc2UsXG5cdCAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICsgJzwvZGl2PicsXG5cdCAgdGl0bGU6ICcnLFxuXHQgIHRyaWdnZXI6ICdob3ZlciBmb2N1cydcblx0fTtcblx0Y29uc3QgRGVmYXVsdFR5cGUkMyA9IHtcblx0ICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuXHQgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuXHQgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG5cdCAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcblx0ICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcblx0ICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG5cdCAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuXHQgIGh0bWw6ICdib29sZWFuJyxcblx0ICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG5cdCAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuXHQgIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuXHQgIHNhbml0aXplOiAnYm9vbGVhbicsXG5cdCAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG5cdCAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcblx0ICB0ZW1wbGF0ZTogJ3N0cmluZycsXG5cdCAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcblx0ICB0cmlnZ2VyOiAnc3RyaW5nJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0ICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcblx0ICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi8pJyk7XG5cdCAgICB9XG5cdCAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuXG5cdCAgICAvLyBQcml2YXRlXG5cdCAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuXHQgICAgdGhpcy5fdGltZW91dCA9IDA7XG5cdCAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsO1xuXHQgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9O1xuXHQgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcblx0ICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG51bGw7XG5cdCAgICB0aGlzLl9uZXdDb250ZW50ID0gbnVsbDtcblxuXHQgICAgLy8gUHJvdGVjdGVkXG5cdCAgICB0aGlzLnRpcCA9IG51bGw7XG5cdCAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcblx0ICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG5cdCAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gR2V0dGVyc1xuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0JDM7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdFR5cGUkMztcblx0ICB9XG5cdCAgc3RhdGljIGdldCBOQU1FKCkge1xuXHQgICAgcmV0dXJuIE5BTUUkNDtcblx0ICB9XG5cblx0ICAvLyBQdWJsaWNcblx0ICBlbmFibGUoKSB7XG5cdCAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuXHQgIH1cblx0ICBkaXNhYmxlKCkge1xuXHQgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG5cdCAgfVxuXHQgIHRvZ2dsZUVuYWJsZWQoKSB7XG5cdCAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkO1xuXHQgIH1cblx0ICB0b2dnbGUoKSB7XG5cdCAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG5cdCAgICAgIHRoaXMuX2xlYXZlKCk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2VudGVyKCk7XG5cdCAgfVxuXHQgIGRpc3Bvc2UoKSB7XG5cdCAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdCAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpO1xuXHQgICAgaWYgKHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpIHtcblx0ICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSk7XG5cdCAgICB9XG5cdCAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG5cdCAgICBzdXBlci5kaXNwb3NlKCk7XG5cdCAgfVxuXHQgIHNob3coKSB7XG5cdCAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpO1xuXHQgICAgfVxuXHQgICAgaWYgKCEodGhpcy5faXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPVyQyKSk7XG5cdCAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudCk7XG5cdCAgICBjb25zdCBpc0luVGhlRG9tID0gKHNoYWRvd1Jvb3QgfHwgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudCk7XG5cdCAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICAvLyBUT0RPOiB2NiByZW1vdmUgdGhpcyBvciBtYWtlIGl0IG9wdGlvbmFsXG5cdCAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG5cdCAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KCk7XG5cdCAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuXHQgICAgY29uc3Qge1xuXHQgICAgICBjb250YWluZXJcblx0ICAgIH0gPSB0aGlzLl9jb25maWc7XG5cdCAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG5cdCAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKTtcblx0ICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSU5TRVJURUQpKTtcblx0ICAgIH1cblx0ICAgIHRoaXMuX3BvcHBlciA9IHRoaXMuX2NyZWF0ZVBvcHBlcih0aXApO1xuXHQgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG5cdCAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG5cdCAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuXHQgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1Ncblx0ICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXHQgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuXHQgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG5cdCAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOJDIpKTtcblx0ICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcblx0ICAgICAgICB0aGlzLl9sZWF2ZSgpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuXHQgICAgfTtcblx0ICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpO1xuXHQgIH1cblx0ICBoaWRlKCkge1xuXHQgICAgaWYgKCF0aGlzLl9pc1Nob3duKCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElERSQyKSk7XG5cdCAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpO1xuXHQgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG5cdCAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuXHQgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcblx0ICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0ICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuXHQgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2U7XG5cdCAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2U7XG5cdCAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG5cdCAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsOyAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuXHQgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG5cdCAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcblx0ICAgICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcblx0ICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElEREVOJDIpKTtcblx0ICAgIH07XG5cdCAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKTtcblx0ICB9XG5cdCAgdXBkYXRlKCkge1xuXHQgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuXHQgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gUHJvdGVjdGVkXG5cdCAgX2lzV2l0aENvbnRlbnQoKSB7XG5cdCAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKTtcblx0ICB9XG5cdCAgX2dldFRpcEVsZW1lbnQoKSB7XG5cdCAgICBpZiAoIXRoaXMudGlwKSB7XG5cdCAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLnRpcDtcblx0ICB9XG5cdCAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuXHQgICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpLnRvSHRtbCgpO1xuXG5cdCAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBjaGVjayBpbiB2NlxuXHQgICAgaWYgKCF0aXApIHtcblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUkMiwgQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXHQgICAgLy8gVE9ETzogdjYgdGhlIGZvbGxvd2luZyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgb25seVxuXHQgICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYCk7XG5cdCAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKCk7XG5cdCAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKTtcblx0ICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcblx0ICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDIpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHRpcDtcblx0ICB9XG5cdCAgc2V0Q29udGVudChjb250ZW50KSB7XG5cdCAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudDtcblx0ICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcblx0ICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpO1xuXHQgICAgICB0aGlzLnNob3coKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KSB7XG5cdCAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG5cdCAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KGNvbnRlbnQpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbmV3IFRlbXBsYXRlRmFjdG9yeSh7XG5cdCAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuXHQgICAgICAgIC8vIHRoZSBgY29udGVudGAgdmFyIGhhcyB0byBiZSBhZnRlciBgdGhpcy5fY29uZmlnYFxuXHQgICAgICAgIC8vIHRvIG92ZXJyaWRlIGNvbmZpZy5jb250ZW50IGluIGNhc2Ugb2YgcG9wb3ZlclxuXHQgICAgICAgIGNvbnRlbnQsXG5cdCAgICAgICAgZXh0cmFDbGFzczogdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKVxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk7XG5cdCAgfVxuXHQgIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBbU0VMRUNUT1JfVE9PTFRJUF9JTk5FUl06IHRoaXMuX2dldFRpdGxlKClcblx0ICAgIH07XG5cdCAgfVxuXHQgIF9nZXRUaXRsZSgpIHtcblx0ICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJyk7XG5cdCAgfVxuXG5cdCAgLy8gUHJpdmF0ZVxuXHQgIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpIHtcblx0ICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuXHQgIH1cblx0ICBfaXNBbmltYXRlZCgpIHtcblx0ICAgIHJldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9uIHx8IHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkMik7XG5cdCAgfVxuXHQgIF9pc1Nob3duKCkge1xuXHQgICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMik7XG5cdCAgfVxuXHQgIF9jcmVhdGVQb3BwZXIodGlwKSB7XG5cdCAgICBjb25zdCBwbGFjZW1lbnQgPSBleGVjdXRlKHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQsIFt0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnRdKTtcblx0ICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcblx0ICAgIHJldHVybiBjcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpO1xuXHQgIH1cblx0ICBfZ2V0T2Zmc2V0KCkge1xuXHQgICAgY29uc3Qge1xuXHQgICAgICBvZmZzZXRcblx0ICAgIH0gPSB0aGlzLl9jb25maWc7XG5cdCAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSk7XG5cdCAgICB9XG5cdCAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gb2Zmc2V0O1xuXHQgIH1cblx0ICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG5cdCAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzLl9lbGVtZW50LCB0aGlzLl9lbGVtZW50XSk7XG5cdCAgfVxuXHQgIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuXHQgICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuXHQgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG5cdCAgICAgIG1vZGlmaWVyczogW3tcblx0ICAgICAgICBuYW1lOiAnZmxpcCcsXG5cdCAgICAgICAgb3B0aW9uczoge1xuXHQgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB7XG5cdCAgICAgICAgbmFtZTogJ29mZnNldCcsXG5cdCAgICAgICAgb3B0aW9uczoge1xuXHQgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuXHQgICAgICAgIH1cblx0ICAgICAgfSwge1xuXHQgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuXHQgICAgICAgIG9wdGlvbnM6IHtcblx0ICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHtcblx0ICAgICAgICBuYW1lOiAnYXJyb3cnLFxuXHQgICAgICAgIG9wdGlvbnM6IHtcblx0ICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuXHQgICAgICAgIH1cblx0ICAgICAgfSwge1xuXHQgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuXHQgICAgICAgIGVuYWJsZWQ6IHRydWUsXG5cdCAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcblx0ICAgICAgICBmbjogZGF0YSA9PiB7XG5cdCAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG5cdCAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG5cdCAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XVxuXHQgICAgfTtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcblx0ICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbdW5kZWZpbmVkLCBkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuXHQgICAgfTtcblx0ICB9XG5cdCAgX3NldExpc3RlbmVycygpIHtcblx0ICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcblx0ICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0cmlnZ2Vycykge1xuXHQgICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuXHQgICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyQxKSwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG5cdCAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KTtcblx0ICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSAhKGNvbnRleHQuX2lzU2hvd24oKSAmJiBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdKTtcblx0ICAgICAgICAgIGNvbnRleHQudG9nZ2xlKCk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcblx0ICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFRU5URVIpIDogdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNJTiQxKTtcblx0ICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgPyB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUxFQVZFKSA6IHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUJDEpO1xuXHQgICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcblx0ICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpO1xuXHQgICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSB0cnVlO1xuXHQgICAgICAgICAgY29udGV4dC5fZW50ZXIoKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuXHQgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCk7XG5cdCAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuXHQgICAgICAgICAgY29udGV4dC5fbGVhdmUoKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcblx0ICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcblx0ICAgICAgICB0aGlzLmhpZGUoKTtcblx0ICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKTtcblx0ICB9XG5cdCAgX2ZpeFRpdGxlKCkge1xuXHQgICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblx0ICAgIGlmICghdGl0bGUpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuXHQgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKTtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUpOyAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHQgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cdCAgfVxuXHQgIF9lbnRlcigpIHtcblx0ICAgIGlmICh0aGlzLl9pc1Nob3duKCkgfHwgdGhpcy5faXNIb3ZlcmVkKSB7XG5cdCAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWU7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWU7XG5cdCAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcblx0ICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuXHQgICAgICAgIHRoaXMuc2hvdygpO1xuXHQgICAgICB9XG5cdCAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuc2hvdyk7XG5cdCAgfVxuXHQgIF9sZWF2ZSgpIHtcblx0ICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2U7XG5cdCAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcblx0ICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcblx0ICAgICAgICB0aGlzLmhpZGUoKTtcblx0ICAgICAgfVxuXHQgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpO1xuXHQgIH1cblx0ICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG5cdCAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdCAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KTtcblx0ICB9XG5cdCAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG5cdCAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9hY3RpdmVUcmlnZ2VyKS5pbmNsdWRlcyh0cnVlKTtcblx0ICB9XG5cdCAgX2dldENvbmZpZyhjb25maWcpIHtcblx0ICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCk7XG5cdCAgICBmb3IgKGNvbnN0IGRhdGFBdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpKSB7XG5cdCAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG5cdCAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyaWJ1dGVdO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBjb25maWcgPSB7XG5cdCAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuXHQgICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG5cdCAgICB9O1xuXHQgICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKTtcblx0ICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKTtcblx0ICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpO1xuXHQgICAgcmV0dXJuIGNvbmZpZztcblx0ICB9XG5cdCAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG5cdCAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKTtcblx0ICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuXHQgICAgICBjb25maWcuZGVsYXkgPSB7XG5cdCAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuXHQgICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG5cdCAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuXHQgICAgfVxuXHQgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcblx0ICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbmZpZztcblx0ICB9XG5cdCAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuXHQgICAgY29uc3QgY29uZmlnID0ge307XG5cdCAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpKSB7XG5cdCAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdmFsdWUpIHtcblx0ICAgICAgICBjb25maWdba2V5XSA9IHZhbHVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBjb25maWcuc2VsZWN0b3IgPSBmYWxzZTtcblx0ICAgIGNvbmZpZy50cmlnZ2VyID0gJ21hbnVhbCc7XG5cblx0ICAgIC8vIEluIHRoZSBmdXR1cmUgY2FuIGJlIHJlcGxhY2VkIHdpdGg6XG5cdCAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG5cdCAgICAvLyBgT2JqZWN0LmZyb21FbnRyaWVzKGtleXNXaXRoRGlmZmVyZW50VmFsdWVzKWBcblx0ICAgIHJldHVybiBjb25maWc7XG5cdCAgfVxuXHQgIF9kaXNwb3NlUG9wcGVyKCkge1xuXHQgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuXHQgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuXHQgICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudGlwKSB7XG5cdCAgICAgIHRoaXMudGlwLnJlbW92ZSgpO1xuXHQgICAgICB0aGlzLnRpcCA9IG51bGw7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gU3RhdGljXG5cdCAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHQgICAgICBjb25zdCBkYXRhID0gVG9vbHRpcC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cdCAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuXHQgICAgICB9XG5cdCAgICAgIGRhdGFbY29uZmlnXSgpO1xuXHQgICAgfSk7XG5cdCAgfVxuXHR9XG5cblx0LyoqXG5cdCAqIGpRdWVyeVxuXHQgKi9cblxuXHRkZWZpbmVKUXVlcnlQbHVnaW4oVG9vbHRpcCk7XG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIEJvb3RzdHJhcCBwb3BvdmVyLmpzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG5cdGNvbnN0IE5BTUUkMyA9ICdwb3BvdmVyJztcblx0Y29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJztcblx0Y29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5Jztcblx0Y29uc3QgRGVmYXVsdCQyID0ge1xuXHQgIC4uLlRvb2x0aXAuRGVmYXVsdCxcblx0ICBjb250ZW50OiAnJyxcblx0ICBvZmZzZXQ6IFswLCA4XSxcblx0ICBwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdCAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgKyAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgKyAnPC9kaXY+Jyxcblx0ICB0cmlnZ2VyOiAnY2xpY2snXG5cdH07XG5cdGNvbnN0IERlZmF1bHRUeXBlJDIgPSB7XG5cdCAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcblx0ICBjb250ZW50OiAnKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBkZWZpbml0aW9uXG5cdCAqL1xuXG5cdGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcblx0ICAvLyBHZXR0ZXJzXG5cdCAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHQkMjtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0VHlwZSQyO1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG5cdCAgICByZXR1cm4gTkFNRSQzO1xuXHQgIH1cblxuXHQgIC8vIE92ZXJyaWRlc1xuXHQgIF9pc1dpdGhDb250ZW50KCkge1xuXHQgICAgcmV0dXJuIHRoaXMuX2dldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpO1xuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfZ2V0Q29udGVudEZvclRlbXBsYXRlKCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgW1NFTEVDVE9SX1RJVExFXTogdGhpcy5fZ2V0VGl0bGUoKSxcblx0ICAgICAgW1NFTEVDVE9SX0NPTlRFTlRdOiB0aGlzLl9nZXRDb250ZW50KClcblx0ICAgIH07XG5cdCAgfVxuXHQgIF9nZXRDb250ZW50KCkge1xuXHQgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb250ZW50KTtcblx0ICB9XG5cblx0ICAvLyBTdGF0aWNcblx0ICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuXHQgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGNvbnN0IGRhdGEgPSBQb3BvdmVyLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKTtcblx0ICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYCk7XG5cdCAgICAgIH1cblx0ICAgICAgZGF0YVtjb25maWddKCk7XG5cdCAgICB9KTtcblx0ICB9XG5cdH1cblxuXHQvKipcblx0ICogalF1ZXJ5XG5cdCAqL1xuXG5cdGRlZmluZUpRdWVyeVBsdWdpbihQb3BvdmVyKTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIHNjcm9sbHNweS5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnN0YW50c1xuXHQgKi9cblxuXHRjb25zdCBOQU1FJDIgPSAnc2Nyb2xsc3B5Jztcblx0Y29uc3QgREFUQV9LRVkkMiA9ICdicy5zY3JvbGxzcHknO1xuXHRjb25zdCBFVkVOVF9LRVkkMiA9IGAuJHtEQVRBX0tFWSQyfWA7XG5cdGNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuXHRjb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZJDJ9YDtcblx0Y29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWSQyfWA7XG5cdGNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkkMSA9IGBsb2FkJHtFVkVOVF9LRVkkMn0ke0RBVEFfQVBJX0tFWX1gO1xuXHRjb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSc7XG5cdGNvbnN0IENMQVNTX05BTUVfQUNUSVZFJDEgPSAnYWN0aXZlJztcblx0Y29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJztcblx0Y29uc3QgU0VMRUNUT1JfVEFSR0VUX0xJTktTID0gJ1tocmVmXSc7XG5cdGNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJztcblx0Y29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluayc7XG5cdGNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nO1xuXHRjb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nO1xuXHRjb25zdCBTRUxFQ1RPUl9MSU5LX0lURU1TID0gYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9OQVZfSVRFTVN9ID4gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YDtcblx0Y29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJztcblx0Y29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFJDEgPSAnLmRyb3Bkb3duLXRvZ2dsZSc7XG5cdGNvbnN0IERlZmF1bHQkMSA9IHtcblx0ICBvZmZzZXQ6IG51bGwsXG5cdCAgLy8gVE9ETzogdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcblx0ICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcblx0ICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuXHQgIHRhcmdldDogbnVsbCxcblx0ICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cblx0fTtcblx0Y29uc3QgRGVmYXVsdFR5cGUkMSA9IHtcblx0ICBvZmZzZXQ6ICcobnVtYmVyfG51bGwpJyxcblx0ICAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG5cdCAgcm9vdE1hcmdpbjogJ3N0cmluZycsXG5cdCAgc21vb3RoU2Nyb2xsOiAnYm9vbGVhbicsXG5cdCAgdGFyZ2V0OiAnZWxlbWVudCcsXG5cdCAgdGhyZXNob2xkOiAnYXJyYXknXG5cdH07XG5cblx0LyoqXG5cdCAqIENsYXNzIGRlZmluaXRpb25cblx0ICovXG5cblx0Y2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdCAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG5cdCAgICBzdXBlcihlbGVtZW50LCBjb25maWcpO1xuXG5cdCAgICAvLyB0aGlzLl9lbGVtZW50IGlzIHRoZSBvYnNlcnZhYmxlc0NvbnRhaW5lciBhbmQgY29uZmlnLnRhcmdldCB0aGUgbWVudSBsaW5rcyB3cmFwcGVyXG5cdCAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKTtcblx0ICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKTtcblx0ICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50KS5vdmVyZmxvd1kgPT09ICd2aXNpYmxlJyA/IG51bGwgOiB0aGlzLl9lbGVtZW50O1xuXHQgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcblx0ICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcblx0ICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YSA9IHtcblx0ICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuXHQgICAgICBwYXJlbnRTY3JvbGxUb3A6IDBcblx0ICAgIH07XG5cdCAgICB0aGlzLnJlZnJlc2goKTsgLy8gaW5pdGlhbGl6ZVxuXHQgIH1cblxuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdCQxO1xuXHQgIH1cblx0ICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuXHQgICAgcmV0dXJuIERlZmF1bHRUeXBlJDE7XG5cdCAgfVxuXHQgIHN0YXRpYyBnZXQgTkFNRSgpIHtcblx0ICAgIHJldHVybiBOQU1FJDI7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgcmVmcmVzaCgpIHtcblx0ICAgIHRoaXMuX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKTtcblx0ICAgIHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCk7XG5cdCAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcblx0ICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSB0aGlzLl9nZXROZXdPYnNlcnZlcigpO1xuXHQgICAgfVxuXHQgICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy52YWx1ZXMoKSkge1xuXHQgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuXHQgICAgfVxuXHQgIH1cblx0ICBkaXNwb3NlKCkge1xuXHQgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHQgICAgc3VwZXIuZGlzcG9zZSgpO1xuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcblx0ICAgIC8vIFRPRE86IG9uIHY2IHRhcmdldCBzaG91bGQgYmUgZ2l2ZW4gZXhwbGljaXRseSAmIHJlbW92ZSB0aGUge3RhcmdldDogJ3NzLXRhcmdldCd9IGNhc2Vcblx0ICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHk7XG5cblx0ICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcblx0ICAgIGNvbmZpZy5yb290TWFyZ2luID0gY29uZmlnLm9mZnNldCA/IGAke2NvbmZpZy5vZmZzZXR9cHggMHB4IC0zMCVgIDogY29uZmlnLnJvb3RNYXJnaW47XG5cdCAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIGNvbmZpZy50aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY29uZmlnO1xuXHQgIH1cblx0ICBfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSB7XG5cdCAgICBpZiAoIXRoaXMuX2NvbmZpZy5zbW9vdGhTY3JvbGwpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICAvLyB1bnJlZ2lzdGVyIGFueSBwcmV2aW91cyBsaXN0ZW5lcnNcblx0ICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0spO1xuXHQgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcblx0ICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KGV2ZW50LnRhcmdldC5oYXNoKTtcblx0ICAgICAgaWYgKG9ic2VydmFibGVTZWN0aW9uKSB7XG5cdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93O1xuXHQgICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wO1xuXHQgICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG5cdCAgICAgICAgICByb290LnNjcm9sbFRvKHtcblx0ICAgICAgICAgICAgdG9wOiBoZWlnaHQsXG5cdCAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG5cdCAgICAgICAgcm9vdC5zY3JvbGxUb3AgPSBoZWlnaHQ7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH1cblx0ICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG5cdCAgICBjb25zdCBvcHRpb25zID0ge1xuXHQgICAgICByb290OiB0aGlzLl9yb290RWxlbWVudCxcblx0ICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuXHQgICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuXHQgICAgfTtcblx0ICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKTtcblx0ICB9XG5cblx0ICAvLyBUaGUgbG9naWMgb2Ygc2VsZWN0aW9uXG5cdCAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuXHQgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApO1xuXHQgICAgY29uc3QgYWN0aXZhdGUgPSBlbnRyeSA9PiB7XG5cdCAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3AgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wO1xuXHQgICAgICB0aGlzLl9wcm9jZXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKTtcblx0ICAgIH07XG5cdCAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3A7XG5cdCAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcDtcblx0ICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3A7XG5cdCAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0ICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuXHQgICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG5cdCAgICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSk7XG5cdCAgICAgICAgY29udGludWU7XG5cdCAgICAgIH1cblx0ICAgICAgY29uc3QgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wO1xuXHQgICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIGRvd24sIHBpY2sgdGhlIGJpZ2dlciBvZmZzZXRUb3Bcblx0ICAgICAgaWYgKHVzZXJTY3JvbGxzRG93biAmJiBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcblx0ICAgICAgICBhY3RpdmF0ZShlbnRyeSk7XG5cdCAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cblx0ICAgICAgICBpZiAoIXBhcmVudFNjcm9sbFRvcCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjb250aW51ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuXHQgICAgICBpZiAoIXVzZXJTY3JvbGxzRG93biAmJiAhZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG5cdCAgICAgICAgYWN0aXZhdGUoZW50cnkpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCkge1xuXHQgICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKCk7XG5cdCAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKCk7XG5cdCAgICBjb25zdCB0YXJnZXRMaW5rcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVEFSR0VUX0xJTktTLCB0aGlzLl9jb25maWcudGFyZ2V0KTtcblx0ICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG5cdCAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcblx0ICAgICAgaWYgKCFhbmNob3IuaGFzaCB8fCBpc0Rpc2FibGVkKGFuY2hvcikpIHtcblx0ICAgICAgICBjb250aW51ZTtcblx0ICAgICAgfVxuXHQgICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgdGhpcy5fZWxlbWVudCk7XG5cblx0ICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcblx0ICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcblx0ICAgICAgICB0aGlzLl90YXJnZXRMaW5rcy5zZXQoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgYW5jaG9yKTtcblx0ICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbik7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdCAgX3Byb2Nlc3ModGFyZ2V0KSB7XG5cdCAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ID09PSB0YXJnZXQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KTtcblx0ICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcblx0ICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuXHQgICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldCk7XG5cdCAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuXHQgICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcblx0ICAgIH0pO1xuXHQgIH1cblx0ICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuXHQgICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuXHQgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuXHQgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSQxLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGZvciAoY29uc3QgbGlzdEdyb3VwIG9mIFNlbGVjdG9yRW5naW5lLnBhcmVudHModGFyZ2V0LCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkpIHtcblx0ICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuXHQgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3Jcblx0ICAgICAgZm9yIChjb25zdCBpdGVtIG9mIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9MSU5LX0lURU1TKSkge1xuXHQgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQxKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0ICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcblx0ICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuXHQgICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRSQxfWAsIHBhcmVudCk7XG5cdCAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcblx0ICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIFN0YXRpY1xuXHQgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG5cdCAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cdCAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xuXHQgICAgICB9XG5cdCAgICAgIGRhdGFbY29uZmlnXSgpO1xuXHQgICAgfSk7XG5cdCAgfVxuXHR9XG5cblx0LyoqXG5cdCAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG5cdCAqL1xuXG5cdEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMSwgKCkgPT4ge1xuXHQgIGZvciAoY29uc3Qgc3B5IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpKSB7XG5cdCAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpO1xuXHQgIH1cblx0fSk7XG5cblx0LyoqXG5cdCAqIGpRdWVyeVxuXHQgKi9cblxuXHRkZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogQm9vdHN0cmFwIHRhYi5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnN0YW50c1xuXHQgKi9cblxuXHRjb25zdCBOQU1FJDEgPSAndGFiJztcblx0Y29uc3QgREFUQV9LRVkkMSA9ICdicy50YWInO1xuXHRjb25zdCBFVkVOVF9LRVkkMSA9IGAuJHtEQVRBX0tFWSQxfWA7XG5cdGNvbnN0IEVWRU5UX0hJREUkMSA9IGBoaWRlJHtFVkVOVF9LRVkkMX1gO1xuXHRjb25zdCBFVkVOVF9ISURERU4kMSA9IGBoaWRkZW4ke0VWRU5UX0tFWSQxfWA7XG5cdGNvbnN0IEVWRU5UX1NIT1ckMSA9IGBzaG93JHtFVkVOVF9LRVkkMX1gO1xuXHRjb25zdCBFVkVOVF9TSE9XTiQxID0gYHNob3duJHtFVkVOVF9LRVkkMX1gO1xuXHRjb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZJDF9YDtcblx0Y29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVkkMX1gO1xuXHRjb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWSQxfWA7XG5cdGNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCc7XG5cdGNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0Jztcblx0Y29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnO1xuXHRjb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nO1xuXHRjb25zdCBIT01FX0tFWSA9ICdIb21lJztcblx0Y29uc3QgRU5EX0tFWSA9ICdFbmQnO1xuXHRjb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnO1xuXHRjb25zdCBDTEFTU19OQU1FX0ZBREUkMSA9ICdmYWRlJztcblx0Y29uc3QgQ0xBU1NfTkFNRV9TSE9XJDEgPSAnc2hvdyc7XG5cdGNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJztcblx0Y29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnO1xuXHRjb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51Jztcblx0Y29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9IGA6bm90KCR7U0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSlgO1xuXHRjb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSc7XG5cdGNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSc7XG5cdGNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gO1xuXHRjb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nOyAvLyBUT0RPOiBjb3VsZCBvbmx5IGJlIGB0YWJgIGluIHY2XG5cdGNvbnN0IFNFTEVDVE9SX0lOTkVSX0VMRU0gPSBgJHtTRUxFQ1RPUl9JTk5FUn0sICR7U0VMRUNUT1JfREFUQV9UT0dHTEV9YDtcblx0Y29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFID0gYC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXWA7XG5cblx0LyoqXG5cdCAqIENsYXNzIGRlZmluaXRpb25cblx0ICovXG5cblx0Y2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdCAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuXHQgICAgc3VwZXIoZWxlbWVudCk7XG5cdCAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKTtcblx0ICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgICAgLy8gVE9ETzogc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBpbiB2NlxuXHQgICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2VsZW1lbnQub3V0ZXJIVE1MfSBoYXMgbm90IGEgdmFsaWQgcGFyZW50ICR7U0VMRUNUT1JfSU5ORVJfRUxFTX1gKVxuXHQgICAgfVxuXG5cdCAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcblx0ICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCwgdGhpcy5fZ2V0Q2hpbGRyZW4oKSk7XG5cdCAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpO1xuXHQgIH1cblxuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG5cdCAgICByZXR1cm4gTkFNRSQxO1xuXHQgIH1cblxuXHQgIC8vIFB1YmxpY1xuXHQgIHNob3coKSB7XG5cdCAgICAvLyBTaG93cyB0aGlzIGVsZW0gYW5kIGRlYWN0aXZhdGUgdGhlIGFjdGl2ZSBzaWJsaW5nIGlmIGV4aXN0c1xuXHQgICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudDtcblx0ICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIC8vIFNlYXJjaCBmb3IgYWN0aXZlIHRhYiBvbiBzYW1lIHBhcmVudCB0byBkZWFjdGl2YXRlIGl0XG5cdCAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKCk7XG5cdCAgICBjb25zdCBoaWRlRXZlbnQgPSBhY3RpdmUgPyBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUkMSwge1xuXHQgICAgICByZWxhdGVkVGFyZ2V0OiBpbm5lckVsZW1cblx0ICAgIH0pIDogbnVsbDtcblx0ICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVyQxLCB7XG5cdCAgICAgIHJlbGF0ZWRUYXJnZXQ6IGFjdGl2ZVxuXHQgICAgfSk7XG5cdCAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2RlYWN0aXZhdGUoYWN0aXZlLCBpbm5lckVsZW0pO1xuXHQgICAgdGhpcy5fYWN0aXZhdGUoaW5uZXJFbGVtLCBhY3RpdmUpO1xuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcblx0ICAgIGlmICghZWxlbWVudCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuXHQgICAgdGhpcy5fYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSk7IC8vIFNlYXJjaCBhbmQgYWN0aXZhdGUvc2hvdyB0aGUgcHJvcGVyIHNlY3Rpb25cblxuXHQgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG5cdCAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuXHQgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuXHQgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuXHQgICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCB0cnVlKTtcblx0ICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfU0hPV04kMSwge1xuXHQgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG5cdCAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSk7XG5cdCAgfVxuXHQgIF9kZWFjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG5cdCAgICBpZiAoIWVsZW1lbnQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKTtcblx0ICAgIGVsZW1lbnQuYmx1cigpO1xuXHQgICAgdGhpcy5fZGVhY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKTsgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG5cdCAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcblx0ICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG5cdCAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQxKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG5cdCAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXHQgICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSk7XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiQxLCB7XG5cdCAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cblx0ICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDEpKTtcblx0ICB9XG5cdCAgX2tleWRvd24oZXZlbnQpIHtcblx0ICAgIGlmICghW0FSUk9XX0xFRlRfS0VZLCBBUlJPV19SSUdIVF9LRVksIEFSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVksIEhPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuXHQgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoZWxlbWVudCA9PiAhaXNEaXNhYmxlZChlbGVtZW50KSk7XG5cdCAgICBsZXQgbmV4dEFjdGl2ZUVsZW1lbnQ7XG5cdCAgICBpZiAoW0hPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG5cdCAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gY2hpbGRyZW5bZXZlbnQua2V5ID09PSBIT01FX0tFWSA/IDAgOiBjaGlsZHJlbi5sZW5ndGggLSAxXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpO1xuXHQgICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGdldE5leHRBY3RpdmVFbGVtZW50KGNoaWxkcmVuLCBldmVudC50YXJnZXQsIGlzTmV4dCwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcblx0ICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoe1xuXHQgICAgICAgIHByZXZlbnRTY3JvbGw6IHRydWVcblx0ICAgICAgfSk7XG5cdCAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKG5leHRBY3RpdmVFbGVtZW50KS5zaG93KCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9nZXRDaGlsZHJlbigpIHtcblx0ICAgIC8vIGNvbGxlY3Rpb24gb2YgaW5uZXIgZWxlbWVudHNcblx0ICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lOTkVSX0VMRU0sIHRoaXMuX3BhcmVudCk7XG5cdCAgfVxuXHQgIF9nZXRBY3RpdmVFbGVtKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsO1xuXHQgIH1cblx0ICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuXHQgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMocGFyZW50LCAncm9sZScsICd0YWJsaXN0Jyk7XG5cdCAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdCAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpIHtcblx0ICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKTtcblx0ICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKTtcblx0ICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZCk7XG5cdCAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSk7XG5cdCAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuXHQgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xuXHQgICAgfVxuXHQgICAgaWYgKCFpc0FjdGl2ZSkge1xuXHQgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cdCAgICB9XG5cdCAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhjaGlsZCwgJ3JvbGUnLCAndGFiJyk7XG5cblx0ICAgIC8vIHNldCBhdHRyaWJ1dGVzIHRvIHRoZSByZWxhdGVkIHBhbmVsIHRvb1xuXHQgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKTtcblx0ICB9XG5cdCAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCkge1xuXHQgICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZCk7XG5cdCAgICBpZiAoIXRhcmdldCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJyk7XG5cdCAgICBpZiAoY2hpbGQuaWQpIHtcblx0ICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCR7Y2hpbGQuaWR9YCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIF90b2dnbGVEcm9wRG93bihlbGVtZW50LCBvcGVuKSB7XG5cdCAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoZWxlbWVudCk7XG5cdCAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG5cdCAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCBvdXRlckVsZW0pO1xuXHQgICAgICBpZiAoZWxlbWVudCkge1xuXHQgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIG9wZW4pO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuXHQgICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVyQxKTtcblx0ICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKTtcblx0ICB9XG5cdCAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0ICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuXHQgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG5cdCAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpO1xuXHQgIH1cblxuXHQgIC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcblx0ICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcblx0ICAgIHJldHVybiBlbGVtLm1hdGNoZXMoU0VMRUNUT1JfSU5ORVJfRUxFTSkgPyBlbGVtIDogU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTk5FUl9FTEVNLCBlbGVtKTtcblx0ICB9XG5cblx0ICAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG5cdCAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG5cdCAgICByZXR1cm4gZWxlbS5jbG9zZXN0KFNFTEVDVE9SX09VVEVSKSB8fCBlbGVtO1xuXHQgIH1cblxuXHQgIC8vIFN0YXRpY1xuXHQgIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG5cdCAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO1xuXHQgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcblx0ICAgICAgfVxuXHQgICAgICBkYXRhW2NvbmZpZ10oKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuXHQgKi9cblxuXHRFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdCAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuXHQgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICB9XG5cdCAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpO1xuXHR9KTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuXHQgKi9cblx0RXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuXHQgIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcblx0ICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpO1xuXHQgIH1cblx0fSk7XG5cdC8qKlxuXHQgKiBqUXVlcnlcblx0ICovXG5cblx0ZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYik7XG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIEJvb3RzdHJhcCB0b2FzdC5qc1xuXHQgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnN0YW50c1xuXHQgKi9cblxuXHRjb25zdCBOQU1FID0gJ3RvYXN0Jztcblx0Y29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnO1xuXHRjb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YDtcblx0Y29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWA7XG5cdGNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YDtcblx0Y29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YDtcblx0Y29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gO1xuXHRjb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gO1xuXHRjb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YDtcblx0Y29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YDtcblx0Y29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gO1xuXHRjb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSc7XG5cdGNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJzsgLy8gQGRlcHJlY2F0ZWQgLSBrZXB0IGhlcmUgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0Y29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xuXHRjb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZyc7XG5cdGNvbnN0IERlZmF1bHRUeXBlID0ge1xuXHQgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuXHQgIGF1dG9oaWRlOiAnYm9vbGVhbicsXG5cdCAgZGVsYXk6ICdudW1iZXInXG5cdH07XG5cdGNvbnN0IERlZmF1bHQgPSB7XG5cdCAgYW5pbWF0aW9uOiB0cnVlLFxuXHQgIGF1dG9oaWRlOiB0cnVlLFxuXHQgIGRlbGF5OiA1MDAwXG5cdH07XG5cblx0LyoqXG5cdCAqIENsYXNzIGRlZmluaXRpb25cblx0ICovXG5cblx0Y2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0ICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcblx0ICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZyk7XG5cdCAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcblx0ICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZTtcblx0ICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZTtcblx0ICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuXHQgIH1cblxuXHQgIC8vIEdldHRlcnNcblx0ICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG5cdCAgICByZXR1cm4gRGVmYXVsdDtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcblx0ICAgIHJldHVybiBEZWZhdWx0VHlwZTtcblx0ICB9XG5cdCAgc3RhdGljIGdldCBOQU1FKCkge1xuXHQgICAgcmV0dXJuIE5BTUU7XG5cdCAgfVxuXG5cdCAgLy8gUHVibGljXG5cdCAgc2hvdygpIHtcblx0ICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpO1xuXHQgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuXHQgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcblx0ICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSk7XG5cdCAgICB9XG5cdCAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcblx0ICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORyk7XG5cdCAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKTtcblx0ICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcblx0ICAgIH07XG5cdCAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKTsgLy8gQGRlcHJlY2F0ZWRcblx0ICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcblx0ICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfU0hPV0lORyk7XG5cdCAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKTtcblx0ICB9XG5cdCAgaGlkZSgpIHtcblx0ICAgIGlmICghdGhpcy5pc1Nob3duKCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSk7XG5cdCAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG5cdCAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpOyAvLyBAZGVwcmVjYXRlZFxuXHQgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HLCBDTEFTU19OQU1FX1NIT1cpO1xuXHQgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pO1xuXHQgICAgfTtcblx0ICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpO1xuXHQgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbik7XG5cdCAgfVxuXHQgIGRpc3Bvc2UoKSB7XG5cdCAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcblx0ICAgIGlmICh0aGlzLmlzU2hvd24oKSkge1xuXHQgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKTtcblx0ICAgIH1cblx0ICAgIHN1cGVyLmRpc3Bvc2UoKTtcblx0ICB9XG5cdCAgaXNTaG93bigpIHtcblx0ICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpO1xuXHQgIH1cblxuXHQgIC8vIFByaXZhdGVcblx0ICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG5cdCAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0ICAgICAgdGhpcy5oaWRlKCk7XG5cdCAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpO1xuXHQgIH1cblx0ICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuXHQgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG5cdCAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG5cdCAgICAgIGNhc2UgJ21vdXNlb3V0Jzpcblx0ICAgICAgICB7XG5cdCAgICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcblx0ICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgIH1cblx0ICAgICAgY2FzZSAnZm9jdXNpbic6XG5cdCAgICAgIGNhc2UgJ2ZvY3Vzb3V0Jzpcblx0ICAgICAgICB7XG5cdCAgICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZztcblx0ICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIGlmIChpc0ludGVyYWN0aW5nKSB7XG5cdCAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG5cdCAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKTtcblx0ICB9XG5cdCAgX3NldExpc3RlbmVycygpIHtcblx0ICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9WRVIsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKTtcblx0ICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKTtcblx0ICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSk7XG5cdCAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSk7XG5cdCAgfVxuXHQgIF9jbGVhclRpbWVvdXQoKSB7XG5cdCAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdCAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcblx0ICB9XG5cblx0ICAvLyBTdGF0aWNcblx0ICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuXHQgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZyk7XG5cdCAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9XG5cdH1cblxuXHQvKipcblx0ICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cblx0ICovXG5cblx0ZW5hYmxlRGlzbWlzc1RyaWdnZXIoVG9hc3QpO1xuXG5cdC8qKlxuXHQgKiBqUXVlcnlcblx0ICovXG5cblx0ZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KTtcblxuXHRjb25zdCBib290c3RyYXBfZXNtID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoLyojX19QVVJFX18qL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG5cdFx0X19wcm90b19fOiBudWxsLFxuXHRcdEFsZXJ0LFxuXHRcdEJ1dHRvbixcblx0XHRDYXJvdXNlbCxcblx0XHRDb2xsYXBzZSxcblx0XHREcm9wZG93bixcblx0XHRNb2RhbCxcblx0XHRPZmZjYW52YXMsXG5cdFx0UG9wb3Zlcixcblx0XHRTY3JvbGxTcHksXG5cdFx0VGFiLFxuXHRcdFRvYXN0LFxuXHRcdFRvb2x0aXBcblx0fSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KSk7XG5cblx0Lypcblx0Q29yZSBkcm9wZG93bnNcblx0ICovXG5cdGxldCBkcm9wZG93blRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXScpKTtcblx0ZHJvcGRvd25UcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKGRyb3Bkb3duVHJpZ2dlckVsKSB7XG5cdCAgbGV0IG9wdGlvbnMgPSB7XG5cdCAgICBib3VuZGFyeTogZHJvcGRvd25UcmlnZ2VyRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWJvdW5kYXJ5JykgPT09ICd2aWV3cG9ydCcgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJykgOiAnY2xpcHBpbmdQYXJlbnRzJ1xuXHQgIH07XG5cdCAgcmV0dXJuIG5ldyBEcm9wZG93bihkcm9wZG93blRyaWdnZXJFbCwgb3B0aW9ucyk7XG5cdH0pO1xuXG5cdGxldCB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSk7XG5cdHRvb2x0aXBUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHRvb2x0aXBUcmlnZ2VyRWwpIHtcblx0ICBsZXQgb3B0aW9ucyA9IHtcblx0ICAgIGRlbGF5OiB7XG5cdCAgICAgIHNob3c6IDUwLFxuXHQgICAgICBoaWRlOiA1MFxuXHQgICAgfSxcblx0ICAgIGh0bWw6IHRvb2x0aXBUcmlnZ2VyRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1odG1sXCIpID09PSBcInRydWVcIiA/PyBmYWxzZSxcblx0ICAgIHBsYWNlbWVudDogdG9vbHRpcFRyaWdnZXJFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtcGxhY2VtZW50JykgPz8gJ2F1dG8nXG5cdCAgfTtcblx0ICByZXR1cm4gbmV3IFRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCwgb3B0aW9ucyk7XG5cdH0pO1xuXG5cdC8qXG5cdENvcmUgcG9wb3ZlcnNcblx0ICovXG5cdGxldCBwb3BvdmVyVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nKSk7XG5cdHBvcG92ZXJUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHBvcG92ZXJUcmlnZ2VyRWwpIHtcblx0ICBsZXQgb3B0aW9ucyA9IHtcblx0ICAgIGRlbGF5OiB7XG5cdCAgICAgIHNob3c6IDUwLFxuXHQgICAgICBoaWRlOiA1MFxuXHQgICAgfSxcblx0ICAgIGh0bWw6IHBvcG92ZXJUcmlnZ2VyRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWh0bWwnKSA9PT0gXCJ0cnVlXCIgPz8gZmFsc2UsXG5cdCAgICBwbGFjZW1lbnQ6IHBvcG92ZXJUcmlnZ2VyRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXBsYWNlbWVudCcpID8/ICdhdXRvJ1xuXHQgIH07XG5cdCAgcmV0dXJuIG5ldyBQb3BvdmVyKHBvcG92ZXJUcmlnZ2VyRWwsIG9wdGlvbnMpO1xuXHR9KTtcblxuXHQvKlxuXHRTd2l0Y2ggaWNvbnNcblx0ICovXG5cdGxldCBzd2l0Y2hlc1RyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJzd2l0Y2gtaWNvblwiXScpKTtcblx0c3dpdGNoZXNUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHN3aXRjaFRyaWdnZXJFbCkge1xuXHQgIHN3aXRjaFRyaWdnZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHQgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0ICAgIHN3aXRjaFRyaWdnZXJFbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0ICB9KTtcblx0fSk7XG5cblx0Y29uc3QgRW5hYmxlQWN0aXZhdGlvblRhYnNGcm9tTG9jYXRpb25IYXNoID0gKCkgPT4ge1xuXHQgIGNvbnN0IGxvY2F0aW9uSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHQgIGlmIChsb2NhdGlvbkhhc2gpIHtcblx0ICAgIGNvbnN0IHRhYnNMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0nKSk7XG5cdCAgICBjb25zdCBtYXRjaGVkVGFicyA9IHRhYnNMaXN0LmZpbHRlcih0YWIgPT4gdGFiLmhhc2ggPT09IGxvY2F0aW9uSGFzaCk7XG5cdCAgICBtYXRjaGVkVGFicy5tYXAodGFiID0+IHtcblx0ICAgICAgbmV3IFRhYih0YWIpLnNob3coKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fTtcblx0RW5hYmxlQWN0aXZhdGlvblRhYnNGcm9tTG9jYXRpb25IYXNoKCk7XG5cblx0Lypcblx0VG9hc3RzXG5cdCAqL1xuXHRsZXQgdG9hc3RzVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvYXN0XCJdJykpO1xuXHR0b2FzdHNUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHRvYXN0VHJpZ2dlckVsKSB7XG5cdCAgaWYgKCF0b2FzdFRyaWdnZXJFbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JykpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgY29uc3QgdG9hc3RFbCA9IG5ldyBUb2FzdCh0b2FzdFRyaWdnZXJFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JykpO1xuXHQgIHRvYXN0VHJpZ2dlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHQgICAgdG9hc3RFbC5zaG93KCk7XG5cdCAgfSk7XG5cdH0pO1xuXG5cdGNvbnN0IHByZWZpeCA9ICd0YmxyLSc7XG5cdGNvbnN0IGhleFRvUmdiYSA9IChoZXgsIG9wYWNpdHkpID0+IHtcblx0ICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcblx0ICByZXR1cm4gcmVzdWx0ID8gYHJnYmEoJHtwYXJzZUludChyZXN1bHRbMV0sIDE2KX0sICR7cGFyc2VJbnQocmVzdWx0WzJdLCAxNil9LCAke3BhcnNlSW50KHJlc3VsdFszXSwgMTYpfSwgJHtvcGFjaXR5fSlgIDogbnVsbDtcblx0fTtcblx0Y29uc3QgZ2V0Q29sb3IgPSAoY29sb3IsIG9wYWNpdHkgPSAxKSA9PiB7XG5cdCAgY29uc3QgYyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShgLS0ke3ByZWZpeH0ke2NvbG9yfWApLnRyaW0oKTtcblx0ICBpZiAob3BhY2l0eSAhPT0gMSkge1xuXHQgICAgcmV0dXJuIGhleFRvUmdiYShjLCBvcGFjaXR5KTtcblx0ICB9XG5cdCAgcmV0dXJuIGM7XG5cdH07XG5cblx0Y29uc3QgdGFibGVyID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoLyojX19QVVJFX18qL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG5cdFx0X19wcm90b19fOiBudWxsLFxuXHRcdGdldENvbG9yLFxuXHRcdGhleFRvUmdiYSxcblx0XHRwcmVmaXhcblx0fSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KSk7XG5cblx0ZXhwb3J0cy5BbGVydCA9IEFsZXJ0O1xuXHRleHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcblx0ZXhwb3J0cy5DYXJvdXNlbCA9IENhcm91c2VsO1xuXHRleHBvcnRzLkNvbGxhcHNlID0gQ29sbGFwc2U7XG5cdGV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93bjtcblx0ZXhwb3J0cy5Nb2RhbCA9IE1vZGFsO1xuXHRleHBvcnRzLk9mZmNhbnZhcyA9IE9mZmNhbnZhcztcblx0ZXhwb3J0cy5Qb3BvdmVyID0gUG9wb3Zlcjtcblx0ZXhwb3J0cy5TY3JvbGxTcHkgPSBTY3JvbGxTcHk7XG5cdGV4cG9ydHMuVGFiID0gVGFiO1xuXHRleHBvcnRzLlRvYXN0ID0gVG9hc3Q7XG5cdGV4cG9ydHMuVG9vbHRpcCA9IFRvb2x0aXA7XG5cdGV4cG9ydHMuYm9vdHN0cmFwID0gYm9vdHN0cmFwX2VzbTtcblx0ZXhwb3J0cy50YWJsZXIgPSB0YWJsZXI7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhYmxlci5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJyZXF1aXJlKCcuL3RhYmxlci1kaXN0LnNjc3MnKTtcblxucmVxdWlyZSgnQHRhYmxlci9jb3JlL2Rpc3QvanMvdGFibGVyJyk7XG4iXSwibmFtZXMiOlsicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=