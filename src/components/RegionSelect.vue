<template>
    <div>
        <b-form-select :input="value" @input="onUpdate(arguments[0]);" :options="options"></b-form-select>
    </div>
</template>
<style scoped>

</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'

import { Region, RegionData } from "../lib/api";

@Component({
    components: {}
})
export default class RegionSelect extends Vue {
    @Prop() regions!: Region[];
    @Prop() value: Region | null = null;

    // cur: Region | null = null;

    onUpdate(val: Region) {
        this.$emit('input', val);
        // this.value = this.cur;
    }
    
    get options() {
        let result: any[] = [];
        this.regions.forEach((r: Region) => {
            result.push({
                value: r,
                text: r.Name
            })
        });
        return result;
    }
}


// import Vue from 'vue'
// import { Region, RegionData } from "../lib/api";

// export default Vue.extend({
//     props: {
//         regions: {
//             type: Array as () => Array<Region>
//         },
//         value: {
//             type: Object as () => Region
//         }
//     },
//     data() {
//         return {
//             cur: new Region()
//         }
//     },
//     computed: {
//         selected() {
//             return this.cur;
//         },
//         options() {
            
//             let result: any[] = [];
//             this.regions.forEach((r: Region) => {
//                 result.push({
//                     value: r,
//                     text: r.Name
//                 })
//             });
//             return result;
//         }
//     },
//     methods: {
//         onUpdate() {
//             this.$emit('input', this.cur);
//         }
//     }
// })
</script>