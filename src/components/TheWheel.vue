<script>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default {
  name: 'TheWheel',
  data() {
    return {
      categories: [],
      radius: 0,
    }
  },
  async created() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')

    if (error) {
      console.error(error)
    } else {
      this.categories = data
      this.radius = 360 / this.categories.length
    }
  }
}
</script>

<template>
  <v-container>
    <div id="board">
      <div class="stud">
        <div id="arrow">
          <svg viewBox="0 0 10 30" width="13">
            <polygon points="5,0 10,10, 5,30, 0,10" fill="rgb(184, 3, 124)"></polygon>
          </svg>
        </div>
      </div>
      <div id="wheel">
        <div
          class="piece"
          v-for="(prize, index) in categories"
          :key="index"
          :class="{ even: index % 2 === 0, uneven: index % 2 !== 0 }"
          :style="{ transform: 'rotate(' + index * radius + 'deg)' }"
        >
          <p class="text-truncate text-left" :style="{ transform: 'rotate(' + (radius / 2 +100) + 'deg) translateX(50%) translateY(-100%)' }">
            {{ prize.name }}
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
#arrow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

#board {
  position: relative;
  width: 500px;
  height: 500px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
}

.stud {
  position: absolute;
  width: 5px;
  height: 20px;
  background: black;
  top: -10px;
  left: 50%;
  transform-origin: center;
}

#wheel {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid black;
  transform: rotate(0deg);
  transition: transform 4s cubic-bezier(0.33, 1, 0.68, 1);
}

.piece {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center center;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
}

p {
  position: absolute;
  width: 80px;
  left: 50%;
  text-align: center;
  transform-origin: center;
  transform: translateX(-50%) translateY(-100%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.even {
  color: #1daaff;
}

.uneven {
  color: #ecd1da;
}
</style>
