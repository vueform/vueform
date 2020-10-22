const ref1 = ref(null)
// Inside setup
console.log('ref1:', ref1, ref1.value)
ref1: RefImpl {_rawValue: null, _shallow: false, __v_isRef: true, _value: null} null
// Outside setup
console.log('ref1:', this.ref1)
ref1: null


const reactive1 = reactive(null)
// Inside setup
console.log('reactive1:', reactive1)
reactive1: null
// Outside setup
console.log('reactive1:', this.reactive1)
reactive1: null


const ref2 = ref(undefined)
// Inside setup
console.log('ref2:', ref2, ref2.value)
ref2: RefImpl {_rawValue: undefined, _shallow: false, __v_isRef: true, _value: undefined} undefined
// Outside setup
console.log('ref2:', this.ref2)
ref2: undefined


const reactive2 = reactive(undefined)
// Inside setup
console.log('reactive2:', reactive2)
reactive2: undefined
// Outside setup
console.log('reactive2:', this.reactive2)
reactive2: undefined


const ref3 = ref('aaa')
// Inside setup
console.log('ref3:', ref3, ref3.value)
ref3: RefImpl {_rawValue: "aaa", _shallow: false, __v_isRef: true, _value: "aaa"} aaa
// Outside setup
console.log('ref3:', this.ref3)
ref3: aaa


const reactive3 = reactive('aaa')
// Inside setup
console.log('reactive3:', reactive3, reactive3.value)
reactive3: aaa undefined
// Outside setup
console.log('reactive3:', this.reactive3, this.reactive3.value)
reactive3: aaa undefined


const ref4 = ref([])
// Inside setup
console.log('ref4:', ref4, ref4.value)
ref4: RefImpl {_rawValue: Array(0), _shallow: false, __v_isRef: true, _value: Proxy} Proxy {}
// Outside setup
console.log('ref4:', this.ref4, this.ref4.value)
ref4: Proxy {} undefined


const reactive4 = reactive([])
// Inside setup
console.log('reactive4:', reactive4, reactive4.value)
reactive4: Proxy {} undefined
// Outside setup
console.log('reactive4:', this.reactive4, this.reactive4.value)
reactive4: Proxy {} undefined


const ref7 = ref({})
// Inside setup
console.log('ref7:', ref7, ref7.value)
ref7: RefImpl {_rawValue: {…}, _shallow: false, __v_isRef: true, _value: Proxy} Proxy {}
// Outside setup
console.log('ref7:', this.ref7, this.ref7.value)
ref7: Proxy {} undefined


const reactive7 = reactive({})
// Inside setup
console.log('reactive7:', reactive7, reactive7.value)
reactive7: Proxy {} undefined
// Outside setup
console.log('reactive7:', this.reactive7, this.reactive7.value)
reactive7: Proxy {} undefined


const ref5 = ref(['a'])
// Inside setup
console.log('ref5:', ref5, ref5.value, ref5[0], ref5.value[0])
ref5: RefImpl {_rawValue: Array(1), _shallow: false, __v_isRef: true, _value: Proxy} Proxy {0: "a"} undefined a
// Outside setup
console.log('ref5:', this.ref5, this.ref5.value, this.ref5[0])
ref5: Proxy {0: "a"} undefined a


const reactive5 = reactive(['a'])
// Inside setup
console.log('reactive5:', reactive5, reactive5.value, reactive5[0])
reactive5: Proxy {0: "a"} undefined a
// Outside setup
console.log('reactive5:', this.reactive5, this.reactive5.value, this.reactive5[0])
reactive5: Proxy {0: "a"} undefined a


const ref6 = ref([{a:'aaa'}])
// Inside setup
console.log('ref6:', ref6, ref6.value, ref6[0], ref6.value[0], ref6.value[0].value, ref6.value[0].a)
ref6: RefImpl {_rawValue: Array(1), _shallow: false, __v_isRef: true, _value: Proxy} Proxy {0: {…}} undefined Proxy {a: "aaa"} undefined aaa
// Outside setup
console.log('ref6:', this.ref6, this.ref6.value, this.ref6[0], this.ref6[0].a)
ref6: Proxy {0: {…}} undefined Proxy {a: "aaa"} aaa


const reactive6 = reactive([{a:'aaa'}])
// Inside setup
console.log('reactive6:', reactive6, reactive6.value, reactive6[0], reactive6[0].a)
reactive6: Proxy {0: {…}} undefined Proxy {a: "aaa"} aaa
// Outside setup
console.log('reactive6:', this.reactive6, this.reactive6.value, this.reactive6[0], this.reactive6[0].a)
reactive6: Proxy {0: {…}} undefined Proxy {a: "aaa"} aaa


const ref8 = ref({a:'aaa'})
// Inside setup
console.log('ref8:', ref8, ref8.value, ref8.a, ref8.value.a)
ref8: RefImpl {_rawValue: {…}, _shallow: false, __v_isRef: true, _value: Proxy} Proxy {a: "aaa"} undefined aaa
// Outside setup
console.log('ref8:', this.ref8, this.ref8.value, this.ref8.a)
ref8: Proxy {a: "aaa"} undefined aaa


const reactive8 = reactive({a:ref('aaa')})
// Inside setup
console.log('reactive8:', reactive8, reactive8.value, reactive8.a, reactive8.a.value)
reactive8: Proxy {a: RefImpl} undefined aaa undefined
// Outside setup
console.log('reactive8:', this.reactive8, this.reactive8.value, this.reactive8.a, this.reactive8.a.value)
reactive8: Proxy {a: RefImpl} undefined aaa undefined