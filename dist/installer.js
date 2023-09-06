import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';
import { watch, computed, ref, markRaw } from 'vue';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var runtime = {exports: {}};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
	  defineProperty(
	    GeneratorFunctionPrototype,
	    "constructor",
	    { value: GeneratorFunction, configurable: true }
	  );
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    defineProperty(this, "_invoke", { value: enqueue });
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var methodName = context.method;
	    var method = delegate.iterator[methodName];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method, or a missing .next mehtod, always terminate the
	      // yield* loop.
	      context.delegate = null;

	      // Note: ["return"] must be used for ES3 parsing compatibility.
	      if (methodName === "throw" && delegate.iterator["return"]) {
	        // If the delegate iterator has a return method, give it a
	        // chance to clean up.
	        context.method = "return";
	        context.arg = undefined$1;
	        maybeInvokeDelegate(delegate, context);

	        if (context.method === "throw") {
	          // If maybeInvokeDelegate(context) changed context.method from
	          // "return" to "throw", let that override the TypeError below.
	          return ContinueSentinel;
	        }
	      }
	      if (methodName !== "return") {
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a '" + methodName + "' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });

	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(val) {
	    var object = Object(val);
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable || iterable === "") {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    throw new TypeError(typeof iterable + " is not iterable");
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
} (runtime));

var flat = flatten;
flatten.flatten = flatten;
flatten.unflatten = unflatten;

function isBuffer (obj) {
  return obj &&
    obj.constructor &&
    (typeof obj.constructor.isBuffer === 'function') &&
    obj.constructor.isBuffer(obj)
}

function keyIdentity (key) {
  return key
}

function flatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const maxDepth = opts.maxDepth;
  const transformKey = opts.transformKey || keyIdentity;
  const output = {};

  function step (object, prev, currentDepth) {
    currentDepth = currentDepth || 1;
    Object.keys(object).forEach(function (key) {
      const value = object[key];
      const isarray = opts.safe && Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer = isBuffer(value);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      const newKey = prev
        ? prev + delimiter + transformKey(key)
        : transformKey(key);

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output
}

function unflatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const overwrite = opts.overwrite || false;
  const transformKey = opts.transformKey || keyIdentity;
  const result = {};

  const isbuffer = isBuffer(target);
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey (key) {
    const parsedKey = Number(key);

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1 ||
      opts.object
    ) ? key
      : parsedKey
  }

  function addKeys (keyPrefix, recipient, target) {
    return Object.keys(target).reduce(function (result, key) {
      result[keyPrefix + delimiter + key] = target[key];

      return result
    }, recipient)
  }

  function isEmpty (val) {
    const type = Object.prototype.toString.call(val);
    const isArray = type === '[object Array]';
    const isObject = type === '[object Object]';

    if (!val) {
      return true
    } else if (isArray) {
      return !val.length
    } else if (isObject) {
      return !Object.keys(val).length
    }
  }

  target = Object.keys(target).reduce(function (result, key) {
    const type = Object.prototype.toString.call(target[key]);
    const isObject = (type === '[object Object]' || type === '[object Array]');
    if (!isObject || isEmpty(target[key])) {
      result[key] = target[key];
      return result
    } else {
      return addKeys(
        key,
        result,
        flatten(target[key], opts)
      )
    }
  }, {});

  Object.keys(target).forEach(function (key) {
    const split = key.split(delimiter).map(transformKey);
    let key1 = getkey(split.shift());
    let key2 = getkey(split[0]);
    let recipient = result;

    while (key2 !== undefined) {
      if (key1 === '__proto__') {
        return
      }

      const type = Object.prototype.toString.call(recipient[key1]);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      // do not write over falsey, non-undefined values if overwrite is false
      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
        return
      }

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object ? [] : {}
        );
      }

      recipient = recipient[key1];
      if (split.length > 0) {
        key1 = getkey(split.shift());
        key2 = getkey(split[0]);
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts);
  });

  return result
}

function shouldApplyPlugin (name, plugin) {
  if (!plugin.apply && _.difference(Object.keys(plugin), ['config', 'install']).length > 0) {
    return true;
  }
  var apply = plugin.apply;
  if (!Array.isArray(apply)) {
    apply = [apply];
  }
  var shouldApply = false;
  _.each(apply, condition => {
    if (typeof condition === 'string' && condition === name) {
      shouldApply = true;
      return false;
    } else if (typeof condition === 'object' && condition instanceof RegExp && name.match(condition)) {
      shouldApply = true;
      return false;
    }
  });
  return shouldApply;
}

var publishConfig = {
	registry: "https://registry.vueform.com"
};
var name = "@vueform/vueform";
var version = "1.3.14";
var description = "Form builder for Vue.js";
var homepage = "https://vueform.com";
var bugs = {
	url: "https://github.com/vueform/issues/issues"
};
var license = "SEE LICENSE IN LICENSE.txt";
var authors = [
	{
		name: "Adam Berecz",
		email: "adam@vueform.com"
	}
];
var main = "src/index.js";
var _moduleAliases = {
	vue: "node_modules/vue-next"
};
var scripts = {
	dev: "cross-env node_modules/webpack/bin/webpack.js --progress --config webpack.config.js --watch",
	test: "NODE_OPTIONS=\"--max_old_space_size=5120 --no-experimental-fetch\" VUE=3 jest --maxWorkers=8 --verbose --config=jest/jest.config.vue3.js",
	"test:vue2": "NODE_OPTIONS=--max_old_space_size=5120 VUE=2 jest --watchAll --verbose --maxWorkers=8 --config=jest/jest.config.vue2.js",
	"test:vue3": "NODE_OPTIONS=\"--max_old_space_size=5120 --no-experimental-fetch\" VUE=3 jest --watchAll --maxWorkers=8 --verbose --config=jest/jest.config.vue3.js",
	"test:v2": "NODE_OPTIONS=--max_old_space_size=5120 VUE=2 jest --watchAll --verbose --maxWorkers=50% --config=jest/jest.config.vue2.js",
	"test:v3": "NODE_OPTIONS=\"--max_old_space_size=5120 --no-experimental-fetch\" VUE=3 jest --watchAll --maxWorkers=50% --verbose --config=jest/jest.config.vue3.js",
	"test:fields": "npx babel-node api/generators/fiexwlds/test.js --presets @babel/preset-env",
	"generate:classes": "npx babel-node api/generators/vueform/classes.js --presets @babel/preset-env",
	"generate:elements": "npx babel-node api/generators/elements.js --presets @babel/preset-env",
	"generate:features:elements": "npx babel-node api/generators/features/elements.js --presets @babel/preset-env",
	"generate:features:common": "npx babel-node api/generators/features/common.js --presets @babel/preset-env",
	"generate:components:elements": "npx babel-node api/generators/components/elements.js --presets @babel/preset-env",
	"generate:components:components": "npx babel-node api/generators/components/components.js --presets @babel/preset-env",
	"generate:e": "npm run generate:elements ; npm run generate:features:elements ; npm run generate:features:common ; npm run generate:components:elements",
	"generate:c": "npm run generate:features:common ; npm run generate:components:components",
	generate: "npm run generate:elements ; npm run generate:features:elements ; npm run generate:features:common ; npm run generate:components:elements ; npm run generate:components:components",
	build: "rollup --config build/base.config.js ; rollup --config build/themes.config.js",
	"to:dev": "rollup --config build/dev.config.js",
	"to:prod": "rollup --config build/prod.config.js",
	"to:internal": "rollup --config build/internal.config.js",
	"to:wildcard": "rollup --config build/wildcard.config.js",
	"to:source": "node scripts/toSource.js",
	"to:web": "rollup --config build/web.config.js"
};
var devDependencies = {
	"@babel/core": "^7.2.2",
	"@babel/node": "^7.12.10",
	"@babel/preset-env": "^7.3.1",
	"@rollup/plugin-alias": "^3.1.8",
	"@rollup/plugin-babel": "^5.3.0",
	"@rollup/plugin-commonjs": "^22.0.1",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^13.0.6",
	"@tailwindcss/postcss7-compat": "^2.0.2",
	"@testing-library/jest-dom": "^5.11.5",
	"@vue/compiler-sfc": "^3.0.0",
	argv: "0.0.2",
	async: "^3.2.2",
	autoprefixer: "^9",
	"babel-core": "^7.0.0-bridge.0",
	"babel-loader": "^8.0.5",
	canvas: "^2.7.0",
	"core-js": "^3.10.1",
	"cross-env": "^5.2.0",
	"css-loader": "^2.1.0",
	"drag-drop-touch": "^1.3.1",
	"flush-promises": "^1.0.2",
	"html-loader": "^1.3.2",
	html5sortable: "^0.11.1",
	"javascript-obfuscator": "^4.0.0",
	jest: "^27.3.1",
	"jest-canvas-mock": "^2.3.1",
	"jest-environment-jsdom-sixteen": "^1.0.3",
	"jest-progress-bar-reporter": "^1.0.18",
	"jest-silent-reporter": "^0.4.0",
	"jest-transform-stub": "^2.0.0",
	"json-loader": "^0.5.7",
	"module-alias": "^2.2.2",
	"mutationobserver-shim": "^0.3.7",
	ncp: "^2.0.0",
	"rollup-plugin-commonjs": "^10.1.0",
	"rollup-plugin-javascript-obfuscator": "^1.0.4",
	"rollup-plugin-multi-input": "^1.3.1",
	"rollup-plugin-obfuscator": "^0.2.1",
	"rollup-plugin-polyfill-node": "^0.7.0",
	"rollup-plugin-postcss": "^4.0.1",
	"rollup-plugin-sass": "^1.2.9",
	"rollup-plugin-scss": "^3.0.0",
	"rollup-plugin-terser": "^7.0.2",
	"rollup-plugin-vue": "^6.0.0",
	"sass-loader": "^7.1.0",
	tailwindcss: "npm:@tailwindcss/postcss7-compat@^2.0.2",
	"ts-loader": "^8.0.7",
	"vue-loader": "^15.10.0",
	"vue-next": "npm:vue@^3.2.20",
	"vue-next-jest": "npm:@vue/vue3-jest@^27.0.0-alpha.1",
	"vue-next-rollup-plugin-vue": "npm:rollup-plugin-vue@^6.0.0",
	"vue-next-test-utils": "npm:@vue/test-utils@2.0.0-rc.16",
	"vue-prev": "npm:vue@^2.7.14",
	"vue-prev-jest": "npm:@vue/vue2-jest@^27.0.0-alpha.2",
	"vue-prev-rollup-plugin-vue": "npm:rollup-plugin-vue@^5.1.9",
	"vue-prev-test-utils": "npm:@vue/test-utils@1.2.2",
	"vue-template-compiler": "^2.7.8",
	webpack: "^4.28.4",
	"webpack-cli": "^3.2.1",
	"webpack-notifier": "^1.7.0"
};
var dependencies = {
	"@babel/plugin-transform-runtime": "^7.16.4",
	"@babel/runtime": "^7.16.3",
	"@vueform/multiselect": "file:./packages/vueform-multiselect",
	"@vueform/slider": "file:./packages/vueform-slider",
	"@vueform/toggle": "file:./packages/vueform-toggle",
	autosize: "^4.0.2",
	axios: "^0.19.2",
	bootstrap: "^4.4.1",
	color: "^3.1.3",
	flat: "^5.0.2",
	flatpickr: "^4.5.2",
	locutus: "^2.0.12",
	"mini-svg-data-uri": "^1.3.3",
	moment: "^2.27.0",
	moxios: "^0.4.0",
	nouislider: "^15.4.0",
	"places.js": "^1.14.0",
	postcss: "^8.4.6",
	sass: "^1.27.0",
	sortablejs: "^1.4.2",
	tailwindcss: "npm:@tailwindcss/postcss7-compat@^2.2.0",
	trix: "^1.0.0",
	"vue-i18n": "^8.18.2",
	wnumb: "^1.2.0"
};
var browserslist = [
	"> 1%",
	"last 2 versions",
	"not dead"
];
var packageJson = {
	publishConfig: publishConfig,
	"private": true,
	name: name,
	version: version,
	description: description,
	homepage: homepage,
	bugs: bugs,
	license: license,
	authors: authors,
	main: main,
	_moduleAliases: _moduleAliases,
	scripts: scripts,
	devDependencies: devDependencies,
	dependencies: dependencies,
	browserslist: browserslist
};

var normalize = function normalize(value) {
  if (value === undefined || typeof value != 'string') {
    return value;
  }

  // is number
  if (value.match(/^-*\d+$/)) {
    return parseInt(value, 10);

    // is float
  } else if (value.match(/^\d+\.\d+$/)) {
    return parseFloat(value);

    // everything else
  } else {
    return value;
  }
};

var parse = string => {
  var parseRule = () => {
    return string.split(':')[0];
  };
  var parseAttributes = () => {
    var parts = string.split(':');
    if (parts.length <= 1) {
      return null;
    }
    var attributes = {};
    var rule = parts[0];
    parts.shift();
    var params = parts.join(':');
    if (['regex', 'not_regex'].indexOf(rule) !== -1) {
      attributes[0] = params;
      return attributes;
    }
    _.each(params.split(','), (attribute, index) => {
      var attrParts = attribute.split('=');
      if (attrParts.length <= 1) {
        attributes[index] = normalize(attribute);
      } else {
        attributes[attrParts[0]] = normalize(attrParts[1]);
      }
    });
    return attributes;
  };
  return {
    name: parseRule(),
    attributes: parseAttributes()
  };
};

