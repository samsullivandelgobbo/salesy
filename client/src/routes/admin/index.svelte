<script>
	import { Pie } from 'svelte-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  let data = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: [
        '#F7464A',
        '#46BFBD',
        '#FDB45C',
        '#949FB1',
        '#4D5360',
        '#AC64AD',
      ],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774',
        '#DA92DB',
      ],
    },
  ],
};

</script>

<div class="flex p-4">
  <div class="grid-row-2 p-2">
    <h1 class="text-xl font-bold">Web Insights</h1>
    <div class="grid-col-2">
      <div class="p-2">
        <h1 class="text-lg font-medium p-2">Today's stats</h1>
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                /></svg
              >
            </div>
            <div class="stat-title">New Users</div>
            <div class="stat-value">4,200</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                /></svg
              >
            </div>
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div class="p-2">
          <h1 class="text-lg font-medium">All time stats</h1>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-title">Total Page Views</div>
              <div class="stat-value">89,400</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
            <div class="stat">
              <div class="stat-title">Total Page Views</div>
              <div class="stat-value">89,400</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
            <div class="stat">
              <div class="stat-title">Total Page Views</div>
              <div class="stat-value">89,400</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-2">
        <h1 class="text-lg font-medium">Customer Messages</h1>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span class="badge badge-ghost badge-sm"
                    >Desktop Support Technician</span
                  >
                </td>
                <td>Purple</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              <!--footer-->
            </tbody><tfoot>
              <tr>
                <th />
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  <div class="flex-row-2 p-2 justify-self-start">
    <h1 class="text-xl font-bold">Operations Overview</h1>
    <div class="p-2">
      <h1 class="text-xl font-medium">Inventory Overview</h1>
      <Pie data={data}/>
    </div>
    <div class="p-2">
      <h1 class="text-lg font-medium">Service Appointments</h1>
    </div>
  </div>
</div>

