import _ from 'lodash';
import { onMounted, watch, inject, toRefs, computed, getCurrentInstance, ref, provide, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated, onUnmounted, reactive } from 'vue';
import 'moment';

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
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
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

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
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
	    if (iterable) {
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

	    // Return an iterator with no values.
	    return { next: doneResult };
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

var base$r = function base(props, context, dependencies) {
  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var el$ = dependencies.el$;
  var fire = dependencies.fire;
  var dirt = dependencies.dirt;
  var validate = dependencies.validate;
  var value = dependencies.value;

  // ============== WATCHERS ===============

  onMounted(() => {
    watch(value, (n, o) => {
      if (dataEquals(n, o)) {
        return;
      }
      fire('change', n, o, el$.value);
      if (dirt) {
        dirt();
      }
      if (validate && form$.value.shouldValidateOnChange) {
        validate();
      }
    }, {
      immediate: false,
      deep: true
    });
  });
};

function resolveDeps(props, context, options) {
  var deps = options.deps || {};
  options = _objectSpread2(_objectSpread2({}, options), {}, {
    events: context.emits,
    slots: context.slots
  });
  context.features.forEach(feature => {
    _.each(feature(props, context, deps, options), (featureDep, key) => {
      deps[key] = featureDep;
    });
  });
  return deps;
}

var base$q = function base(props, context) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var deps = resolveDeps(props, context, options);
  base$r(props, context, deps);
  onMounted(() => {
    deps.initMessageBag();
    deps.initValidation();
  });
  return _objectSpread2({}, deps);
};

var base$p = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The root form's component.
  * 
  * @type {component}
  */
  var form$ = inject('form$');
  return {
    form$
  };
};

var base$o = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The global theme object, which contains all the default templates and classes.
  * 
  * @type {object}
  */
  var theme = inject('theme');
  return {
    theme
  };
};

var base$n = function base(props, context, dependencies) {
  var {
    layout,
    inline
  } = toRefs(props);

  // ============== COMPUTED ==============

  /**
   * The current layout of the element.
   * 
   * @type {string|component}
   * @private
   */
  var elementLayout = computed(() => {
    return inline.value || !layout.value ? 'ElementLayoutInline' : layout.value;
  });
  return {
    elementLayout
  };
};

var base$m = function base(props, context, dependencies) {
  var {
    name
  } = toRefs(props);
  var currentInstance = getCurrentInstance();

  // ============ DEPENDENCIES ============

  var {
    form$
  } = dependencies;

  // ============== COMPUTED ==============

  /**
   * The parent component of the element.
   * 
   * @type {component}
   * @private
   */
  var parent = computed(() => {
    var getParent = (parent, getParent) => {
      if (parent && (form$.value.$vueform.vueVersion === 3 && parent.$options.name && parent.$options.name.match(/^[a-zA-Z\-]*Element$/) || form$.value.$vueform.vueVersion === 2 && parent.hasOwnProperty('el$') && typeof parent.el$ !== 'function')) {
        return parent.el$;
      } else if (parent.$parent) {
        return getParent(parent.$parent, getParent);
      } else {
        return null;
      }
    };
    return getParent(form$.value.$vueform.vueVersion === 3 ? currentInstance.parent.proxy : currentInstance.proxy.$parent, getParent);
  });

  /**
   * The path of the element using dot `.` syntax.
   * 
   * @type {string}
   */
  var path = computed(() => {
    return parent.value && parent.value.path ? parent.value.path + '.' + name.value : name.value;
  });

  /**
   * The path of the element's data using dot `.` syntax.
   * 
   * @type {string} 
   */
  var dataPath = computed(() => {
    return parent.value && parent.value.dataPath ? parent.value.dataPath + '.' + name.value : name.value;
  });

  /**
   * Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))
   * 
   * @type {boolean}
   * @private
   */
  var flat = computed(() => {
    return false;
  });
  return {
    parent,
    path,
    dataPath,
    flat
  };
};