function replaceWildcards (fillable, fill) {
  if (!fill.match(/\.([0-9]+)(?![a-zA-Z]+)/g)) {
    return fillable;
  }
  fill.match(/\.([0-9]+)(?![a-zA-Z]+)/g).forEach(match => {
    fillable = fillable.replace('.*', match);
  });
  return fillable;
}

function compare (actual, operator, expected, el$) {
  if (!operator) {
    return false;
  }
  actual = Array.isArray(actual) ? actual.map(e => normalize(e)) : normalize(actual);
  expected = Array.isArray(expected) ? expected.map(e => normalize(e)) : normalize(expected);
  switch (operator.toLowerCase()) {
    case '>':
      return _.isArray(actual) ? actual.every(a => a > expected) : actual > expected;
    case '>=':
      return _.isArray(actual) ? actual.every(a => a >= expected) : actual >= expected;
    case '<':
      return _.isArray(actual) ? actual.every(a => a < expected) : actual < expected;
    case '<=':
      return _.isArray(actual) ? actual.every(a => a <= expected) : actual <= expected;
    case 'empty':
      if (_.isArray(actual)) {
        return !actual.length;
      } else if (actual && actual instanceof File) {
        return false;
      } else if (actual && typeof actual === 'object') {
        var values = Object.values(actual);
        return !values.length || values.every(v => !v);
      } else {
        return !actual;
      }
    case 'not_empty':
      if (_.isArray(actual)) {
        return !!actual.length;
      } else if (actual && actual instanceof File) {
        return true;
      } else if (actual && typeof actual === 'object') {
        var _values = Object.values(actual);
        return _values.length && _values.some(v => !!v);
      } else {
        return !!actual;
      }
    case '==':
    case 'in':
      if (_.isArray(expected)) {
        if (_.isArray(actual)) {
          // ['checkboxes', [1,2,3]]
          return !expected.length ? !actual.length : actual.filter(a => _.includes(expected, a)).length > 0;
        } else {
          // ['text', [1,2,3]]
          return expected.indexOf(actual) !== -1;
        }
      } else {
        if (_.isArray(actual)) {
          // ['checkboxes', 1]
          return actual.indexOf(expected) !== -1;
        } else {
          // ['text', 1]
          return actual == expected;
        }
      }
    case '!=':
    case 'not_in':
      if (_.isArray(expected)) {
        if (_.isArray(actual)) {
          // ['checkboxes', 'not_in', [1,2,3]]
          return !expected.length ? !!actual.length : actual.filter(e => _.includes(expected, e)).length == 0;
        } else {
          // ['text', 'not_in', [1,2,3]]
          return expected.indexOf(actual) === -1;
        }
      } else {
        if (_.isArray(actual)) {
          // ['checkboxes', '!=', 1]
          return actual.indexOf(expected) === -1;
        } else {
          // ['text', '!=', 1]
          return actual != expected;
        }
      }
    case 'today':
      if (!_.isArray(actual)) {
        actual = [actual];
      }
      return actual.length && actual.every(a => moment(a, el$.valueDateFormat).isSame(moment(), 'day'));
    case 'before':
      if (!_.isArray(actual)) {
        actual = [actual];
      }
      return actual.length && actual.every(a => {
        var date = moment(a, el$.valueDateFormat);
        return date.isValid() && date.isBefore(moment(expected === 'today' ? undefined : expected), 'day');
      });
    case 'after':
      if (!_.isArray(actual)) {
        actual = [actual];
      }
      return actual.length && actual.every(a => {
        var date = moment(a, el$.valueDateFormat);
        return date.isValid() && date.isAfter(moment(expected === 'today' ? undefined : expected), 'day');
      });
    case '^':
      return _.startsWith(actual, expected);
    case '$':
      return _.endsWith(actual, expected);
    case '*':
      return _.includes(actual, expected);
  }
}

var Factory = class {
  constructor(path, form$) {
    this.form$ = form$;
    this.element$ = form$.el$(path);
  }
  get rules() {
    return Object.assign({}, this.form$.$vueform.services.validation.rules, this.form$.$vueform.rules);
  }
  makeAll(rules) {
    var parsedRules = this.parseRules(rules);
    if (parsedRules.length == 0) {
      return [];
    }
    return _.map(parsedRules, rule => {
      return this.make(rule);
    });
  }
  make(rule) {
    var ruleClass = typeof rule == 'function' ? rule : this.rules[rule.name];
    if (!ruleClass) {
      throw new Error("Unknown rule: '".concat(rule.name, "'"));
    }
    return new ruleClass(rule, {
      element$: this.element$
    });
  }
  parseRules(rules) {
    if (!_.isArray(rules)) {
      rules = rules.split('|');
    }
    return _.flatMap(rules, rule => {
      if (typeof rule == 'function') {
        return rule;
      }
      return this.isConditional(rule) ? this.parseConditional(rule) : this.parse(rule);
    });
  }
  parse(rule) {
    return parse(rule);
  }
  isConditional(rule) {
    return _.isPlainObject(rule);
  }
  parseConditional(rule) {
    var _conditions = _.values(rule)[0];
    if (!Array.isArray(_conditions[0])) {
      _conditions = [_conditions];
    }
    var parsed = _objectSpread2(_objectSpread2({}, parse(_.keys(rule)[0])), {}, {
      conditions: (form$, Validator, el$) => {
        return _conditions.every(condition => {
          if (_.isArray(condition)) {
            if (_.isArray(condition[0])) {
              return condition.some(subcondition => {
                if (_.isArray(subcondition)) {
                  return this.createConditionFromArray(subcondition)(form$, Validator, el$);
                } else {
                  return condition(form$, Validator, el$);
                }
              });
            } else {
              return this.createConditionFromArray(condition)(form$, Validator, el$);
            }
          } else {
            return condition(form$, Validator, el$);
          }
        });
      },
      dependents: []
    });
    _conditions.forEach(condition => {
      if (_.isArray(condition)) {
        if (_.isArray(condition[0])) {
          condition.forEach(subcondition => {
            if (_.isArray(subcondition)) {
              parsed.dependents.push(replaceWildcards(subcondition[0], this.element$.path));
            }
          });
        } else {
          parsed.dependents.push(replaceWildcards(condition[0], this.element$.path));
        }
      }
    });
    return parsed;
  }
  createConditionFromArray(condition) {
    var field = replaceWildcards(condition[0], this.element$.path);
    var operator = condition.length == 3 || ['empty', 'not_empty', 'today'].indexOf(condition[1]) !== -1 ? condition[1] : '==';
    var value = condition.length == 3 ? condition[2] : ['empty', 'not_empty', 'today'].indexOf(condition[1]) === -1 ? condition[1] : true;
    return (form$, Validator, el$) => {
      var actual = _.get(form$.requestData, field);
      var expected = value;
      return compare(actual, operator, expected, this.element$);
    };
  }
};

var fileToObject = function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    name: file.name,
    size: file.size,
    type: file.type
  };
};
var dataToComperable = function dataToComperable(data) {
  if (data instanceof File) {
    return fileToObject(data);
  } else if (data instanceof Date) {
    return data.toString();
  } else if (Array.isArray(data)) {
    return data.map(dataToComperable);
  } else if (typeof data === 'object' && data !== null) {
    return _.mapValues(data, dataToComperable);
  }
  return data;
};
function dataEquals(a, b) {
  return _.isEqual(dataToComperable(a), dataToComperable(b));
}

var Validator = class {
  constructor(rule, props) {
    var _props$element$;
    this.rule = rule;
    this.attributes = rule.attributes || {};
    this.conditions = rule.conditions || [];
    this.dependents = rule.dependents || [];
    this.element$ = props.element$;
    this.form$ = ((_props$element$ = props.element$) === null || _props$element$ === void 0 ? void 0 : _props$element$.form$) || {};
    this.numeric = props.numeric || false;
    this.elementMessages = props.element$.messages;
    this.invalid = false;
    this.pending = false;
    this.debouncer = null;
    this.lastValue = null;
    this.watchers = {};
    this.dependents.forEach(dependent => {
      watch(computed(() => _.get(this.form$.data, dependent)), () => {
        if (this.element$.validated) {
          // we need to revalidate the whole element
          if (this.name === 'nullable') {
            this.element$.validate();
          }

          // we need to revalidate only current validator
          else {
            // We need to do this instead of this.validate()
            // because Vue3 does not recognize `invalid` as
            // as a reactive property if used that way.
            this.revalidate();
          }
        }
      });
    });
    watch(computed(() => props.element$.messages), (n, o) => {
      if (_.isEqual(n, o)) {
        return;
      }
      this.elementMessages = props.element$.messages;
    }, {
      deep: true
    });
    this.init();
  }
  get name() {
    return this.rule.name;
  }
  get failing() {
    return this.invalid;
  }
  get defaultMessage() {
    return this.form$.translations.vueform.defaultMessage;
  }
  get message() {
    var _this$form$$translati;
    var message = '';
    if (this.elementMessages[this.name]) {
      message = this.elementMessages[this.name];
    } else if (this.form$.options.messages[this.name]) {
      message = this.form$.options.messages[this.name];
    } else if (this.name !== '_class' && ((_this$form$$translati = this.form$.translations.validation) === null || _this$form$$translati === void 0 ? void 0 : _this$form$$translati[this.name]) !== undefined) {
      message = this.form$.translations.validation[this.name];
      if (_.isPlainObject(message)) {
        message = message[this.messageType];
      }
    } else {
      message = this.defaultMessage;
    }

    // replace :params
    _.each(_.map(message.match(/:\w+/g), p => p.replace(':', '')), param => {
      message = message.replace(":".concat(param), this.messageParams[param]);
    });

    // replace {params}
    _.each(_.map(message.match(/{[^}]+/g), p => p.replace('{', '')), param => {
      message = message.replace("{".concat(param, "}"), this.messageParams[param]);
    });
    return message;
  }
  get messageType() {
    if (this.isNumeric) {
      return 'numeric';
    } else if (this.isFile) {
      return 'file';
    } else if (this.isArray) {
      return 'array';
    }
    return 'string';
  }
  get messageParams() {
    return {
      attribute: this.attributeName
    };
  }
  get attributeName() {
    return this.element$.genericName;
  }
  get type() {
    if (this.isNumeric) {
      return 'numeric';
    } else if (this.isFile) {
      return 'file';
    } else if (this.isArray) {
      return 'array';
    }
    return 'string';
  }
  get isNumeric() {
    return _.some(this.element$.Validators, {
      name: 'numeric'
    }) || _.some(this.element$.Validators, {
      name: 'integer'
    });
  }
  get isNullable() {
    var nullable = false;
    _.each(this.element$.Validators, Validator => {
      if (Validator.name !== 'nullable') {
        return;
      }
      if (!Validator.conditions.length) {
        nullable = true;
        return;
      }
      nullable = Validator.conditions(this.form$, this, this.element$);
    });
    return nullable;
  }
  get isFile() {
    return this.element$.isFileType;
  }
  get isArray() {
    return this.element$.isArrayType;
  }
  get isAsync() {
    return false;
  }
  get debounce() {
    if (this.attributes.debounce) {
      return this.attributes.debounce;
    }
    if (this.element$.debounce) {
      return this.element$.debounce;
    }
    return false;
  }
  get debouncing() {
    return this.debouncer !== null;
  }
  init() {}
  validate(value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (value === undefined) {
        var _this$element$;
        value = (_this$element$ = _this.element$) === null || _this$element$ === void 0 ? void 0 : _this$element$.value;
      }
      if (!_this.form$.validation) {
        return;
      }
      if (_this.isNullable && !_this.filled(value)) {
        _this.invalid = false;
        return;
      }
      if (_this.conditions.length) {
        if (!_this.conditions(_this.form$, _this, _this.element$)) {
          _this.invalid = false;
          return;
        }
      }
      if (_this.debounce && _this.filled(value)) {
        yield _this._validateWithDebounce(value);
      } else {
        if (_this.debounce && _this.debouncer) {
          clearTimeout(_this.debouncer);
        }
        yield _this._validate(value);
      }
    })();
  }
  reset() {
    this.invalid = false;
  }
  watch(variables) {
    if (!Array.isArray(variables)) {
      variables = [variables];
    }
    variables.forEach(variable => {
      this.addWatcher(variable);
    });
  }
  addWatcher(variable) {
    if (this.watchers[variable]) {
      return;
    }
    this.watchers[variable] = watch(computed(() => _.get(this.form$.data, variable)), () => {
      this.revalidate();
    });
  }
  revalidate() {
    this.element$.Validators.forEach(Validator => {
      if (Validator.rule.name === this.rule.name) {
        Validator.validate();
      }
    });
  }
  watchOther() {
    this.form$.$nextTick(() => {
      if (!this.other$) {
        return;
      }
      this.form$.$watch(() => {
        var _this$other$;
        return (_this$other$ = this.other$) === null || _this$other$ === void 0 ? void 0 : _this$other$.value;
      }, () => {
        if (this.element$.validated) {
          this.element$.validate();
        }
      });
    });
  }
  size(value) {
    if (this.isNumeric) {
      return value;
    } else if (this.isFile) {
      return value ? value.size / 1000 : 0;
    } else if (this.isArray) {
      return value.length;
    } else if (value === null) {
      return 0;
    } else if (value === undefined) {
      return 0;
    } else if (value === '') {
      return 0;
    }
    return String(value).length;
  }
  filled(value) {
    if (value === undefined || value === null && value !== this.element$.trueValue || value === this.element$.falseValue) {
      return false;
    } else if (this.isNumeric && value === 0) {
      return false;
    } else if (_.isString(value) && _.trim(value) === '') {
      return false;
    } else if (_.isArray(value) && value.length < 1) {
      return false;
    } else if (value instanceof File && value.name === '') {
      return false;
    }
    return true;
  }
  _validate(value) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_this2.isAsync) {
        yield _this2._validateAsync(value);
      } else {
        _this2._validateSync(value);
      }
    })();
  }
  _validateAsync(value) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      _this3.lastValue = value;
      _this3.pending = true;
      var valid = yield _this3.check(value);
      if (dataEquals(_this3.lastValue, value)) {
        _this3.invalid = !valid;
        _this3.pending = false;
      }
    })();
  }
  _validateSync(value) {
    this.invalid = !this.check(value);
  }
  _validateWithDebounce(value) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      return new Promise((resolve, reject) => {
        if (_this4.debouncer) {
          resolve();
          clearTimeout(_this4.debouncer);
        }
        _this4.debouncer = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
          yield _this4._validate(value);
          _this4.debouncer = null;
          resolve();
        }), _this4.debounce);
      });
    })();
  }
};

