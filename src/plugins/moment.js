import Vue from 'vue';
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
moment.tz.setDefault('Africa/Cairo');

Vue.use(VueMoment, {
    moment,
})