var base$l = function base(props, context, dependencies) {
  var {
    parent,
    conditions: conditionList
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var path = dependencies.path || ref(null);
  var el$ = dependencies.el$ || ref(undefined);

  // ================ DATA ================

  /**
   * The frozen conditions of the element.
   * 
   * @type {array}
   * @private
   */
  var conditions = ref(conditionList.value);

  // ============== COMPUTED ==============

  /**
   * Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.
   * 
   * @type {boolean}
   */
  var available = computed(() => {
    if (!form$.value.conditions) {
      return true;
    }
    if (parent && parent.value && parent.value.available !== undefined && !parent.value.available) {
      return false;
    }
    if (!conditions.value || !conditions.value.length) {
      return true;
    }
    return !_.some(conditions.value, condition => {
      return !form$.value.$vueform.services.condition.check(condition, path.value, form$.value, el$.value);
    });
  });

  /**
   * Updates element conditions after they have been changed.
   * 
   * @returns {void}
   * @private
   */
  var updateConditions = () => {
    conditions.value = conditionList.value;
  };
  return {
    available,
    updateConditions
  };
};

var base$k = function base(props, context, dependencies) {
  var _options$value, _options$value2;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    name,
    type
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var parent = dependencies.parent;
  var defaultValue = dependencies.defaultValue;
  var dataPath = dependencies.dataPath;
  var form$ = dependencies.form$;

  // ================ DATA =================

  /**
   * The initial value of the element.
   * 
   * @type {any}
   * @private
   */
  var initialValue = ref(undefined);
  if (form$.value.isSync) {
    initialValue.value = _.get(form$.value.model, dataPath.value);
  } else if (parent.value && ['group', 'object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
    initialValue.value = parent.value.value[name.value];
  }

  // ============== COMPUTED ===============

  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   * 
   * @type {any}
   * @private
   */
  var internalValue = ref(defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value));

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  var value = computed({
    get: ((_options$value = options.value) === null || _options$value === void 0 ? void 0 : _options$value.get) || function () {
      var value;
      if (form$.value.isSync) {
        value = _.get(form$.value.model, dataPath.value);
      } else if (parent.value && ['group', 'object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
        value = parent.value.value[name.value];
      } else {
        value = internalValue.value;
      }
      return value !== undefined ? value : defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
    },
    set: ((_options$value2 = options.value) === null || _options$value2 === void 0 ? void 0 : _options$value2.set) || function (val) {
      if (form$.value.isSync) {
        form$.value.updateModel(dataPath.value, val);
      } else if (parent.value && ['list', 'multifile'].indexOf(parent.value.type) !== -1) {
        var newValue = parent.value.value.map((v, k) => k == name.value ? val : v);
        parent.value.update(newValue);
      } else if (parent.value && ['group', 'object'].indexOf(parent.value.type) !== -1) {
        parent.value.value = Object.assign({}, parent.value.value, {
          [name.value]: val
        });
      } else {
        internalValue.value = val;
      }
    }
  });

  /**
   * Intermediary value between element's value and field's `v-model`. It is required when we need to transform the value format between the element and its field.
   * 
   * @type {any}
   */
  var model = computed({
    get() {
      return value.value;
    },
    set(val) {
      value.value = val;
    }
  });
  if (options.init === undefined || options.init !== false) {
    // If element's value was undefined initially (not found in v-model/data) then we need to set it's value
    if (initialValue.value === undefined) {
      value.value = defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
    }
  }
  watch(type, () => {
    value.value = defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
  });
  return {
    initialValue,
    internalValue,
    value,
    model
  };
};

var base$j = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    submit,
    formatData,
    formatLoad,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var available = dependencies.available;
  var value = dependencies.value;
  var resetValidators = dependencies.resetValidators;
  var defaultValue = dependencies.defaultValue;
  var nullValue = dependencies.nullValue;

  // =============== PRIVATE ===============

  /**
   * Sets the value of the element.
   * 
   * 
   * @param {any} val the value to be set
   * @returns {void}
   * @private
   */
  var setValue = val => {
    if (options.setValue) {
      return options.setValue(val);
    }
    value.value = val;
  };

  // ============== COMPUTED ===============

  /**
   * The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data.
   * 
   * @type {object}
   */
  var data = computed(() => {
    return {
      [name.value]: value.value
    };
  });

  /**
   * Same as `data` property except that it only includes the element's value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).
   * 
   * @type {object}
   */
  var requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }
    return formatData.value ? formatData.value(name.value, value.value, form$.value) : {
      [name.value]: value.value
    };
  });

  // =============== METHODS ===============

  /**
   * Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.
   * 
   * @param {string} value* the value to be loaded
   * @param {boolean} format whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)
   * @returns {void}
   */
  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setValue(format && formatLoad.value ? formatLoad.value(val, form$.value) : val);
  };

  /**
   * Updates the value of the element similarly to [`load`](#method-load), only that it can\'t format data. 
   * 
   * @param {string|} value* the value to be set
   * @returns {void}
   */
  var update = val => {
    setValue(val);
  };

  /**
   * Clears the element's value.
   * 
   * @returns {void}
   */
  var clear = () => {
    setValue(_.cloneDeep(nullValue.value));
  };

  /**
   * Resets the element's value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.
   * 
   * @returns {void}
   */
  var reset = () => {
    setValue(_.cloneDeep(defaultValue.value));
    resetValidators();
  };

  /**
   * Prepares the element.
   *
   * @returns {void}
   * @private
   */
  var prepare = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {});
    return function prepare() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};

var base$i = function base(props, context, dependencies) {
  var {
    default: default_,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var nullValue = dependencies.nullValue;
  var form$ = dependencies.form$;
  var parent = dependencies.parent;

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {any}
  * @private
  */
  var defaultValue = computed(() => {
    var parentDefaultValue;
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value];
    } else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value];
    }
    if (parentDefaultValue !== undefined) {
      return parentDefaultValue instanceof File ? new File([parentDefaultValue], parentDefaultValue.name, parentDefaultValue) : _.cloneDeep(parentDefaultValue);
    }
    if (default_.value !== undefined) {
      return default_.value instanceof File ? new File([default_.value], default_.value.name, default_.value) : _.cloneDeep(default_.value);
    }
    return _.cloneDeep(nullValue.value);
  });
  return {
    defaultValue
  };
};