class accepted extends Validator {
  check(value) {
    return ['yes', 'on', '1', 1, true, 'true'].indexOf(value) !== -1;
  }
}

class active_url extends Validator {
  get isAsync() {
    return true;
  }
  check(value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var endpoint = _this.form$.$vueform.config.endpoints.activeUrl;
      var method = typeof endpoint !== 'function' ? endpoint.method : null;
      var res;
      if (typeof endpoint === 'function') {
        res = yield endpoint(value, _this.element$, _this.form$);
      } else {
        res = yield _this.form$.$vueform.services.axios.request({
          url: endpoint.url,
          method,
          [method.toLowerCase() === 'get' ? 'params' : 'data']: {
            url: value
          }
        });
      }
      return res.data;
    })();
  }
}

class after extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      date: this.date.format(this.format)
    };
  }
  get param() {
    return this.attributes[0];
  }
  get format() {
    return ['date', 'dates'].indexOf(this.element$.type) !== -1 && this.element$.valueFormat ? this.element$.valueFormat : 'YYYY-MM-DD';
  }
  get otherFormat() {
    if (this.dateType != 'element') {
      return this.format;
    }
    return ['date', 'dates'].indexOf(this.other$.type) !== -1 && this.other$.valueFormat ? this.other$.valueFormat : this.format;
  }
  get otherPath() {
    if (this.dateType != 'element') {
      return null;
    }
    return this.param;
  }
  get other$() {
    if (this.dateType != 'element') {
      return {};
    }
    return this.form$.el$(this.param);
  }
  get date() {
    var date = '';
    switch (this.dateType) {
      case 'relative':
        if (this.param === 'today') {
          date = moment().startOf('day');
        }
        if (this.param === 'tomorrow') {
          date = moment().startOf('day').add(1, 'days');
        }
        if (this.param === 'yesterday') {
          date = moment().startOf('day').subtract(1, 'days');
        }
        break;
      case 'element':
        date = moment(this.other$.value, this.otherFormat);
        break;
      case 'absolute':
        date = moment(this.param, this.format);
        break;
    }
    return date;
  }
  get dateType() {
    if (['today', 'tomorrow', 'yesterday'].indexOf(this.param) !== -1) {
      return 'relative';
    } else if (this.form$.el$(this.param)) {
      return 'element';
    } else {
      return 'absolute';
    }
  }
  init() {
    this.form$.$nextTick(() => {
      if (this.dateType == 'element') {
        this.watchOther();
      }
    });
  }
  check(value) {
    if (_.isArray(value)) {
      var valid = true;
      _.each(value, date => {
        if (!this.checkDate(date)) {
          valid = false;
        }
      });
      return valid;
    }
    return this.checkDate(value);
  }
  checkDate(value) {
    return moment(value, this.format).isAfter(moment(this.date, this.otherFormat));
  }
}

class after_or_equal extends after {
  checkDate(value) {
    return moment(value, this.format).isSameOrAfter(moment(this.date, this.otherFormat));
  }
}

class alpha extends Validator {
  check(value) {
    // Solution from XRegExp library:
    // https://stackoverflow.com/a/15861883/1276358
    return /^[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(value);
  }
}

class alpha_dash extends Validator {
  check(value) {
    // Solution from XRegExp library:
    // https://stackoverflow.com/a/15861883/1276358
    return /^[0-9-_\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(value);
  }
}

class alpha_num extends Validator {
  check(value) {
    // Solution from XRegExp library:
    // https://stackoverflow.com/a/15861883/1276358
    return /^[0-9\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(value);
  }
}

class array extends Validator {
  check(value) {
    return _.isArray(value);
  }
}

class before extends after {
  checkDate(value) {
    return moment(value, this.format).isBefore(moment(this.date, this.otherFormat));
  }
}

class before_or_equal extends after {
  checkDate(value) {
    return moment(value, this.format).isSameOrBefore(moment(this.date, this.otherFormat));
  }
}

class between extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min,
      max: this.max
    };
  }
  get min() {
    return this.attributes[0];
  }
  get max() {
    return this.attributes[1];
  }
  check(value) {
    if (!value) {
      return true;
    }
    var size = this.size(value);
    return size >= this.min && size <= this.max;
  }
}

class boolean extends Validator {
  check(value) {
    var accepted = [true, false, 0, 1, '0', '1'];
    return accepted.indexOf(value) !== -1;
  }
}

class confirmed extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName
    };
  }
  get otherPath() {
    return "".concat(this.element$.path, "_confirmation");
  }
  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path));
  }
  init() {
    this.watchOther();
  }
  check(value) {
    if (!this.filled(this.other$.value)) {
      return true;
    }
    return value == this.other$.value;
  }
}

var reSpace = '[ \\t]+';
var reSpaceOpt = '[ \\t]*';
var reMeridian = '(?:([ap])\\.?m\\.?([\\t ]|$))';
var reHour24 = '(2[0-4]|[01]?[0-9])';
var reHour24lz = '([01][0-9]|2[0-4])';
var reHour12 = '(0?[1-9]|1[0-2])';
var reMinute = '([0-5]?[0-9])';
var reMinutelz = '([0-5][0-9])';
var reSecond = '(60|[0-5]?[0-9])';
var reSecondlz = '(60|[0-5][0-9])';
var reFrac = '(?:\\.([0-9]+))';

var reDayfull = 'sunday|monday|tuesday|wednesday|thursday|friday|saturday';
var reDayabbr = 'sun|mon|tue|wed|thu|fri|sat';
var reDaytext = reDayfull + '|' + reDayabbr + '|weekdays?';

var reReltextnumber = 'first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth';
var reReltexttext = 'next|last|previous|this';
var reReltextunit = '(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|' + reDaytext;

var reYear = '([0-9]{1,4})';
var reYear2 = '([0-9]{2})';
var reYear4 = '([0-9]{4})';
var reYear4withSign = '([+-]?[0-9]{4})';
var reMonth = '(1[0-2]|0?[0-9])';
var reMonthlz = '(0[0-9]|1[0-2])';
var reDay = '(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)';
var reDaylz = '(0[0-9]|[1-2][0-9]|3[01])';

var reMonthFull = 'january|february|march|april|may|june|july|august|september|october|november|december';
var reMonthAbbr = 'jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec';
var reMonthroman = 'i[vx]|vi{0,3}|xi{0,2}|i{1,3}';
var reMonthText = '(' + reMonthFull + '|' + reMonthAbbr + '|' + reMonthroman + ')';

var reTzCorrection = '((?:GMT)?([+-])' + reHour24 + ':?' + reMinute + '?)';
var reTzAbbr = '\\(?([a-zA-Z]{1,6})\\)?';
var reDayOfYear = '(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])';
var reWeekOfYear = '(0[1-9]|[1-4][0-9]|5[0-3])';

var reDateNoYear = reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]*';

function processMeridian(hour, meridian) {
  meridian = meridian && meridian.toLowerCase();

  switch (meridian) {
    case 'a':
      hour += hour === 12 ? -12 : 0;
      break;
    case 'p':
      hour += hour !== 12 ? 12 : 0;
      break;
  }

  return hour;
}

function processYear(yearStr) {
  var year = +yearStr;

  if (yearStr.length < 4 && year < 100) {
    year += year < 70 ? 2000 : 1900;
  }

  return year;
}

function lookupMonth(monthStr) {
  return {
    jan: 0,
    january: 0,
    i: 0,
    feb: 1,
    february: 1,
    ii: 1,
    mar: 2,
    march: 2,
    iii: 2,
    apr: 3,
    april: 3,
    iv: 3,
    may: 4,
    v: 4,
    jun: 5,
    june: 5,
    vi: 5,
    jul: 6,
    july: 6,
    vii: 6,
    aug: 7,
    august: 7,
    viii: 7,
    sep: 8,
    sept: 8,
    september: 8,
    ix: 8,
    oct: 9,
    october: 9,
    x: 9,
    nov: 10,
    november: 10,
    xi: 10,
    dec: 11,
    december: 11,
    xii: 11
  }[monthStr.toLowerCase()];
}

function lookupWeekday(dayStr) {
  var desiredSundayNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var dayNumbers = {
    mon: 1,
    monday: 1,
    tue: 2,
    tuesday: 2,
    wed: 3,
    wednesday: 3,
    thu: 4,
    thursday: 4,
    fri: 5,
    friday: 5,
    sat: 6,
    saturday: 6,
    sun: 0,
    sunday: 0
  };

  return dayNumbers[dayStr.toLowerCase()] || desiredSundayNumber;
}

function lookupRelative(relText) {
  var relativeNumbers = {
    last: -1,
    previous: -1,
    this: 0,
    first: 1,
    next: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eight: 8,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12
  };

  var relativeBehavior = {
    this: 1
  };

  var relTextLower = relText.toLowerCase();

  return {
    amount: relativeNumbers[relTextLower],
    behavior: relativeBehavior[relTextLower] || 0
  };
}

