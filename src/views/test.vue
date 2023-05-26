<template>
  <div class="container">
    <!-- <div class="card-toolbar">
      <button
        type="button"
        class="btn btn-sm btn-light btn-success me-2"
        style="font-size: 14px; font-weight: bold"
        @click="toggleAttachFile()"
      >
        <input
          v-show="false"
          type="file"
          id="inputexcel"
          accept=".csv"
          @change="handleFileChange($event)"
        />
        + Import Excel
      </button>
    </div> -->
    <div>
      <h1 class="heading1">สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559</h1>
    </div>
    <div class="mb-4">
      <span class="subtitle1">ลักษณะพื้นที่</span>
    </div>
    <div class="mb-12">
      <span class="paragraph"
        >กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดใน
        ประเทศไทยหากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่เดินทางมาทำงานในตอนกลางวันด้วยแล้ว
        คาดว่าจะสูงถึงเกือบเท่าตัวของ ประชากรที่ปรากฏในทะเบียน เราจึงเรียก
        กรุงเทพฯ ว่าเป็น
        <a href="https://en.wikipedia.org/wiki/Megacity" target="_blank"
          >“อภิมหานคร (megacity)”</a
        >
        คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
      </span>
      <br />
      <br />
      <span class="paragraph">
        อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559
        ดังแสดงในแผนภูมิ ต่อไปนี้
      </span>
    </div>
    <div class="row mb-12">
      <span class="subtitle1">การเติบโต</span>
      <div class="col-md-3 mt-1 col-12 d-flex">
        <label class="label d-flex align-items-center me-2">เขต:</label>
        <select
          class="form-select"
          v-model="selectedProvince"
          placeholder="เลือกเขต"
        >
          <option
            v-for="province in chartData"
            :key="province"
            :value="province.dcode"
          >
            {{ province.name }}
          </option>
        </select>
      </div>
      <div class="col-md-3 mt-1 offset-md-2 col-6 d-flex">
        <label class="label d-flex align-items-center me-2">ตั้งแต่:</label>
        <select
          class="form-control"
          v-model="YearFrom"
          @change="onYearFromChange"
        >
          <option v-for="year in getUniqueYears" :key="year" :value="year">
            พ.ศ. {{ year }}
          </option>
        </select>
      </div>
      <div class="col-md-3 mt-1 col-6 d-flex">
        <label class="label d-flex align-items-center me-2">ถึง:</label>
        <select class="form-control" v-model="YearTo" @change="onYearToChange">
          <option v-for="year in getUniqueYears" :key="year" :value="year">
            พ.ศ. {{ year }}
          </option>
        </select>
      </div>
    </div>
    <div
      class="d-flex justify-content-between offset-md-1 col-md-11 offset-2 col-10"
    >
      <span>{{ items.data ? items.data.min : "" }} %</span>
      <span>{{ items.data ? items.data.max : "" }} %</span>
    </div>
    <div class="row mb-12">
      <div class="mt-4 col-2 col-md-1">
        <span
          class="bar-label row"
          style="height: 30px; margin-bottom: 10px"
          v-for="i in items.data"
          :key="i"
          >{{ i.year }}</span
        >
      </div>
      <div class="card col-10 col-md-11">
        <div class="bar-chart" v-for="i in items.data" :key="i">
          <!-- <span class="bar-label col-2">{{ i.year }}</span> -->
          <div
            v-if="calculateWidth(i.value) > 0"
            class="col-6 offset-6 d-flex flex-column align-items-start"
          >
            <div class="bar" :style="`width: ${calculateWidth(i.value)}%`">
              <!-- {{ calculateWidth(i.value) }} -->
              &nbsp;
            </div>
          </div>
          <div
            v-else
            class="col-6 d-flex flex-column align-items-end justify-content-end"
          >
            <div
              class="bar-minus"
              :style="`width: ${calculateWidth(i.value) * -1}%;`"
            >
              <!-- {{ calculateWidth(i.value) }} -->
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row source">
      <span class="subtitle1">แหล่งข้อมูล</span>
      <ul>
        <li>
          <a
            href="https://stat.bora.dopa.go.th/stat/statnew/statMONTH/statmonth/"
            target="_blank"
            >สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, จำนวนประชากร,
            สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, Editor. 2564:
            กรุงเทพฯ.</a
          >
        </li>
        <li>
          <a href="http://www.nso.go.th/" target="_blank">
            สำนักงานสถิติแห่งชาติ, การสำรวจภาวะเศรษฐกิจและสังคมของครัวเรือน พ.ศ.
            2563 สำนักงานสถิติแห่งชาติ, Editor. 2563: กรุงเทพฯ
          </a>
        </li>
        <li>
          <a href="http://www.price.moc.go.th/" target="_blank">
            สำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์,
            ข้อมูลดัชนีราคาผู้บริโภคทั่วไป, สำนักดัชนีเศรษฐกิจการค้า
            กระทรวงพาณิชย์, Editor. 2563: กรุงเทพฯ.
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

  <script>