var base$h = function base(props, context, dependencies) {
  var {
    label
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var el$ = dependencies.el$;

  // ============== COMPUTED ==============

  /**
   * Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component's [`forceLabels`](vueform#option-force-labels) option is `true`.
   * 
   * @type {boolean}
   * 
   */
  var hasLabel = computed(() => {
    var _el$$value$$slots, _el$$value$$scopedSlo;
    return !!(form$.value.options.forceLabels || label.value || el$.value.slots.label || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.label || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.label);
  });
  return {
    hasLabel
  };
};

var base$g = function base(props, context, dependencies) {
  var {
    columns,
    presets
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var theme = dependencies.theme;
  var hasLabel = dependencies.hasLabel;

  // ================ DATA ================

  var Columns = ref(_.cloneDeep(columns.value));

  // ============== COMPUTED ==============

  /**
   * Calulated column sizes and classes for the element.
   * 
   * @type {object}
   * @private
   */
  var columnsClasses = computed(() => {
    var config = form$.value.$vueform.config;
    return new form$.value.$vueform.services.columns({
      configPresetColumns: config.usePresets,
      configColumns: config.columns,
      formPresetColumns: form$.value.options.presets,
      formColumns: form$.value.options.columns,
      elementPresetColumns: presets.value,
      elementColumns: Columns.value
    }, hasLabel.value, theme.value.columns, config.presets).classes;
  });

  // =============== METHODS ==============

  /**
   * Update columns programmatically.
   * 
   * @param {number|array} value* the new value for columns option
   * @private
   */
  var updateColumns = v => {
    Columns.value = _.cloneDeep(v);
  };
  watch(columns, v => {
    Columns.value = _.cloneDeep(v);
  }, {
    immediate: false,
    deep: true
  });
  return {
    columnsClasses,
    updateColumns
  };
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

var base$f = function base(props, context, dependencies) {
  var {
    name
  } = toRefs(props);
  var currentInstance = getCurrentInstance();

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;

  // =============== METHODS ==============

  /**
  * Sets the component to the parent as if `refs` were used.
  * 
  * @param {component} $parent parent component
  * @param {function} assignToParent the assignToParent function for recursion
  * @returns {void}
  * @private
  */
  var assignToParent = ($parent, assignToParent) => {
    if ($parent.children$Array) {
      $parent.children$Array.push(currentInstance.proxy);
    } else if ($parent.elements$) {
      form$.value.$set($parent.elements$, name.value, currentInstance.proxy);
    } else {
      assignToParent($parent.$parent, assignToParent);
    }
  };

  /**
  * Removes the component from the parent.
  * 
  * @param {component} $parent parent component
  * @param {function} removeFromParent the removeFromParent function for recursion
  * @private
  */
  var removeFromParent = ($parent, removeFromParent) => {
    if ($parent.children$Array) {
      $parent.children$Array.splice($parent.children$Array.map(e$ => normalize(e$.name)).indexOf(normalize(name.value)), 1);
    } else if ($parent.elements$) {
      form$.value.$delete($parent.elements$, name.value);
    } else {
      removeFromParent($parent.$parent, removeFromParent);
    }
  };
  return {
    assignToParent,
    removeFromParent
  };
};

var base$e = function base(props, context, dependencies) {
  var instantHooks = ['onBeforeCreate', 'onCreated'];
  var hooks = {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
  };
  var currentInstance = getCurrentInstance();

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var fire = dependencies.fire;
  var {
    assignToParent,
    removeFromParent
  } = base$f(props, context, {
    form$
  });

  // ================= DATA ================

  /**
   * Whether the element has been already mounted.
   * 
   * @type {boolean}
   * @default true
   */
  var mounted = ref(false);

  /**
   * Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.
   * 
   * @type {boolean} 
   * @default true
   * @private
   */
  var active = ref(true);

  // ============== COMPUTED ==============

  /**
   * Whether the element is static (does not have any data or validation).
   * 
   * @type {boolean}
   * @private
   */
  var isStatic = computed(() => {
    return false;
  });

  /**
   * Whether the element's value is a file.
   *
   * @type {boolean}
   * @private
   */
  var isFileType = computed(() => {
    return false;
  });

  /**
   * Whether the element's value is an image.
   *
   * @type {boolean}
   * @private
   */
  var isImageType = computed(() => {
    return false;
  });

  /**
   * Whether the element's value is an array.
   *
   * @type {boolean}
   * @private
   */
  var isArrayType = computed(() => {
    return false;
  });

  /**
   * Whether the element should be visible when using `tabs` or `steps`.
   * 
   * @type {boolean}
   * @private
   */
  var isActive = computed(() => {
    return active.value;
  });

  /**
   * The element's component.
   *
   * @type {component}
   */
  var el$ = computed(() => {
    return currentInstance.proxy;
  });

  // ============== METHODS ===============

  /**
   * Sets the `active` property of the element to `true`.
   *
   * @returns {void}
   * @private
   */
  var activate = () => {
    active.value = true;
  };

  /**
   * Sets the `active` property of the element to `false`.
   *
   * @returns {void}
   * @private
   */
  var deactivate = () => {
    active.value = false;
  };

  // ============== PROVIDES ==============

  /**
   * The element's component.
   *
   * @type {component}
   */
  provide('el$', el$);

  // ================ HOOKS ===============

  onBeforeMount(() => {
    assignToParent(currentInstance.proxy.$parent, assignToParent);
  });
  onMounted(() => {
    mounted.value = true;
  });
  onBeforeUnmount(() => {
    removeFromParent(currentInstance.proxy.$parent, removeFromParent);
  });
  Object.values(instantHooks).forEach(hook => {
    fire(_.lowerFirst(hook.replace('on', '')), el$.value);
  });
  Object.keys(hooks).forEach(hook => {
    hooks[hook](() => {
      fire(_.lowerFirst(hook.replace('on', '')), el$.value);
    });
  });
  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  };
};

var base$d = function base(props, context, dependencies) {
  var {
    name,
    floating,
    placeholder,
    label,
    fieldName
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  /**
   * The generic name of the element constructed from label / floating or element name.
   * 
   * @type {string}
   * @private.
   */
  var genericName = computed(() => {
    if (fieldName && fieldName.value) {
      return fieldName.value;
    } else if (label && label.value) {
      return label.value;
    } else if (floating && floating.value) {
      return floating.value;
    } else if (placeholder && placeholder.value && form$.value.options.floatPlaceholders) {
      return placeholder.value;
    } else {
      return _.upperFirst(name.value).replace(/_|-/g, ' ');
    }
  });
  return {
    genericName
  };
};

var base$c = function base(props, context, dependencies) {
  var {
    size,
    view,
    views,
    presets
  } = toRefs(props);
  var componentName = context.name;

  // ============ DEPENDENCIES ============

  var available = dependencies.available;
  var active = dependencies.active;
  var form$ = dependencies.form$;
  var parent = dependencies.parent;

  // ================ DATA ================

  /**
   * Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.
   * 
   * @type {boolean} 
   * @default false
   */
  var hidden = ref(false);

  // ============== COMPUTED ==============

  /**
   * Whether the element is visible. It's `false` when `available` or `active` is `false` or `hidden` is `true`.
   * 
   * @type {boolean} 
   */
  var visible = computed(() => {
    return available.value && !hidden.value && active.value;
  });

  /**
   * The resolved size of the element and all of its child components.
   *
   * @type {string}
   */
  var Size = computed(() => {
    var Size;
    if (size.value) {
      Size = size.value;
    } else {
      _.each(presets.value, presetName => {
        var preset = form$.value.$vueform.config.presets[presetName];
        if (!preset || !preset.size) {
          return;
        }
        Size = preset.size;
      });
    }
    if (!Size) {
      if (parent.value) {
        Size = parent.value.Size;
      } else {
        Size = form$.value.Size;
      }
    }
    return Size;
  });

  /**
   * The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component's view in class functions.
   *
   * @type {string}
   */
  var View = computed(() => {
    if (view.value) {
      return view.value;
    }
    return Views.value[componentName.value];
  });

  /**
   * The name of the views for the components.
   *
   * @type {object}
   * @private
   */
  var Views = computed(() => {
    var Views = form$.value.Views;
    _.each(presets.value, presetName => {
      var preset = form$.value.$vueform.config.presets[presetName];
      if (!preset || !preset.views) {
        return;
      }
      Views = Object.assign({}, Views, preset.views);
    });
    Views = Object.assign({}, Views, views.value);
    return Views;
  });

  // =============== METHODS ==============

  /**
   * Hides the element.
   *
   * @returns {void}
   */
  var hide = () => {
    hidden.value = true;
  };

  /**
   * Shows the element if it was hidden with [`hide()`](#method-hide) method.
   *
   * @returns {void}
   */
  var show = () => {
    hidden.value = false;
  };

  // ============== PROVIDES ==============

  provide('Size', Size);
  provide('View', View);
  provide('Views', Views);
  return {
    hidden,
    visible,
    Size,
    View,
    Views,
    hide,
    show
  };
};

var base$b = function base(props, context, dependencies) {
  var {
    templates,
    presets
  } = toRefs(props);
  var componentName = context.name;

  // ============ DEPENDENCIES ============

  var theme = dependencies.theme;
  var View = dependencies.View;
  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  /**
   * The list of templates available to the element.
   * 
   * @type {object}
   * @private
   */
  var Templates = computed(() => {
    var presetTemplates = {};
    _.each(presets ? presets.value : [], presetName => {
      var preset = form$.value.$vueform.config.presets[presetName];
      if (!preset || !preset.templates) {
        return;
      }
      presetTemplates = Object.assign({}, presetTemplates, preset.templates);
    });
    return _objectSpread2(_objectSpread2(_objectSpread2({}, theme.value.templates), presetTemplates), templates ? templates.value : {});
  });

  /**
   * The component's template.
   * 
   * @type {object}
   */
  var template = computed(() => {
    return View && View.value && Templates.value["".concat(componentName.value, "_").concat(View.value)] ? Templates.value["".concat(componentName.value, "_").concat(View.value)] : Templates.value[componentName.value];
  });
  return {
    Templates,
    template
  };
};

var base$a = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  toRefs(props);

  // ============ DEPENDENCIES ============

  var el$ = dependencies.el$;

  // =============== OPTIONS ==============

  var defaultElementSlots = ['label', 'info', 'description', 'before', 'between', 'after'];
  var defaultFieldSlots = ['checkbox', 'radio', 'option', 'single-label', 'multiple-label', 'tag', 'no-results', 'no-options', 'after-list', 'before-list', 'placeholder', 'group-label', 'caret', 'clear', 'spinner', 'option', 'default'];

  // ============== COMPUTED ==============

  /**
   * Slots of the element.
   * 
   * @type {object}
   * @private
   */
  var elementSlots = computed(() => {
    var elementSlots = {};
    defaultElementSlots.filter(s => options.slots.indexOf(s) !== -1).forEach(s => {
      var slot = el$.value.slots[s] || el$.value.slots[_.camelCase(s)];
      if (typeof slot === 'object') {
        if (slot.props && slot.props.indexOf('el$') === -1) {
          slot.props.push('el$');
        } else if (!slot.props) {
          slot.props = ['el$'];
        }
      }
      elementSlots[s] = slot;
    });
    return elementSlots;
  });

  /**
   * Slots related to the element's field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.
   * 
   * @type {object}
   * @private
   */
  var fieldSlots = computed(() => {
    var fieldSlots = {};
    defaultFieldSlots.filter(s => options.slots.indexOf(s) !== -1).forEach(s => {
      var slot = el$.value.slots[s] || el$.value.slots[_.camelCase(s)];

      // Add `el$` prop to `default` slot
      if (typeof slot === 'object') {
        if (slot.props && (Array.isArray(slot.props) && slot.props.indexOf('el$') === -1 || !Array.isArray(slot.props) && Object.keys(slot.props).indexOf('el$') === -1)) {
          slot.props.push('el$');
        } else if (!slot.props) {
          slot.props = ['el$'];
        }
      }
      fieldSlots[s] = slot;
    });
    return fieldSlots;
  });
  return {
    elementSlots,
    fieldSlots
  };
};

var base$9 = function base(props, context, dependencies) {
  var {
    disabled
  } = toRefs(props);

  // ================ DATA ================

  /**
   * Helper to store whether the element is disabled via api (with .disable()).
   * 
   * @type {boolean|null}
   * @default null
   * @private
   */
  var localDisabled = ref(null);

  // ============== COMPUTED ==============

  /**
   * Whether the element is disabled.
   * 
   * @type {boolean}
   */
  var isDisabled = computed(() => {
    return disabled.value && localDisabled.value !== false || localDisabled.value === true;
  });

  // =============== METHODS ==============

  /**
   * Disables the element.
   *
   * @returns {void}
   */
  var disable = () => {
    localDisabled.value = true;
  };

  /**
   * Enables the element even if it is disabled by [`disabled`](#disabled) option.
   *
   * @returns {void}
   */
  var enable = () => {
    localDisabled.value = false;
  };
  return {
    localDisabled,
    isDisabled,
    disable,
    enable
  };
};

var base$8 = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!options.events) {
    throw new Error('`events` option is required for useEvents');
  }

  // ================ DATA ================

  /**
   * Helper property used to store available events for the element.
   * 
   * @type {array}
   * @default []
   * @private
   */
  var events = ref(options.events);

  /**
   * Helper property used to store listeners for events.
   * 
   * @type {object}
   * @default {}
   * @private
   */
  var listeners = ref({});

  // =============== METHODS ==============

  /**
   * Adds a listener for an event.
   *
   * @param {string} event name of the event to listen for
   * @param {function} callback callback to run when the event is triggered
   * @returns {void}
   */
  var on = (evt, callback) => {
    if (!listeners.value[evt]) {
      listeners.value[evt] = [];
    }
    listeners.value[evt].push(callback);
  };

  /**
   * Removes all listeners for an event.
   *
   * @param {string} event name of the event to remove
   * @returns {void}
   */
  var off = evt => {
    delete listeners.value[evt];
  };

  /**
   * Fires and emits an event.
   *
   * @param {any} args list of arguments to pass over to the event callback 
   * @returns {void}
   */
  var fire = function fire() {
    var evt = arguments[0];
    var args = [].slice.call(arguments).splice(1);
    _.each(listeners.value[evt], callback => {
      callback(...args);
    });
    if (!listeners.value[evt] || !listeners.value[evt].length) {
      context.emit(...[evt].concat(args));
    }
  };

  // =============== HOOKS ================

  // If component has descriptor subscribe upfront
  // for events using `onEvent` format 
  _.each(events.value, evt => {
    var callback = props['on' + _.upperFirst(_.camelCase(evt))];
    if (callback) {
      on(evt, callback);
    }
  });
  return {
    events,
    listeners,
    on,
    off,
    fire
  };
};