function processTzCorrection(tzOffset, oldValue) {
  var reTzCorrectionLoose = /(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i;
  tzOffset = tzOffset && tzOffset.match(reTzCorrectionLoose);

  if (!tzOffset) {
    return oldValue;
  }

  var sign = tzOffset[1] === '-' ? -1 : 1;
  var hours = +tzOffset[2];
  var minutes = +tzOffset[4];

  if (!tzOffset[4] && !tzOffset[3]) {
    minutes = Math.floor(hours % 100);
    hours = Math.floor(hours / 100);
  }

  // timezone offset in seconds
  return sign * (hours * 60 + minutes) * 60;
}

// tz abbrevation : tz offset in seconds
var tzAbbrOffsets = {
  acdt: 37800,
  acst: 34200,
  addt: -7200,
  adt: -10800,
  aedt: 39600,
  aest: 36000,
  ahdt: -32400,
  ahst: -36000,
  akdt: -28800,
  akst: -32400,
  amt: -13840,
  apt: -10800,
  ast: -14400,
  awdt: 32400,
  awst: 28800,
  awt: -10800,
  bdst: 7200,
  bdt: -36000,
  bmt: -14309,
  bst: 3600,
  cast: 34200,
  cat: 7200,
  cddt: -14400,
  cdt: -18000,
  cemt: 10800,
  cest: 7200,
  cet: 3600,
  cmt: -15408,
  cpt: -18000,
  cst: -21600,
  cwt: -18000,
  chst: 36000,
  dmt: -1521,
  eat: 10800,
  eddt: -10800,
  edt: -14400,
  eest: 10800,
  eet: 7200,
  emt: -26248,
  ept: -14400,
  est: -18000,
  ewt: -14400,
  ffmt: -14660,
  fmt: -4056,
  gdt: 39600,
  gmt: 0,
  gst: 36000,
  hdt: -34200,
  hkst: 32400,
  hkt: 28800,
  hmt: -19776,
  hpt: -34200,
  hst: -36000,
  hwt: -34200,
  iddt: 14400,
  idt: 10800,
  imt: 25025,
  ist: 7200,
  jdt: 36000,
  jmt: 8440,
  jst: 32400,
  kdt: 36000,
  kmt: 5736,
  kst: 30600,
  lst: 9394,
  mddt: -18000,
  mdst: 16279,
  mdt: -21600,
  mest: 7200,
  met: 3600,
  mmt: 9017,
  mpt: -21600,
  msd: 14400,
  msk: 10800,
  mst: -25200,
  mwt: -21600,
  nddt: -5400,
  ndt: -9052,
  npt: -9000,
  nst: -12600,
  nwt: -9000,
  nzdt: 46800,
  nzmt: 41400,
  nzst: 43200,
  pddt: -21600,
  pdt: -25200,
  pkst: 21600,
  pkt: 18000,
  plmt: 25590,
  pmt: -13236,
  ppmt: -17340,
  ppt: -25200,
  pst: -28800,
  pwt: -25200,
  qmt: -18840,
  rmt: 5794,
  sast: 7200,
  sdmt: -16800,
  sjmt: -20173,
  smt: -13884,
  sst: -39600,
  tbmt: 10751,
  tmt: 12344,
  uct: 0,
  utc: 0,
  wast: 7200,
  wat: 3600,
  wemt: 7200,
  west: 3600,
  wet: 0,
  wib: 25200,
  wita: 28800,
  wit: 32400,
  wmt: 5040,
  yddt: -25200,
  ydt: -28800,
  ypt: -28800,
  yst: -32400,
  ywt: -28800,
  a: 3600,
  b: 7200,
  c: 10800,
  d: 14400,
  e: 18000,
  f: 21600,
  g: 25200,
  h: 28800,
  i: 32400,
  k: 36000,
  l: 39600,
  m: 43200,
  n: -3600,
  o: -7200,
  p: -10800,
  q: -14400,
  r: -18000,
  s: -21600,
  t: -25200,
  u: -28800,
  v: -32400,
  w: -36000,
  x: -39600,
  y: -43200,
  z: 0
};

var formats = {
  yesterday: {
    regex: /^yesterday/i,
    name: 'yesterday',
    callback: function callback() {
      this.rd -= 1;
      return this.resetTime();
    }
  },

  now: {
    regex: /^now/i,
    name: 'now'
    // do nothing
  },

  noon: {
    regex: /^noon/i,
    name: 'noon',
    callback: function callback() {
      return this.resetTime() && this.time(12, 0, 0, 0);
    }
  },

  midnightOrToday: {
    regex: /^(midnight|today)/i,
    name: 'midnight | today',
    callback: function callback() {
      return this.resetTime();
    }
  },

  tomorrow: {
    regex: /^tomorrow/i,
    name: 'tomorrow',
    callback: function callback() {
      this.rd += 1;
      return this.resetTime();
    }
  },

  timestamp: {
    regex: /^@(-?\d+)/i,
    name: 'timestamp',
    callback: function callback(match, timestamp) {
      this.rs += +timestamp;
      this.y = 1970;
      this.m = 0;
      this.d = 1;
      this.dates = 0;

      return this.resetTime() && this.zone(0);
    }
  },

  firstOrLastDay: {
    regex: /^(first|last) day of/i,
    name: 'firstdayof | lastdayof',
    callback: function callback(match, day) {
      if (day.toLowerCase() === 'first') {
        this.firstOrLastDayOfMonth = 1;
      } else {
        this.firstOrLastDayOfMonth = -1;
      }
    }
  },

  backOrFrontOf: {
    regex: RegExp('^(back|front) of ' + reHour24 + reSpaceOpt + reMeridian + '?', 'i'),
    name: 'backof | frontof',
    callback: function callback(match, side, hours, meridian) {
      var back = side.toLowerCase() === 'back';
      var hour = +hours;
      var minute = 15;

      if (!back) {
        hour -= 1;
        minute = 45;
      }

      hour = processMeridian(hour, meridian);

      return this.resetTime() && this.time(hour, minute, 0, 0);
    }
  },

  weekdayOf: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reDayfull + '|' + reDayabbr + ')' + reSpace + 'of', 'i'),
    name: 'weekdayof'
    // todo
  },

  mssqltime: {
    regex: RegExp('^' + reHour12 + ':' + reMinutelz + ':' + reSecondlz + '[:.]([0-9]+)' + reMeridian, 'i'),
    name: 'mssqltime',
    callback: function callback(match, hour, minute, second, frac, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, +frac.substr(0, 3));
    }
  },

  timeLong12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'timelong12',
    callback: function callback(match, hour, minute, second, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  timeShort12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'timeshort12',
    callback: function callback(match, hour, minute, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  },

  timeTiny12: {
    regex: RegExp('^' + reHour12 + reSpaceOpt + reMeridian, 'i'),
    name: 'timetiny12',
    callback: function callback(match, hour, meridian) {
      return this.time(processMeridian(+hour, meridian), 0, 0, 0);
    }
  },

  soap: {
    regex: RegExp('^' + reYear4 + '-' + reMonthlz + '-' + reDaylz + 'T' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reFrac + reTzCorrection + '?', 'i'),
    name: 'soap',
    callback: function callback(match, year, month, day, hour, minute, second, frac, tzCorrection) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, +frac.substr(0, 3)) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  wddx: {
    regex: RegExp('^' + reYear4 + '-' + reMonth + '-' + reDay + 'T' + reHour24 + ':' + reMinute + ':' + reSecond),
    name: 'wddx',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  exif: {
    regex: RegExp('^' + reYear4 + ':' + reMonthlz + ':' + reDaylz + ' ' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz, 'i'),
    name: 'exif',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpc: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + 'T' + reHour24 + ':' + reMinutelz + ':' + reSecondlz),
    name: 'xmlrpc',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpcNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + '[Tt]' + reHour24 + reMinutelz + reSecondlz),
    name: 'xmlrpcnocolon',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  clf: {
    regex: RegExp('^' + reDay + '/(' + reMonthAbbr + ')/' + reYear4 + ':' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reSpace + reTzCorrection, 'i'),
    name: 'clf',
    callback: function callback(match, day, month, year, hour, minute, second, tzCorrection) {
      return this.ymd(+year, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  iso8601long: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond + reFrac, 'i'),
    name: 'iso8601long',
    callback: function callback(match, hour, minute, second, frac) {
      return this.time(+hour, +minute, +second, +frac.substr(0, 3));
    }
  },

  dateTextual: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]+' + reYear, 'i'),
    name: 'datetextual',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  pointedDate4: {
    regex: RegExp('^' + reDay + '[.\\t-]' + reMonth + '[.-]' + reYear4),
    name: 'pointeddate4',
    callback: function callback(match, day, month, year) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pointedDate2: {
    regex: RegExp('^' + reDay + '[.\\t]' + reMonth + '\\.' + reYear2),
    name: 'pointeddate2',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  timeLong24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond),
    name: 'timelong24',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  dateNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz),
    name: 'datenocolon',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pgydotd: {
    regex: RegExp('^' + reYear4 + '\\.?' + reDayOfYear),
    name: 'pgydotd',
    callback: function callback(match, year, day) {
      return this.ymd(+year, 0, +day);
    }
  },

  timeShort24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'timeshort24',
    callback: function callback(match, hour, minute) {
      return this.time(+hour, +minute, 0, 0);
    }
  },

  iso8601noColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz + reSecondlz, 'i'),
    name: 'iso8601nocolon',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  iso8601dateSlash: {
    // eventhough the trailing slash is optional in PHP
    // here it's mandatory and inputs without the slash
    // are handled by dateslash
    regex: RegExp('^' + reYear4 + '/' + reMonthlz + '/' + reDaylz + '/'),
    name: 'iso8601dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  dateSlash: {
    regex: RegExp('^' + reYear4 + '/' + reMonth + '/' + reDay),
    name: 'dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  american: {
    regex: RegExp('^' + reMonth + '/' + reDay + '/' + reYear),
    name: 'american',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  americanShort: {
    regex: RegExp('^' + reMonth + '/' + reDay),
    name: 'americanshort',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, month - 1, +day);
    }
  },

  gnuDateShortOrIso8601date2: {
    // iso8601date2 is complete subset of gnudateshort
    regex: RegExp('^' + reYear + '-' + reMonth + '-' + reDay),
    name: 'gnudateshort | iso8601date2',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  iso8601date4: {
    regex: RegExp('^' + reYear4withSign + '-' + reMonthlz + '-' + reDaylz),
    name: 'iso8601date4',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  gnuNoColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz, 'i'),
    name: 'gnunocolon',
    callback: function callback(match, hour, minute) {
      // this rule is a special case
      // if time was already set once by any preceding rule, it sets the captured value as year
      switch (this.times) {
        case 0:
          return this.time(+hour, +minute, 0, this.f);
        case 1:
          this.y = hour * 100 + +minute;
          this.times++;

          return true;
        default:
          return false;
      }
    }
  },

  gnuDateShorter: {
    regex: RegExp('^' + reYear4 + '-' + reMonth),
    name: 'gnudateshorter',
    callback: function callback(match, year, month) {
      return this.ymd(+year, month - 1, 1);
    }
  },

  pgTextReverse: {
    // note: allowed years are from 32-9999
    // years below 32 should be treated as days in datefull
    regex: RegExp('^' + '(\\d{3,4}|[4-9]\\d|3[2-9])-(' + reMonthAbbr + ')-' + reDaylz, 'i'),
    name: 'pgtextreverse',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateFull: {
    regex: RegExp('^' + reDay + '[ \\t.-]*' + reMonthText + '[ \\t.-]*' + reYear, 'i'),
    name: 'datefull',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoDay: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reYear4, 'i'),
    name: 'datenoday',
    callback: function callback(match, month, year) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  dateNoDayRev: {
    regex: RegExp('^' + reYear4 + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenodayrev',
    callback: function callback(match, year, month) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  pgTextShort: {
    regex: RegExp('^(' + reMonthAbbr + ')-' + reDaylz + '-' + reYear, 'i'),
    name: 'pgtextshort',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoYear: {
    regex: RegExp('^' + reDateNoYear, 'i'),
    name: 'datenoyear',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  dateNoYearRev: {
    regex: RegExp('^' + reDay + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenoyearrev',
    callback: function callback(match, day, month) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  isoWeekDay: {
    regex: RegExp('^' + reYear4 + '-?W' + reWeekOfYear + '(?:-?([0-7]))?'),
    name: 'isoweekday | isoweek',
    callback: function callback(match, year, week, day) {
      day = day ? +day : 1;

      if (!this.ymd(+year, 0, 1)) {
        return false;
      }

      // get day of week for Jan 1st
      var dayOfWeek = new Date(this.y, this.m, this.d).getDay();

      // and use the day to figure out the offset for day 1 of week 1
      dayOfWeek = 0 - (dayOfWeek > 4 ? dayOfWeek - 7 : dayOfWeek);

      this.rd += dayOfWeek + (week - 1) * 7 + day;
    }
  },

  relativeText: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reReltextunit + ')', 'i'),
    name: 'relativetext',
    callback: function callback(match, relValue, relUnit) {
      // todo: implement handling of 'this time-unit'
      // eslint-disable-next-line no-unused-vars
      var _lookupRelative = lookupRelative(relValue),
          amount = _lookupRelative.amount;

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
      }
    }
  },

  relative: {
    regex: RegExp('^([+-]*)[ \\t]*(\\d+)' + reSpaceOpt + '(' + reReltextunit + '|week)', 'i'),
    name: 'relative',
    callback: function callback(match, signs, relValue, relUnit) {
      var minuses = signs.replace(/[^-]/g, '').length;

      var amount = +relValue * Math.pow(-1, minuses);

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
      }
    }
  },

  dayText: {
    regex: RegExp('^(' + reDaytext + ')', 'i'),
    name: 'daytext',
    callback: function callback(match, dayText) {
      this.resetTime();
      this.weekday = lookupWeekday(dayText, 0);

      if (this.weekdayBehavior !== 2) {
        this.weekdayBehavior = 1;
      }
    }
  },

  relativeTextWeek: {
    regex: RegExp('^(' + reReltexttext + ')' + reSpace + 'week', 'i'),
    name: 'relativetextweek',
    callback: function callback(match, relText) {
      this.weekdayBehavior = 2;

      switch (relText.toLowerCase()) {
        case 'this':
          this.rd += 0;
          break;
        case 'next':
          this.rd += 7;
          break;
        case 'last':
        case 'previous':
          this.rd -= 7;
          break;
      }

      if (isNaN(this.weekday)) {
        this.weekday = 1;
      }
    }
  },

  monthFullOrMonthAbbr: {
    regex: RegExp('^(' + reMonthFull + '|' + reMonthAbbr + ')', 'i'),
    name: 'monthfull | monthabbr',
    callback: function callback(match, month) {
      return this.ymd(this.y, lookupMonth(month), this.d);
    }
  },

  tzCorrection: {
    regex: RegExp('^' + reTzCorrection, 'i'),
    name: 'tzcorrection',
    callback: function callback(tzCorrection) {
      return this.zone(processTzCorrection(tzCorrection));
    }
  },

  tzAbbr: {
    regex: RegExp('^' + reTzAbbr),
    name: 'tzabbr',
    callback: function callback(match, abbr) {
      var offset = tzAbbrOffsets[abbr.toLowerCase()];

      if (isNaN(offset)) {
        return false;
      }

      return this.zone(offset);
    }
  },

  ago: {
    regex: /^ago/i,
    name: 'ago',
    callback: function callback() {
      this.ry = -this.ry;
      this.rm = -this.rm;
      this.rd = -this.rd;
      this.rh = -this.rh;
      this.ri = -this.ri;
      this.rs = -this.rs;
      this.rf = -this.rf;
    }
  },

  year4: {
    regex: RegExp('^' + reYear4),
    name: 'year4',
    callback: function callback(match, year) {
      this.y = +year;
      return true;
    }
  },

  whitespace: {
    regex: /^[ .,\t]+/,
    name: 'whitespace'
    // do nothing
  },

  dateShortWithTimeLong: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond, 'i'),
    name: 'dateshortwithtimelong',
    callback: function callback(match, month, day, hour, minute, second) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  dateShortWithTimeLong12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimelong12',
    callback: function callback(match, month, day, hour, minute, second, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  dateShortWithTimeShort: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'dateshortwithtimeshort',
    callback: function callback(match, month, day, hour, minute) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, 0, 0);
    }
  },

  dateShortWithTimeShort12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimeshort12',
    callback: function callback(match, month, day, hour, minute, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  }
};

