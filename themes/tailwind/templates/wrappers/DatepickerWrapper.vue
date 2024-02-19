<script>
import DatepickerWrapper from './../../../blank/templates/wrappers/DatepickerWrapper.vue'

  export default {
    name: 'DatepickerWrapper',
    render: DatepickerWrapper.render,
    data: DatepickerWrapper.data,
  }
</script>

<style lang="scss">
  .flatpickr-input.form-control[readonly="readonly"] {
    
  }

  .flatpickr-calendar {
    background: transparent;
    opacity: 0;
    display: none;
    text-align: center;
    visibility: hidden;
    padding: 0;
    -webkit-animation: none;
            animation: none;
    direction: ltr;
    border: 0;
    font-size: 14px;
    line-height: 24px;
    border-radius: 5px;
    position: absolute;
    width: 307.875px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -ms-touch-action: manipulation;
        touch-action: manipulation;
    -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);
            box-shadow: 0 3px 13px rgba(0,0,0,0.08);
    color: var(--vf-color-input);
  }

  .flatpickr-calendar.open,
  .flatpickr-calendar.inline {
    opacity: 1;
    max-height: 640px;
    visibility: visible;
  }

  .flatpickr-calendar.open {
    display: inline-block;
    z-index: 999;
  }

  .flatpickr-calendar.animate.open {
    -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
            animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .flatpickr-calendar.inline {
    display: block;
    position: relative;
    top: 2px;
  }

  .flatpickr-calendar.rightMost {
    left: auto;
    right: 0;
  }

  .flatpickr-calendar.static {
    position: absolute;
    top: calc(100% + 2px);
  }

  .flatpickr-calendar.static.open {
    z-index: 999;
    display: block;
  }

  .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
  }

  .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
    -webkit-box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
            box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
  }

  .flatpickr-calendar .hasWeeks .dayContainer,
  .flatpickr-calendar .hasTime .dayContainer {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .flatpickr-calendar .hasWeeks .dayContainer {
    border-left: 0;
  }

  .flatpickr-calendar.hasTime .flatpickr-time {
    height: 40px;
    border-top: 1px solid var(--vf-border-color-input);
  }

  .flatpickr-calendar.hasTime .flatpickr-innerContainer {
    border-bottom: 0;
  }

  .flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
    height: auto;
  }

  .flatpickr-calendar:before,
  .flatpickr-calendar:after {
    position: absolute;
    display: block;
    pointer-events: none;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    left: 22px;
  }

  .flatpickr-calendar.rightMost:before,
  .flatpickr-calendar.arrowRight:before,
  .flatpickr-calendar.rightMost:after,
  .flatpickr-calendar.arrowRight:after {
    left: auto;
    right: 22px;
  }

  .flatpickr-calendar.arrowCenter:before,
  .flatpickr-calendar.arrowCenter:after {
    left: 50%;
    right: 50%;
  }

  .flatpickr-calendar:before {
    border-width: 5px;
    margin: 0 -5px;
    box-sizing: border-box;
  }

  .flatpickr-calendar:after {
    border-width: 4px;
    margin: 0 -4px;
    box-sizing: border-box;
  }

  .flatpickr-calendar.arrowTop:before,
  .flatpickr-calendar.arrowTop:after {
    bottom: 100%;
  }

  .flatpickr-calendar.arrowTop:before {
    border-bottom-color: var(--vf-bg-date-head);
    box-sizing: border-box;
  }

  .flatpickr-calendar.arrowTop:after {
    border-bottom-color: var(--vf-bg-date-head);
    box-sizing: border-box;
  }

  .flatpickr-calendar.arrowBottom:before,
  .flatpickr-calendar.arrowBottom:after {
    top: 100%;
  }

  .flatpickr-calendar.arrowBottom:before {
    border-top-color: var(--vf-bg-date-head);
  }

  .flatpickr-calendar.arrowBottom:after {
    border-top-color: var(--vf-bg-date-head);
  }

  .flatpickr-calendar:focus {
    outline: 0;
  }

  .flatpickr-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .flatpickr-months {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .flatpickr-months .flatpickr-month {
    border-radius: 5px 5px 0 0;
    background: var(--vf-bg-date-head);
    color: var(--vf-color-date-head);
    fill: var(--vf-color-date-head);
    height: 34px;
    line-height: 1;
    text-align: center;
    position: relative;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    overflow: hidden;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
  }

  .flatpickr-months .flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month {
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    height: 34px;
    padding: 10px;
    z-index: 1;
    color: var(--vf-color-date-head);
    fill: var(--vf-color-date-head);
  }

  .flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
  .flatpickr-months .flatpickr-next-month.flatpickr-disabled {
    display: none;
  }

  .flatpickr-months .flatpickr-prev-month i,
  .flatpickr-months .flatpickr-next-month i {
    position: relative;
  }

  .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
    left: 0;
  }

  .flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-next-month {
    right: 0;
  }
  
  .flatpickr-months .flatpickr-prev-month:hover,
  .flatpickr-months .flatpickr-next-month:hover {
    color: var(--vf-color-date-head);
  }

  .flatpickr-months .flatpickr-prev-month:hover svg,
  .flatpickr-months .flatpickr-next-month:hover svg {
    opacity: 1;
  }

  .flatpickr-months .flatpickr-prev-month svg,
  .flatpickr-months .flatpickr-next-month svg {
    width: 14px;
    height: 14px;
    opacity: 0.7;
    display: block;
  }

  .flatpickr-months .flatpickr-prev-month svg path,
  .flatpickr-months .flatpickr-next-month svg path {
    -webkit-transition: fill 0.1s;
    transition: fill 0.1s;
    fill: inherit;
  }

  .numInputWrapper {
    position: relative;
    height: auto;
  }

  .numInputWrapper input,
  .numInputWrapper span {
    display: inline-block;
  }

  .numInputWrapper input {
    width: 100%;
  }

  .numInputWrapper input::-ms-clear {
    display: none;
  }

  .numInputWrapper input::-webkit-outer-spin-button,
  .numInputWrapper input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  .numInputWrapper span {
    position: absolute;
    right: 0;
    width: 14px;
    padding: 0 4px 0 2px;
    height: 50%;
    line-height: 50%;
    opacity: 0;
    cursor: pointer;
    border: 1px solid var(--vf-border-color-input);
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  .numInputWrapper span:hover {
    background: var(--vf-bg-selected);
  }

  .numInputWrapper span:active {
    background: var(--vf-bg-selected);
  }

  .numInputWrapper span:after {
    display: block;
    content: "";
    position: absolute;
  }

  .numInputWrapper span.arrowUp {
    top: 0;
    border-bottom: 0;
  }

  .numInputWrapper span.arrowUp:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid var(--vf-color-input);
    top: 26%;
    box-sizing: border-box;
  }

  .numInputWrapper span.arrowDown {
    top: 50%;
  }

  .numInputWrapper span.arrowDown:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--vf-color-input);
    top: 40%;
    box-sizing: border-box;
  }

  .numInputWrapper span svg {
    width: inherit;
    height: auto;
  }

  .numInputWrapper span svg path {
    fill: var(--vf-color-input);
  }

  .numInputWrapper:hover {
    background: rgba(0,0,0,0.05);
  }

  .numInputWrapper:hover span {
    opacity: 1;
  }

  .flatpickr-current-month {
    font-size: 135%;
    line-height: inherit;
    font-weight: 300;
    color: inherit;
    position: absolute;
    width: 75%;
    left: 12.5%;
    padding: 7.48px 0 0 0;
    line-height: 1;
    height: 34px;
    display: inline-block;
    text-align: center;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
  }

  .flatpickr-current-month span.cur-month {
    font-family: inherit;
    font-weight: 700;
    color: inherit;
    display: inline-block;
    margin-left: 0.5ch;
    padding: 0;
  }

  .flatpickr-current-month span.cur-month:hover {
    background: rgba(0,0,0,0.05);
  }

  .flatpickr-current-month .numInputWrapper {
    width: 6ch;
    width: 7ch\0;
    display: inline-block;
  }

  .flatpickr-current-month .numInputWrapper span.arrowUp:after {
    border-bottom-color: var(--vf-color-date-head);
  }

  .flatpickr-current-month .numInputWrapper span.arrowDown:after {
    border-top-color: var(--vf-color-date-head);
  }

  .flatpickr-current-month input.cur-year {
    background: transparent;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    color: inherit;
    cursor: text;
    padding: 0 0 0 0.5ch;
    margin: 0;
    display: inline-block;
    font-size: inherit;
    font-family: inherit;
    font-weight: 300;
    line-height: inherit;
    height: auto;
    border: 0;
    border-radius: 0;
    vertical-align: initial;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .flatpickr-current-month input.cur-year:focus {
    outline: 0;
  }

  .flatpickr-current-month input.cur-year[disabled],
  .flatpickr-current-month input.cur-year[disabled]:hover {
    font-size: 100%;
    color: var(--vf-gray-300);
    background: transparent;
    pointer-events: none;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months {
    appearance: menulist;
    background: var(--vf-bg-date-head);
    border: none;
    border-radius: 0;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    font-weight: 300;
    height: auto;
    line-height: inherit;
    margin: -1px 0 0 0;
    outline: none;
    padding: 0 0 0 0.5ch;
    position: relative;
    vertical-align: initial;
    -webkit-box-sizing: border-box;
    -webkit-appearance: menulist;
    -moz-appearance: menulist;
    width: auto;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months:focus,
  .flatpickr-current-month .flatpickr-monthDropdown-months:active {
    outline: none;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months:hover {
    background: rgb(0 0 0 / 10%);
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
    background-color: var(--vf-bg-date-head);
    outline: none;
    padding: 0;
  }

  .flatpickr-weekdays {
    background: var(--vf-bg-date-head);
    text-align: center;
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    height: 28px;
  }

  .flatpickr-weekdays .flatpickr-weekdaycontainer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
  }

  span.flatpickr-weekday {
    cursor: default;
    font-size: 90%;
    background: var(--vf-bg-date-head);
    color: var(--vf-color-date-head);
    line-height: 1;
    margin: 0;
    text-align: center;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    font-weight: bolder;
  }

  .dayContainer,
  .flatpickr-weeks {
    padding: 1px 0 0 0;
  }

  .flatpickr-days {
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    width: 307.875px;
    background-color: var(--vf-bg-input);
  }

  .flatpickr-days:focus {
    outline: 0;
  }

  .dayContainer {
    padding: 0;
    outline: 0;
    text-align: left;
    width: 307.875px;
    min-width: 307.875px;
    max-width: 307.875px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    display: inline-block;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-around;
            justify-content: space-around;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
    opacity: 1;
  }

  .dayContainer + .dayContainer {
    -webkit-box-shadow: -1px 0 0 var(--vf-gray-200);
            box-shadow: -1px 0 0 var(--vf-gray-200);
  }

  .flatpickr-day {
    background: none;
    border: 1px solid transparent;
    border-radius: 150px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    cursor: pointer;
    font-weight: 400;
    width: 14.2857143%;
    -webkit-flex-basis: 14.2857143%;
        -ms-flex-preferred-size: 14.2857143%;
            flex-basis: 14.2857143%;
    max-width: 39px;
    height: 39px;
    line-height: 38px;
    margin: 0;
    display: inline-block;
    position: relative;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    text-align: center;
  }

  .flatpickr-day.inRange,
  .flatpickr-day.prevMonthDay.inRange,
  .flatpickr-day.nextMonthDay.inRange,
  .flatpickr-day.today.inRange,
  .flatpickr-day.prevMonthDay.today.inRange,
  .flatpickr-day.nextMonthDay.today.inRange,
  .flatpickr-day:hover,
  .flatpickr-day.prevMonthDay:hover,
  .flatpickr-day.nextMonthDay:hover,
  .flatpickr-day:focus,
  .flatpickr-day.prevMonthDay:focus,
  .flatpickr-day.nextMonthDay:focus {
    cursor: pointer;
    outline: 0;
    background: var(--vf-bg-selected);
    border-color: var(--vf-bg-selected);
  }

  .flatpickr-day.today {
    border-color: var(--vf-bg-selected);
  }

  .flatpickr-day.today:hover,
  .flatpickr-day.today:focus {
    border-color: var(--vf-bg-selected);
    background: var(--vf-bg-selected);
  }

  .flatpickr-day.selected,
  .flatpickr-day.startRange,
  .flatpickr-day.endRange,
  .flatpickr-day.selected.inRange,
  .flatpickr-day.startRange.inRange,
  .flatpickr-day.endRange.inRange,
  .flatpickr-day.selected:focus,
  .flatpickr-day.startRange:focus,
  .flatpickr-day.endRange:focus,
  .flatpickr-day.selected:hover,
  .flatpickr-day.startRange:hover,
  .flatpickr-day.endRange:hover,
  .flatpickr-day.selected.prevMonthDay,
  .flatpickr-day.startRange.prevMonthDay,
  .flatpickr-day.endRange.prevMonthDay,
  .flatpickr-day.selected.nextMonthDay,
  .flatpickr-day.startRange.nextMonthDay,
  .flatpickr-day.endRange.nextMonthDay {
    background: var(--vf-primary);
    -webkit-box-shadow: none;
            box-shadow: none;
    color: #fff;
    border-color: var(--vf-primary);
  }

  .flatpickr-day.selected.startRange,
  .flatpickr-day.startRange.startRange,
  .flatpickr-day.endRange.startRange {
    border-radius: 50px 0 0 50px;
  }

  .flatpickr-day.selected.endRange,
  .flatpickr-day.startRange.endRange,
  .flatpickr-day.endRange.endRange {
    border-radius: 0 50px 50px 0;
  }

  .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
  .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
  .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
    -webkit-box-shadow: -10px 0 0 var(--vf-primary);
            box-shadow: -10px 0 0 var(--vf-primary);
  }

  .flatpickr-day.selected.startRange.endRange,
  .flatpickr-day.startRange.startRange.endRange,
  .flatpickr-day.endRange.startRange.endRange {
    border-radius: 50px;
  }

  .flatpickr-day.inRange {
    border-radius: 0;
    -webkit-box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
            box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
  }

  .flatpickr-day.flatpickr-disabled,
  .flatpickr-day.flatpickr-disabled:hover,
  .flatpickr-day.prevMonthDay,
  .flatpickr-day.nextMonthDay,
  .flatpickr-day.notAllowed,
  .flatpickr-day.notAllowed.prevMonthDay,
  .flatpickr-day.notAllowed.nextMonthDay {
    color: var(--vf-color-disabled);
    background: transparent;
    border-color: transparent;
    cursor: default;
  }

  .flatpickr-day.flatpickr-disabled,
  .flatpickr-day.flatpickr-disabled:hover {
    cursor: not-allowed;
    color: var(--vf-color-disabled);
  }

  .flatpickr-day.week.selected {
    border-radius: 0;
    -webkit-box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);
            box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);
  }

  .flatpickr-day.hidden {
    visibility: hidden;
  }

  .rangeMode .flatpickr-day {
    margin-top: 1px;
  }

  .flatpickr-weekwrapper {
    float: left;
  }

  .flatpickr-weekwrapper .flatpickr-weeks {
    padding: 0 12px;
  }

  .flatpickr-weekwrapper .flatpickr-weekday {
    float: none;
    width: 100%;
    line-height: 28px;
  }

  .flatpickr-weekwrapper span.flatpickr-day,
  .flatpickr-weekwrapper span.flatpickr-day:hover {
    display: block;
    width: 100%;
    max-width: none;
    color: var(--vf-gray-300);
    background: transparent;
    cursor: default;
    border: none;
  }

  .flatpickr-innerContainer {
    display: block;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    overflow: hidden;
    background: var(--vf-bg-input);
  }

  .flatpickr-rContainer {
    display: inline-block;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  .flatpickr-time {
    text-align: center;
    outline: 0;
    display: block;
    height: 0;
    line-height: 40px;
    max-height: 40px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: var(--vf-bg-input);
    border-radius: 0 0 5px 5px;
    color: var(--vf-color-input);
  }

  .flatpickr-time:after {
    content: "";
    display: table;
    clear: both;
  }

  .flatpickr-time .numInputWrapper {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    width: 40%;
    height: 40px;
    float: left;
  }

  .flatpickr-time .numInputWrapper span.arrowUp:after {
    border-bottom-color: var(--vf-color-input);
    box-sizing: border-box;
  }

  .flatpickr-time .numInputWrapper span.arrowDown:after {
    border-top-color: var(--vf-color-input);
    box-sizing: border-box;
  }

  .flatpickr-time.hasSeconds .numInputWrapper {
    width: 26%;
  }

  .flatpickr-time.time24hr .numInputWrapper {
    width: 49%;
  }

  .flatpickr-time input {
    background: transparent;
    -webkit-box-shadow: none;
            box-shadow: none;
    border: 0;
    border-radius: 0;
    text-align: center;
    margin: 0;
    padding: 0;
    height: inherit;
    line-height: inherit;
    font-size: 14px;
    position: relative;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    color: var(--vf-color-input);
    background: var(--vf-bg-input);
  }

  .flatpickr-time input.flatpickr-hour {
    font-weight: bold;
  }

  .flatpickr-time input.flatpickr-minute,
  .flatpickr-time input.flatpickr-second {
    font-weight: 400;
  }

  .flatpickr-time input:focus {
    outline: 0;
    border: 0;
  }

  .flatpickr-time .flatpickr-time-separator,
  .flatpickr-time .flatpickr-am-pm {
    height: inherit;
    float: left;
    line-height: inherit;
    font-weight: bold;
    width: 2%;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-align-self: center;
        -ms-flex-item-align: center;
            align-self: center;
    background: var(--vf-bg-input);
  }

  .flatpickr-time .flatpickr-am-pm {
    outline: 0;
    width: 18%;
    cursor: pointer;
    text-align: center;
    font-weight: 400;
  }

  .flatpickr-time input:hover,
  .flatpickr-time .flatpickr-am-pm:hover,
  .flatpickr-time input:focus,
  .flatpickr-time .flatpickr-am-pm:focus {
    background: var(--vf-bg-selected);
  }

  .flatpickr-input[readonly] {
    cursor: pointer;
  }

  @-webkit-keyframes fpFadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -20px, 0);
              transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fpFadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -20px, 0);
              transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
    }
  }

  span.flatpickr-day.selected {
    font-weight: bold;
  }
</style>