var base$7 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var model = dependencies.model;

  // =============== METHODS ==============

  /**
   * Handles `input` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleInput = e => {
    model.value = e.target.value;
  };
  return {
    handleInput
  };
};

var base$6 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;
  var nullValue = dependencies.nullValue;

  // ============== COMPUTED ==============

  /**
    * Whether the element has no value filled in.
    * 
    * @type {boolean}
    */
  var empty = computed(() => {
    return _.isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1;
  });
  return {
    empty
  };
};

var base$5 = function base(props, context, dependencies) {
  var {
    floating,
    placeholder
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  /**
   * Whether the element floating label.
   * 
   * @type {boolean}
   */
  var hasFloating = computed(() => {
    return !!(!!floating.value || placeholder.value && form$.value.options.floatPlaceholders) && floating.value !== false;
  });
  return {
    hasFloating
  };
};

var MERGE_KEYS = ['presets', 'usePresets', 'addClasses', 'prependClasses', 'removeClasses', 'replaceClasses', 'overrideClasses'];
var LOCALS_KEYS = ['addClass', 'removeClass', 'replaceClass', 'overrideClass'];
class MergeClasses {
  constructor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.options = options;
    if (this.shouldMergeTemplateClasses) {
      this.componentClasses = this.templateClasses;
      this.merge({
        overrideClasses: {
          [this.component]: this.themeClasses
        }
      });
    } else {
      this.componentClasses = this.templateClasses;
    }
    this.merge(this.config);
    _.each(options.merge, merge => {
      this.merge(merge);
    });
    this.merge(this.locals || this.component$.value, true);
    if (this.config.classHelpers && this.config.env !== 'production') {
      this.merge({
        prependClasses: {
          [this.component]: this.getClassHelpers(this.componentClasses, [this.component])
        }
      });
    }
  }
  get classes() {
    return new Proxy(this.componentClasses, {
      get: (target, prop) => {
        if (typeof prop !== 'string') {
          return target[prop];
        }
        return this.getDynamicClasses(target, prop);
      }
    });
  }
  get config() {
    return this.options.config || {};
  }
  get component() {
    return this.options.component;
  }
  get component$() {
    return this.options.component$;
  }
  get locals() {
    return this.options.locals;
  }
  get view() {
    return this.options.view;
  }
  get theme() {
    return this.options.theme;
  }
  get presets() {
    return this.config.presets;
  }
  get templates() {
    return this.options.templates || {};
  }
  get template() {
    return this.view && this.templates["".concat(this.component, "_").concat(this.view)] ? this.templates["".concat(this.component, "_").concat(this.view)] : this.templates[this.component] || {};
  }
  get themeClasses() {
    return _.cloneDeep(this.toArray(this.view && this.theme.classes["".concat(this.component, "_").concat(this.view)] ? this.theme.classes["".concat(this.component, "_").concat(this.view)] : this.theme.classes[this.component]));
  }
  get templateClasses() {
    return _.cloneDeep(this.toArray(this.defaultClasses));
  }
  get shouldMergeTemplateClasses() {
    var merge = typeof this.template.data === 'function' && this.template.data().merge !== undefined ? this.template.data().merge : this.component$.value.merge;
    return merge !== undefined ? merge : false;
  }
  get defaultClasses() {
    return typeof this.template.data === 'function' && this.template.data().defaultClasses ? this.template.data().defaultClasses : this.component$.value.defaultClasses;
  }
  get mainClass() {
    var defaultClasses = typeof this.template.data === 'function' && this.template.data().defaultClasses ? this.template.data().defaultClasses : this.component$.value.defaultClasses;
    return Object.keys(defaultClasses)[0];
  }
  merge(merge) {
    var locals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _.each(this.pick(merge, locals ? LOCALS_KEYS : MERGE_KEYS), (mergables, key) => {
      switch (key) {
        case 'addClasses':
        case 'prependClasses':
        case 'overrideClasses':
          if (!mergables || mergables[this.component] === undefined) {
            return;
          }
          this.mergeComponentClasses(this.toArray(mergables[this.component]), key);
          break;
        case 'removeClasses':
        case 'replaceClasses':
          if (!mergables || mergables[this.component] === undefined) {
            return;
          }
          this.mergeComponentClasses(mergables[this.component], key);
          break;
        case 'addClass':
        case 'removeClass':
        case 'replaceClass':
        case 'overrideClass':
          if (!mergables) {
            return;
          }
          if (typeof mergables === 'string' || Array.isArray(mergables)) {
            if (!Array.isArray(mergables)) {
              mergables = mergables.length > 0 ? mergables.split(' ') : [];
            }
            this.mergeComponentClasses({
              [this.mainClass]: mergables
            }, "".concat(key, "es"));
          } else if (key === 'replaceClass') {
            this.mergeComponentClasses(mergables, "".concat(key, "es"));
          } else if (_.isPlainObject(mergables)) {
            this.mergeComponentClasses(this.toArray(mergables), "".concat(key, "es"));
          } else ;
          break;
        case 'presets':
        case 'usePresets':
          if (!Array.isArray(mergables)) {
            return;
          }
          _.each(mergables, presetName => {
            this.merge(this.presets[presetName]);
          });
          break;
      }
    });
  }
  mergeComponentClasses(componentClasses, key) {
    _.each(componentClasses, (classes, className) => {
      this[key](classes, [className]);
    });
  }
  addClasses(add, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (add.length == 1 && !add[0]) {
      return;
    }
    if (_.isPlainObject(base)) {
      _.each(add, (subclasses, subclassName) => {
        this.addClasses(subclasses, levels.concat(subclassName));
      });
    } else {
      _.set(this.componentClasses, levels.join('.'), _.union(base, add));
    }
  }
  prependClasses(prepend, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (prepend.length == 1 && !prepend[0]) {
      return;
    }
    if (_.isPlainObject(base)) {
      _.each(prepend, (subclasses, subclassName) => {
        this.prependClasses(subclasses, levels.concat(subclassName));
      });
    } else {
      _.set(this.componentClasses, levels.join('.'), _.union(prepend, base));
    }
  }
  removeClasses(remove, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (_.isPlainObject(base)) {
      _.each(remove, (subclasses, subclassName) => {
        this.removeClasses(subclasses, levels.concat(subclassName));
      });
    } else if (Array.isArray(base)) {
      _.set(this.componentClasses, levels.join('.'), base.filter(c => {
        return typeof c !== 'string' || remove.indexOf(c) === -1;
      }));
    }
  }
  replaceClasses(replace, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (Array.isArray(replace)) {
      var tempReplace = {};
      replace.forEach(r => {
        tempReplace = _objectSpread2(_objectSpread2({}, tempReplace), r);
      });
      replace = tempReplace;
    }
    if (_.isPlainObject(base)) {
      _.each(replace, (subclasses, subclassName) => {
        this.replaceClasses(subclasses, levels.concat(subclassName));
      });
    } else if (Array.isArray(base)) {
      _.set(this.componentClasses, levels.join('.'), base.map(c => {
        return typeof c !== 'string' || Object.keys(replace).indexOf(c) === -1 ? c : replace[c];
      }));
    }
  }
  overrideClasses(override, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (_.isPlainObject(base)) {
      _.each(override, (subclasses, subclassName) => {
        this.overrideClasses(subclasses, levels.concat(subclassName));
      });
    } else {
      _.set(this.componentClasses, levels.join('.'), override);
    }
  }
  toArray(componentClasses) {
    var arrayClasses = {};
    _.each(componentClasses, (classes, className) => {
      arrayClasses[className] = this.classesToArray(classes, [className]);
    });
    return arrayClasses;
  }
  classesToArray(classes, path) {
    var _classes$constructor;
    var arrayClasses = classes;
    var base = path ? _.get(this.componentClasses, path.join('.')) : undefined;
    if (typeof classes === 'string') {
      arrayClasses = classes.length > 0 ? classes.split(' ') : [];
    } else if (_.isPlainObject(classes)) {
      if (base && Array.isArray(base)) {
        arrayClasses = [classes];
      } else if (!base || _.isPlainObject(base)) {
        arrayClasses = {};
        _.each(classes, (subclasses, subclassName) => {
          arrayClasses[subclassName] = this.classesToArray(subclasses, path.concat([subclassName]));
        });
      }
    } else if (typeof classes === 'boolean' || typeof classes === 'object' && ['ComputedRefImpl', 'RefImpl'].indexOf(classes === null || classes === void 0 ? void 0 : (_classes$constructor = classes.constructor) === null || _classes$constructor === void 0 ? void 0 : _classes$constructor.name) !== -1) {
      throw Error("Cannot add conditional class to ".concat(this.component, ": '").concat(path.join('.'), "'"));
    }
    return arrayClasses;
  }
  getDynamicClasses(target, prop, mainTarget) {
    if (!mainTarget) {
      mainTarget = target;
    }
    var classes = Array.isArray(target[prop]) ? _.flattenDeep(target[prop]) : target[prop];
    if (target["$".concat(prop)]) {
      return _.flattenDeep(target["$".concat(prop)](mainTarget, this.component$.value));
    }
    if (_.isPlainObject(classes)) {
      classes = _.cloneDeep(classes);
      _.each(classes, (classList, className) => {
        classes[className] = this.getDynamicClasses(classes, className, target);
      });
    }
    return classes;
  }
  getClassHelpers(componentClasses, path) {
    var classHelpers = {};
    _.each(componentClasses, (classes, className) => {
      if (className.match(/[$]/)) {
        return;
      }

      // let name = componentClasses[`$${className}`] !== undefined ? `$${className}` : className

      if (_.isPlainObject(classes)) {
        classHelpers[className] = this.getClassHelpers(componentClasses[className], path.concat([className]));
      } else {
        classHelpers[className] = ["".concat(path.join('.'), ".").concat(className, "-->")];
      }
    });
    return classHelpers;
  }
  pick(from, picks) {
    var picked = {};
    if (!from) {
      return picked;
    }
    _.each(picks, pick => {
      if (pick in from) {
        picked[pick] = from[pick];
      }
    });
    return picked;
  }
}