import moment from "moment";
import Papa from "papaparse";
export default {
  data() {
    return {
      selectedProvince: null,
      YearFrom: null,
      YearTo: null,
      dateTo: "",
      items: {},
      chartData: [
        {
          dcode: 1001,
          name: "พระนคร",
          data: [
            { year: 2550, value: 4.25 },
            { year: 2551, value: 2.16 },
            { year: 2552, value: 2.53 },
            { year: 2553, value: -1.73 },
            { year: 2554, value: -2.56 },
            { year: 2555, value: -1.6 },
            { year: 2556, value: -1.98 },
            { year: 2557, value: -2.31 },
            { year: 2558, value: -2.13 },
            { year: 2559, value: -2.25 },
          ],
        },
        {
          dcode: 1002,
          name: "ป้อมปราบศัตรูพ่าย",
          data: [
            { year: 2550, value: -1.72 },
            { year: 2551, value: -0.95 },
            { year: 2552, value: -1.93 },
            { year: 2553, value: -2.61 },
            { year: 2554, value: -2.4 },
            { year: 2555, value: -0.78 },
            { year: 2556, value: -1.07 },
            { year: 2557, value: -2.26 },
            { year: 2558, value: -1.12 },
            { year: 2559, value: 3.63 },
          ],
        },
      ],
    };
  },
  computed: {
    getUniqueYears() {
      const years = new Set();
      for (const { data } of this.chartData) {
        for (const { year } of data) {
          years.add(year);
        }
      }
      return Array.from(years);
    },
  },
  watch: {
    selectedProvince(val) {
      console.log(val, "vall");
      if (val) {
        let result = this.chartData.filter((element) => element.dcode == val);
        this.items = result[0];

        let max = null;
        let min = null;
        let newArray = [];
        this.items.data.forEach((element) => {
          newArray.push(element.value);
        });

        max = Math.max(...newArray);
        min = Math.min(...newArray);
        this.items.data.max = max;
        this.items.data.min = min;
        console.log("this.items.data", this.items.data);
      }
    },
  },
  mounted() {
    this.selectedProvince = 1001;
    if (this.getUniqueYears.length > 0) {
      this.YearFrom = this.getUniqueYears[0];
      this.YearTo = this.getUniqueYears[0];
      // } else {
      //   this.YearFrom = moment().year() + 543;
      //   this.YearTo = moment().year() + 543;
    }
  },
  methods: {
    onYearFromChange() {
      console.log(this.YearFrom);
    },
    onYearToChange() {
      console.log(this.YearTo);
    },
    calculateWidth(data) {
      let width = null;
      let max = this.items.data.max;
      let min = this.items.data.min;
      let center = 1 - ((this.items.data.max + this.items.data.min) / 2) * 100;

      // console.log("graph", data, max);
      // console.log("center", center);
      if (data > 0) {
        // console.log("width", (data * 100) / max);
        return (width = (data * 100) / max);
      } else if (data < 0) {
        return (width = (-(0 - data) * 100) / max);
      }
      // 0-50-100

      console.log("width", width);
    },
    toggleAttachFile() {
      document.getElementById("inputexcel").click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result;
        let jsonData = Papa.parse(csvData, { header: true }).data;
        // const selectedItems = data.slice(0, -2);
        // let newArray = [];

        // console.log("jsonData", jsonData);
        const selectedItems = {};
        jsonData.forEach((element) => {
          const keys = Object.keys(element);
          const keysToExclude = keys.slice(-2);

          for (let key of keys) {
            if (!keysToExclude.includes(key)) {
              selectedItems[key] = element[key];
            }
          }
        });
        console.log("selectedItems", selectedItems);
        console.log("jsonData", jsonData);
        // console.log("jsonData", jsonData.slice(0, -2));
      };
      reader.readAsText(file);
    },
  },
};
</script>
  <style scoped>
/* body {
  font-family: "Bai Jamjuree";
  font-size: 22px;
  color: #fff;
  background-color: #333333;
} */
.card {
  background-color: transparent;
  border-right: solid 1px white;
  border-left: solid 1px white;
  border-radius: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
.container {
  padding: 40px;
  /* background-color: #333333; */
}
.bar-chart {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  margin-bottom: 10px;
}

.bar {
  height: 100%;
  background-color: #ff8bbb;
}
.bar-minus {
  /* background-color: #1f7c34; */
  background-color: #ff8bbb;
}
.bar:hover {
  background-color: #ed2e7c;
}

.bar-label {
  border-right: solid, 1px, white;
  /* width: 50px; */
}
.heading1 {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #ffffff;
  font-weight: 700;
  padding-bottom: 26px;
}
.subtitle1 {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  padding-bottom: 26px;
}
.paragraph {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}
.label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.source ul li a {
  color: #fff;
  text-decoration: underline;
}
.source ul li a:hover {
  color: #ed2e7c;
  text-decoration: underline;
}
.paragraph a {
  color: #fff;
  text-decoration: underline;
}
a:hover {
  color: #ed2e7c;
  text-decoration: underline;
}

a:focus {
  color: #ff8bbb;
  text-decoration: none;
  outline: none;
}
a:active {
  color: #ff8bbb;
  text-decoration: none;
  outline: none;
}
</style>