var resultProto = {
  // date
  y: NaN,
  m: NaN,
  d: NaN,
  // time
  h: NaN,
  i: NaN,
  s: NaN,
  f: NaN,

  // relative shifts
  ry: 0,
  rm: 0,
  rd: 0,
  rh: 0,
  ri: 0,
  rs: 0,
  rf: 0,

  // weekday related shifts
  weekday: NaN,
  weekdayBehavior: 0,

  // first or last day of month
  // 0 none, 1 first, -1 last
  firstOrLastDayOfMonth: 0,

  // timezone correction in minutes
  z: NaN,

  // counters
  dates: 0,
  times: 0,
  zones: 0,

  // helper functions
  ymd: function ymd(y, m, d) {
    if (this.dates > 0) {
      return false;
    }

    this.dates++;
    this.y = y;
    this.m = m;
    this.d = d;
    return true;
  },
  time: function time(h, i, s, f) {
    if (this.times > 0) {
      return false;
    }

    this.times++;
    this.h = h;
    this.i = i;
    this.s = s;
    this.f = f;

    return true;
  },
  resetTime: function resetTime() {
    this.h = 0;
    this.i = 0;
    this.s = 0;
    this.f = 0;
    this.times = 0;

    return true;
  },
  zone: function zone(minutes) {
    if (this.zones <= 1) {
      this.zones++;
      this.z = minutes;
      return true;
    }

    return false;
  },
  toDate: function toDate(relativeTo) {
    if (this.dates && !this.times) {
      this.h = this.i = this.s = this.f = 0;
    }

    // fill holes
    if (isNaN(this.y)) {
      this.y = relativeTo.getFullYear();
    }

    if (isNaN(this.m)) {
      this.m = relativeTo.getMonth();
    }

    if (isNaN(this.d)) {
      this.d = relativeTo.getDate();
    }

    if (isNaN(this.h)) {
      this.h = relativeTo.getHours();
    }

    if (isNaN(this.i)) {
      this.i = relativeTo.getMinutes();
    }

    if (isNaN(this.s)) {
      this.s = relativeTo.getSeconds();
    }

    if (isNaN(this.f)) {
      this.f = relativeTo.getMilliseconds();
    }

    // adjust special early
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        this.d = 1;
        break;
      case -1:
        this.d = 0;
        this.m += 1;
        break;
    }

    if (!isNaN(this.weekday)) {
      var date = new Date(relativeTo.getTime());
      date.setFullYear(this.y, this.m, this.d);
      date.setHours(this.h, this.i, this.s, this.f);

      var dow = date.getDay();

      if (this.weekdayBehavior === 2) {
        // To make "this week" work, where the current day of week is a "sunday"
        if (dow === 0 && this.weekday !== 0) {
          this.weekday = -6;
        }

        // To make "sunday this week" work, where the current day of week is not a "sunday"
        if (this.weekday === 0 && dow !== 0) {
          this.weekday = 7;
        }

        this.d -= dow;
        this.d += this.weekday;
      } else {
        var diff = this.weekday - dow;

        // some PHP magic
        if (this.rd < 0 && diff < 0 || this.rd >= 0 && diff <= -this.weekdayBehavior) {
          diff += 7;
        }

        if (this.weekday >= 0) {
          this.d += diff;
        } else {
          this.d -= 7 - (Math.abs(this.weekday) - dow);
        }

        this.weekday = NaN;
      }
    }

    // adjust relative
    this.y += this.ry;
    this.m += this.rm;
    this.d += this.rd;

    this.h += this.rh;
    this.i += this.ri;
    this.s += this.rs;
    this.f += this.rf;

    this.ry = this.rm = this.rd = 0;
    this.rh = this.ri = this.rs = this.rf = 0;

    var result = new Date(relativeTo.getTime());
    // since Date constructor treats years <= 99 as 1900+
    // it can't be used, thus this weird way
    result.setFullYear(this.y, this.m, this.d);
    result.setHours(this.h, this.i, this.s, this.f);

    // note: this is done twice in PHP
    // early when processing special relatives
    // and late
    // todo: check if the logic can be reduced
    // to just one time action
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        result.setDate(1);
        break;
      case -1:
        result.setMonth(result.getMonth() + 1, 0);
        break;
    }

    // adjust timezone
    if (!isNaN(this.z) && result.getTimezoneOffset() !== this.z) {
      result.setUTCFullYear(result.getFullYear(), result.getMonth(), result.getDate());

      result.setUTCHours(result.getHours(), result.getMinutes(), result.getSeconds() - this.z, result.getMilliseconds());
    }

    return result;
  }
};

var strtotime = function strtotime(str, now) {
  //       discuss at: https://locutus.io/php/strtotime/
  //      original by: Caio Ariede (https://caioariede.com)
  //      improved by: Kevin van Zonneveld (https://kvz.io)
  //      improved by: Caio Ariede (https://caioariede.com)
  //      improved by: A. Matías Quezada (https://amatiasq.com)
  //      improved by: preuter
  //      improved by: Brett Zamir (https://brett-zamir.me)
  //      improved by: Mirko Faber
  //         input by: David
  //      bugfixed by: Wagner B. Soares
  //      bugfixed by: Artur Tchernychev
  //      bugfixed by: Stephan Bösch-Plepelits (https://github.com/plepe)
  // reimplemented by: Rafał Kukawski
  //           note 1: Examples all have a fixed timestamp to prevent
  //           note 1: tests to fail because of variable time(zones)
  //        example 1: strtotime('+1 day', 1129633200)
  //        returns 1: 1129719600
  //        example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
  //        returns 2: 1130425202
  //        example 3: strtotime('last month', 1129633200)
  //        returns 3: 1127041200
  //        example 4: strtotime('2009-05-04 08:30:00+00')
  //        returns 4: 1241425800
  //        example 5: strtotime('2009-05-04 08:30:00+02:00')
  //        returns 5: 1241418600
  //        example 6: strtotime('2009-05-04 08:30:00 YWT')
  //        returns 6: 1241454600

  if (now == null) {
    now = Math.floor(Date.now() / 1000);
  }

  // the rule order is important
  // if multiple rules match, the longest match wins
  // if multiple rules match the same string, the first match wins
  var rules = [formats.yesterday, formats.now, formats.noon, formats.midnightOrToday, formats.tomorrow, formats.timestamp, formats.firstOrLastDay, formats.backOrFrontOf,
  // formats.weekdayOf, // not yet implemented
  formats.timeTiny12, formats.timeShort12, formats.timeLong12, formats.mssqltime, formats.timeShort24, formats.timeLong24, formats.iso8601long, formats.gnuNoColon, formats.iso8601noColon, formats.americanShort, formats.american, formats.iso8601date4, formats.iso8601dateSlash, formats.dateSlash, formats.gnuDateShortOrIso8601date2, formats.gnuDateShorter, formats.dateFull, formats.pointedDate4, formats.pointedDate2, formats.dateNoDay, formats.dateNoDayRev, formats.dateTextual, formats.dateNoYear, formats.dateNoYearRev, formats.dateNoColon, formats.xmlRpc, formats.xmlRpcNoColon, formats.soap, formats.wddx, formats.exif, formats.pgydotd, formats.isoWeekDay, formats.pgTextShort, formats.pgTextReverse, formats.clf, formats.year4, formats.ago, formats.dayText, formats.relativeTextWeek, formats.relativeText, formats.monthFullOrMonthAbbr, formats.tzCorrection, formats.tzAbbr, formats.dateShortWithTimeShort12, formats.dateShortWithTimeLong12, formats.dateShortWithTimeShort, formats.dateShortWithTimeLong, formats.relative, formats.whitespace];

  var result = Object.create(resultProto);

  while (str.length) {
    var longestMatch = null;
    var finalRule = null;

    for (var i = 0, l = rules.length; i < l; i++) {
      var format = rules[i];

      var match = str.match(format.regex);

      if (match) {
        if (!longestMatch || match[0].length > longestMatch[0].length) {
          longestMatch = match;
          finalRule = format;
        }
      }
    }

    if (!finalRule || finalRule.callback && finalRule.callback.apply(result, longestMatch) === false) {
      return false;
    }

    str = str.substr(longestMatch[0].length);
    finalRule = null;
    longestMatch = null;
  }

  return Math.floor(result.toDate(new Date(now * 1000)) / 1000);
};

class date extends Validator {
  check(value) {
    return !!strtotime(value);
  }
}

class date_equals extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      date: this.date
    };
  }
  get date() {
    return this.attributes[0];
  }
  check(value) {
    return value === this.date;
  }
}

class date_format extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      format: this.format
    };
  }
  get format() {
    return this.attributes[0];
  }
  check(value) {
    return value && moment(value, this.format).format(this.format) === value;
  }
}

class different extends Validator {
  get otherPath() {
    return this.attributes[0];
  }
  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path));
  }
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName
    };
  }
  init() {
    this.watchOther();
  }
  check(value) {
    if (!this.filled(value) && !this.filled(this.other$.value)) {
      return true;
    }
    return value != this.other$.value;
  }
}

class digits extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      digits: this.digits
    };
  }
  get digits() {
    return this.attributes[0];
  }
  check(value) {
    return /^\d+$/.test(value) && value.toString().length == this.digits;
  }
}

class digits_between extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min,
      max: this.max
    };
  }
  get min() {
    return this.attributes[0];
  }
  get max() {
    return this.attributes[1];
  }
  check(value) {
    var length = value.toString().length;
    return /^\d+$/.test(value) && length >= this.min && length <= this.max;
  }
}

class dimensions extends Validator {
  get isAsync() {
    return true;
  }
  readImage(inputFile) {
    return _asyncToGenerator(function* () {
      var reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onerror = () => {
          temporaryFileReader.abort();
          reject(new DOMException("File cannot be parsed."));
        };
        reader.onloadend = event => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(inputFile);
      });
    })();
  }
  loadImage(value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var source = yield _this.readImage(value);
      var image = new Image();
      return new Promise((resolve, reject) => {
        image.onerror = () => {
          reject(new DOMException("Image could not be loaded."));
        };
        image.onload = event => {
          resolve(event.target);
        };
        image.src = source;
      });
    })();
  }
  hasAttribute(attribute) {
    return Object.keys(this.attributes).map(a => a.toLowerCase()).indexOf(attribute) !== -1;
  }
  check(value) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_this2.isFile && !value) {
        return true;
      }
      if (!_this2.isFile || !(value instanceof File)) {
        return false;
      }
      var image = yield _this2.loadImage(value);
      if (_this2.hasAttribute('min_width')) {
        if (image.width < _this2.attributes['min_width']) {
          return false;
        }
      }
      if (_this2.hasAttribute('max_width')) {
        if (image.width > _this2.attributes['max_width']) {
          return false;
        }
      }
      if (_this2.hasAttribute('min_height')) {
        if (image.height < _this2.attributes['min_height']) {
          return false;
        }
      }
      if (_this2.hasAttribute('max_height')) {
        if (image.height > _this2.attributes['max_height']) {
          return false;
        }
      }
      if (_this2.hasAttribute('width')) {
        if (image.width != _this2.attributes['width']) {
          return false;
        }
      }
      if (_this2.hasAttribute('height')) {
        if (image.height != _this2.attributes['height']) {
          return false;
        }
      }
      if (_this2.hasAttribute('ratio')) {
        var ratio = _this2.attributes['ratio'];
        var precision = 1 / (Math.min(image.width, image.height) + 1);
        var numerator = /\//.test(ratio) ? ratio.split('/')[0] : ratio;
        var denominator = /\//.test(ratio) ? ratio.split('/')[1] : 1;
        if (Math.abs(numerator / denominator - image.width / image.height) > precision) {
          return false;
        }
      }
      return true;
    })();
  }
}

function pregQuote (str, delimiter) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/preg_quote/
  // original by: booeyOH
  // improved by: Ates Goral (http://magnetiq.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  //   example 1: preg_quote("$40")
  //   returns 1: '\\$40'
  //   example 2: preg_quote("*RRRING* Hello?")
  //   returns 2: '\\*RRRING\\* Hello\\?'
  //   example 3: preg_quote("\\.+*?[^]$(){}=!<>|:")
  //   returns 3: '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'

  return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
}

var flattenKeys = function flattenKeys(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return !_.isObject(obj) ? {
    [path.join('.')]: obj
  } : _.reduce(obj, (cum, next, key) => _.merge(cum, flattenKeys(next, [...path, key])), {});
};

class distinct extends Validator {
  check(value) {
    var attribute = this.element$.path;
    var attributeName = attribute.replace(/\d+(?!\d+)/, '*');
    var rootVariable = attribute.match(/^[\w-]+/)[0];
    var attributeData = {
      [rootVariable]: this.form$.data[rootVariable]
    };
    var pattern = pregQuote(attributeName, '#').replace('\\*', '[^.]+');
    var data = {};
    _.each(flattenKeys(attributeData), (v, k) => {
      if (k != attribute && k.match('^' + pattern + '$') !== null) {
        data[k] = v;
      }
    });
    return !(_.values(data).indexOf(value) !== -1);
  }
}

class email extends Validator {
  check(value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }
}

class exists extends Validator {
  get isAsync() {
    return true;
  }
  get requestParams() {
    var params = {};
    _.each(this.attributes, (param, key) => {
      var requestParam = key;
      if (!isNaN(key)) {
        requestParam = param;
      }
      if (requestParam == 'debounce') {
        return;
      }
      var el = this.form$.el$(requestParam);

      // set the element value or the param name itself
      params[_.keys(params).length] = el && key != 0 ? el.value : requestParam;
    });
    return params;
  }
  check(value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var name = _this.element$.name;
      var endpoint = _this.form$.$vueform.config.endpoints.exists;
      var method = typeof endpoint !== 'function' ? endpoint.method : null;
      var res;
      if (typeof endpoint === 'function') {
        res = yield endpoint(value, name, _this.requestParams, _this.element$, _this.form$);
      } else {
        res = yield _this.form$.$vueform.services.axios.request({
          url: endpoint.url,
          method,
          [method.toLowerCase() === 'get' ? 'params' : 'data']: {
            params: _this.requestParams,
            [name]: value,
            vueformFieldName: name,
            value,
            name
          }
        });
      }
      return res.data;
    })();
  }
}