var base$4 = function base(props, context, dependencies) {
  var componentName = context.name;

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var el$ = dependencies.el$;
  var theme = dependencies.theme;
  var Templates = dependencies.Templates;
  var View = dependencies.View;

  // ============== COMPUTED ==============

  /**
   * The classes instance (for testing purpose).
   * 
   * @type {MergeClasses}
   * @private
   */
  var classesInstance = computed(() => {
    return new MergeClasses({
      component: componentName.value,
      component$: el$,
      theme: theme.value,
      config: form$.value.$vueform.config,
      templates: Templates.value,
      view: View.value,
      merge: [form$.value.options, el$.value]
    });
  });

  /**
   * The component's classes.
   * 
   * @type {object}
   */
  var classes = computed(() => {
    return _objectSpread2({}, classesInstance.value.classes);
  });
  return {
    classes,
    classesInstance
  };
};

var base$3 = function base(props, context, dependencies) {
  var {
    id
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var path = dependencies.path;

  // ============== COMPUTED ==============

  /**
   * The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.
   * 
   * @type {string}
   */
  var fieldId = computed(() => {
    return id.value || path.value;
  });
  return {
    fieldId
  };
};

var base$2 = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * The main input field of the element.
   * 
   * @type {HTMLElement} 
   */
  var input = ref(null);
  return {
    input
  };
};

