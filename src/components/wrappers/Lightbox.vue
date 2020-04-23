<template>
  <div>
    <transition name="lightbox-fade">
      <div class="lightbox" v-if="visible" @mousedown.stop="hide" @touchdown.stop="hide" @click="handleClick">
          <div class="lightbox-close" @mousedown.stop="hide" @touchdown.stop="hide">&times;</div>
          <div class="lightbox-arrow lightbox-arrow-left" @mousedown.stop.prevent="prev" @touchdown.stop.prevent="prev">
            <transition name="lightbox-fade">
              <div class="lightbox-arrow-left-icon" v-show="has_prev() && controlsVisible">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="rgba(20, 20, 20, 0.4)" />
                  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" fill="white"/>
                  <path d="M0-.5h24v24H0z" fill="none"/>
                </svg>
              </div>
            </transition>
          </div>
          <div class="lightbox-arrow lightbox-arrow-right" @mousedown.stop.prevent="next" @touchdown.stop.prevent="next" >
            <transition name="lightbox-fade">
              <div class="lightbox-arrow-right-icon" v-show="has_next() && controlsVisible" >
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="rgba(20, 20, 20, 0.4)" />
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" fill="white" />
                  <path d="M0-.25h24v24H0z" fill="none"/>
                </svg>
              </div>
            </transition>
          </div>
          <transition name="lightbox-fade">
            <div class="lightbox-caption" v-show="controlsVisible && filteredImages[index].alt" @mousedown.stop @touchdown.stop>
              <span unselectable="on">{{ filteredImages[index].alt }}</span>
            </div>
          </transition>
        <div class="lightbox-main" @mousedown.stop="hide" @touchdown.stop="hide">
          <div class="lightbox-image-container" @mousedown.stop @touchdown.stop>
            <transition name="lightbox-slide" mode="out-in">
              <div class="lightbox-image" :key="index" :style="{ 'backgroundImage':'url(' + directory + filteredImages[index].name + ')'}">
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  /**
   * Credits go to:
   * https://github.com/am283721/vue-my-photos
   */

  export default {
    props: {
      // images = [{ name:'image1.jpg', alt:'Redwoods', filter:'nature' }, ...]
      images: {
        type: Array,
        required: true
      },
      // Used to display a subset of photos. If used, images array must contain a property
      // titled 'filter' which contains the desired filter string
      filter: {
        type: String,
        default: 'all'
      },
      // Used if images are located in a separate folder (e.g. '/images/')
      directory: {
        type: String,
        default: ''
      },
      // Used to set the duration in miliseconds of key/mouse inactivity before caption
      // and arrows disappear
      timeoutDuration: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        visible: false,    // Lightbox not visible by default
        controlsVisible: true, // Lightbox controls (arrows, caption, close button)
        index: 0,        // Index indicates which photo to display. Default to 1st photo
        timer: null,      // Timer to show/hide lightbox controls
      }
    },
    mounted() {
      window.addEventListener('keydown', this.keyEventListener);
      window.addEventListener('mousemove',this.mouseEventListener);
      window.addEventListener('touchmove',this.mouseEventListener);
      window.addEventListener('mouseup',this.mouseEventListener);
    },
    destroyed() {
      window.removeEventListener('keydown', this.keyEventListener);
      window.removeEventListener('mousemove',this.mouseEventListener);
      window.removeEventListener('touchmove',this.mouseEventListener);
      window.removeEventListener('mouseup',this.mouseEventListener);
    },
    methods: {
      show(imageName) {
        this.visible = true;
        this.controlsVisible = true;
        var that = this;
        // Find the index of the image passed to Lightbox
        for(var i = 0; i < this.filteredImages.length; i++){
          if(this.filteredImages[i].name == imageName) {
            this.index = i;
            break;
          }
        }
        clearTimeout(this.timer);
        this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);
        this.preloadNextImage();
      },
      hide() {
        this.visible = false;
        this.index = 0;
        clearTimeout(this.timer);
      },
      handleClick(e) {
        if (e.target.className == 'lightbox-image') {
          this.hide()
        }
      },
      has_next() {
        return (this.index + 1 < this.filteredImages.length);
      },
      has_prev() {
        return (this.index - 1 >= 0);
      },
      prev() {
        if (this.has_prev()) {
          this.index -= 1;
        }
      },
      next() {
        if (this.has_next()) {
          this.index += 1;
          this.preloadNextImage();
        }
      },
      keyEventListener(e) {
        if (this.visible) {
          var that = this;
          this.controlsVisible = true;
          clearTimeout(this.timer);
          this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);
          switch (e.key) {
            case 'ArrowRight':
              this.next();
              break;
            case 'ArrowLeft':
              this.prev();
              break;
            case 'ArrowDown':
            case 'ArrowUp':
            case ' ':
              e.preventDefault();
              break;
            case 'Escape':
              this.hide();
              break;
          }
        }
      },
      // This event shows the arrows and caption on the lightbox when the mouse is moved or clicked.
      // Also used for touch events on touchscreen devices. The elements are set to disappear
      // after a given duration via a timer.
      mouseEventListener(e) {
        if (this.visible) {
          var that = this;
          this.controlsVisible = true;
          clearTimeout(this.timer);
          this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);
        }
      },
      preloadNextImage () {
        if (this.has_next()){
          try {
            var _img = new Image();
            _img.src = this.directory + this.filteredImages[this.index + 1].name;
          } catch (e) { }
        }
      }
    },
    computed: {
      filteredImages: function () {
        var that = this;
        if (that.filter === 'all' || !that.filter.length){
          return that.images;
        }
        else {
          return that.images.filter(function (item) {
            return item.filter === that.filter;
          })
        }
      }
    }
  }
</script>