class file extends Validator {
  check(value) {
    return (!value || value instanceof File) && this.isFile;
  }
}

class filled extends Validator {
  check(value) {
    return this.filled(value);
  }
}

class gt extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      value: this.other$.value != null ? this.size(this.other$.value) : 0
    };
  }
  get otherPath() {
    return this.attributes[0];
  }
  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path));
  }
  init() {
    this.watchOther();
  }
  check(value) {
    var otherValue = this.other$.value;
    return this.compare(value, otherValue);
  }
  compare(value, otherValue) {
    var otherSize = this.size(otherValue);
    return otherSize == 0 || this.size(value) > otherSize;
  }
}

class gte extends gt {
  compare(value, otherValue) {
    var otherSize = this.size(otherValue);
    return otherSize == 0 || this.size(value) >= otherSize;
  }
}

class image extends Validator {
  check(value) {
    if (this.isFile && !value) {
      return true;
    }
    if (!this.isFile || !(value instanceof File) || !value.name) {
      return false;
    }
    var extension = value.name.split('.').pop();
    return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].indexOf(extension) !== -1;
  }
}

class in_ extends Validator {
  check(value) {
    return _.values(this.attributes).indexOf(value) !== -1;
  }
}

class in_array extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName
    };
  }
  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path));
  }
  get otherPath() {
    var matches = this.attributes[0].match(/.*(?=\.\*)/);
    if (matches === null) {
      throw new Error('in_array rule\'s other attribute should end with .*');
    }
    return matches[0];
  }
  init() {
    this.watchOther();
  }
  check(value) {
    var data = this.other$.value;
    if (!data) {
      return false;
    }
    return data.indexOf(value) !== -1;
  }
}

class integer extends Validator {
  check(value) {
    var normalized = normalize(String(value).trim());
    return normalized === parseInt(normalized, 10);
  }
}

var checker$1 = function checker(value) {
  var re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
  return re.test(value);
};
class ipv4 extends Validator {
  check(value) {
    return checker$1(value);
  }
}

var checker = function checker(value) {
  var re = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
  return re.test(value);
};
class ipv6 extends Validator {
  check(value) {
    return checker(value);
  }
}

class ip extends Validator {
  check(value) {
    return checker$1(value) || checker(value);
  }
}

function isJson (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

class json extends Validator {
  check(value) {
    return isJson(value);
  }
}

class lt extends gt {
  compare(value, otherValue) {
    var size = this.size(value);
    var otherSize = this.size(otherValue);
    return otherSize == 0 && size == 0 || this.size(value) < otherSize;
  }
}

class lte extends gt {
  compare(value, otherValue) {
    var size = this.size(value);
    var otherSize = this.size(otherValue);
    return otherSize == 0 && size == 0 || this.size(value) <= otherSize;
  }
}

class max extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      max: this.max
    };
  }
  get max() {
    return this.attributes[0];
  }
  check(value) {
    if (!value) {
      return true;
    }
    return this.size(value) <= this.max;
  }
}

class mimes extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      values: this.accepted.join(', ')
    };
  }
  get accepted() {
    return Object.values(this.attributes).map(a => a.toLowerCase());
  }
  check(value) {
    if (this.isFile && !value) {
      return true;
    }
    if (!this.isFile || !(value instanceof File) || !value.name) {
      return false;
    }
    var extension = value.name.split('.').pop();
    return this.accepted.indexOf(extension.toLowerCase()) !== -1;
  }
}

class mimetypes extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      values: this.accepted.join(', ')
    };
  }
  get accepted() {
    return Object.values(this.attributes).map(a => a.toLowerCase());
  }
  check(value) {
    if (this.isFile && !value) {
      return true;
    }
    if (!this.isFile || !(value instanceof File) || !value.type) {
      return false;
    }
    return this.accepted.indexOf(value.type.toLowerCase()) !== -1;
  }
}

class min extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min
    };
  }
  get min() {
    return this.attributes[0];
  }
  check(value) {
    if (!value) {
      return true;
    }
    return this.size(value) >= this.min;
  }
}

class not_in extends Validator {
  check(value) {
    return _.values(this.attributes).indexOf(value) === -1;
  }
}

class not_regex extends Validator {
  check(value) {
    var regex = new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g, ''));
    return !regex.test(value);
  }
}

class nullable extends Validator {
  check(value) {
    return true;
  }
}

class numeric extends Validator {
  check(value) {
    return !isNaN(parseFloat(value)) && isFinite(value) && !/\s/.test(String(value)) && !Boolean(String(value).match(/^0x[0-9a-f]+$/i));
  }
}

class regex extends Validator {
  check(value) {
    var regex = new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g, ''));
    return regex.test(value);
  }
}

class required extends Validator {
  check(value) {
    return this.filled(value);
  }
}

class same extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName
    };
  }
  get otherPath() {
    return this.attributes[0];
  }
  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path));
  }
  init() {
    this.watchOther();
  }
  check(value) {
    if (!this.filled(value) && !this.filled(this.other$.value)) {
      return true;
    }
    return value == this.other$.value;
  }
}

class size extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      size: this.size_
    };
  }
  get size_() {
    return this.attributes[0];
  }
  check(value) {
    if (!value) {
      return true;
    }
    return this.size(value) == this.size_;
  }
}

class string extends Validator {
  check(value) {
    return _.isString(value);
  }
}

class timezone extends Validator {
  check(value) {
    try {
      Intl.DateTimeFormat(undefined, {
        timeZone: value
      });
      return true;
    } catch (ex) {
      return false;
    }
  }
}

class unique extends Validator {
  get isAsync() {
    return true;
  }
  get requestParams() {
    var params = {};
    _.each(this.attributes, (param, key) => {
      var requestParam = key;
      if (!isNaN(key)) {
        requestParam = param;
      }
      if (requestParam == 'debounce') {
        return;
      }
      var el = this.form$.el$(requestParam);

      // set the element value or the param name itself
      params[_.keys(params).length] = el && key != 0 ? el.value : requestParam;
    });
    return params;
  }
  check(value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var name = _this.element$.name;
      var endpoint = _this.form$.$vueform.config.endpoints.unique;
      var method = typeof endpoint !== 'function' ? endpoint.method : null;
      var res;
      if (typeof endpoint === 'function') {
        res = yield endpoint(value, name, _this.requestParams, _this.element$, _this.form$);
      } else {
        res = yield _this.form$.$vueform.services.axios.request({
          url: endpoint.url,
          method,
          [method.toLowerCase() === 'get' ? 'params' : 'data']: {
            params: _this.requestParams,
            name,
            value
          }
        });
      }
      return res.data;
    })();
  }
}

class url extends Validator {
  check(value) {
    // https://gist.github.com/dperini/729294
    var regex = new RegExp("^" +
    // protocol identifier (optional)
    // short syntax // still required
    "(?:(?:(?:https?|ftp):)?\\/\\/)" +
    // user:pass BasicAuth (optional)
    "(?:\\S+(?::\\S*)?@)?" + "(?:" +
    // IP address exclusion
    // private & local networks
    "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
    // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broacast addresses
    // (first & last IP address of each class)
    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" +
    // host & domain names, may end with dot
    // can be replaced by a shortest alternative
    // (?![-_])(?:[-\\w\\u00a1-\\uffff]{0,63}[^-_]\\.)+
    "(?:" + "(?:" + "[a-z0-9\\u00a1-\\uffff]" + "[a-z0-9\\u00a1-\\uffff_-]{0,62}" + ")?" + "[a-z0-9\\u00a1-\\uffff]\\." + ")+" +
    // TLD identifier name, may end with dot
    "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" + ")" +
    // port number (optional)
    "(?::\\d{2,5})?" +
    // resource path (optional)
    "(?:[/?#]\\S*)?" + "$", "i");
    return regex.test(value);
  }
}

class uuid extends Validator {
  check(value) {
    var regex = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i;
    return regex.test(value);
  }
}

var rules = {
  accepted,
  active_url,
  after,
  after_or_equal,
  alpha,
  alpha_dash,
  alpha_num,
  array,
  before,
  before_or_equal,
  between,
  boolean,
  confirmed,
  date,
  date_equals,
  date_format,
  different,
  digits,
  digits_between,
  dimensions,
  distinct,
  email,
  exists,
  file,
  filled,
  gt,
  gte,
  image,
  in: in_,
  in_array,
  integer,
  ip,
  ipv4,
  ipv6,
  json,
  lt,
  lte,
  max,
  mimes,
  mimetypes,
  min,
  not_in,
  not_regex,
  nullable,
  numeric,
  regex,
  required,
  same,
  size,
  string,
  timezone,
  unique,
  url,
  uuid
};

var validation = {
  factory: Factory,
  rules: rules
};

class messageBag {
  constructor(baseErrors) {
    this.baseErrors = baseErrors;
    this.prepends = {
      errors: [],
      messages: []
    };
    this.appends = {
      errors: [],
      messages: []
    };
  }
  get errors() {
    return _.concat(this.prepends.errors, this.baseErrors, this.appends.errors);
  }
  get messages() {
    return _.concat(this.prepends.messages, this.appends.messages);
  }

  /**
   * The first error
   * 
   * @type {string}
   */
  get error() {
    return _.head(this.errors);
  }

  /**
   * The first message
   * 
   * @type {string}
   */
  get message() {
    return _.head(this.messages);
  }
  prepend(msg, type) {
    if (type === undefined) {
      type = 'error';
    }
    this.prepends[type == 'error' ? 'errors' : 'messages'].unshift(msg);
  }
  append(msg, type) {
    if (type === undefined) {
      type = 'error';
    }
    this.appends[type == 'error' ? 'errors' : 'messages'].push(msg);
  }
  remove(msg, type) {
    if (type === undefined) {
      type = 'any';
    }
    if (['any', 'error'].indexOf(type) !== -1) {
      _.each(this.prepends.errors, (error, index) => {
        if (error == msg) {
          this.rm('prepends', 'errors', index);
        }
      });
      _.each(this.appends.errors, (error, index) => {
        if (error == msg) {
          this.rm('appends', 'errors', index);
        }
      });
    }
    if (['any', 'message'].indexOf(type) !== -1) {
      _.each(this.prepends.messages, (error, index) => {
        if (error == msg) {
          this.rm('prepends', 'messages', index);
        }
      });
      _.each(this.appends.messages, (error, index) => {
        if (error == msg) {
          this.rm('appends', 'messages', index);
        }
      });
    }
  }
  rm(group, type, index) {
    this[group][type].splice(index, 1);
  }
  clear(type) {
    if (type === undefined) {
      type = 'all';
    }
    if (type == 'all') {
      this.prepends = {
        errors: [],
        messages: []
      };
      this.appends = {
        errors: [],
        messages: []
      };
    } else {
      this.prepends[type] = [];
      this.appends[type] = [];
    }
  }
  clearPrepended(type) {
    if (type === undefined) {
      type = 'all';
    }
    if (type == 'all') {
      this.prepends = {
        errors: [],
        messages: []
      };
    } else {
      this.prepends[type] = [];
    }
  }
  clearAppended(type) {
    if (type === undefined) {
      type = 'all';
    }
    if (type == 'all') {
      this.appends = {
        errors: [],
        messages: []
      };
    } else {
      this.appends[type] = [];
    }
  }
}

var autosize$1 = {exports: {}};

/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/