function asyncForEach(_x, _x2) {
  return _asyncForEach.apply(this, arguments);
}
function _asyncForEach() {
  _asyncForEach = _asyncToGenerator(function* (array, callback) {
    for (var index = 0; index < (_.isPlainObject(array) ? _.values(array) : array).length; index++) {
      var key = _.isPlainObject(array) ? _.keys(array)[index] : index;
      yield callback(array[key], key, array);
    }
  });
  return _asyncForEach.apply(this, arguments);
}

var base$1 = function base(props, context, dependencies) {
  var {
    rules
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var path = dependencies.path;

  // ================ DATA ================

  /**
   * Helper property used to store the element states.
   * 
   * @type {object}
   * @default { dirty: false, validate: true }
   * @private
   */
  var state = ref({
    dirty: false,
    validated: true
  });

  /**
   * An array containing all the validators of the element.
   * 
   * @type {array<Validator>}
   * @default []
   * @private
   */
  var Validators = ref([]);

  /**
   * Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).
   * 
   * @type {MessageBag}
   * @default MessageBag
   */
  var messageBag = ref({});

  /**
   * Instance of ValidatorFactory.
   * 
   * @type {ValidatorFactory}
   * @default ValidatorFactory
   * @private
   */
  var validatorFactory = reactive({});

  // ============== COMPUTED ===============

  /**
   * The element's validation rules.
   * 
   * @type {string|array}
   * @private
   */
  var validationRules = computed(() => {
    return rules.value;
  });

  /**
   * Whether the element's value was modified.
   * 
   * @type {boolean}
   */
  var dirty = computed(() => {
    return state.value.dirty;
  });

  /**
   * Whether the element was already validated at least once.
   * 
   * @type {boolean}
   */
  var validated = computed(() => {
    return state.value.validated;
  });

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  var invalid = computed(() => {
    return _.some(Validators.value, {
      invalid: true
    });
  });

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  var pending = computed(() => {
    return _.some(Validators.value, {
      pending: true
    });
  });

  /**
   * Whether the element is `pending`.
   * 
   * @type {boolean}
   */
  var busy = computed(() => {
    return pending.value;
  });

  /**
   * The list of errors of failing rules.
   * 
   * @type {array}
   * @private
   */
  var validatorErrors = computed(() => {
    var errs = [];
    _.each(Validators.value, Validator => {
      if (Validator.failing) {
        errs.push(Validator.message);
      }
    });
    return errs;
  });

  /**
   * All the errors of `MessageBag`.
   * 
   * @type {array}
   */
  var errors = computed(() => {
    return messageBag.value.errors;
  });

  /**
   * The first error of `MessageBag`.
   * 
   * @type {string}
   */
  var error = computed(() => {
    return messageBag.value.error || null;
  });

  /**
   * Whether the element has errors.
   * 
   * @type {boolean}
   */
  var isDanger = computed(() => {
    return error.value !== null;
  });

  /**
   * Whether the element has been filled in successfully.
   * 
   * @type {boolean}
   */
  var isSuccess = computed(() => {
    return validationRules.value && validationRules.value.length > 0 && state.value.validated && !invalid.value || (!validationRules.value || !validationRules.value.length) && dirty.value;
  });

  // =============== METHODS ===============

  /**
   * Checks each validation rule for the element (async).
   * 
   * @returns {void}
   */
  var validate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      if (!validationRules.value) {
        return;
      }
      if (form$.value.validation === false) {
        return;
      }
      yield asyncForEach(Validators.value, /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(function* (Validator) {
          yield Validator.validate();
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      state.value.validated = true;
    });
    return function validate() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Sets the validators to default state.
   * 
   * @returns {void}
   */
  var resetValidators = () => {
    _.each(Validators.value, Validator => {
      Validator.reset();
    });
    state.value.validated = !validationRules.value;
  };

  /**
   * Flag the element as dirty.
   * 
   * @returns {void}
   * @private
   */
  var dirt = () => {
    state.value.dirty = true;
  };

  /**
   * Removes the element's `dirty` state.
   * 
   * @returns {void}
   */
  var clean = () => {
    state.value.dirty = false;
  };

  /**
   * Initalizes MessageBag service.
   * 
   * @returns {void}
   * @private
   */
  var initMessageBag = () => {
    messageBag.value = new form$.value.$vueform.services.messageBag(validatorErrors);
  };

  /**
   * Initalizes validators.
   * 
   * @returns {void}
   * @private
   */
  var initValidation = () => {
    if (!validationRules.value) {
      return;
    }

    // If the element has rules it does not
    // qualify as validated by default
    state.value.validated = false;
    validatorFactory.value = new form$.value.$vueform.services.validation.factory(path.value, form$.value);
    Validators.value = [];
    _.each(validatorFactory.value.makeAll(validationRules.value), Validator => {
      Validators.value.push(Validator);
    });
  };

  /**
   * Re-initalizes validators when rules have changed.
   * 
   * @returns {void}
   */
  var reinitValidation = () => {
    initValidation();
  };
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};

var base = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var input = dependencies.input;

  // ================ DATA ================

  /**
   * Whether the element is focused.
   * 
   * @type {boolean}
   */
  var focused = ref(false);

  // =============== HOOKS ================

  onMounted(() => {
    if (input && input.value && input.value.addEventListener) {
      input.value.addEventListener('focus', () => {
        focused.value = true;
      });
      input.value.addEventListener('blur', () => {
        focused.value = false;
      });
    }
  });
  return {
    focused
  };
};

var BaseElement = {
  props: {
    name: {
      required: true,
      type: [String, Number]
    },
    conditions: {
      required: false,
      type: [Array],
      default: () => []
    },
    onBeforeCreate: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onCreated: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeMount: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onMounted: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeUpdate: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onUpdated: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeUnmount: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onUnmounted: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  }
};

var HasView = {
  props: {
    inline: {
      required: false,
      type: [Boolean],
      default: false
    },
    layout: {
      required: false,
      type: [String, Object, Boolean],
      default: 'ElementLayout',
      private: true
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    replaceClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    removeClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    presets: {
      required: false,
      type: [Array],
      default: () => []
    },
    view: {
      required: false,
      type: [String],
      default: undefined
    },
    views: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    size: {
      required: false,
      type: [String],
      default: undefined
    },
    columns: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    templates: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    infoPosition: {
      required: false,
      type: [String],
      default: 'right'
    },
    label: {
      required: false,
      type: [String, Object, Function],
      default: null
    },
    before: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    between: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    after: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  }
};

var HasChange = {
  props: {
    onChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  }
};

var HasData = {
  props: {
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    }
  }
};

var HasValidation = {
  props: {
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    fieldName: {
      required: false,
      type: [String],
      '@default': 'name|label'
    }
  }
};

var ElementMixin = function ElementMixin() {
  return [BaseElement, HasView, HasChange, HasData, HasValidation];
};
var useElement = function useElement(props, context, options) {
  var nullValue = ref(options.nullValue !== undefined ? options.nullValue : null);
  context.features = [base$p, base$o, base$n, base$2, base$m, base$9, base$3, base$5, base$8, base$e, base$i, base$l, base$1, base$k, base$j, base$6, base$h, base$d, base$g, base$c, base$b, base$4, base$a, base$7, base];
  context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
  var element = base$q(props, context, {
    deps: {
      nullValue
    }
  });
  return _objectSpread2({}, element);
};
function element (options) {
  var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!options.name) {
    throw Error('The `name` attribute must be defined to create a new element');
  }
  var name = options.name;
  var ComponentName = "".concat(_.upperFirst(_.camelCase(name)));
  var emits = ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'].concat(component.emits || []);
  return _objectSpread2({
    name: ComponentName,
    mixins: [].concat(ElementMixin()).concat(component.mixins || []),
    components: component.components || {},
    emits,
    setup(props, ctx) {
      var context = _objectSpread2({}, ctx);
      context.emits = emits;
      context.name = ref(ComponentName);
      var element = useElement(props, context, options);
      context.element = element;
      var setup = component.setup ? component.setup(props, context) : {};
      return _objectSpread2(_objectSpread2({}, element), setup);
    },
    props: _objectSpread2({
      type: {
        required: false,
        type: [String],
        default: name
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: false
      },
      floating: {
        required: false,
        type: [String],
        default: null
      },
      id: {
        required: false,
        type: [String],
        default: null
      },
      placeholder: {
        required: false,
        type: [String],
        default: null
      }
    }, options.props || {})
  }, _.omit(component, ['setup', 'mixins', 'emits', 'props']));
}

export { element as default };
