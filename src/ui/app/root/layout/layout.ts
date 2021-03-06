import * as Vue from 'vue';
import Component from 'vue-class-component';
import { AreaSidebar } from '../sidebar/sidebar';

@Component({
  components: {
    AreaSidebar: AreaSidebar
  },
  template: require('./layout.html')
})
export class AreaLayout extends Vue {

}