(function (module, exports) {
	(function (global, factory) {
		{
			factory(module, exports);
		}
	})(commonjsGlobal, function (module, exports) {

		var map = typeof Map === "function" ? new Map() : function () {
			var keys = [];
			var values = [];

			return {
				has: function has(key) {
					return keys.indexOf(key) > -1;
				},
				get: function get(key) {
					return values[keys.indexOf(key)];
				},
				set: function set(key, value) {
					if (keys.indexOf(key) === -1) {
						keys.push(key);
						values.push(value);
					}
				},
				delete: function _delete(key) {
					var index = keys.indexOf(key);
					if (index > -1) {
						keys.splice(index, 1);
						values.splice(index, 1);
					}
				}
			};
		}();

		var createEvent = function createEvent(name) {
			return new Event(name, { bubbles: true });
		};
		try {
			new Event('test');
		} catch (e) {
			// IE does not support `new Event()`
			createEvent = function createEvent(name) {
				var evt = document.createEvent('Event');
				evt.initEvent(name, true, false);
				return evt;
			};
		}

		function assign(ta) {
			if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

			var heightOffset = null;
			var clientWidth = null;
			var cachedHeight = null;

			function init() {
				var style = window.getComputedStyle(ta, null);

				if (style.resize === 'vertical') {
					ta.style.resize = 'none';
				} else if (style.resize === 'both') {
					ta.style.resize = 'horizontal';
				}

				if (style.boxSizing === 'content-box') {
					heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
				} else {
					heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
				}
				// Fix when a textarea is not on document body and heightOffset is Not a Number
				if (isNaN(heightOffset)) {
					heightOffset = 0;
				}

				update();
			}

			function changeOverflow(value) {
				{
					// Chrome/Safari-specific fix:
					// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
					// made available by removing the scrollbar. The following forces the necessary text reflow.
					var width = ta.style.width;
					ta.style.width = '0px';
					// Force reflow:
					/* jshint ignore:start */
					ta.offsetWidth;
					/* jshint ignore:end */
					ta.style.width = width;
				}

				ta.style.overflowY = value;
			}

			function getParentOverflows(el) {
				var arr = [];

				while (el && el.parentNode && el.parentNode instanceof Element) {
					if (el.parentNode.scrollTop) {
						arr.push({
							node: el.parentNode,
							scrollTop: el.parentNode.scrollTop
						});
					}
					el = el.parentNode;
				}

				return arr;
			}

			function resize() {
				if (ta.scrollHeight === 0) {
					// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
					return;
				}

				var overflows = getParentOverflows(ta);
				var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

				ta.style.height = '';
				ta.style.height = ta.scrollHeight + heightOffset + 'px';

				// used to check if an update is actually necessary on window.resize
				clientWidth = ta.clientWidth;

				// prevents scroll-position jumping
				overflows.forEach(function (el) {
					el.node.scrollTop = el.scrollTop;
				});

				if (docTop) {
					document.documentElement.scrollTop = docTop;
				}
			}

			function update() {
				resize();

				var styleHeight = Math.round(parseFloat(ta.style.height));
				var computed = window.getComputedStyle(ta, null);

				// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
				var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

				// The actual height not matching the style height (set via the resize method) indicates that 
				// the max-height has been exceeded, in which case the overflow should be allowed.
				if (actualHeight < styleHeight) {
					if (computed.overflowY === 'hidden') {
						changeOverflow('scroll');
						resize();
						actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
					}
				} else {
					// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
					if (computed.overflowY !== 'hidden') {
						changeOverflow('hidden');
						resize();
						actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
					}
				}

				if (cachedHeight !== actualHeight) {
					cachedHeight = actualHeight;
					var evt = createEvent('autosize:resized');
					try {
						ta.dispatchEvent(evt);
					} catch (err) {
						// Firefox will throw an error on dispatchEvent for a detached element
						// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
					}
				}
			}

			var pageResize = function pageResize() {
				if (ta.clientWidth !== clientWidth) {
					update();
				}
			};

			var destroy = function (style) {
				window.removeEventListener('resize', pageResize, false);
				ta.removeEventListener('input', update, false);
				ta.removeEventListener('keyup', update, false);
				ta.removeEventListener('autosize:destroy', destroy, false);
				ta.removeEventListener('autosize:update', update, false);

				Object.keys(style).forEach(function (key) {
					ta.style[key] = style[key];
				});

				map.delete(ta);
			}.bind(ta, {
				height: ta.style.height,
				resize: ta.style.resize,
				overflowY: ta.style.overflowY,
				overflowX: ta.style.overflowX,
				wordWrap: ta.style.wordWrap
			});

			ta.addEventListener('autosize:destroy', destroy, false);

			// IE9 does not fire onpropertychange or oninput for deletions,
			// so binding to onkeyup to catch most of those events.
			// There is no way that I know of to detect something like 'cut' in IE9.
			if ('onpropertychange' in ta && 'oninput' in ta) {
				ta.addEventListener('keyup', update, false);
			}

			window.addEventListener('resize', pageResize, false);
			ta.addEventListener('input', update, false);
			ta.addEventListener('autosize:update', update, false);
			ta.style.overflowX = 'hidden';
			ta.style.wordWrap = 'break-word';

			map.set(ta, {
				destroy: destroy,
				update: update
			});

			init();
		}

		function destroy(ta) {
			var methods = map.get(ta);
			if (methods) {
				methods.destroy();
			}
		}

		function update(ta) {
			var methods = map.get(ta);
			if (methods) {
				methods.update();
			}
		}

		var autosize = null;

		// Do nothing in Node.js environment and IE8 (or lower)
		if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
			autosize = function autosize(el) {
				return el;
			};
			autosize.destroy = function (el) {
				return el;
			};
			autosize.update = function (el) {
				return el;
			};
		} else {
			autosize = function autosize(el, options) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], function (x) {
						return assign(x);
					});
				}
				return el;
			};
			autosize.destroy = function (el) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], destroy);
				}
				return el;
			};
			autosize.update = function (el) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], update);
				}
				return el;
			};
		}

		exports.default = autosize;
		module.exports = exports['default'];
	});
} (autosize$1, autosize$1.exports));

var autosize = autosize$1.exports;

class google {
  constructor() {
    this.autocomplete = null;
    this.autocompleteListener = null;
    this.options = {};
  }
  init(container, onChange, options) {
    if (window.google === undefined || window.google.maps === undefined || window.google.maps.places === undefined || window.google.maps.places.Autocomplete === undefined) ;
    this.options = options;
    this.autocomplete = new window.google.maps.places.Autocomplete(container, options);
    this.autocompleteListener = this.autocomplete.addListener('place_changed', () => {
      var place = this.autocomplete.getPlace();
      onChange(this.formatValue(place), place);
    });
  }
  destroy() {
    window.google.maps.event.removeListener(this.autocompleteListener);
    window.google.maps.event.clearInstanceListeners(this.autocomplete);
    var pac = document.querySelector('.pac-container');
    if (pac) {
      pac.remove();
    }
  }
  formatValue(value) {
    if (!_.isPlainObject(value)) {
      return value;
    }
    var addressComponents = value.address_components;
    var street = this.addressComponent(addressComponents, 'street');
    var streetNumber = this.addressComponent(addressComponents, 'street_number');
    var address = null;
    if (street !== null) {
      address = street;
    }
    if (streetNumber !== null) {
      address += (street !== null ? ' ' : '') + streetNumber;
    }
    return {
      country: this.addressComponent(addressComponents, 'country'),
      country_code: this.addressComponent(addressComponents, 'country_code'),
      state: this.addressComponent(addressComponents, 'state'),
      state_code: this.addressComponent(addressComponents, 'state_code'),
      city: this.addressComponent(addressComponents, 'city'),
      zip: this.addressComponent(addressComponents, 'zip'),
      address: address,
      formatted_address: value.formatted_address || null,
      lat: value.geometry.location.lat() || null,
      lng: value.geometry.location.lng() || null
    };
  }
  addressComponent(addressComponents, type) {
    var typeMap = {
      country: {
        field: 'country',
        type: 'long_name'
      },
      country_code: {
        field: 'country',
        type: 'short_name'
      },
      state: {
        field: 'administrative_area_level_1',
        type: 'long_name'
      },
      state_code: {
        field: 'administrative_area_level_1',
        type: 'short_name'
      },
      city: {
        field: 'locality',
        type: 'long_name'
      },
      zip: {
        field: 'postal_code',
        type: 'long_name'
      },
      street: {
        field: 'route',
        type: 'long_name'
      },
      street_number: {
        field: 'street_number',
        type: 'long_name'
      }
    };
    var addressComponent = null;
    _.each(addressComponents, component => {
      if (component.types.indexOf(typeMap[type].field) !== -1) {
        if (['state', 'state_code'].indexOf(type) !== -1 && this.addressComponent(addressComponents, 'country_code') != 'US') {
          return;
        }
        addressComponent = component[typeMap[type].type] || null;
      }
    });
    return addressComponent;
  }
}

class algolia {
  constructor() {
    this.places = null;
    this.options = {};
  }
  init(container, onChange, options) {
    if (window.places === undefined) {
      throw new Error('Algolia Places API missing. Please include script in your project from https://community.algolia.com/places/documentation.html#cdn-script or install via npm and set to `window.places`.');
    }
    this.options = options;
    this.places = window.places(Object.assign({}, {
      container
    }, options));
    this.places.on('change', e => {
      onChange(this.formatValue(e.suggestion), e.suggestion);
    });
  }
  destroy() {
    this.places.destroy();
  }
  formatValue(value) {
    if (!_.isPlainObject(value)) {
      return value;
    }
    return {
      country: value.country,
      country_code: value.countryCode ? value.countryCode.toUpperCase() : null,
      state: value.countryCode == 'us' ? value.administrative : null,
      state_code: value.countryCode == 'us' ? this.stateCode(value.administrative.toLowerCase()) : null,
      city: value.city,
      zip: value.postcode,
      address: value.name,
      formatted_address: value.value,
      lat: value.latlng.lat,
      lng: value.latlng.lng
    };
  }
  stateCode(name) {
    var states = {
      AL: 'alabama',
      AK: 'alaska',
      AZ: 'arizona',
      AR: 'arkansas',
      CA: 'california',
      CO: 'colorado',
      CT: 'connecticut',
      DE: 'delaware',
      DC: 'district of columbia',
      FL: 'florida',
      GA: 'georgia',
      HI: 'hawaii',
      ID: 'idaho',
      IL: 'illinois',
      IN: 'indiana',
      IA: 'iowa',
      KS: 'kansas',
      KY: 'kentucky',
      LA: 'louisiana',
      ME: 'maine',
      MD: 'maryland',
      MA: 'massachusetts',
      MI: 'michigan',
      MN: 'minnesota',
      MS: 'mississippi',
      MO: 'missouri',
      MT: 'montana',
      NE: 'nebraska',
      NV: 'nevada',
      NH: 'new hampshire',
      NJ: 'new Jersey',
      NM: 'new Mexico',
      NY: 'new york',
      NC: 'north carolina',
      ND: 'north dakota',
      OH: 'ohio',
      OK: 'oklahoma',
      OR: 'oregon',
      PA: 'pennsylvania',
      RI: 'rhode Island',
      SC: 'south carolina',
      SD: 'south dakota',
      TN: 'tennessee',
      TX: 'texas',
      UT: 'utah',
      VT: 'vermont',
      VA: 'virginia',
      WA: 'washington',
      WV: 'west virginia',
      WI: 'wisconsin',
      WY: 'wyoming'
    };
    if (_.values(states).indexOf(name) === -1) {
      return null;
    }
    return _.keys(states)[_.values(states).indexOf(name)];
  }
}

var location = {
  google,
  algolia
};

// condition - condition information [otherPath, operator, expectedValue]
// elementPath - current
var check = (condition, elementPath, form$, el$) => {
  var checkFunction = () => {
    return condition(form$, el$);
  };
  var checkArray = condition => {
    var {
      conditionPath,
      operator,
      expected
    } = details(condition);

    // other
    var element$ = form$.el$(conditionPath);
    var hasCircularCondition = false;

    // other && currentPath
    if (element$ && elementPath) {
      _.each(element$.conditions, condition => {
        if (!Array.isArray(condition)) {
          return;
        }
        if (condition[0] == elementPath) {
          hasCircularCondition = true;
        }
      });
    }
    if (!element$ || !hasCircularCondition && !element$.available) {
      return false;
    }
    return compareValues(element$.value, expected, operator);
  };
  var details = condition => {
    return {
      conditionPath: elementPath ? replaceWildcards(condition[0], elementPath) : condition[0],
      operator: condition.length == 3 || ['empty', 'not_empty', 'today'].indexOf(condition[1]) !== -1 ? condition[1] : '==',
      expected: condition.length == 3 ? condition[2] : ['empty', 'not_empty', 'today'].indexOf(condition[1]) === -1 ? condition[1] : true
    };
  };
  var compareValues = (actual, expected, operator) => {
    return compare(actual, operator, expected, el$);
  };
  if (typeof condition == 'function') {
    return checkFunction();
  } else if (_.isArray(condition) && _.isArray(condition[0])) {
    return condition.reduce((prev, curr) => {
      return prev ? prev : checkArray(curr);
    }, false);
  } else if (_.isArray(condition)) {
    return checkArray(condition);
  }
  throw new Error('Condition must be a function or an array');
};
var condition = {
  check
};

class i18n {
  constructor(options) {
    this.locales = options.locales;
    this.locale = options.locale;
    this.fallbackLocale = options.fallbackLocale;
  }
  $t(expr) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var tag = _.get(this.locales[this.locale], expr) || expr;
    if (tag === expr) {
      tag = _.get(this.locales[this.fallbackLocale], expr) || expr;
    }
    _.each(data, (value, key) => {
      tag = tag.replace(':' + key, value);
    });
    _.each(data, (value, key) => {
      tag = tag.replace('{' + key + '}', value);
    });
    return tag;
  }
}

class Columns {
  constructor(options, hasLabel, getClass, presets) {
    _defineProperty(this, "defaultBreakpoint", 'default');
    this.presets = presets;
    this.configPresetColumns = this.serialize(this.columnsFromPresets(options.configPresetColumns) || {});
    this.configColumns = this.serialize(options.configColumns || {});
    this.formPresetColumns = this.serialize(this.columnsFromPresets(options.formPresetColumns) || {});
    this.formColumns = this.serialize(options.formColumns || {});
    this.presetColumns = this.serialize(this.columnsFromPresets(options.elementPresetColumns) || {});
    this.columns = this.serialize(options.elementColumns || {});
    this.hasLabel = hasLabel;
    this.getClass = getClass;
    this.cols = this.getCols();
  }
  get classes() {
    return {
      container: this.getClasses('container'),
      label: this.getClasses('label'),
      innerContainer: this.getClasses('innerContainer'),
      wrapper: this.getClasses('wrapper')
    };
  }
  serialize(columns) {
    // columns: 8
    if (['number', 'string'].indexOf(typeof columns) !== -1) {
      return {
        [this.defaultBreakpoint]: {
          container: columns
        }
      };
    }

    // columns: { container: 8, wrapper: { default: 8, lg: 8 } }
    if (typeof columns === 'object' && ['container', 'label', 'wrapper'].indexOf(Object.keys(columns)[0]) !== -1) {
      var serialized = {};
      _.each(columns, (size, type) => {
        // columns: { container: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[this.defaultBreakpoint] === undefined) {
            serialized[this.defaultBreakpoint] = {};
          }
          serialized[this.defaultBreakpoint][type] = size;
        }

        // columns: { container: { default: 8, lg: 8 } }
        else {
          _.each(size, (s, breakpoint) => {
            if (serialized[breakpoint] === undefined) {
              serialized[breakpoint] = {};
            }
            serialized[breakpoint][type] = s;
          });
        }
      });
      return serialized;
    }

    // columns: { lg: 8, md: { container: 8 } }
    else {
      var _serialized = {};
      _.each(columns, (size, breakpoint) => {
        // columns: { lg: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (_serialized[breakpoint] === undefined) {
            _serialized[breakpoint] = {};
          }
          _serialized[breakpoint].container = size;
        }

        // columns: { md: { container: 8 } }
        else {
          _serialized[breakpoint] = size;
        }
      });
      return _serialized;
    }
  }
  columnsFromPresets(presets) {
    var columns;
    _.each(presets, presetName => {
      var preset = this.presets[presetName];
      if (!preset || !preset.columns) {
        return;
      }
      columns = preset.columns;
    });
    return columns;
  }
  getNullClass() {
    return [this.getClass(this.defaultBreakpoint, 0)];
  }
  getClasses(type) {
    var classes = [];
    Object.keys(this.cols).forEach(breakpoint => {
      var size;
      if (type === 'innerContainer') {
        size = this.cols[breakpoint].label;
        size = size >= 12 || !this.hasLabel ? 12 : 12 - size;
      } else {
        size = this.cols[breakpoint][type];
        if (type === 'label' && !this.hasLabel) {
          size = 0;
        }

        // if (type === 'wrapper' && !this.hasLabel) {
        //   size += this.cols[breakpoint].label || 0

        //   if (size > 12) {
        //     size = 12
        //   }
        // }
      }

      if (size !== undefined && !isNaN(size)) {
        classes.push(this.getClass(breakpoint, size));
      }
    });
    return classes;
  }
  getCols() {
    return _.merge({}, {
      [this.defaultBreakpoint]: {
        container: 12,
        label: 12,
        wrapper: 12
      }
    }, this.configPresetColumns || {}, this.configColumns || {}, this.formPresetColumns || {}, this.formColumns || {}, this.presetColumns || {}, this.columns || {});
  }
}

function verifyApiKey(license) {
  var score = 0;
  var check_digit = license[0];
  var check_digit_count = 0;
  var chunks = license.split('-');
  chunks.forEach(chunk => {
    if (chunk.length != 4) {
      return false;
    }
    chunk.split('').forEach(char => {
      if (char == check_digit) {
        check_digit_count++;
      }
      score += char.codePointAt(0);
    });
  });
  if (score == 1492 && check_digit_count == 3) {
    return true;
  }
  return false;
}

function installer (config, components) {
  var Vueform = class {
    constructor() {
      this.options = {
        config: _.omit(config, ['theme', 'templates', 'locales', 'rules', 'plugins']),
        templates: config.templates || {},
        theme: config.theme || {},
        rules: config.rules || {},
        locales: config.locales || {},
        plugins: config.plugins || [],
        i18n: null,
        vueVersion: null,
        services: {
          validation,
          axios,
          messageBag,
          autosize,
          location,
          condition,
          columns: Columns
        },
        version: packageJson.version
      };
    }
    config(config) {
      // merge
      _.each(['theme', 'templates', 'locales', 'rules'], attr => {
        if (config[attr] !== undefined) {
          this.options[attr] = Object.assign({}, this.options[attr], config[attr]);
        }
      });

      // replace
      _.each(['plugins'], attr => {
        if (config[attr] !== undefined) {
          this.options[attr] = config[attr];
        }
      });

      // merge (config)
      _.each(['languages', 'services', 'addClasses', 'removeClasses', 'replaceClasses', 'overrideClasses', 'presets', 'views'], attr => {
        if (config[attr] !== undefined) {
          this.options.config[attr] = Object.assign({}, this.options.config[attr], config[attr]);
        }
      });

      // deep merge
      _.each(['endpoints'], attr => {
        if (config[attr] !== undefined) {
          this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr]);
        }
      });

      // replace
      _.each(['columns', 'forceLabels', 'displayErrors', 'floatPlaceholders', 'displayErrors', 'displayMessages', 'language', 'locale', 'fallbackLocale', 'orderFrom', 'validateOn', 'formData', 'beforeSend', 'locationProvider', 'classHelpers', 'env', 'usePresets', 'plugins', 'size', 'apiKey'], attr => {
        if (config[attr] !== undefined) {
          this.options.config[attr] = config[attr];
        }
      });
      if (config.elements) {
        config.elements.forEach(element => {
          components[element.name] = _.omit(element, ['render', 'staticRenderFns', 'components']);
        });
        config.elements.forEach(element => {
          if (this.options.templates[element.name] === undefined) {
            this.options.templates[element.name] = _.pick(element, ['render', 'staticRenderFns', 'components']);
          }
        });
      }
      if (config.axios !== undefined) {
        if (typeof config.axios === 'function') {
          this.options.services.axios = config.axios;
        } else {
          this.options.config.axios = config.axios;
        }
      }
    }
    registerComponents(appOrVue) {
      _.each(components, (comp, name) => {
        var component = _objectSpread2({}, comp);
        component.setup = (props, context) => {
          context = Object.assign({}, context, {
            name: ref(name),
            emits: component.emits
          });
          var setup = comp.setup(props, context);
          this.options.plugins.forEach(p => {
            if (typeof p === 'function') {
              p = p();
            }
            p = Array.isArray(p) ? p : [p];
            p.forEach(plugin => {
              var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
              if (pluginOptions.setup && shouldApplyPlugin(name, pluginOptions)) {
                setup = pluginOptions.setup(props, context, setup);
              }
            });
          });
          return setup;
        };
        if (component.components === undefined) {
          var _this$options$templat, _this$options$theme$t;
          component.components = ((_this$options$templat = this.options.templates[name]) === null || _this$options$templat === void 0 ? void 0 : _this$options$templat.components) || ((_this$options$theme$t = this.options.theme.templates[name]) === null || _this$options$theme$t === void 0 ? void 0 : _this$options$theme$t.components) || {};
        }
        component.render = function () {
          return this.template.render.apply(this, arguments);
        };
        component.staticRenderFns = function () {
          return this.template.staticRenderFns;
        };
        this.options.plugins.forEach(p => {
          if (typeof p === 'function') {
            p = p();
          }
          p = Array.isArray(p) ? p : [p];
          p.forEach(plugin => {
            var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
            _.each(_.without(Object.keys(pluginOptions), 'setup', 'apply', 'config', 'install'), key => {
              if (pluginOptions[key] && shouldApplyPlugin(name, pluginOptions)) {
                if (Array.isArray(pluginOptions[key])) {
                  var base = component[key] || [];
                  component[key] = base.concat(pluginOptions[key]);
                } else if (_.isPlainObject(pluginOptions[key])) {
                  component[key] = Object.assign({}, component[key] || {}, pluginOptions[key]);
                } else {
                  component[key] = pluginOptions[key];
                }
              }
            });
          });
        });
        appOrVue.component(name, component);
      });
    }
    initAxios() {
      var $axios = this.options.services.axios;
      var axiosConfig = this.options.config.axios;
      var axiosConfigFlat = flat(this.options.config.axios);
      Object.keys(axiosConfigFlat).forEach(key => {
        var value = axiosConfigFlat[key];
        if (['onUnauthenticated'].indexOf(key) === -1 && key.indexOf('csrfRequest.') === -1) {
          _.set($axios.defaults, key, value);
        }
      });
      $axios.interceptors.response.use(r => r, error => {
        if (!error.response) {
          return Promise.reject(error);
        }
        return new Promise((resolve, reject) => {
          var response = error.response;
          var originalRequest = response.config;
          if ([401, 419].indexOf(error.response.status) !== -1) {
            if (axiosConfig.csrfRequest && !originalRequest.CSRF) {
              $axios.request(_objectSpread2(_objectSpread2({}, axiosConfig.csrfRequest), {}, {
                CSRF: true
              })).then(() => {
                resolve($axios.request(_objectSpread2(_objectSpread2({}, originalRequest), {}, {
                  CSRF: true
                })));
              }).catch(error => {
                reject(error);
              });
            } else if (axiosConfig.onUnauthenticated) {
              axiosConfig.onUnauthenticated(originalRequest);
            } else {
              reject(error);
            }
          } else {
            reject(error);
          }
        });
      });
    }
    initI18n() {
      this.options.i18n = new i18n({
        locales: this.options.locales,
        locale: this.options.config.locale,
        fallbackLocale: this.options.config.fallbackLocale
      });
    }
    createApiKeyError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '=== Vueform API Key Missing ===';
      var error = "";
      error += "\n";
      error += " .....................  ......\n";
      error += "  ..................   ......\n";
      error += "   ................  .......\n";
      error += "     ......         ......\n";
      error += "      ..........  .......\n";
      error += "       ........  ......\n";
      error += "                ......\n";
      error += "          ...........\n";
      error += "            .......\n";
      error += "             .....\n";
      error += "               .\n";
      error += "\n";
      error += "===============================\n";
      error += "".concat(message, "\n");
      error += "===============================\n";
      error += "\n";
      error += "Create a free API Key at:\n";
      error += "https://vueform.com/docs/installation#api-key\n";
      error += "\n";
      return error;
    }
    install(appOrVue) {
      var _this$options$theme;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var version = parseInt(appOrVue.version.split('.')[0]);
      var minor = parseInt(appOrVue.version.split('.')[1]);
      this.options.vueVersion = version;
      if (window && window.location && ['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        var apiKey = options.apiKey;
        if (!apiKey) {
          console.error(this.createApiKeyError('=== Vueform API Key Missing ==='));
          return;
        }
        if (!verifyApiKey(apiKey.toUpperCase())) {
          console.error(this.createApiKeyError('=== Invalid Vueform API Key ==='));
          return;
        }
        if (navigator && navigator.onLine && window && window.location && ['http:', 'https:'].indexOf(window.location.protocol) !== -1 && typeof fetch !== 'undefined') {
          fetch("https://stat.vueform.com/sdk?key=".concat(apiKey)).then(response => response.json()).then(data => {
            if ((data === null || data === void 0 ? void 0 : data.valid) !== true) ;
          }).catch(() => {});
        }
      }
      var plugins = options.plugins || [];
      plugins.forEach(p => {
        if (typeof p === 'function') {
          p = p();
        }
        p = Array.isArray(p) ? p : [p];
        p.forEach(plugin => {
          var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
          if (pluginOptions.config) {
            pluginOptions.config(options);
          }
        });
      });
      if (options) {
        this.config(options);
      }
      this.options.plugins.forEach(p => {
        if (typeof p === 'function') {
          p = p();
        }
        p = Array.isArray(p) ? p : [p];
        p.forEach(plugin => {
          var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
          if (pluginOptions.install) {
            pluginOptions.install(appOrVue, this.options);
          }
        });
      });
      if (typeof config.axios !== 'function') {
        this.initAxios();
      }
      this.initI18n();
      this.registerComponents(appOrVue);
      var themeTemplates = ((_this$options$theme = this.options.theme) === null || _this$options$theme === void 0 ? void 0 : _this$options$theme.templates) || {};
      Object.keys(themeTemplates).forEach(componentName => {
        themeTemplates[componentName] = markRaw(themeTemplates[componentName]);
      });
      var $vueform = ref(_objectSpread2(_objectSpread2({}, this.options), {}, {
        theme: _objectSpread2(_objectSpread2({}, this.options.theme), {}, {
          templates: themeTemplates
        })
      }));
      switch (version) {
        case 2:
          appOrVue.config.ignoredElements = ['trix-editor'];
          appOrVue.config.unwrapInjectedRef = true;
          if (!appOrVue.prototype.$vueform) {
            appOrVue.prototype.$vueform = new Proxy($vueform, {
              get: (target, prop, receiver) => {
                return target.value[prop];
              }
            });
          }
          if (!appOrVue.__VUEFORM__) {
            appOrVue.__VUEFORM__ = true;
            appOrVue.mixin({
              methods: {
                __: (expr, data) => {
                  if (!data) {
                    console.warn('DEPRECATED: __ method should be no longer used for translating labels, only if they contain variables. For general translation use form$.translation.TAG instead.');
                  }
                  return this.options.i18n.$t(expr, data);
                }
              }
            });
          }
          break;
        case 3:
          if (minor < 3) {
            appOrVue.config.unwrapInjectedRef = true;
          }
          appOrVue.config.globalProperties.$vueform = new Proxy($vueform, {
            get: (target, prop, receiver) => {
              return target.value[prop];
            }
          });
          appOrVue.provide('$vueform', $vueform);
          appOrVue.mixin({
            methods: {
              $set(obj, key, value) {
                obj[key] = value;
              },
              $delete(obj, key) {
                delete obj[key];
              },
              __: (expr, data) => {
                if (!data) {
                  console.warn('DEPRECATED: __ method should be no longer used for translating labels, only if they contain variables. For general translation use form$.translation.TAG instead.');
                }
                return this.options.i18n.$t(expr, data);
              }
            }
          });
          break;
      }
    }
  };
  return new Vueform();
}

export { installer as default };
